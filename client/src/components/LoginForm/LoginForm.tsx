import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormState } from '../../types/FormTypes';
import iconAuth from '../../assets/icon/bus.svg';
import styles from './LoginForm.module.scss'; // импорт стилей

// import axios from 'axios'; // Импорт axios

const LoginForm: React.FC = () => {
  const {
    register,

    handleSubmit,

    formState: { errors }, // захватываем ошибки из useForm
  } = useForm<FormState>();

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    console.log('Form Data:', data); // Логируем данные формы (для отладки)

    try {
      // Запрос к API (закомментирован, пока API не готово)
      /*

const response = await axios.post('https://your-api-endpoint.com/login', {

username: data.username,

password: data.password,

});

  

console.log('API Response:', response.data); // Логируем ответ от сервера

  

// Обработка успешного ответа

if (response.data.token) {

localStorage.setItem('authToken', response.data.token); // Сохраняем токен

window.location.href = '/dashboard'; // Редирект на страницу dashboard

}

*/
    } catch (error) {
      console.error('API Error:', error); // Логируем ошибку, если запрос не удался

      // Обработка ошибок

      // Например, можно показать сообщение об ошибке пользователю
    }
  };

  return (
    <div className={styles['login-form']}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['login-form__form']}
      >
        <h1 className={styles['login-form__title']}>
          <img src={iconAuth} alt="icon" />
          Chellnobus
        </h1>

        <div className={styles['login-form__label']}>
          <input
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
          <input
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

        <button type="submit" className={styles['login-form__button']}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
