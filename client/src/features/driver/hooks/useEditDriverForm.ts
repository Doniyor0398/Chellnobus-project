import { useState, useMemo } from 'react';
import { Driver } from '../../../entities/driver/types/driverTypes';

export const useEditDriverForm = (initialDriver?: Driver | null) => {
  if (!initialDriver) {
    return {
      formData: {
        name: '',
        phone: '',
        schedule: '',
        shift: '',
        vehicleName: '',
        vehicleLicensePlate: '',
        breaks: '',
      },
      error: null,
      isSubmitting: false,
      isChanged: false,
      setError: () => {},
      setIsSubmitting: () => {},
      handleFieldChange: () => {},
      validateBreakTime: () => true,
    };
  }

  const [formData, setFormData] = useState({
    name: initialDriver.name,
    phone: initialDriver.phone,
    schedule: initialDriver.schedule,
    shift: initialDriver.shift,
    vehicleName: initialDriver.vehicle.name,
    vehicleLicensePlate: initialDriver.vehicle.licensePlate,
    breaks: initialDriver.breaks.join(', '),
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const isChanged = useMemo(() => {
    return (
      formData.name !== initialDriver.name ||
      formData.phone !== initialDriver.phone ||
      formData.schedule !== initialDriver.schedule ||
      formData.shift !== initialDriver.shift ||
      formData.vehicleName !== initialDriver.vehicle.name ||
      formData.vehicleLicensePlate !== initialDriver.vehicle.licensePlate ||
      formData.breaks.replace(/\s/g, '') !== initialDriver.breaks.join(',')
    );
  }, [formData, initialDriver]);

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
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
    setError,
    setIsSubmitting,
    handleFieldChange,
    validateBreakTime,
  };
};
