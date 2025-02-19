import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  string,
  { username: string; password: string },
  { rejectValue: string }
>('auth/loginUser', async ({ username, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post('#', {
      username,
      password,
    });
    return response.data.token;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || 'Ошибка авторизации',
    );
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem('authToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload;
        localStorage.setItem('authToken', action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Неизвестная ошибка';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

import { useState, useCallback } from 'react';

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);
  return [state, toggle];
};
