import { useState } from 'react';
import { FormState } from '../types/FormTypes';

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
            ? 'Заполни имя'
            : formState.password === ''
              ? 'Заполни пароль'
              : '',
      }));

      return;
    }

    console.log('Form submitted', {
      userName: formState.username,

      password: formState.password,
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
