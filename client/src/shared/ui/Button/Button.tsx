import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  iconPosition = 'left',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        {
          [styles['button--icon']]: variant === 'icon',
          [styles['icon-left']]: iconPosition === 'left',
        },
        className,
      )}
      {...props}
    >
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
