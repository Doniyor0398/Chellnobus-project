import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../../../shared/ui/Button/Button';
import IconButton from '../../../../shared/ui/IconButtons/IconButtons';
import Input from '../../../../shared/ui/Input/Input';

import { useRegisterForm } from '../../hooks/useRegisterForm';
import styles from './RegisterForm.module.scss';

import IconUser from '../../../../assets/icon/user.svg';
import IconEmail from '../../../../assets/icon/mail.svg';
import noHidden from '../../../../assets/icon/no-hidden.svg';
import hidden from '../../../../assets/icon/hidden.svg';
import { handleRegister } from '../../api/handleRegister';
import FormError from '../FormError/FormError';

const RegisterForm: React.FC = () => {
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
    getValues,
    setServerError,
  } = useRegisterForm();

  return (
    <div className={styles['register-form']}>
      <form
        onSubmit={handleSubmit((data) =>
          handleRegister(data, dispatch, setServerError, navigate),
        )}
        className={styles['register-form__form']}
      >
        <div className={styles['register-form__title']}>Регистрация</div>

        <div className={styles['register-form__label']}>
          <Input
            placeholder="Имя*"
            className={styles['register-form__input']}
            {...register('name', {
              setValueAs: (value) => value.trim(),
              required: 'Имя обязательно',
              minLength: {
                value: 2,
                message: 'Имя должно содержать минимум 2 символа.',
              },
              maxLength: {
                value: 20,
                message: 'Имя должно содержать максимум 20 символов.',
              },
            })}
            icon={<img src={IconUser} alt="User Icon" />}
          />
          {errors.name && <FormError message={errors.name.message} />}
        </div>

        <div className={styles['register-form__label']}>
          <Input
            type="email"
            placeholder="Эл.почта*"
            className={styles['register-form__input']}
            {...register('email', {
              setValueAs: (value) => value.trim(),
              required: 'Эл. почта обязательна',
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|co\.uk|ru|ua|etc)$/i,
                message: 'Неверный формат Эл.почта',
              },
              maxLength: {
                value: 50,
                message: 'Эл.почта не должен превышать 50 символов.',
              },
            })}
            icon={<img src={IconEmail} alt="Email Icon" />}
          />
          {errors.email && <FormError message={errors.email.message} />}
        </div>

        <div className={styles['register-form__label']}>
          <Input
            placeholder="Пароль*"
            type={showPassword ? 'text' : 'password'}
            className={`${styles['register-form__input']}`}
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
          {errors.password && <FormError message={errors.password.message} />}
        </div>

        <div className={styles['register-form__label']}>
          <Input
            placeholder="Подтвердите пароль*"
            type={showPassword ? 'text' : 'password'}
            className={`${styles['register-form__input']}`}
            {...register('confirmPassword', {
              required: 'Подтверждение пароля обязательно',
              validate: (value) =>
                value === getValues('password') || 'Пароли не совпадают',
            })}
            icon={
              <IconButton
                src={showPassword ? noHidden : hidden}
                alt={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                onClick={togglePasswordVisibility}
              />
            }
          />

          {errors.confirmPassword && (
            <span className={styles['register-form__error']}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {serverError && (
          <span className={styles['register-form__error']}>{serverError}</span>
        )}

        {loading && <p>Загрузка...</p>}

        <Button
          type="submit"
          variant="primary"
          className={styles['register-form__button']}
        >
          Зарегистрироваться
        </Button>

        <div className={styles['register-form__login-link']}>
          Уже есть аккаунт?
          <Link
            to="/login"
            className={styles['register-form__login-link__text']}
          >
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
