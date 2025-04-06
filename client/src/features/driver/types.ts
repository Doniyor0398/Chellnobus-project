export type DriverFormData = {
  name: string;
  phone: string;
  schedule: string;
  shift: string;
  vehicleName: string;
  vehicleLicensePlate: string;
  breaks: string;
};

export type DriverFormMode = 'add' | 'edit';

export interface DriverFormProps {
  formData: DriverFormData;
  error: string | null;
  isSubmitting: boolean;
  isChanged?: boolean;
  onFieldChange: (field: keyof DriverFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  mode?: DriverFormMode;
}
