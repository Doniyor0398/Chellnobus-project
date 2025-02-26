import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormTypes } from '../types/LoginFormTypes';
import { useAppDispatch } from './useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/slices/store';
import { useToggle } from './useToggle';
import { loginUser } from '../Redux/slices/authSlice';
import { useState } from 'react';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormTypes>();
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [showPassword, togglePasswordVisibility] = useToggle(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginFormTypes> = async (data) => {
    console.log(data);

    try {
      const response = await dispatch(loginUser(data)).unwrap();

      if (response) {
        localStorage.setItem('authToken', response);
        console.log('Токен сохранен', response);

        setServerError(null);
      }
    } catch (err: any) {
      console.error('Ошибка при логине');

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
    error,
    errors,
    loading,
    showPassword,
    serverError,
    togglePasswordVisibility,
    onSubmit,
  };
};
