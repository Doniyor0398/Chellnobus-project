// store.ts
import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './Redux/slices/authSlice'; // Мы создадим этот файл позже

export const store = configureStore({
  reducer: {
    // auth: authReducer, // Подключаем наш reducer для аутентификации
  },
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
