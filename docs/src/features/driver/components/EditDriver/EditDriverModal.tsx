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

export const EditDriverModal: React.FC<EditDriverProps> = ({
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
    validateBreakTime,
  } = useEditDriverForm(driver);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChanged) return;

    setIsSubmitting(true);
    setError(null);

    if (!validateBreakTime(formData.breaks)) {
      setError(
        'Некорректный формат перерывов. Используйте 12:00-12:30 или 12:00-12:30, 13:00-13:30',
      );
      setIsSubmitting(false);
      return;
    }

    if (
      formData.vehicleName &&
      !['', 'multi', 'temporarily_unassigned'].includes(formData.vehicleName) &&
      !formData.vehicleLicensePlate
    ) {
      setError('Для выбранного ТС требуется указать госномер');
      setIsSubmitting(false);
      return;
    }

    try {
      await dispatch(
        editDriverThunk({
          ...driver,
          name: formData.name,
          phone: formData.phone.replace(/\D/g, ''),
          schedule: formData.schedule,
          shift: formData.shift,
          vehicle: {
            name: ['multi', 'temporarily_unassigned'].includes(
              formData.vehicleName,
            )
              ? ''
              : formData.vehicleName,
            licensePlate: ['multi', 'temporarily_unassigned'].includes(
              formData.vehicleName,
            )
              ? ''
              : formData.vehicleLicensePlate,
          },
          breaks: formData.breaks
            .replace(/\s/g, '')
            .split(',')
            .filter(Boolean)
            .map((b) => b.trim()),
        }),
      ).unwrap();

      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
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
      onClose={onClose}
    />
  );
};
