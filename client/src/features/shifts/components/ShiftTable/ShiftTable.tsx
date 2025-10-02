import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import ShiftTableHead from './ShiftTableHead';
import ShiftTableRow from './ShiftTableRow';
import { Shift } from '../../types/ShiftTypes';

interface ShiftTableProps {
  shifts: Shift[];
  onStartShift: (shiftId: string) => void;
  onStopShift: (shiftId: string) => void;
  onEditSuccess: (updatedShift: Shift) => void;
}

const ShiftTable: React.FC<ShiftTableProps> = ({
  shifts,
  onStartShift,
  onStopShift,
  onEditSuccess,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <ShiftTableHead />
        <TableBody>
          {shifts.length > 0 ? (
            shifts.map((shift) => (
              <ShiftTableRow
                key={shift.id}
                shift={shift}
                onStart={onStartShift}
                onStop={onStopShift}
                onEditSuccess={onEditSuccess}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={10} align="center">
                Нет данных о Сменых
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShiftTable;
