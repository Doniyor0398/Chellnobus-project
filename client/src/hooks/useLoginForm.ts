import { SubmitHandler } from 'react-hook-form';
import { LoginFormTypes } from '../types/loginFormTypes';
import { loginUser } from '../services/userAuthApi';
import { setAuthToken } from '../Redux/userSlice/authSlice';
import { useAuthForm } from './useAuthForm';
import { UNKOWN_ERROR } from '../constants/errorMessage';

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
    setServerError('');
    try {
      const response = await loginUser(data.email, data.password);
      if (response.token) {
        dispatch(setAuthToken({ token: response.token, name: response.name }));
        localStorage.setItem('authToken', response.token);
        navigate('/');
      } else {
        setServerError('Не удалось получить токен');
      }
    } catch (error) {
      setServerError(error instanceof Error ? error.message : UNKOWN_ERROR);
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
    setServerError,
  };
};
