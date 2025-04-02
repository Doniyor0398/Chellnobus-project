import React, { useState } from 'react';
import { TextField, InputProps } from '@mui/material';

interface DriverFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string | null;
  minLength?: number;
  maxLength?: number;
  helperText?: string;
  disabled?: boolean;
  InputProps?: Partial<InputProps>;
}

const DriverField: React.FC<DriverFieldProps> = ({
  label,
  value,
  onChange,
  required,
  error,
  minLength,
  maxLength,
  helperText,
  disabled,
  InputProps,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      helperText={error || (isFocused && helperText) || ' '}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      disabled={disabled}
      InputProps={InputProps}
      inputProps={{
        minLength,
        maxLength,
      }}
      sx={{
        '& .MuiFormHelperText-root': {
          display: 'block',
          ml: 0,
          color: 'orange',
          opacity: error || isFocused ? 1 : 0,
          transition: 'opacity 0.2s ease',
          visibility: error || isFocused ? 'visible' : 'hidden',
          height: '5px',
        },
      }}
    />
  );
};

export default DriverField;
