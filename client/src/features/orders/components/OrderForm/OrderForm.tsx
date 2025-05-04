import React from 'react';
import {
  TextField,
  Button,
  Stack,
  Alert,
  Chip,
  MenuItem,
  Grid,
} from '@mui/material';
import { OrderFormValues } from '../../types/OrderTypes';

interface OrderFormProps {
  formData: OrderFormValues;
  onChange: (field: keyof OrderFormValues, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  error: string | null;
  loading: boolean;
  onCancel: () => void;
}

const statusOptions = ['Работает', 'Выполнен', 'Отменен'];
const typeOptions = ['Доставка', 'Перевозка', 'Срочный'];

const OrderForm: React.FC<OrderFormProps> = ({
  formData,
  onChange,
  onSubmit,
  error,
  loading,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={3} p={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Дата"
              type="date"
              value={formData.date}
              onChange={(e) => onChange('date', e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Время"
              type="time"
              value={formData.time}
              onChange={(e) => onChange('time', e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              select
              label="Статус"
              value={formData.status}
              onChange={(e) => onChange('status', e.target.value)}
              fullWidth
              required
            >
              {statusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  <Chip
                    label={option}
                    color={option === 'Выполнен' ? 'success' : 'default'}
                  />
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Тип заказа"
              value={formData.type}
              onChange={(e) => onChange('type', e.target.value)}
              fullWidth
              required
            >
              {typeOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

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

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Откуда"
              value={formData.from}
              onChange={(e) => onChange('from', e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Куда"
              value={formData.to}
              onChange={(e) => onChange('to', e.target.value)}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        <TextField
          label="Груз"
          value={formData.cargo}
          onChange={(e) => onChange('cargo', e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Комментарий"
          value={formData.comment}
          onChange={(e) => onChange('comment', e.target.value)}
          fullWidth
          multiline
          rows={3}
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
            {loading ? 'Сохранение...' : 'Создать заказ'}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default OrderForm;
