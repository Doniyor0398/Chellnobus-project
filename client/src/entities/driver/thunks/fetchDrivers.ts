import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDrivers } from '../../../features/driver/api/driverApi';

export const fetchDriversThunk = createAsyncThunk(
  'driver/fetchDrivers',
  async () => {
    const drivers = await getDrivers();
    return drivers;
  },
);
