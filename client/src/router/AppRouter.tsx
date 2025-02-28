import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
