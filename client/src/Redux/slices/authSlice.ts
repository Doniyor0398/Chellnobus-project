import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { LOGIN_ERROR } from '../../constants/errorMessage';
import { AuthState } from '../../types/auth/authType';
import { removeItem, setItem } from '../../utils/storage';

const initialState: AuthState = {
  token: localStorage.getItem('authToken') || null,
  loading: false,
  error: null,
};

export const loginUserThunk = createAsyncThunk<
  string,
  { token: string },
  { rejectValue: string }
>('auth/loginUser', async ({ token }, { rejectWithValue }) => {
  try {
    if (!token) {
      throw new Error('Токен не получен');
    }

    return token;
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
          state.loading = false;
          state.token = action.payload;
          setItem('authToken', action.payload);
        },
      )
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || LOGIN_ERROR;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
