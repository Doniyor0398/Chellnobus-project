import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormTypes } from '../types/registerForm/registerFormTypes';
import { useAppDispatch } from './useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/slices/store';
import { useToggle } from './useToggle';
import { loginUserThunk } from '../Redux/slices/authSlice';
import { useState } from 'react';
import { setItem } from '../utils/storage';
import {
  REGISTER_ERROR,
  REGISTRATION_ERROR,
  SET_SERVER_ERROR,
} from '../constants/errorMessage';

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
      const response = await dispatch(loginUserThunk(data)).unwrap();

      if (response) {
        setItem('useRegister', response);

        setServerError(null);
      }
    } catch (err: any) {
      console.error(REGISTER_ERROR);

      if (err === REGISTER_ERROR) {
        setServerError(SET_SERVER_ERROR);
      } else {
        setServerError(REGISTRATION_ERROR);
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
