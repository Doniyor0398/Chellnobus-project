import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/Login/LoginPage';
import RegisterPage from '../../pages/Register/RegisterPage';
import Dashboard from '../../widgets/Dashboard/Dashboard';
import { Monitoring } from '../../pages/Monitoring/Monitoring';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<HomePage />} />
        <Route path="/monitoring" element={<Monitoring />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRouter;
