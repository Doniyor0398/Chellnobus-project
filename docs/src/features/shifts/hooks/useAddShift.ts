import { useState } from 'react';
import { shiftApi } from '../api/shiftApi';
import { Shift, ShiftFormValues, ShiftStatus } from '../types/ShiftTypes';

export const useAddShift = (onSuccess: (newShift: Shift) => void) => {
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
    try {
      const createdShift = await shiftApi.createShift(formData);
      onSuccess(createdShift);
    } catch (error) {}
  };

  return {
    formData,
    loading,
    error,
    handleChange,
    handleSubmit,
  };
};
