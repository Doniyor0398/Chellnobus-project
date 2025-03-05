import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { LOGIN_ERROR } from '../../constants/errorMessage';
import { AuthState } from '../../types/auth/authType';
import { removeItem, setItem, getItem } from '../../utils/storage';
import { loginUser } from '../../services/userAuthApi';

const initialState: AuthState = {
  token: getItem('authToken') || null,
  loading: false,
  error: null,
};

export const loginUserThunk = createAsyncThunk<
  string,
  { email?: string; password?: string; token?: string },
  { rejectValue: string }
>('auth/loginUser', async ({ email, password, token }, { rejectWithValue }) => {
  try {
    if (token) {
      return token;
    }

    if (!email || !password) {
      throw new Error('Требуется email и пароль');
    }

    const response = await loginUser(email, password);
    if (!response.token) {
      throw new Error('Токен не получен');
    }

    return response.token;
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || error.message || LOGIN_ERROR;
    return rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      removeItem('authToken');
    },
    setAuthToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      setItem('authToken', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUserThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.token = action.payload;
          state.loading = false;
        },
      )
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || LOGIN_ERROR;
      });
  },
});

export const { logout, setAuthToken } = authSlice.actions;
export default authSlice.reducer;
