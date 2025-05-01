import React, { useState, useEffect } from 'react';
import ShiftTable from '../../features/shifts/components/ShiftTable/ShiftTable';
import { shiftApi } from '../../features/shifts/api/shiftApi';
import { Shift } from '../../features/shifts/types/ShiftTypes';
import { CircularProgress, Alert, Button, Stack } from '@mui/material';
import AddShiftModal from '../../features/shifts/components/AddShiftModal/AddShiftModal';

const ShiftsPage: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const loadShifts = async () => {
    try {
      setLoading(true);
      const shifts = await shiftApi.fetchShifts();
      setShifts(shifts);
    } catch (err) {
      setError('Не удалось загрузить данные смен');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadShifts();
  }, []);

  const handleStartShift = async (shiftId: string) => {
    try {
      await shiftApi.updateShiftStatus(shiftId, {
        active: 'Активна',
        notActive: '',
      });
      setShifts((prevShifts) =>
        prevShifts.map((shift) =>
          shift.id === shiftId
            ? {
                ...shift,
                status: { ...shift.status, active: 'Активна', notActive: '' },
              }
            : shift,
        ),
      );
    } catch (err) {
      console.error('Ошибка при старте смены:', err);
      setError('Не удалось начать смену');
    }
  };

  const handleStopShift = async (shiftId: string) => {
    try {
      await shiftApi.updateShiftStatus(shiftId, {
        notActive: 'Не активна',
        active: '',
      });
      setShifts((prevShifts) =>
        prevShifts.map((shift) =>
          shift.id === shiftId
            ? {
                ...shift,
                status: {
                  ...shift.status,
                  notActive: 'Не активна',
                  active: '',
                },
              }
            : shift,
        ),
      );
    } catch (err) {
      console.error('Ошибка при остановке смены:', err);
      setError('Не удалось остановить смену');
    }
  };

  const handleAddSuccess = (newShift: Shift) => {
    setShifts((prev) => [...prev, newShift]);
    setIsAddModalOpen(false);
  };

  const handleEditSuccess = (updatedShift: Shift) => {
    setShifts((prev) =>
      prev.map((s) => (s.id === updatedShift.id ? updatedShift : s)),
    );
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div style={{ padding: '20px' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <h1>Управление сменами</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          Добавить смену
        </Button>
      </Stack>

      <ShiftTable
        shifts={shifts}
        onStartShift={handleStartShift}
        onStopShift={handleStopShift}
        onEditSuccess={handleEditSuccess}
      />

      <AddShiftModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={handleAddSuccess}
      />
    </div>
  );
};

export default ShiftsPage;
