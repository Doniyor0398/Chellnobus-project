import React, { useState } from 'react';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { Driver } from '../../../entities/driver/types/driverTypes';
import { editDriverThunk } from '../../../entities/driver/thunks/editDriverThunk';
import { Alert, Box, Button, TextField, Typography } from '@mui/material';

interface EditDriverProps {
  driver: Driver;
  onClose: () => void;
  onSuccess: () => void;
}

const EditDriver: React.FC<EditDriverProps> = ({
  driver,
  onClose,
  onSuccess,
}) => {
  const [name, setName] = useState(driver.name);
  const [phone, setPhone] = useState(driver.phone);
  const [schedule, setSchedule] = useState(driver.schedule);
  const [shift, setShift] = useState(driver.shift);
  const [vehicleName, setVehicleName] = useState(driver.vehicle.name);
  const [vehicleLicensePlate, setvehicleLicensePlate] = useState(
    driver.vehicle.licensePlate,
  );
  const [breaks, setBreaks] = useState(driver.breaks.join(','));
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const updateDriver: Driver = {
      ...driver,
      name,
      phone,
      vehicle: {
        name: vehicleName,
        licensePlate: vehicleLicensePlate,
      },
      schedule,
      shift,
      breaks: breaks.split(',').map((item) => item.trim()),
    };

    try {
      await dispatch(editDriverThunk(updateDriver)).unwrap();
      onSuccess();
      onClose();
    } catch (err) {
      setError('Ошибка при обновлении водителя');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Редактировать водителя
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="График"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Смена"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="TC"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Госномер"
          value={vehicleLicensePlate}
          onChange={(e) => setvehicleLicensePlate(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Перерыв"
          value={breaks}
          onChange={(e) => setBreaks(e.target.value)}
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          {loading ? '...Сохранение' : 'Сохранить'}
        </Button>
      </form>
    </Box>
  );
};

export default EditDriver;
