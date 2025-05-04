import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import OrderForm from '../OrderForm/OrderForm';
import { useAddOrder } from '../../hooks/useAddOrder';
import { Order } from '../../types/OrderTypes';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface AddOrderModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (newOrder: Order) => void;
}

const AddOrderModal: React.FC<AddOrderModalProps> = ({
  open,
  onClose,
  onSuccess,
}) => {
  const { formData, loading, error, handleChange, handleSubmit } = useAddOrder(
    (newOrder) => {
      onSuccess(newOrder);
      onClose();
    },
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" mb={3}>
          Создать новый заказ
        </Typography>
        <OrderForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          error={error}
          loading={loading}
          onCancel={onClose}
        />
      </Box>
    </Modal>
  );
};

export default AddOrderModal;
