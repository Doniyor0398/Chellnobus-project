import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/Home/Home';
import LoginPage from '../../pages/Login/LoginPage';
import RegisterPage from '../../pages/Register/RegisterPage';
import Dashboard from '../../widgets/Dashboard/Dashboard';
import Change from '../../pages/Change/Change';
import { Drivers } from '../../pages/Drivers/Drivers';
import Orders from '../../pages/Orders/Orders';
import Users from '../../pages/Users/Users';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<HomePage />} />
        <Route path="/change" element={<Change />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRouter;
