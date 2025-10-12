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
  const [breakTime, setBreakTime] = useState<string>('');
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleLicensePlate, setVehicleLicensePlate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[A-Za-zА-Яа-яЁё]+(\s[A-Za-zА-Яа-яЁё]+)*$/.test(
      value.trim(),
    );
    if (isValid || value === '') {
      setName(value);
      setNameError(null);
    } else {
      setNameError(
        'Имя должно содержать буквы и может включать пробелы между словами',
      );
    }
  };

  const validateBreakTime = (time: string): boolean => {
    if (!time.trim()) return true;
    const breaks = time
      .split(',')
      .map((b) => b.trim())
      .filter(Boolean);
    return breaks.every((breakItem) => {
      const [start, end] = breakItem.split('-').map((t) => t.trim());
      return (
        start &&
        end &&
        /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(start) &&
        /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(end)
      );
    });
  };

  const handleBreakTimeChange = (value: string) => {
    const cleanedValue = value
      .replace(/(\d),(\d)/g, '$1,$2')
      .replace(/,(\s*),/g, ',')
      .replace(/\s+,/g, ',')
      .replace(/,\s+/g, ', ');
    setBreakTime(cleanedValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateBreakTime(breakTime)) {
      setError(
        'Некорректный формат перерывов. Используйте 12:00-12:30 или 12:00-12:30, 13:00-13:30',
      );
      setLoading(false);
      return;
    }

    if (
      vehicleName &&
      !['', 'multi', 'temporarily_unassigned'].includes(vehicleName) &&
      !vehicleLicensePlate
    ) {
      setError('Для выбранного ТС требуется указать госномер');
      setLoading(false);
      return;
    }

    const newDriver: Omit<Driver, 'id'> = {
      name: name.trim(),
      phone: phone.replace(/\D/g, ''),
      schedule,
      shift,
      breaks: breakTime
        .replace(/\s/g, '')
        .split(',')
        .filter(Boolean)
        .map((b) => b.trim()),
      vehicle: {
        name: ['multi', 'temporarily_unassigned'].includes(vehicleName)
          ? ''
          : vehicleName,
        licensePlate: ['multi', 'temporarily_unassigned'].includes(vehicleName)
          ? ''
          : vehicleLicensePlate,
      },
    };

    try {
      await dispatch(addDriverThunk(newDriver)).unwrap();
      await dispatch(fetchDriversThunk());
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
    setBreakTime: handleBreakTimeChange,
    setVehicleName,
    setVehicleLicensePlate,
    handleNameChange,
    handleSubmit,
    setSuccessMessage,
  };
};
