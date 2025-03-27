import React from 'react';
import { TextField } from '@mui/material';

interface DriverFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string | null;
}

const DriverField: React.FC<DriverFieldProps> = ({
  label,
  value,
  onChange,
  required,
  error,
}) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      helperText={error || ' '}
      sx={{
        '& .MuiFormHelperText-root': {
          visibility: error ? 'visible' : 'hidden',
          marginTop: 0,
          height: error ? 'auto' : 0,
        },
      }}
    />
  );
};

export default DriverField;
