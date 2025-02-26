import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface RegisterState {
  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk<
  string,
  { name: string; email: string; password: string; confirmPassword: string },
  { rejectValue: string }
>(
  'register/registerUser',
  async ({ name, email, password, confirmPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post('#', {
        name,
        email,
        password,
        confirmPassword,
      });
      return response.data.token;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Ошибка регистрации',
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
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          localStorage.setItem('authToken', action.payload);
        },
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Неизвестная ошибка';
      });
  },
});

export default registerSlice.reducer;
