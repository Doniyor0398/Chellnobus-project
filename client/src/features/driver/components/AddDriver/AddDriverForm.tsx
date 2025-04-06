import React from 'react';
import DriverForm from '../../DriverForm/DriverForm';
import { useAddDriver } from '../../hooks/useAddDriver';
import { DriverFormData } from '../../types';

const AddDriverForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const form = useAddDriver(onClose);

  const handleFieldChange = (field: keyof DriverFormData, value: string) => {
    switch (field) {
      case 'name':
        form.handleNameChange({
          target: { value },
        } as React.ChangeEvent<HTMLInputElement>);
        break;
      case 'phone':
        form.setPhone(value);
        break;
      case 'schedule':
        form.setSchedule(value);
        break;
      case 'shift':
        form.setShift(value);
        break;
      case 'breaks':
        form.setBreakTime(value);
        break;
      case 'vehicleName':
        form.setVehicleName(value);
        break;
      case 'vehicleLicensePlate':
        form.setVehicleLicensePlate(value);
        break;
      default:
        throw new Error(`Unknown field: ${field}`);
    }
  };

  return (
    <DriverForm
      formData={{
        name: form.name,
        phone: form.phone,
        schedule: form.schedule,
        shift: form.shift,
        breaks: form.breakTime,
        vehicleName: form.vehicleName,
        vehicleLicensePlate: form.vehicleLicensePlate,
      }}
      error={form.error}
      isSubmitting={form.loading}
      onFieldChange={handleFieldChange}
      onSubmit={form.handleSubmit}
      onClose={onClose}
      mode="add"
    />
  );
};

export default AddDriverForm;
