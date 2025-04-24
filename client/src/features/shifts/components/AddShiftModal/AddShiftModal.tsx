import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import ShiftForm from '../ShiftForm/ShiftForm';
import { useAddShift } from '../../hooks/useAddShift';

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

interface AddShiftModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddShiftModal: React.FC<AddShiftModalProps> = ({
  open,
  onClose,
  onSuccess,
}) => {
  const { formData, loading, error, handleChange, handleSubmit } =
    useAddShift(onSuccess);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" mb={3}>
          Добавить новую смену
        </Typography>
        <ShiftForm
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

export default AddShiftModal;
