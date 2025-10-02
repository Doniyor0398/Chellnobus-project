import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth'; // 👈 добавляем auth

const firebaseConfig = {
  apiKey: 'AIzaSyByc0jqcu4VZaJpFz_ChcXgv3ledODZXik',
  authDomain: 'auth-face-api.firebaseapp.com',
  databaseURL:
    'https://auth-face-api-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'auth-face-api',
  storageBucket: 'auth-face-api.appspot.com', // 👈 поправил storageBucket (у тебя была ошибка)
  messagingSenderId: '502939527899',
  appId: '1:502939527899:web:389e9da3fecd32ad28bafe',
};

export const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app); // 👈 создаём auth

export { db, auth }; // 👈 экспортируем и auth, и db
