import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSliceState } from '../../../features/auth/types/userSliceTypes';
import { removeItem } from '../../../shared/utils/storage';

const initialState: UserSliceState = {
  name: null,
  email: null,
  token: null,
  id: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserSliceState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.name = null;
      state.token = null;
      state.id = null;
      removeItem('authToken');
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
