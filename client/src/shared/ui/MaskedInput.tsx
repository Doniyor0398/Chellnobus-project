import React from 'react';
import { IMaskInput } from 'react-imask';

interface MaskedInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  value: string;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  (props, ref) => {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="+7 (000) 000-00-00"
        definitions={{ '0': /[0-9]/ }}
        inputRef={ref}
        overwrite
        onAccept={(value) => {
          onChange({
            target: {
              name: props.name,
              value: value.replace(/\D/g, ''),
            },
          });
        }}
      />
    );
  },
);

export default MaskedInput;
