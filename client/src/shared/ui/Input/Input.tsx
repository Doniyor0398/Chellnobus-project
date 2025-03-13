import React from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';
import { InputTypes } from '../types/InputProps';

const Input = React.forwardRef<HTMLInputElement, InputTypes>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className={clsx(styles.inputWrapper)}>
        <input className={clsx(styles.input, className)} {...props} ref={ref} />
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
    );
  },
);

export default Input;
