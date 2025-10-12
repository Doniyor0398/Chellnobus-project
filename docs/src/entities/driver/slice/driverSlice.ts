import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDriversThunk } from '../thunks/fetchDrivers';
import { Driver } from '../types/driverTypes';
import { addDriverThunk } from '../thunks/addDriverThunk';
import { deleteDriverThunk } from '../thunks/deleteDriverThunk';
import { editDriverThunk } from '../thunks/editDriverThunk';

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
      .addCase(
        fetchDriversThunk.fulfilled,
        (state, action: PayloadAction<Driver[]>) => {
          state.loading = false;
          state.drivers = action.payload;
        },
      )
      .addCase(fetchDriversThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка при загрузке водителей';
      })
      .addCase(addDriverThunk.fulfilled, (state, action) => {
        state.drivers.push(action.payload);
      })
      .addCase(
        deleteDriverThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.drivers = state.drivers.filter(
            (driver) => driver.id !== action.payload,
          );
        },
      )
      .addCase(
        editDriverThunk.fulfilled,
        (state, action: PayloadAction<Driver>) => {
          const index = state.drivers.findIndex(
            (d) => d.id === action.payload.id,
          );
          if (index !== -1) {
            state.drivers[index] = action.payload;
          }
        },
      );
  },
});

export default driverSlice.reducer;

export const selectDrivers = (state: { driver: DriverState }) =>
  state.driver.drivers;
export const selectLoading = (state: { driver: DriverState }) =>
  state.driver.loading;
export const selectError = (state: { driver: DriverState }) =>
  state.driver.error;
