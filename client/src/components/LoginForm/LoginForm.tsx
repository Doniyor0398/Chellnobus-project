import React, { useState } from 'react';
import { FormState } from '../../types/FormTypes';

const LoginForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    userName: '',
    password: '',
    error: '',
  });

  // обработка данные user
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (formState.userName === '' || formState.password === '') {
      setFormState((prevState) => ({
        ...prevState,
        error: 'Тебе хана',
      }));
      return;
    }

    console.log('Form submitted', {
      userName: formState.userName,
      password: formState.password,
    });
  };

  const handleuserNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFormState((prevState) => ({
      ...prevState,
      userName: e.target.value,
    }));
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFormState((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Ваша имя: </label>
          <input
            type="text"
            id="userName"
            value={formState.userName}
            onChange={handleuserNameChange}
            style={{
              border:
                formState.error && formState.userName === ''
                  ? '2px solid red'
                  : '1px solid green',
            }}
          />
        </div>
        <label htmlFor="password">Пароль: </label>
        <input
          type="password"
          value={formState.password}
          onChange={handlePasswordChange}
        />
        <div>
          <button type="submit">Войти</button>
        </div>
        {formState.error && <p>{formState.error}</p>}
      </form>
    </div>
  );
};
export default LoginForm;
