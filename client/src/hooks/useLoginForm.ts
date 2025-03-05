import { SubmitHandler } from 'react-hook-form';
import { LoginFormTypes } from '../types/loginForm/loginFormTypes';
import { loginUser } from '../services/userAuthApi';
import { setAuthToken } from '../Redux/userSlice/authSlice';
import { useAuthForm } from './useAuthForm';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    loading,
    showPassword,
    togglePasswordVisibility,
    serverError,
    setServerError,
    reset,
    navigate,
    dispatch,
  } = useAuthForm<LoginFormTypes>();

  const onSubmit: SubmitHandler<LoginFormTypes> = async (data) => {
    setServerError(null);
    try {
      const response = await loginUser(data.email, data.password);
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        dispatch(setAuthToken(response.token));
        setServerError(null);
        navigate('/');
      } else {
        setServerError('Не удалось получить токен');
      }
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError('Произошла неизвестная ошибка');
      }
    } finally {
      reset();
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    loading,
    showPassword,
    togglePasswordVisibility,
    serverError,
    onSubmit,
  };
};
