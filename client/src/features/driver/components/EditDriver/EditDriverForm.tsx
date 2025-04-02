import React from 'react';
import { Alert, Box, Button, TextField, Typography } from '@mui/material';
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
}) => {
  const fields = [
    { label: 'ФИО', field: 'name' as const, value: formData.name },
    { label: 'Телефон', field: 'phone' as const, value: formData.phone },
    { label: 'График', field: 'schedule' as const, value: formData.schedule },
    { label: 'Смена', field: 'shift' as const, value: formData.shift },
    {
      label: 'Транспортное средство',
      field: 'vehicleName' as const,
      value: formData.vehicleName,
    },
    {
      label: 'Госномер',
      field: 'vehicleLicensePlate' as const,
      value: formData.vehicleLicensePlate,
    },
    {
      label: 'Перерывы (через запятую)',
      field: 'breaks' as const,
      value: formData.breaks,
    },
  ];

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Редактировать водителя
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {fields.map(({ label, field, value }) => (
        <TextField
          key={field}
          fullWidth
          margin="normal"
          label={label}
          value={value}
          onChange={(e) => onFieldChange(field, e.target.value)}
        />
      ))}

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={!isChanged || isSubmitting}
        sx={{ mt: 3 }}
      >
        {isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
      </Button>
    </Box>
  );
};
