import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterState } from '../../types/auth/authType';
import { loginUser, registerUser } from '../../services/userAuthApi';
import { removeItem, setItem } from '../../utils/storage';
import { loginUserThunk } from './authSlice';

const initialState: RegisterState = {
  loading: false,
  error: null,
};

export const registerUserThunk = createAsyncThunk<
  string,
  { name: string; email: string; password: string; confirmPassword: string },
  { rejectValue: string }
>(
  'register/registerUser',
  async (
    { name, email, password, confirmPassword },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const response = await registerUser(
        name,
        email,
        password,
        confirmPassword,
      );

      if (response.token) {
        const loginResponse = await loginUser(email, password);

        if (loginResponse.token) {
          dispatch(loginUserThunk({ token: loginResponse.token }));
          return loginResponse.token;
        } else {
          throw new Error('Не удалось войти в систему после регистрации');
        }
      } else {
        throw new Error('Токен не получен');
      }
    } catch (err: any) {
      return rejectWithValue(
        err.message || 'Неизвестная ошибка при регистрации',
      );
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
