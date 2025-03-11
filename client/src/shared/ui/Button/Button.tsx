import React from 'react';
import clsx from 'clsx';

import { ButtonProps } from '../types/buttonTypes';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, styles[`button--${variant}`], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
