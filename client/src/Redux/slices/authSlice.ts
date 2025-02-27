import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { LOGIN_ERROR, UNKOWN_ERROR } from '../../constants/errorMessage';
import { AuthState } from '../../types/auth/authType';
import { loginUser } from '../../services/userAuthApi';
import { removeItem, setItem } from '../../utils/storage';

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

export const loginUserThunk = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string }
>('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const token = await loginUser(email, password);
    if (!token) {
      throw new Error('Токен не получен');
    }
    return token;
  } catch (error: any) {
    console.error(error);

    return rejectWithValue(error.response?.data?.message || LOGIN_ERROR);
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
        state.error =
          typeof action.payload === 'string' ? action.payload : UNKOWN_ERROR;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
