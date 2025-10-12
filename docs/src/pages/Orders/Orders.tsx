import React, { useState, useEffect } from 'react';
import { Order } from '../../features/orders/types/OrderTypes';
import OrderTable from '../../features/orders/components/OrderTable/OrderTable';
import AddOrderModal from '../../features/orders/components/AddOrderModal/AddOrderModal';
import { orderApi } from '../../features/orders/api/orderApi';
import {
  Button,
  Stack,
  Pagination,
  Box,
  Paper,
  Typography,
} from '@mui/material';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const fetchOrders = async () => {
    try {
      const data = await orderApi.fetchOrders();
      setOrders(data);
    } catch (error) {
      console.error('Ошибка при загрузке заказов:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const currentOrders = orders.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage,
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 64px)',

        gap: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Список заказов</Typography>
          <Button
            variant="contained"
            onClick={() => setIsModalOpen(true)}
            sx={{ textTransform: 'none' }}
          >
            Добавить заказ
          </Button>
        </Stack>
      </Paper>

      <Paper
        elevation={3}
        sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Box sx={{ flex: 1, overflow: 'hidden' }}>
          <OrderTable orders={currentOrders} />
        </Box>

        <Box sx={{ p: 2, borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
          <Stack direction="row" justifyContent="center">
            <Pagination
              count={Math.ceil(orders.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              showFirstButton
              showLastButton
            />
          </Stack>
        </Box>
      </Paper>

      <AddOrderModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={(newOrder) => {
          setOrders([newOrder, ...orders]);
          setPage(1);
        }}
      />
    </Box>
  );
};

export default OrdersPage;
