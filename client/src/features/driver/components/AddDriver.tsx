import React, { useState } from 'react';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { addDriverThunk } from '../../../entities/driver/thunks/addDriverThunk';
import { Driver } from '../../../entities/driver/types/driverTypes';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
} from '@mui/material';
import { fetchDriversThunk } from '../../../entities/driver/thunks/fetchDrivers';

interface AddDriverProps {
  onClose: () => void;
}

const AddDriver: React.FC<AddDriverProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [schedule, setSchedule] = useState('');
  const [shift, setShift] = useState('');
  const [breakTime, setBreakTime] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleLicensePlate, setVehicleLicensePlate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newDriver: Omit<Driver, 'id'> = {
      name,
      phone,
      schedule,
      shift,
      break: [breakTime],
      vehicle: {
        name: vehicleName,
        licensePlate: vehicleLicensePlate,
      },
    };

    try {
      await dispatch(addDriverThunk(newDriver)).unwrap();
      await dispatch(fetchDriversThunk());
      setName('');
      setPhone('');
      setSchedule('');
      setShift('');
      setBreakTime('');
      setVehicleName('');
      setVehicleLicensePlate('');
      setError(null);
      alert('Водитель успешно добавлен!');
      onClose();
    } catch (err) {
      setError('Ошибка при добавлении водителя');
      console.error('Ошибка при добавлении водителя:', err);
    } finally {
      setLoading(false);
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
        width: '100%',
        maxWidth: 'none',
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          boxShadow: 24,
          position: 'relative',
          width: 600,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Добавить водителя
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="График"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Смена"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Перерыв"
            value={breakTime}
            onChange={(e) => setBreakTime(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Название ТС"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Госномер"
            value={vehicleLicensePlate}
            onChange={(e) => setVehicleLicensePlate(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? 'Добавление...' : 'Добавить водителя'}
          </Button>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default AddDriver;
