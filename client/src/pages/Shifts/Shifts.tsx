import React, { useState } from 'react';
import { Shift } from '../../features/shifts/types/ShiftTypes';
import ShiftTable from '../../features/shifts/ShiftTable/ShiftTable';

const dummyData: Shift[] = [
  {
    id: '859',
    vehicle: 'Автобус 859',
    driver: 'Курбатский',
    startShift: '29.08.23 08:00',
    endShift: '29.08.23 21:30',
    startTerminal: 'Сколково-старт',
    endTerminal: 'Сколково-старт',
    zoneStart: 'MSK1 (Прокшино)',
    status: 'Активна',
    breaks: ['00:45 начало 29.08 в 11:14', '02:00 начало 29.08 в 14:45'],
  },
];

const Shifts: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>(dummyData);

  const handleDeleteSuccess = () => {
    //  обновление данных
  };

  const handleEditSuccess = () => {
    //  обновление данных
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Смены</h1>
      <ShiftTable
        data={shifts}
        onDeleteSuccess={handleDeleteSuccess}
        onEditSuccess={handleEditSuccess}
      />
    </div>
  );
};

export default Shifts;
