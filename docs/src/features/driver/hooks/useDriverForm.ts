import { useState, useMemo } from 'react';
import { DriverFormData } from '../types';
import { Driver } from '../../../entities/driver/types/driverTypes';

export const useDriverForm = (mode: 'add' | 'edit', initialDriver?: Driver) => {
  const initialFormData: DriverFormData = {
    name: initialDriver?.name || '',
    phone: initialDriver?.phone || '',
    schedule: initialDriver?.schedule || '',
    shift: initialDriver?.shift || '',
    vehicleName: initialDriver?.vehicle.name || '',
    vehicleLicensePlate: initialDriver?.vehicle.licensePlate || '',
    breaks: initialDriver?.breaks.join(', ') || '',
  };

  const [formData, setFormData] = useState<DriverFormData>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);

  const isChanged = useMemo(() => {
    if (mode === 'add') return true;
    return (
      formData.name !== initialDriver?.name ||
      formData.phone !== initialDriver?.phone ||
      formData.schedule !== initialDriver?.schedule ||
      formData.shift !== initialDriver?.shift ||
      formData.vehicleName !== initialDriver?.vehicle.name ||
      formData.vehicleLicensePlate !== initialDriver?.vehicle.licensePlate ||
      formData.breaks.replace(/\s/g, '') !== initialDriver?.breaks.join(',')
    );
  }, [formData, initialDriver, mode]);

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

  const handleFieldChange = (field: keyof DriverFormData, value: string) => {
    setFormData((prev) => {
      let newValue = value;
      if (field === 'breaks') {
        newValue = value
          .replace(/(\d),(\d)/g, '$1,$2')
          .replace(/,(\s*),/g, ',')
          .replace(/\s+,/g, ',')
          .replace(/,\s+/g, ', ');
      }

      const newData = { ...prev, [field]: newValue };

      if (
        field === 'vehicleName' &&
        ['', 'multi', 'temporarily_unassigned'].includes(newValue)
      ) {
        newData.vehicleLicensePlate = '';
      }

      return newData;
    });
  };

  return {
    formData,
    error,
    isSubmitting,
    isChanged,
    nameError,
    setNameError,
    setError,
    setIsSubmitting,
    handleFieldChange,
    validateBreakTime,
  };
};
