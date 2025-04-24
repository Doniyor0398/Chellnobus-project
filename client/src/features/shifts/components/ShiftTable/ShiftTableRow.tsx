import React, { useState } from 'react';
import { TableRow, TableCell, Button, Stack, Box } from '@mui/material';
import { Edit as EditIcon, PlayArrow, Stop } from '@mui/icons-material';
import EditShiftModal from '../EditShiftModal/EditShiftModal';
import { Shift } from '../../types/ShiftTypes';

interface ShiftTableRowProps {
  shift: Shift;
  onStatusChange: (shiftId: string, status: Partial<Shift['status']>) => void;
}

const ShiftTableRow: React.FC<ShiftTableRowProps> = ({
  shift,
  onStatusChange,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const getStatusInfo = () => {
    const status =
      typeof shift.status === 'string'
        ? { active: '', onBreak: '', notActive: shift.status }
        : shift.status;

    if (status.active) return { style: 'active', text: 'Активна', icon: '🟢' };
    if (status.onBreak)
      return { style: 'onBreak', text: 'На перерыве', icon: '🔵' };
    return { style: 'notActive', text: 'Не активна', icon: '🔴' };
  };

  const { style, text, icon } = getStatusInfo();

  const statusStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '12px',
    padding: '4px 8px',
    backgroundColor:
      style === 'active'
        ? 'rgba(0, 200, 83, 0.1)'
        : style === 'onBreak'
          ? 'rgba(33, 150, 243, 0.1)'
          : 'rgba(244, 67, 54, 0.1)',
    color:
      style === 'active'
        ? '#00C853'
        : style === 'onBreak'
          ? '#2196F3'
          : '#F44336',
  };

  return (
    <>
      <TableRow hover>
        <TableCell>{shift.vehicle}</TableCell>
        <TableCell>
          {typeof shift.driver === 'string'
            ? shift.driver
            : `${shift.driver.firstName} ${shift.driver.lastName}`}
        </TableCell>
        <TableCell>{shift.startShift}</TableCell>
        <TableCell>{shift.endShift}</TableCell>
        <TableCell>{shift.startTerminal}</TableCell>
        <TableCell>{shift.endTerminal}</TableCell>
        <TableCell>{shift.zoneStart}</TableCell>
        <TableCell>{shift.breaks?.join(', ') || '-'}</TableCell>
        <TableCell>
          <Box sx={statusStyle}>
            <span>{icon}</span>
            <span>{text}</span>
          </Box>
        </TableCell>
        <TableCell>
          <Stack direction="row" spacing={1}>
            {style !== 'active' && (
              <Button
                size="small"
                onClick={() =>
                  onStatusChange(shift.id, {
                    active: 'Активна',
                    onBreak: '',
                    notActive: '',
                  })
                }
                variant="contained"
                color="success"
                startIcon={<PlayArrow />}
              >
                Старт
              </Button>
            )}
            {style === 'active' && (
              <Button
                size="small"
                onClick={() =>
                  onStatusChange(shift.id, {
                    active: '',
                    onBreak: '',
                    notActive: 'Не активна',
                  })
                }
                variant="contained"
                color="error"
                startIcon={<Stop />}
              >
                Стоп
              </Button>
            )}
            <Button
              size="small"
              onClick={() => setIsEditModalOpen(true)}
              startIcon={<EditIcon />}
            >
              Ред.
            </Button>
          </Stack>
        </TableCell>
      </TableRow>

      <EditShiftModal
        shift={shift}
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSuccess={() => onStatusChange(shift.id, {})}
      />
    </>
  );
};

export default ShiftTableRow;
