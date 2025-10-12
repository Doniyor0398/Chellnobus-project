import {
  TableRow,
  TableCell,
  Button,
  Stack,
  Box,
  IconButton,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { Shift, ShiftStatus } from '../../types/ShiftTypes';
import { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditShiftModal from '../EditShiftModal/EditShiftModal';

const statusStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '12px',
  padding: '4px 8px',
};

const activeStyle = {
  ...statusStyles,
  backgroundColor: 'rgba(0, 200, 83, 0.1)',
  color: '#00C853',
};

const onBreakStyle = {
  ...statusStyles,
  backgroundColor: 'rgba(33, 150, 243, 0.1)',
  color: '#2196F3',
};

const notActiveStyle = {
  ...statusStyles,
  backgroundColor: 'rgba(244, 67, 54, 0.1)',
  color: '#F44336',
  width: '118px',
};

interface Props {
  shift: Shift;
  onStart: (shiftId: string) => void;
  onStop: (shiftId: string) => void;
  onEditSuccess: (updatedShift: Shift) => void;
}

const ShiftTableRow: React.FC<Props> = ({
  shift,
  onStart,
  onStop,
  onEditSuccess,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const getCurrentStatus = (): 'active' | 'onBreak' | 'notActive' => {
    if (typeof shift.status === 'string') {
      const statusStr = (shift.status as string).toLowerCase();
      if (statusStr.includes('актив')) return 'active';
      if (statusStr.includes('перерыв')) return 'onBreak';
      return 'notActive';
    }

    const statusObj = shift.status as ShiftStatus;

    if (statusObj.active?.includes('Активна')) return 'active';
    if (statusObj.onBreak?.includes('На перерыве')) return 'onBreak';
    return 'notActive';
  };

  const currentStatus = getCurrentStatus();
  const isActive = currentStatus === 'active';
  const isOnBreak = currentStatus === 'onBreak';

  const driverName =
    typeof shift.driver === 'string'
      ? shift.driver
      : `${shift.driver?.firstName || ''} ${shift.driver?.lastName || ''}`.trim();

  const statusStyle = isActive
    ? activeStyle
    : isOnBreak
      ? onBreakStyle
      : notActiveStyle;

  const statusDisplay = isActive
    ? { text: 'Активна', icon: '🟢' }
    : isOnBreak
      ? { text: 'На перерыве', icon: '☕️' }
      : { text: 'Не активна', icon: '🔴' };

  return (
    <>
      <TableRow hover key={shift.id}>
        <TableCell>{shift.vehicle}</TableCell>
        <TableCell>{driverName}</TableCell>
        <TableCell>{shift.startShift}</TableCell>
        <TableCell>{shift.endShift}</TableCell>
        <TableCell>{shift.startTerminal}</TableCell>
        <TableCell>{shift.endTerminal}</TableCell>
        <TableCell>{shift.zoneStart}</TableCell>
        <TableCell>
          {Array.isArray(shift.breaks) ? shift.breaks.join(', ') : shift.breaks}
        </TableCell>
        <TableCell>
          <Box sx={statusStyle}>
            <span>{statusDisplay.icon}</span>
            <span>{statusDisplay.text}</span>
          </Box>
        </TableCell>
        <TableCell sx={{ display: 'flex' }}>
          <Stack direction="row" spacing={1}>
            {!isActive && (
              <Button
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  onStart(shift.id);
                }}
                variant="contained"
                color="success"
                startIcon={<PlayArrowIcon />}
                sx={{ textTransform: 'none' }}
              >
                Старт
              </Button>
            )}
            {isActive && (
              <Button
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  onStop(shift.id);
                }}
                variant="contained"
                color="error"
                startIcon={<StopIcon />}
                sx={{ textTransform: 'none' }}
              >
                Стоп
              </Button>
            )}
          </Stack>
          <IconButton
            size="small"
            onClick={() => setIsEditModalOpen(true)}
            color="primary"
          >
            <EditOutlinedIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      <EditShiftModal
        shift={shift}
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSuccess={onEditSuccess}
      />
    </>
  );
};

export default ShiftTableRow;
