import { useEffect, useState } from 'react';
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import {
  useAppDispatch,
  useAppSelector,
} from '../../shared/hooks/useAppDispatch';
import { fetchDriversThunk } from '../../entities/driver/thunks/fetchDrivers';

import DriverTable from '../../features/driver/components/DriverTable';
import {
  Button,
  Modal,
  Box,
  Typography,
  Alert,
  CircularProgress,
  Snackbar,
} from '@mui/material';
import { useToggle } from '../../shared/hooks/useToggle';
import AddDriver from '../../features/driver/components/AddDriver/AddDriverForm';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Drivers = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { drivers, loading, error } = useAppSelector((state) => state.driver);
  const [isModalOpen, toggleModal] = useToggle(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Водители
          <Box
            sx={{
              border: '1px solid green',
              borderRadius: '10px',
              width: '70px',
              background: '#1976d2',
              color: 'white',
              ml: 1,
            }}
          >
            <EmojiPeopleSharpIcon sx={{ mr: 1 }} />
            {drivers.length}
          </Box>
        </Typography>
        <Button variant="contained" color="primary" onClick={toggleModal}>
          Добавить водителя
        </Button>
      </Box>

      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress size={60} />
        </Box>
      )}
      {error && <Alert severity="error">{error}</Alert>}

      <Box sx={{ flexGrow: 1 }}>
        <DriverTable
          data={drivers}
          onDeleteSuccess={() => setSuccessMessage('Водитель успешно удален!')}
          onEditSuccess={() => setSuccessMessage('Водитель успешно изменен!')}
        />
      </Box>

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

      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccessMessage(null)} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
