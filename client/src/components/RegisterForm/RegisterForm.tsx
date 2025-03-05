import React from 'react';
import { useRegisterForm } from '../../hooks/useRegisterForm';
import Button from '../../ui/Button/Button';
import IconButton from '../../ui/IconButtons/IconButtons';
import Input from '../../ui/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.scss';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/userSlice/useSlice';
import IconUser from '../../assets/icon/user.svg';
import IconEmail from '../../assets/icon/mail.svg';
import noHidden from '../../assets/icon/no-hidden.svg';
import hidden from '../../assets/icon/hidden.svg';
import { RegisterFormTypes } from '../../types/registerForm/registerFormTypes';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    loading,
    errors,
    // onSubmit,
    showPassword,
    togglePasswordVisibility,
    serverError,
    getValues,
    setServerError,
  } = useRegisterForm();
  const auth = getAuth();

  const handleRegister = async (data: RegisterFormTypes) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = userCredential.user;

      const token = await user.getIdToken();

      dispatch(
        setUser({
          name: user.displayName || data.name,
          email: user.email,
          token: token,
          id: user.uid,
        }),
      );

      navigate('/');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setServerError(
          'Этот email уже используется. Попробуйте войти или использовать другой email.',
        );
      } else {
        setServerError('Произошла ошибка при регистрации. Попробуйте снова.');
      }
    }
  };

  return (
    <div className={styles['register-form']}>
      <form
        onSubmit={handleSubmit(handleRegister)}
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
          {errors.name && (
            <span className={styles['register-form__error']}>
              {errors.name.message}
            </span>
          )}
        </div>

        <div className={styles['register-form__label']}>
          <Input
            type="email"
            placeholder="Email*"
            className={styles['register-form__input']}
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
            icon={<img src={IconEmail} alt="Email Icon" />}
          />
          {errors.email && (
            <span className={styles['register-form__error']}>
              {errors.email.message}
            </span>
          )}
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
          {errors.password && (
            <span className={styles['register-form__error']}>
              {errors.password.message}
            </span>
          )}
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
