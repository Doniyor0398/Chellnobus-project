import React, { useState, useEffect } from 'react';
import ShiftTable from '../../features/shifts/ShiftTable/ShiftTable';
import { shiftApi } from '../../features/shifts/api/shiftApi';
import { Shift } from '../../features/shifts/types/ShiftTypes';
import { CircularProgress, Alert } from '@mui/material';

const ShiftsPage: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    // Здесь будет логика старта смены
    console.log('Начало смены:', shiftId);
    await loadShifts(); // Перезагружаем данные
  };

  const handleStopShift = async (shiftId: string) => {
    // Здесь будет логика остановки смены
    console.log('Окончание смены:', shiftId);
    await loadShifts(); // Перезагружаем данные
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Управление сменами</h1>
      <ShiftTable
        shifts={shifts}
        onStartShift={handleStartShift}
        onStopShift={handleStopShift}
      />
    </div>
  );
};

export default ShiftsPage;
