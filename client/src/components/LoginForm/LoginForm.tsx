import React from 'react';

import { useLoginForm } from '../../hooks/useLoginForm';

import Button from '../../ui/Button/Button';
import IconButton from '../../ui/IconButtons/IconButtons';
import Input from '../../ui/Input/Input';

import IconUser from '../../assets/icon/user.svg';
import noHidden from '../../assets/icon/no-hidden.svg';
import hidden from '../../assets/icon/hidden.svg';

import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    loading,
    errors,
    onSubmit,
    showPassword,
    togglePasswordVisibility,
    serverError,
  } = useLoginForm();

  return (
    <div className={styles['login-form']}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['login-form__form']}
      >
        <div className={styles['login-form__title']}>Вход</div>

        <div className={styles['login-form__label']}>
          <Input
            placeholder="Имя пользователя*"
            className={styles['login-form__input']}
            {...register('username', {
              required: 'Имя пользователя обязательно',
            })}
            icon={<img src={IconUser} alt="User Icon" />}
          />

          {errors.username && (
            <span className={styles['login-form__error']}>
              {errors.username.message}
            </span>
          )}
        </div>

        <div className={styles['login-form__label']}>
          <Input
            placeholder="Пароль*"
            type={showPassword ? 'text' : 'password'}
            className={`${styles['login-form__input']} ${styles['login-form__input-password']}`}
            {...register('password', {
              required: 'Требуется пароль',
              minLength: {
                value: 6,
                message: 'Пароль должен быть длиной не менее 6 символов.',
              },
            })}
            icon={
              <IconButton
                src={showPassword ? noHidden : hidden}
                alt={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                onClick={togglePasswordVisibility}
              />
            }
          />

          {errors.password && (
            <span className={styles['login-form__error']}>
              {errors.password.message}
            </span>
          )}

          {serverError && (
            <span className={styles['login-form__error']}>{serverError}</span>
          )}

          {loading && <p>Загрузка...</p>}
        </div>

        <Button
          type="submit"
          variant="primary"
          className={styles['login-form__button']}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
