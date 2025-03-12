import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useLoginForm } from '../../hooks/useLoginForm';
import styles from './LoginForm.module.scss';

import Button from '../../../../shared/ui/Button/Button';
import Input from '../../../../shared/ui/Input/Input';

import IconUser from '../../../../assets/icon/mail.svg';
import noHidden from '../../../../assets/icon/no-hidden.svg';
import hidden from '../../../../assets/icon/hidden.svg';

import { handleLogin } from '../../api/handleLogin';
import FormError from '../FormError/FormError';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    loading,
    errors,
    showPassword,
    togglePasswordVisibility,
    serverError,
    setServerError,
  } = useLoginForm();

  return (
    <div className={styles['login-form']}>
      <form
        onSubmit={handleSubmit((data) =>
          handleLogin(data, dispatch, setServerError, navigate),
        )}
        className={styles['login-form__form']}
      >
        <div className={styles['login-form__title']}>Вход</div>

        <div className={styles['login-form__label']}>
          <Input
            type="email"
            placeholder="Эл.почта*"
            className={styles['login-form__input']}
            {...register('email', {
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

          {errors.email && <FormError message={errors.email.message} />}
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
              <Button
                type="button"
                variant="icon"
                icon={
                  <img
                    src={showPassword ? noHidden : hidden}
                    alt={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                  />
                }
                onClick={togglePasswordVisibility}
              />
            }
          />

          {errors.password && <FormError message={errors.password.message} />}

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
