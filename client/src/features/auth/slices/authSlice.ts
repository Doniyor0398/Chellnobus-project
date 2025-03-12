import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateTypes } from '../types/authStateTypes';
import { removeItem, setItem, getItem } from '../../../shared/utils/storage';
import { loginUser } from '../api/userAuthApi';

const initialState: AuthStateTypes = {
  token: getItem('authToken') || null,
  loading: false,
  error: null,
  name: null,
};
export const loginUserThunk = createAsyncThunk<
  string,
  { email?: string; password?: string; token?: string },
  { rejectValue: string }
>('auth/loginUser', async ({ email, password, token }, { rejectWithValue }) => {
  try {
    if (token) return token;

    if (!email || !password) {
      throw new Error('Требуется email и пароль');
    }

    const response = await loginUser(email, password);
    if (!response.token) throw new Error('Токен не получен');

    return response.token;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    return rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken(
      state,
      action: PayloadAction<{ token: string; name: string }>,
    ) {
      state.token = action.payload.token;
      state.name = action.payload.name;
      setItem('authToken', action.payload.token);
    },
    logout(state) {
      state.token = null;
      state.name = null;
      removeItem('authToken');
    },
  },
});

export const { setAuthToken, logout } = authSlice.actions;
export default authSlice.reducer;
