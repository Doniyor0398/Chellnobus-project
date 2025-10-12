import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../firebase';
import { ref, update } from 'firebase/database';
import { Driver } from '../types/driverTypes';

export const editDriverThunk = createAsyncThunk(
  'driver/editDriver',
  async (driver: Driver) => {
    const { id, ...driverData } = driver;
    const driverRef = ref(db, `chelnobus/v1/drivers/${id}`);
    await update(driverRef, driverData);
    return driver;
  },
);
