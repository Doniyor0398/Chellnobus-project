import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';
import { useMemo } from 'react';
import { getItem } from '../../../shared/utils/storage';

export const useAuth = () => {
  const { email, token, id, name } = useSelector(
    (state: RootState) => state.user,
  );

  const storedToken = getItem('authToken');

  return useMemo(
    () => ({
      isAuth: !!email || storedToken,
      email,
      name,
      token,
      id,
    }),
    [email, name, token, id],
  );
};
