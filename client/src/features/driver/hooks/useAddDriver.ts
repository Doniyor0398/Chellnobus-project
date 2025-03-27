import { useState } from 'react';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { addDriverThunk } from '../../../entities/driver/thunks/addDriverThunk';
import { fetchDriversThunk } from '../../../entities/driver/thunks/fetchDrivers';
import { Driver } from '../../../entities/driver/types/driverTypes';

export const useAddDriver = (onClose: () => void) => {
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
    const value = e.target.value.replace(/\s/g, '');
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
      setTimeout(onClose, 500);
    } catch (err) {
      setError('Ошибка при добавлении водителя');
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};
