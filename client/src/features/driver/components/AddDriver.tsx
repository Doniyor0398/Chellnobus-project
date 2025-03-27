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
  Snackbar,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { fetchDriversThunk } from '../../../entities/driver/thunks/fetchDrivers';
import { IMaskInput } from 'react-imask';

interface AddDriverProps {
  onClose: () => void;
}

const scheduleOptions = ['5/2', '2/2', '3/2', '1/1'];
const shiftOptions = ['День', 'Ночь'];
const breakOptions = [
  '12:00-12:30',
  '13:00-13:30',
  '14:00-14:30',
  '15:00-15:30',
  '16:00-16:30',
];
const cars = ['Mers', 'BMW', 'Ford', 'Rols Roys'];

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
  const [successMessage, setSuccessMessage] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, ''); // Remove spaces
    setName(value);

    if (value.length < 3 || value.length > 20) {
      setNameError('Имя должно быть от 3 до 20 символов');
    } else {
      setNameError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newDriver: Omit<Driver, 'id'> = {
      name,
      phone: phone.replace(/\D/g, ''),
      schedule,
      shift,
      breaks: [breakTime],
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
      setSuccessMessage(true);
      setTimeout(() => {
        onClose();
      }, 500);
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
            onChange={handleNameChange}
            required
            inputProps={{
              minLength: 3,
              maxLength: 20,
            }}
            helperText={nameError ? 'Имя должно быть от 3 до 20 символов' : ' '}
            sx={{
              '& .MuiFormHelperText-root': {
                visibility: nameError ? 'visible' : 'hidden',
                marginTop: 0,
                height: nameError ? 'auto' : 0,
              },
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              inputComponent: IMaskInput as any,
              inputProps: {
                mask: '+7 (000) 000-00-00',
              },
            }}
            required
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel>График</InputLabel>
            <Select
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              label="График"
            >
              {scheduleOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Смена</InputLabel>
            <Select
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              label="Смена"
            >
              {shiftOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Перерыв</InputLabel>
            <Select
              value={breakTime}
              onChange={(e) => setBreakTime(e.target.value)}
              label="Перерыв"
            >
              {breakOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Название ТС</InputLabel>

            <Select
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
              label="Название ТС"
            >
              {cars.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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

export default AddDriver;
