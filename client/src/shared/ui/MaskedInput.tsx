import React from 'react';
import { IMaskInput } from 'react-imask';

interface MaskedInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  function MaskedInput(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="+7 (000) 000-00-00"
        definitions={{ '0': /[0-9]/ }}
        inputRef={ref}
        overwrite
        onAccept={(value) =>
          onChange({
            target: { name: props.name, value },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      />
    );
  },
);

export default MaskedInput;
