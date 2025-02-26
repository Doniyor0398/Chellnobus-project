import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormTypes } from '../types/RegisterFormTypes';
import { useAppDispatch } from './useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/slices/store';
import { useToggle } from './useToggle';
import { registerUser } from '../Redux/slices/registerSlice';
import { useState } from 'react';

export const useRegisterForm = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormTypes>();
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [showPassword, togglePasswordVisibility] = useToggle(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<RegisterFormTypes> = async (data) => {
    console.log(data);

    try {
      const response = await dispatch(registerUser(data)).unwrap();

      if (response) {
        localStorage.setItem('authToken', response);
        console.log('Токен сохранен', response);

        setServerError(null);
      }
    } catch (err: any) {
      console.error('Ошибка при регистрации');

      if (err === 'Ошибка регистрации') {
        setServerError('Не удалось зарегистрировать пользователя');
      } else {
        setServerError('Произошла ошибка при регистрации. Попробуйте снова');
      }
    } finally {
      reset();
    }
  };

  return {
    register,
    handleSubmit,
    getValues,
    error,
    errors,
    loading,
    showPassword,
    serverError,
    togglePasswordVisibility,
    onSubmit,
  };
};
