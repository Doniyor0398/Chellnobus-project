import axios from 'axios';

const API_URL =
  'https://auth-face-api-default-rtdb.asia-southeast1.firebasedatabase.app/chelnobus/v1';

export interface Vehicle {
  name: string;
  licensePlate: string;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  schedule: string;
  shift: string;
  vehicle: Vehicle;
  startDate: string;
  break: string[];
}

export const getDrivers = async (): Promise<Driver[]> => {
  try {
    const response = await axios.get(`${API_URL}/drivers.json`);
    console.log('Response from Firebase:', response.data);

    if (!response.data) {
      console.warn('No data found in Firebase at /chelnobus/v1/drivers');
      return [];
    }

    const driversData = response.data;
    const driversArray: Driver[] = Object.keys(driversData).map((key) => ({
      id: key,
      ...driversData[key],
    }));

    return driversArray;
  } catch (error) {
    console.error('Error fetching drivers:', error);
    throw error;
  }
};

export const addDriver = async (
  driver: Omit<Driver, 'id'>,
): Promise<Driver> => {
  const response = await axios.post(`${API_URL}/drivers.json`, driver);
  return { id: response.data.name, ...driver };
};
