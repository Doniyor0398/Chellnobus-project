import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../Redux/userSlice/useSlice';
import { useDispatch } from 'react-redux';

const HomePage: React.FC = () => {
  const { isAuth, name } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null; // Можно вернуть null, так как редирект произойдет сразу, если пользователь не авторизован
  }

  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={() => dispatch(removeUser())}>Выйти</button>
    </div>
  );
};

export default HomePage;
