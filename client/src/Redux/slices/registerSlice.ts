import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterState } from '../../types/auth/authType';
import { registerUser } from '../../services/userAuthApi';
import { UNKOWN_ERROR } from '../../constants/errorMessage';
import { removeItem, setItem } from '../../utils/storage';

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
  async ({ name, email, password, confirmPassword }, { rejectWithValue }) => {
    try {
      const token = await registerUser(name, email, password, confirmPassword);
      return token;
    } catch (err: any) {
      console.error(UNKOWN_ERROR);

      return rejectWithValue(err.response?.data?.message || UNKOWN_ERROR);
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
        },
      )
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Неизвестная ошибка';
      });
  },
});

export default registerSlice.reducer;
