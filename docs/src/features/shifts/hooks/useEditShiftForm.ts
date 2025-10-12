import { useState, useMemo } from 'react';
import { Shift } from '../types/ShiftTypes';

type ShiftFormData = Omit<Shift, 'id'>;

export const useEditShiftForm = (initialShift: Shift) => {
  const [formData, setFormData] = useState<ShiftFormData>({
    vehicle: initialShift.vehicle,
    licensePlate: initialShift.licensePlate,
    carName: initialShift.carName,
    driver: initialShift.driver,
    startShift: initialShift.startShift,
    endShift: initialShift.endShift,
    startTerminal: initialShift.startTerminal,
    endTerminal: initialShift.endTerminal,
    zoneStart: initialShift.zoneStart,
    breaks: initialShift.breaks,
    status: initialShift.status,
    actions: initialShift.actions,
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isChanged = useMemo(() => {
    return (
      formData.vehicle !== initialShift.vehicle ||
      formData.licensePlate !== initialShift.licensePlate ||
      formData.carName !== initialShift.carName ||
      formData.driver !== initialShift.driver ||
      formData.startShift !== initialShift.startShift ||
      formData.endShift !== initialShift.endShift ||
      formData.startTerminal !== initialShift.startTerminal ||
      formData.endTerminal !== initialShift.endTerminal ||
      formData.zoneStart !== initialShift.zoneStart ||
      JSON.stringify(formData.breaks) !== JSON.stringify(initialShift.breaks) ||
      JSON.stringify(formData.status) !== JSON.stringify(initialShift.status) ||
      JSON.stringify(formData.actions) !== JSON.stringify(initialShift.actions)
    );
  }, [formData, initialShift]);

  const handleFieldChange = (field: keyof ShiftFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
