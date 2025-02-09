import React from 'react';
import { useLoginForm } from '../../hooks/useLoginForm';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
  const {
    formState,
    handleSubmit,
    handleUserNameChange,
    handlePasswordChange,
  } = useLoginForm();

  return (
    <div className={styles['login-form']}>
      <form className={styles['login-form__form']} onSubmit={handleSubmit}>
        <div className={styles['login-form__label']}>
          <label htmlFor="user-name">Ваше имя:</label>
          <input
            className={styles['login-form__input']}
            type="text"
            id="user-name"
            value={formState.username}
            onChange={handleUserNameChange}
          />
        </div>

        <div className={styles['login-form__label']}>
          <label htmlFor="password">Пароль:</label>
          <input
            className={styles['login-form__input']}
            type="password"
            id="password"
            value={formState.password}
            onChange={handlePasswordChange}
          />
        </div>

        <button className={styles['login-form__button']} type="submit">
          Войти
        </button>

        {formState.error && (
          <div className={styles['login-form__error']}>{formState.error}</div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
