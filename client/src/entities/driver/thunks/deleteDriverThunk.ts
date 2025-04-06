import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../firebase';
import { ref, remove } from 'firebase/database';

export const deleteDriverThunk = createAsyncThunk(
  'driver/deleteDriver',
  async (driverId: string, { rejectWithValue }) => {
    try {
      const driverRef = ref(db, 'chelnobus/drivers/' + driverId);

      console.log(
        'Пытаюсь удалить водителя',
        driverId,
        'по пути:',
        driverRef.toString(),
      );

      await remove(driverRef);
      console.log('Удаление успешно');

      return driverId;
    } catch (error) {
      console.error('Ошибка при удалении:', error);
      return rejectWithValue('Не удалось удалить водителя');
    }
  },
);
