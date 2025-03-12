import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth';

const Home: React.FC = () => {
  const { isAuth, name } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (!isAuth) {
        navigate('/login');
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [isAuth, navigate]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <h1>Welcome {name || 'Гость'}</h1>
    </div>
  );
};

export default Home;
