import React, { useState, useEffect } from 'react';
import { CircularProgress, Alert, Button, Box } from '@mui/material';
import ShiftTable from '../../features/shifts/components/ShiftTable/ShiftTable';
import AddShiftModal from '../../features/shifts/components/AddShiftModal/AddShiftModal';
import { shiftApi } from '../../features/shifts/api/shiftApi';
import { Shift } from '../../features/shifts/types/ShiftTypes';

const ShiftsPage: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchShifts = async () => {
    try {
      setLoading(true);
      const data = await shiftApi.fetchShifts();
      setShifts(data);
    } catch (err) {
      setError('Ошибка загрузки смен');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShifts();
  }, []);

  const handleStatusChange = async (
    shiftId: string,
    status: Partial<Shift['status']>,
  ) => {
    try {
      await shiftApi.updateShiftStatus(shiftId, status);
      fetchShifts(); // Обновляем список после изменения
    } catch (err) {
      setError('Ошибка обновления статуса');
      console.error(err);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <h1>Управление сменами</h1>
        <Button variant="contained" onClick={() => setIsAddModalOpen(true)}>
          Добавить смену
        </Button>
      </Box>

      <ShiftTable shifts={shifts} onStatusChange={handleStatusChange} />

      <AddShiftModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={fetchShifts}
      />
    </Box>
  );
};

export default ShiftsPage;
