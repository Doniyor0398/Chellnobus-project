import axios from 'axios';
import { Shift, ShiftStatus, Driver } from '../types/ShiftTypes';

const API_BASE_URL =
  'https://auth-face-api-default-rtdb.asia-southeast1.firebasedatabase.app/chelnobus/v1';

type FirebaseShiftRecord = Record<string, Omit<Shift, 'id'>>;

interface NormalizedShift extends Omit<Shift, 'status' | 'driver'> {
  status: ShiftStatus;
  driver: Driver;
}

class ShiftApiService {
  private static instance: ShiftApiService;

  private constructor() {}

  public static getInstance(): ShiftApiService {
    if (!ShiftApiService.instance) {
      ShiftApiService.instance = new ShiftApiService();
    }
    return ShiftApiService.instance;
  }

  private normalizeShiftData([id, shiftData]: [string, any]): NormalizedShift {
    return {
      id,
      vehicle: shiftData.vehicle || '',
      licensePlate: shiftData.licensePlate || '',
      carName: shiftData.carName || '',
      driver: this.normalizeDriver(shiftData.driver),
      startShift: shiftData.startShift || '',
      endShift: shiftData.endShift || '',
      startTerminal: shiftData.startTerminal || '',
      endTerminal: shiftData.endTerminal || '',
      zoneStart: shiftData.zoneStart || '',
      breaks: Array.isArray(shiftData.breaks) ? shiftData.breaks : [],
      status: this.normalizeStatus(shiftData.status),
      actions: shiftData.actions || { start: '', stop: '' },
    };
  }

  private normalizeDriver(driver: unknown): Driver {
    if (typeof driver === 'string') {
      return {
        firstName: driver.split(' ')[0] || '',
        lastName: driver.split(' ')[1] || '',
        phone: '',
      };
    }

    const driverObj = driver as Driver | undefined;
    return {
      firstName: driverObj?.firstName || '',
      lastName: driverObj?.lastName || '',
      phone: driverObj?.phone || '',
    };
  }

  private normalizeStatus(status: unknown): ShiftStatus {
    if (typeof status === 'string') {
      return {
        active: status === 'Активна' ? 'Активна' : '',
        onBreak: status === 'На перерыве' ? 'На перерыве' : '',
        notActive: status === 'Не активна' ? 'Не активна' : '',
      };
    }

    const statusObj = status as ShiftStatus | undefined;
    return {
      active: statusObj?.active || '',
      onBreak: statusObj?.onBreak || '',
      notActive: statusObj?.notActive || '',
    };
  }

  public async fetchShifts(): Promise<NormalizedShift[]> {
    try {
      const response = await axios.get<FirebaseShiftRecord>(
        `${API_BASE_URL}/shifts.json`,
      );

      if (!response.data) {
        console.warn('[ShiftApi] No shifts data found in Firebase');
        return [];
      }

      return Object.entries(response.data).map(
        this.normalizeShiftData.bind(this),
      );
    } catch (error) {
      console.error('[ShiftApi] Failed to fetch shifts:', error);
      throw new Error('Не удалось загрузить данные смен');
    }
  }

  public async updateShiftStatus(
    shiftId: string,
    status: Partial<ShiftStatus>,
  ): Promise<void> {
    try {
      await axios.patch(
        `${API_BASE_URL}/shifts/${shiftId}/status.json`,
        status,
      );
    } catch (error) {
      console.error(
        `[ShiftApi] Failed to update shift ${shiftId} status:`,
        error,
      );
      throw new Error('Не удалось обновить статус смены');
    }
  }
}

export const shiftApi = ShiftApiService.getInstance();
