import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <input
      className={clsx(styles.input, styles[`input--${variant}`], className)}
      {...props}
    />
  );
};
