import { useState } from 'react';
import { FormState } from '../types/FormTypes';
// import axios from 'axios';

export const useLoginForm = () => {
  const [formState, setFormState] = useState<FormState>({
    username: '',
    password: '',
    error: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formState.username === '' || formState.password === '') {
      setFormState((prevState) => ({
        ...prevState,
        error:
          formState.username === ''
            ? 'Заполните имя'
            : formState.password === ''
              ? 'Заполните пароль'
              : formState.password.length < 6
                ? 'Длина пароля должна быть 6 символов'
                : '',
      }));

      return;
    }

    console.log('Form submitted', {
      userName: formState.username,

      password: formState.password,
      package: formState.password.length,
    });
  };

  const handleUserNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFormState((prevState) => ({
      ...prevState,
      username: e.target.value,
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

  return {
    formState,
    handleSubmit,
    handleUserNameChange,
    handlePasswordChange,
  };
};
