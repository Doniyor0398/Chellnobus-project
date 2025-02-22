import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormTypes } from '../types/LoginFormTypes';
import { useAppDispatch } from './useAppDispatch';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/slices/store';
import { useToggle } from './useToggle';
import { loginUser } from '../Redux/slices/authSlice';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormTypes>();
  const dispatch = useAppDispatch();
  const [serverError, setServerError] = useState<string | null>(null);
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [showPassword, togglePasswordVisibility] = useToggle(false);

  const onSubmit: SubmitHandler<LoginFormTypes> = async (data) => {
    console.log(data);

    try {
      const response = await dispatch(loginUser(data)).unwrap();

      if (response) {
        localStorage.setItem('authToken', response);
        console.log('Токен сохранен', response);
      }
    } catch (err: any) {
      console.error('Ошибка при логина');

      if (err === 'Ошибка авторизации') {
        setServerError('Неверный логин или пароль');
      } else {
        setServerError('Произошла ошибка при авторизации. Попробуйте снова');
      }
    } finally {
      reset();
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    error,
    showPassword,
    togglePasswordVisibility,
    loading,
    serverError,
    onSubmit,
  };
};
