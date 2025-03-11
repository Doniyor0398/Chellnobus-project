import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { logout } from '../../features/auth/slices/authSlice';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';

const HomePage: React.FC = () => {
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuth) navigate('/login');
  }, [isAuth, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome {email}</h1>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default HomePage;
