import React from 'react';
import styles from './FormError.module.scss';

interface FormErrorProps {
  message?: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  return <span className={styles['login-form__error']}>{message}</span>;
};

export default FormError;
