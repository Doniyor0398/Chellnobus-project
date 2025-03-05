import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store/store';

export const useAuth = () => {
  const { email, token, id, name } = useSelector(
    (state: RootState) => state.user,
  );

  return {
    isAuth: !!email,
    name,
    token,
    id,
  };
};
