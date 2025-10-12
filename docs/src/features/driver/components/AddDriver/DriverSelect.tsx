import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

interface DriverSelectProps {
  label: string;
  value: string;
  onChange: (e: any) => void;
  options: Array<string | { value: string; label: string }>;
  helperText?: string;
}

const DriverSelect: React.FC<DriverSelectProps> = ({
  label,
  value,
  onChange,
  options,
  helperText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {options.map((option) => {
          if (typeof option === 'object') {
            return (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{ fontStyle: 'italic' }}
              >
                {option.label}
              </MenuItem>
            );
          }
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
      {helperText && isFocused && value === '' && (
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{
            display: 'block',
            mt: 1,
            color: 'orange',
            fontSize: '0.75rem',
          }}
        >
          {helperText}
        </Typography>
      )}
    </FormControl>
  );
};

export default DriverSelect;
