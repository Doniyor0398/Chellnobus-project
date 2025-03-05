import { SubmitHandler } from 'react-hook-form';
import { RegisterFormTypes } from '../types/registerForm/registerFormTypes';
import { loginUser, registerUser } from '../services/userAuthApi';
import { setAuthToken } from '../Redux/userSlice/authSlice';
import { useAuthForm } from './useAuthForm';

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    errors,
    loading,
    showPassword,
    togglePasswordVisibility,
    serverError,
    setServerError,
    reset,
    navigate,
    dispatch,
  } = useAuthForm<RegisterFormTypes>();

  const onSubmit: SubmitHandler<RegisterFormTypes> = async (data) => {
    setServerError(null);
    try {
      console.log('Data before registration:', data);
      const response = await registerUser(
        data.name,
        data.email,
        data.password,
        data.confirmPassword,
      );

      if (response.token) {
        const loginResponse = await loginUser(data.email, data.password);

        if (loginResponse.token) {
          localStorage.setItem('authToken', loginResponse.token);
          dispatch(setAuthToken(loginResponse.token));
          navigate('/');
        } else {
          setServerError('Не удалось войти в систему после регистрации');
        }
      } else {
        setServerError('Не удалось получить токен при регистрации');
      }
    } catch (error) {
      console.log('Error:', error);
      setServerError(
        error instanceof Error ? error.message : 'Произошла неизвестная ошибка',
      );
    } finally {
      reset();
    }
  };

  return {
    register,
    handleSubmit,
    getValues,
    errors,
    loading,
    showPassword,
    togglePasswordVisibility,
    serverError,
    onSubmit,
    setServerError,
  };
};
