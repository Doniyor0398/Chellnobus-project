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

  const isChanged = useMemo(() => {
    return (
      formData.name !== initialDriver.name ||
      formData.phone !== initialDriver.phone ||
      formData.schedule !== initialDriver.schedule ||
      formData.shift !== initialDriver.shift ||
      formData.vehicleName !== initialDriver.vehicle.name ||
      formData.vehicleLicensePlate !== initialDriver.vehicle.licensePlate ||
      formData.breaks !== initialDriver.breaks.join(', ')
    );
  }, [formData, initialDriver]);

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value };

      if (
        field === 'vehicleName' &&
        ['', 'multi', 'temporarily_unassigned'].includes(value)
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
  };
};
