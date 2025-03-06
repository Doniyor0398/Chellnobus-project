import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../Redux/userSlice/userSlice';
import { Dispatch } from 'react';

export const handleRegister = async (
  data: { name: string; email: string; password: string },
  dispatch: Dispatch<any>,
  setServerError: React.Dispatch<React.SetStateAction<string>>,
  navigate: (path: string) => void,
) => {
  try {
    const auth = getAuth();
    const trimmedEmail = data.email.trim();
    const trimmedName = data.name.trim();

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      trimmedEmail,
      data.password,
    );
    const user = userCredential.user;

    const token = await user.getIdToken();

    dispatch(
      setUser({
        name: user.displayName || trimmedName,
        email: user.email,
        token: token,
        id: user.uid,
        isAuth: true,
      }),
    );

    navigate('/');
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      setServerError(
        'Этот email уже используется. Попробуйте войти или используйте другой email.',
      );
    } else {
      setServerError('Произошла ошибка при регистрации. Попробуйте снова.');
    }
  }
};
