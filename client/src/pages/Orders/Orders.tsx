import React, { useState, useEffect } from 'react';
import { Order } from '../../features/orders/types/OrderTypes';

import OrderTable from '../../features/orders/components/OrderTable/OrderTable';
import AddOrderModal from '../../features/orders/components/AddOrderModal/AddOrderModal';
import { orderApi } from '../../features/orders/api/orderApi';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchOrders = async () => {
    const data = await orderApi.fetchOrders();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Добавить заказ</button>
      <OrderTable orders={orders} />
      <AddOrderModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={(newOrder) => setOrders([...orders, newOrder])}
      />
    </div>
  );
};

export default OrdersPage;
