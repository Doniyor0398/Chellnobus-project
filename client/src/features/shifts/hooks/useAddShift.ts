import { useState } from 'react';
import { shiftApi } from '../api/shiftApi';
import { ShiftFormValues, ShiftStatus } from '../types/ShiftTypes';

export const useAddShift = (onSuccess: () => void) => {
  const [formData, setFormData] = useState<ShiftFormValues>({
    vehicle: '',
    licensePlate: '',
    carName: '',
    driver: '', 
    startShift: '',
    endShift: '',
    startTerminal: '',
    endTerminal: '',
    zoneStart: '',
    breaks: [],
    status: { active: '', onBreak: '', notActive: '' },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    field: keyof ShiftFormValues,
    value: string | string[] | ShiftStatus,
  ) => {
    setFormData((prev: ShiftFormValues) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await shiftApi.createShift(formData);
      onSuccess();
    } catch (err) {
      setError('Ошибка при добавлении смены');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    handleChange,
    handleSubmit,
  };
};
