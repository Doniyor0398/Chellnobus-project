import React from 'react';
import {
  Button,
  Container,
  Typography,
  Snackbar,
  Alert,
  Paper,
  TextField,
} from '@mui/material';
import DriverField from './DriverField';
import DriverSelect from './DriverSelect';
import {
  scheduleOptions,
  shiftOptions,
  cars,
} from '../../constants/driverOptions';

import { useAddDriver } from '../../hooks/useAddDriver';
import MaskedInput from '../../../../shared/ui/MaskedInput';

interface AddDriverProps {
  onClose: () => void;
}

const AddDriverForm: React.FC<AddDriverProps> = ({ onClose }) => {
  const {
    name,
    phone,
    schedule,
    shift,
    breakTime,
    vehicleName,
    vehicleLicensePlate,
    error,
    loading,
    successMessage,
    nameError,
    setPhone,
    setSchedule,
    setShift,
    setBreakTime,
    setVehicleName,
    setVehicleLicensePlate,
    handleNameChange,
    handleSubmit,
    setSuccessMessage,
  } = useAddDriver(onClose);

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
          Добавить водителя
        </Typography>
        <form onSubmit={handleSubmit}>
          <DriverField
            label="Имя"
            value={name}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            InputProps={{
              inputComponent: MaskedInput as any,
              inputProps: {
                name: 'phone',
                mask: '+7 (000) 000-00-00',
                definitions: {
                  '0': /[0-9]/,
                },
              },
            }}
            required
          />
          <DriverSelect
            label="График"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            options={scheduleOptions}
          />
          <DriverSelect
            label="Смена"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            options={shiftOptions}
          />
          <DriverField
            label="Перерывы"
            value={breakTime}
            onChange={(e) => setBreakTime(e.target.value)}
            maxLength={24}
            minLength={5}
            helperText="Введите перерывы через запятую, например: 12:00-12:30, 14:00-14:30"
          />

          <DriverSelect
            label="ТС"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
            options={cars}
            helperText={
              vehicleName === ''
                ? 'Для нового водителя требуется дополнительное согласование'
                : undefined
            }
          />
          {['', 'multi', 'temporarily_unassigned'].includes(vehicleName) && (
            <Typography
              variant="caption"
              sx={{ mt: -1, display: 'block', color: 'orange' }}
            >
              {vehicleName === 'multi'
                ? 'Этот водитель будет работать с разными автомобилями'
                : vehicleName === 'temporarily_unassigned'
                  ? 'Автомобиль будет назначен позже'
                  : ''}
            </Typography>
          )}
          <TextField
            fullWidth
            margin="normal"
            label="Госномер"
            value={vehicleLicensePlate}
            onChange={(e) =>
              setVehicleLicensePlate(e.target.value.toUpperCase())
            }
            InputProps={{
              inputComponent: MaskedInput as any,
              inputProps: {
                name: 'licensePlate',
                mask: 'A 999 AA 999',
                definitions: {
                  A: /[АВЕКМНОРСТУХавекмнорстух]/,
                  '9': /[0-9]/,
                },
              },
            }}
            required={
              !['multi', 'temporarily_unassigned', ''].includes(vehicleName)
            }
            disabled={['multi', 'temporarily_unassigned', ''].includes(
              vehicleName,
            )}
            helperText={
              ['multi', 'temporarily_unassigned', ''].includes(vehicleName)
                ? 'Не требуется для временно непривязанных водителей'
                : 'Формат: А123БВ777 (русские буквы: А, В, Е, К, М, Н, О, Р, С, Т, У, Х)'
            }
            FormHelperTextProps={{ sx: { color: 'orange !important', ml: 0 } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 2, width: '100%' }}
          >
            {loading ? 'Добавление...' : 'Добавить водителя'}
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
          Водитель успешно добавлен!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddDriverForm;
