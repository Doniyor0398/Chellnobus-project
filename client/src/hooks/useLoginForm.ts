import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/slices/store';
import { useAppDispatch } from './useAppDispatch';
import { useToggle } from './useToggle';
import { loginUser } from '../Redux/slices/authSlice';
import { LoginFormState } from '../types/LoginFormTypes';
import { useState } from 'react';

export const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormState>();

  const [showPassword, togglePasswordVisibility] = useToggle(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginFormState> = async (data) => {
    console.log('Form Data:', data);

    try {
      const response = await dispatch(loginUser(data)).unwrap();

      if (response) {
        localStorage.setItem('authToken', response);
        console.log('Токен сохранен:', response);
      }

      reset();
      setServerError(null);
    } catch (err: any) {
      console.error('Ошибка при логине:', err);

      if (err === 'Ошибка авторизации') {
        setServerError('Неверный логин или пароль');
      } else {
        setServerError('Произошла ошибка при авторизации. Попробуйте снова.');
      }
    } finally {
      reset();
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    showPassword,
    togglePasswordVisibility,
    loading,
    error,
    serverError,
  };
};
