import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../userSlice/authSlice';
import registerReducer from '../userSlice/registerSlice';
import userReducer from '../userSlice/useSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    register: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
