import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../firebase';
import { ref, push, set } from 'firebase/database';
import { Driver } from '../types/driverTypes';

export const addDriverThunk = createAsyncThunk(
  'driver/addDriver',
  async (driver: Omit<Driver, 'id'>) => {
    const driversRef = ref(db, 'chelnobus/v1/drivers');
    const newDriverRef = push(driversRef);
    const driverId = newDriverRef.key || `temp_${Date.now()}`;
    await set(newDriverRef, driver);
    return { id: driverId, ...driver };
  },
);
