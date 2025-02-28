import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterState } from '../../types/auth/authType';
import { registerUser } from '../../services/userAuthApi';
import { removeItem, setItem } from '../../utils/storage';
import { loginUserThunk } from './authSlice';
import { AppDispatch } from './store';

const initialState: RegisterState = {
  loading: false,
  error: null,
};

export const registerUserThunk = createAsyncThunk<
  string,
  { name: string; email: string; password: string; confirmPassword: string },
  { rejectValue: string; dispatch: AppDispatch }
>(
  'register/registerUser',
  async (
    { name, email, password, confirmPassword },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const token = await registerUser(name, email, password, confirmPassword);
      dispatch(loginUserThunk({ token }));
      return token;
    } catch (err: any) {
      return rejectWithValue('Неизвестная ошибка при регистрации');
    }
  },
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUserThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = null;
          removeItem('registerToken');
          setItem('registerToken', action.payload);
          localStorage.setItem('authToken', action.payload);
        },
      )
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Неизвестная ошибка';
      });
  },
});

export default registerSlice.reducer;
