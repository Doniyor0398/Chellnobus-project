import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../Redux/userSlice/userSlice';
import { Dispatch } from 'react';

export const handleLogin = async (
  data: { email: string; password: string },
  dispatch: Dispatch<any>,
  setServerError: React.Dispatch<React.SetStateAction<string>>,
  navigate: (path: string) => void,
) => {
  try {
    const auth = getAuth();
    const trimmedEmail = data.email.trim();

    const userCredential = await signInWithEmailAndPassword(
      auth,
      trimmedEmail,
      data.password,
    );
    const user = userCredential.user;
    const token = await user.getIdToken();

    dispatch(
      setUser({
        name: user.displayName || '',
        email: user.email,
        token: token,
        id: user.uid,
        isAuth: true,
      }),
    );

    navigate('/');
  } catch (error: any) {
    setServerError(`Неверный email или пароль. Попробуйте снова`);
  }
};
