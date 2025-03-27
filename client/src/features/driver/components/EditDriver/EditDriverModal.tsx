import React from 'react';
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch';
import { Driver } from '../../../../entities/driver/types/driverTypes';
import { editDriverThunk } from '../../../../entities/driver/thunks/editDriverThunk';
import { useEditDriverForm } from '../../hooks/useEditDriverForm';
import { EditDriverForm } from './EditDriverForm';

interface EditDriverProps {
  driver: Driver;
  onClose: () => void;
  onSuccess: () => void;
}

export const EditDriver: React.FC<EditDriverProps> = ({
  driver,
  onClose,
  onSuccess,
}) => {
  const dispatch = useAppDispatch();
  const {
    formData,
    error,
    isSubmitting,
    isChanged,
    setError,
    setIsSubmitting,
    handleFieldChange,
  } = useEditDriverForm(driver);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChanged) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await dispatch(
        editDriverThunk({
          ...driver,
          name: formData.name,
          phone: formData.phone,
          schedule: formData.schedule,
          shift: formData.shift,
          vehicle: {
            name: formData.vehicleName,
            licensePlate: formData.vehicleLicensePlate,
          },
          breaks: formData.breaks.split(',').map((s) => s.trim()),
        }),
      ).unwrap();

      onSuccess();
      onClose();
    } catch (err) {
      setError('Ошибка при обновлении водителя');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EditDriverForm
      initialDriver={driver}
      formData={formData}
      error={error}
      isSubmitting={isSubmitting}
      isChanged={isChanged}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
    />
  );
};

export default EditDriver;
