import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';
import { useToggle } from '../../../shared/hooks/useToggle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthForm = <T extends Record<string, any>>() => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<T>();

  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [showPassword, togglePasswordVisibility] = useToggle(false);
  const [showConfirmPassword, toggleConfirmPasswordVisibility] =
    useToggle(false);

  const [serverError, setServerError] = useState<string>('');
  const navigate = useNavigate();

  return {
    register,
    handleSubmit,
    getValues,
    errors,
    loading,
    error,
    showPassword,
    togglePasswordVisibility,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
    serverError,
    setServerError,
    reset,
    navigate,
    dispatch,
  };
};
