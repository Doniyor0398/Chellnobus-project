import React, { HtmlHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primart', className, ...props }, ref) => {
    return (
      <input
        className={clsx(styles.input, styles[`variant--${variant}`], className)}
        {...props}
        ref={ref}
      />
    );
  },
);

export default Input;
