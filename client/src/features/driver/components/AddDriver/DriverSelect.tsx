import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface DriverSelectProps {
  label: string;
  value: string;
  onChange: (e: any) => void;
  options: string[];
}

const DriverSelect: React.FC<DriverSelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DriverSelect;
