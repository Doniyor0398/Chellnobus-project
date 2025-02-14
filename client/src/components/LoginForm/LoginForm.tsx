import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormState } from '../../types/FormTypes';
import styles from './LoginForm.module.scss';
import { Button } from '../../ui/Button/Button';
import { Input } from '../../ui/Input/Input';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    console.log('Form Data:', data);

    try {
      /*
      const response = await axios.post('', {
        username: data.username,
        password: data.password,
      });

      console.log('API Response:', response.data);

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        window.location.href = '/dashboard';
      }
      */
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <div className={styles['login-form']}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['login-form__form']}
      >
        <h1 className={styles['login-form__title']}>Chellnobus</h1>

        <div className={styles['login-form__label']}>
          <Input
            placeholder="Имя пользователя"
            className={styles['login-form__input']}
            {...register('username', {
              required: 'Имя пользователя обязательно',
            })}
          />
          {errors.username && (
            <span className={styles['login-form__error']}>
              {errors.username.message}
            </span>
          )}
        </div>

        <div className={styles['login-form__label']}>
          <Input
            placeholder="Пароль"
            type="password"
            className={`${styles['login-form__input']} ${styles['login-form__input-password']}`}
            {...register('password', {
              required: 'Требуется пароль',
              minLength: {
                value: 6,
                message: 'Пароль должен быть длиной не менее 6 символов.',
              },
            })}
          />
          {errors.password && (
            <span className={styles['login-form__error']}>
              {errors.password.message}
            </span>
          )}
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
