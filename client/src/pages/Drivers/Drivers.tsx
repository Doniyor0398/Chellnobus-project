import { useEffect } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from '../../shared/hooks/useAppDispatch';
import { fetchDriversThunk } from '../../entities/driver/thunks/fetchDrivers';

import DriverTable from '../../features/driver/components/DriverTable';
import { Button, Modal, Box, Typography, Alert } from '@mui/material';
import { useToggle } from '../../shared/hooks/useToggle';
import AddDriver from '../../features/driver/components/AddDriver';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Drivers = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { drivers, loading, error } = useAppSelector((state) => state.driver);
  const [isModalOpen, toggleModal] = useToggle(false);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchDriversThunk());
    }
  }, [dispatch, isAuth]);

  if (!isAuth) {
    return null;
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h4" component="h1">
          Водители
        </Typography>
        <Button variant="contained" color="primary" onClick={toggleModal}>
          Добавить водителя
        </Button>
      </Box>

      {loading && <Typography>Загрузка...</Typography>}
      {error && <Alert severity="error">{error}</Alert>}

      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <AddDriver onClose={toggleModal} />
        </Box>
      </Modal>

      <DriverTable data={drivers} />
    </div>
  );
};
