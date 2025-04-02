import React from 'react';
import { IMaskInput } from 'react-imask';

interface MaskedInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  value: string;
  mask: string;
  definitions?: Record<string, RegExp>;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  (props, ref) => {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        inputRef={ref}
        overwrite
        onAccept={(value: string) => {
          onChange({
            target: {
              name: props.name,
              value: value,
            },
          });
        }}
      />
    );
  },
);

export default MaskedInput;