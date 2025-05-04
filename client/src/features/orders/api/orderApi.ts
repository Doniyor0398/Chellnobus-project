import axios from 'axios';
import { Order, OrderFormValues } from '../types/OrderTypes';

const API_BASE_URL =
  'https://auth-face-api-default-rtdb.asia-southeast1.firebasedatabase.app/chelnobus/v1';

// Тип для формата данных Firebase (объект с ID в ключах)
type FirebaseOrdersResponse = Record<string, OrderFormValues>;

class OrderApiService {
  private static instance: OrderApiService;

  private constructor() {}

  public static getInstance(): OrderApiService {
    if (!OrderApiService.instance) {
      OrderApiService.instance = new OrderApiService();
    }
    return OrderApiService.instance;
  }

  /**
   * Преобразует данные из формата Firebase в массив заказов с ID.
   */
  private normalizeOrderData([id, orderData]: [
    string,
    OrderFormValues,
  ]): Order {
    return {
      id,
      ...orderData,
      // Добавляем defaults для отсутствующих полей
      date: orderData.date || new Date().toISOString().split('T')[0],
      status: orderData.status || 'Работает',
    };
  }

  public async fetchOrders(): Promise<Order[]> {
    try {
      const response = await axios.get<FirebaseOrdersResponse>(
        `${API_BASE_URL}/orders.json`,
      );

      if (!response.data) {
        console.warn('[OrderApi] Firebase returned empty orders data');
        return [];
      }

      // Конвертируем объект Firebase в массив
      return Object.entries(response.data).map(
        this.normalizeOrderData.bind(this),
      );
    } catch (error) {
      console.error('[OrderApi] Failed to fetch orders:', error);
      throw new Error('Не удалось загрузить заказы. Проверьте подключение.');
    }
  }

  public async createOrder(orderData: OrderFormValues): Promise<Order> {
    try {
      const response = await axios.post<{ name: string }>(
        `${API_BASE_URL}/orders.json`,
        orderData,
      );

      // Firebase возвращает ID в поле `name`
      return {
        id: response.data.name,
        ...orderData,
      };
    } catch (error) {
      console.error('[OrderApi] Failed to create order:', error);
      throw new Error('Не удалось создать заказ. Проверьте данные.');
    }
  }
}

export const orderApi = OrderApiService.getInstance();
