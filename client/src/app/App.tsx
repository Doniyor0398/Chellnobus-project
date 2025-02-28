import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from '../Redux/slices/authSlice';
import AppRouter from '../router/AppRouter';
import { AppDispatch } from '../Redux/slices/store';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch(loginUserThunk({ token }));
    }
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
