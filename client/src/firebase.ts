import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyByc0jqcu4VZaJpFz_ChcXgv3ledODZXik',
  authDomain: 'auth-face-api.firebaseapp.com',
  databaseURL:
    'https://auth-face-api-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'auth-face-api',
  storageBucket: 'auth-face-api.firebasestorage.app',
  messagingSenderId: '502939527899',
  appId: '1:502939527899:web:389e9da3fecd32ad28bafe',
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
