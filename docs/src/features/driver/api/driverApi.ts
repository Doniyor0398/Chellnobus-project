import axios from 'axios';
import { Driver } from '../../../entities/driver/types/driverTypes';

const API_URL =
  'https://auth-face-api-default-rtdb.asia-southeast1.firebasedatabase.app/chelnobus/v1';

export const getDrivers = async (): Promise<Driver[]> => {
  try {
    const response = await axios.get<Record<string, Omit<Driver, 'id'>>>(
      `${API_URL}/drivers.json`,
    );

    if (!response.data) {
      console.warn('Данные в Firebase не найдены');
      return [];
    }

    return Object.entries(response.data).map(([id, driverData]) => {
      if (!driverData) {
        return {
          id,
          name: '',
          phone: '',
          schedule: '',
          shift: '',
          vehicle: { name: '', licensePlate: '' },
          breaks: [],
        };
      }

      return {
        id,
        name: driverData.name || '',
        phone: driverData.phone || '',
        schedule: driverData.schedule || '',
        shift: driverData.shift || '',
        vehicle: driverData.vehicle
          ? {
              name: driverData.vehicle.name || '',
              licensePlate: driverData.vehicle.licensePlate || '',
            }
          : { name: '', licensePlate: '' },
        breaks: driverData.breaks || [],
      };
    });
  } catch (error) {
    console.error('Error fetching drivers:', error);
    throw error;
  }
};
