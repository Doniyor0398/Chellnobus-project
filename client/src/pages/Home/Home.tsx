import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ color: '#ffff' }}>
      <Link to="/login">Авторизации</Link>
      <br />
      <Link to="/register">Регистрация</Link>
    </div>
  );
};
export default Home;
