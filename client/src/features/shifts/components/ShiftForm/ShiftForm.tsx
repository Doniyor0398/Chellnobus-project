import React from 'react';
import { TextField, Button, Stack, Alert } from '@mui/material';
import { Shift } from '../../types/ShiftTypes';

interface ShiftFormProps {
  formData: Shift;
  onChange: (field: keyof Shift, value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  error: string | null;
  loading: boolean;
  onCancel: () => void;
}

const ShiftForm: React.FC<ShiftFormProps> = ({
  formData,
  onChange,
  onSubmit,
  error,
  loading,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={3}>
        <TextField
          label="Транспортное средство"
          value={formData.vehicle}
          onChange={(e) => onChange('vehicle', e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Водитель"
          value={formData.driver}
          onChange={(e) => onChange('driver', e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Начало смены"
          type="datetime-local"
          value={formData.startShift}
          onChange={(e) => onChange('startShift', e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
        />

        <TextField
          label="Конец смены"
          type="datetime-local"
          value={formData.endShift}
          onChange={(e) => onChange('endShift', e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />

        <Stack direction="row" spacing={2}>
          <TextField
            label="Терминал начала"
            value={formData.startTerminal}
            onChange={(e) => onChange('startTerminal', e.target.value)}
            fullWidth
          />
          <TextField
            label="Терминал окончания"
            value={formData.endTerminal}
            onChange={(e) => onChange('endTerminal', e.target.value)}
            fullWidth
          />
        </Stack>

        <TextField
          label="Зона старта"
          value={formData.zoneStart}
          onChange={(e) => onChange('zoneStart', e.target.value)}
          fullWidth
        />

        <TextField
          label="Перерывы (через запятую)"
          value={formData.breaks.join(', ')}
          onChange={(e) =>
            onChange(
              'breaks',
              e.target.value.split(',').map((b) => b.trim()),
            )
          }
          fullWidth
        />

        {error && <Alert severity="error">{error}</Alert>}

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={onCancel} disabled={loading}>
            Отмена
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? 'Сохранение...' : 'Сохранить'}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default ShiftForm;
