import { useState } from 'react';
import { shiftApi } from '../api/shiftApi';
import { Shift, ShiftFormValues } from '../types/ShiftTypes';

export const useEditShift = (shift: Shift, onSuccess: () => void) => {
  const [formData, setFormData] = useState<ShiftFormValues>({
    ...shift,
    driver:
      typeof shift.driver === 'string'
        ? shift.driver
        : `${shift.driver.firstName} ${shift.driver.lastName}`,
    breaks: shift.breaks || [],
    status: shift.status || { active: '', onBreak: '', notActive: '' },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    field: keyof ShiftFormValues,
    value:
      | string
      | string[]
      | { active: string; onBreak: string; notActive: string },
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await shiftApi.updateShift(shift.id, formData);
      onSuccess();
    } catch (err) {
      setError('Ошибка при обновлении смены');
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
