import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormTypes } from '../types/loginForm/loginFormTypes';
import { useAppDispatch } from './useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/slices/store';
import { useToggle } from './useToggle';
import { loginUserThunk } from '../Redux/slices/authSlice';
import { useState } from 'react';
import {
  AUTH_ERROR,
  INVALID_CREDENTIALS_ERROR,
  LOGIN_ERROR,
} from '../constants/errorMessage';

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
      const response = await dispatch(loginUserThunk(data)).unwrap();

      if (response) {
        localStorage.setItem('authToken', response);

        setServerError(null);
      }
    } catch (err: any) {
      console.error(LOGIN_ERROR);

      if (err === LOGIN_ERROR) {
        setServerError(INVALID_CREDENTIALS_ERROR);
      } else {
        setServerError(AUTH_ERROR);
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
