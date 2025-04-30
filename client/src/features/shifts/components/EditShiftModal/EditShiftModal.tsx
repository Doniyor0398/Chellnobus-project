import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { useEditShift } from '../../hooks/useEditShift';
import { Shift } from '../../types/ShiftTypes';
import ShiftForm from '../ShiftForm/ShiftForm';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface Props {
  shift: Shift;
  open: boolean;
  onClose: () => void;
}

const EditShiftModal: React.FC<Props> = ({ shift, open, onClose }) => {
  const { formData, loading, error, handleChange, handleSubmit } = useEditShift(
    shift,
    onClose,
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" mb={3}>
          Редактировать смену
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

export default EditShiftModal;
