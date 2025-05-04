export interface Order {
  id: string;
  date: string;
  time: string;
  status: string;
  type: string;
  vehicle: string;
  driver: string;
  from: string;
  to: string;
  sender: string;
  receiver: string;
  cargo: string;
  comment: string;
}

export interface OrderFormValues extends Omit<Order, 'id'> {}

export type OrderStatus = 'Работает' | 'Выполнен' | 'Свободен';
