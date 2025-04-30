import { TableRow, TableCell, Button, Stack, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { Shift } from '../../types/ShiftTypes';

// Стили для статусов
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
};

interface Props {
  shift: Shift;
  onStart: (shiftId: string) => void;
  onStop: (shiftId: string) => void;
}

const ShiftTableRow: React.FC<Props> = ({ shift, onStart, onStop }) => {
  // Определяем текущий статус
  const getCurrentStatus = () => {
    if (typeof shift.status === 'object') {
      if (shift.status.active === 'Активна') return 'active';
      if (shift.status.onBreak === 'На перерыве') return 'onBreak';
      return 'notActive';
    }
    return shift.status.includes('Актив')
      ? 'active'
      : shift.status.includes('перерыв')
        ? 'onBreak'
        : 'notActive';
  };

  const currentStatus = getCurrentStatus();
  const isActive = currentStatus === 'active';
  const isOnBreak = currentStatus === 'onBreak';

  // Форматирование имени водителя
  const driverName =
    typeof shift.driver === 'string'
      ? shift.driver
      : `${shift.driver?.firstName || ''} ${shift.driver?.lastName || ''}`.trim();

  // Стиль для статуса
  const statusStyle = isActive
    ? activeStyle
    : isOnBreak
      ? onBreakStyle
      : notActiveStyle;

  // Текст и иконка статуса
  const statusDisplay = isActive
    ? { text: 'Активна', icon: '🟢' }
    : isOnBreak
      ? { text: 'На перерыве', icon: '🔵' }
      : { text: 'Не активна', icon: '🔴' };

  return (
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
      <TableCell>
        <Stack direction="row" spacing={1}>
          {!isActive && (
            <Button
              size="small"
              onClick={() => onStart(shift.id)}
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
              onClick={() => onStop(shift.id)}
              variant="contained"
              color="error"
              startIcon={<StopIcon />}
              sx={{ textTransform: 'none' }}
            >
              Стоп
            </Button>
          )}
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default ShiftTableRow;
