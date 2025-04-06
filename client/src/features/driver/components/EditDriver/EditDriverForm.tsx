import React, { useState } from 'react';
import {
  Alert,
  Button,
  Typography,
  Snackbar,
  Paper,
  Container,
  TextField,
} from '@mui/material';
import DriverField from '../AddDriver/DriverField';
import DriverSelect from '../AddDriver/DriverSelect';
import {
  scheduleOptions,
  shiftOptions,
  cars,
} from '../../constants/driverOptions';
import MaskedInput from '../../../../shared/ui/MaskedInput';
import { Driver } from '../../../../entities/driver/types/driverTypes';
import { DriverFormData } from '../../types';

interface EditDriverFormProps {
  initialDriver: Driver;
  formData: DriverFormData;
  error: string | null;
  isSubmitting: boolean;
  isChanged: boolean;
  onFieldChange: (field: keyof DriverFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export const EditDriverForm: React.FC<EditDriverFormProps> = ({
  formData,
  error,
  isSubmitting,
  isChanged,
  onFieldChange,
  onSubmit,
  onClose,
}) => {
  const [nameError, setNameError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    onFieldChange('name', value);

    if (value.length < 3 || value.length > 20) {
      setNameError('Имя должно быть от 3 до 20 символов');
    } else {
      setNameError(null);
    }
  };

  return (
    <Container
      onClick={onClose}
      maxWidth={false}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
      }}
    >
      <Paper
        onClick={(e) => e.stopPropagation()}
        elevation={3}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          boxShadow: 24,
          width: 600,
          maxWidth: '90%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Редактировать водителя
        </Typography>
        <form onSubmit={onSubmit}>
          <DriverField
            label="Имя"
            value={formData.name}
            onChange={handleNameChange}
            required
            error={nameError}
            minLength={3}
            maxLength={20}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Телефон"
            value={formData.phone}
            InputProps={{
              inputComponent: MaskedInput as any,
              inputProps: {
                name: 'phone',
                mask: '+7 (000) 000-00-00',
                definitions: { '0': /[0-9]/ },
              },
            }}
            onChange={(e) =>
              onFieldChange('phone', e.target.value.replace(/\D/g, ''))
            }
            required
          />

          <DriverSelect
            label="График"
            value={formData.schedule}
            onChange={(e) => onFieldChange('schedule', e.target.value)}
            options={scheduleOptions}
          />

          <DriverSelect
            label="Смена"
            value={formData.shift}
            onChange={(e) => onFieldChange('shift', e.target.value)}
            options={shiftOptions}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Перерывы"
            value={formData.breaks}
            onChange={(e) => onFieldChange('breaks', e.target.value)}
            InputProps={{
              inputComponent: MaskedInput as any,
              inputProps: {
                name: 'breaks',
                mask: [
                  {
                    mask: '00:00-00:00',
                    lazy: false,
                  },
                  {
                    mask: '00:00-00:00, 00:00-00:00',
                    lazy: false,
                  },
                ],
                definitions: {
                  '0': /[0-9]/,
                },
              },
            }}
            helperText="Формат: 12:00-12:30 или 12:00-12:30, 13:00-13:30"
            error={!!error && error.includes('перерывов')}
            FormHelperTextProps={{
              sx: {
                color:
                  error && error.includes('перерывов')
                    ? 'error.main'
                    : 'orange',
                ml: 0,
              },
            }}
          />

          <DriverSelect
            label="ТС"
            value={formData.vehicleName}
            onChange={(e) => onFieldChange('vehicleName', e.target.value)}
            options={cars}
            helperText={
              formData.vehicleName === ''
                ? 'Для нового водителя требуется дополнительное согласование'
                : undefined
            }
          />

          {['', 'multi', 'temporarily_unassigned'].includes(
            formData.vehicleName,
          ) && (
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ mt: -1, display: 'block', color: 'orange' }}
            >
              {formData.vehicleName === 'multi'
                ? 'Этот водитель будет работать с разными автомобилями'
                : formData.vehicleName === 'temporarily_unassigned'
                  ? 'Автомобиль будет назначен позже'
                  : ''}
            </Typography>
          )}

          <TextField
            fullWidth
            margin="normal"
            label="Госномер"
            value={formData.vehicleLicensePlate}
            InputProps={{
              inputComponent: MaskedInput as any,
              inputProps: {
                name: 'licensePlate',
                mask: 'A 999 AA 999',
                definitions: {
                  A: /[АВЕКМНОРСТУХавекмнорстух]/,
                  '9': /[0-9]/,
                },
                onFocus: () => setIsFocused(true),
                onBlur: () => setIsFocused(false),
              },
            }}
            onChange={(e) => {
              const value = e.target.value.toUpperCase().replace(/\s/g, '');
              onFieldChange('vehicleLicensePlate', value);
            }}
            required={
              !['multi', 'temporarily_unassigned', ''].includes(
                formData.vehicleName,
              )
            }
            disabled={['multi', 'temporarily_unassigned', ''].includes(
              formData.vehicleName,
            )}
            helperText={
              isFocused
                ? 'Формат: А123БВ777 (русские буквы: А, В, Е, К, М, Н, О, Р, С, Т, У, Х)'
                : ' '
            }
            FormHelperTextProps={{
              sx: {
                color: 'orange',
                ml: 0,
                height: isFocused ? 'auto' : 0,
                opacity: isFocused ? 1 : 0,
                transition: 'all 0.3s ease',
                overflow: 'hidden',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting || !!nameError || !isChanged}
            sx={{ mt: 2, width: '100%' }}
          >
            {isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
          </Button>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </form>
      </Paper>

      <Snackbar
        open={successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccessMessage(false)} severity="success">
          Данные водителя успешно обновлены!
        </Alert>
      </Snackbar>
    </Container>
  );
};
