import { useState } from 'react';
import { shiftApi } from '../api/shiftApi';
import { Shift } from '../types/ShiftTypes';

export const useEditShift = (initialShift: Shift, onSuccess: () => void) => {
  const [formData, setFormData] = useState<Shift>(initialShift);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof Shift, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await shiftApi.updateShift(formData);
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
