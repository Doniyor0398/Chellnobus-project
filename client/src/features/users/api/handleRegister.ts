import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../../../firebase';

const saveUserToDB = async (
  uid: string,
  email: string,
  name: string,
  role: string,
) => {
  const db = getDatabase();
  await set(ref(db, 'users/' + uid), {
    id: uid,
    email,
    name,
    role,
    createdAt: new Date().toISOString(),
  });
};

export const handleRegister = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    await saveUserToDB(user.uid, email, name, 'user');

    return user;
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    throw error;
  }
};
