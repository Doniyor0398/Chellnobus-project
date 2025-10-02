import { getDatabase, ref, get, child } from 'firebase/database';

export const fetchAllUsers = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, 'users'));

  if (snapshot.exists()) {
    const data = snapshot.val();

    return Object.entries(data).map(([key, value]) => ({
      id: key,
      ...(value as Record<string, any>),
    }));
  } else {
    return [];
  }
};
