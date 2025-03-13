import { createSlice } from '@reduxjs/toolkit';
import { fetchDriversThunk } from '../thunks/fetchDrivers';
import { Driver } from '../types/driverTypes';
import { addDriverThunk } from '../thunks/addDriverThunk';

interface DriverState {
  drivers: Driver[];
  loading: boolean;
  error: string | null;
}

const initialState: DriverState = {
  drivers: [],
  loading: false,
  error: null,
};

const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDriversThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDriversThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.drivers = action.payload;
      })
      .addCase(fetchDriversThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка при загрузке водителей';
      })
      .addCase(addDriverThunk.fulfilled, (state, action) => {
        state.drivers.push(action.payload);
      });
  },
});

export default driverSlice.reducer;

export const selectDrivers = (state: { driver: DriverState }) =>
  state.driver.drivers;
export const selectLoading = (state: { driver: DriverState }) =>
  state.driver.loading;
export const selectError = (state: { driver: DriverState }) =>
  state.driver.error;

