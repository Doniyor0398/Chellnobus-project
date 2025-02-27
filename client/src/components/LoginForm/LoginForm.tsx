import React from 'react';

import { useLoginForm } from '../../hooks/useLoginForm';

import Button from '../../ui/Button/Button';
import IconButton from '../../ui/IconButtons/IconButtons';
import Input from '../../ui/Input/Input';

import IconUser from '../../assets/icon/mail.svg';
import noHidden from '../../assets/icon/no-hidden.svg';
import hidden from '../../assets/icon/hidden.svg';

import styles from './LoginForm.module.scss';
import { Link } from 'react-router-dom';

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
            type="email"
            placeholder="Эл.почта*"
            className={styles['login-form__input']}
            {...register('email', {
              setValueAs: (value) => value.trim(),
              required: 'Email обязателен',
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|co\.uk|ru|ua|etc)$/i,
                message: 'Неверный формат email',
              },
              maxLength: {
                value: 50,
                message: 'E-mail не должен превышать 50 символов.',
              },
            })}
            icon={<img src={IconUser} alt="Email Icon" />}
          />

          {errors.email && (
            <span className={styles['login-form__error']}>
              {errors.email.message}
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
                message: 'Пароль должен содержать минимум 6 символов.',
              },
              maxLength: {
                value: 20,
                message: 'Пароль не должен превышать 20 символов.',
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

        <div className={styles['login-form__register-link']}>
          Нет аккаунта?
          <Link
            to="/register"
            className={styles['login-form__register-link__text']}
          >
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
