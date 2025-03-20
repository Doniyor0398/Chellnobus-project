import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../firebase';
import { ref, remove } from 'firebase/database';

export const deleteDriverThunk = createAsyncThunk(
  'driver/deleteDriver',
  async (driverId: string) => {
    const driverRef = ref(db, `chelnobus/v1/drivers/${driverId}`);
    await remove(driverRef);

    return driverId;
  },
);
