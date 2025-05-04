import { useState } from 'react';
import { orderApi } from '../api/orderApi';
import { Order, OrderFormValues } from '../types/OrderTypes';

export const useAddOrder = (onSuccess: (newOrder: Order) => void) => {
  const [formData, setFormData] = useState<OrderFormValues>({
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    status: 'Работает',
    type: 'Доставка',
    vehicle: '',
    driver: '',
    from: '',
    to: '',
    sender: '',
    receiver: '',
    cargo: '',
    comment: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof OrderFormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const newOrder = await orderApi.createOrder(formData);
      onSuccess(newOrder);
    } catch (err) {
      setError('Ошибка при создании заказа');
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, error, handleChange, handleSubmit };
};
