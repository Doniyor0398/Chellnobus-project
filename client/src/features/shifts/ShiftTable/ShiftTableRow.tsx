import { TableRow, TableCell, Button } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Shift } from '../types/ShiftTypes';
import { editButtonStyles } from '../../driver/components/DriverTable/driverTableStyles';

interface Props {
  shift: Shift;
  onEdit: (shift: Shift) => void;
  onDelete: (shiftId: string) => void;
}

const ShiftTableRow: React.FC<Props> = ({ shift, onEdit, onDelete }) => {
  return (
    <TableRow key={shift.id}>
      <TableCell>{shift.vehicle}</TableCell>
      <TableCell>{shift.driver}</TableCell>
      <TableCell>{shift.startShift}</TableCell>
      <TableCell>{shift.endShift}</TableCell>
      <TableCell>{shift.startTerminal}</TableCell>
      <TableCell>{shift.endTerminal}</TableCell>
      <TableCell>{shift.zoneStart}</TableCell>
      <TableCell>{shift.breaks.join(', ')}</TableCell>
      <TableCell>{shift.status}</TableCell>
      <TableCell>
        <Button onClick={() => onEdit(shift)} sx={editButtonStyles}>
          <EditOutlinedIcon />
        </Button>
        <Button
          onClick={() => onDelete(shift.id)}
          sx={{ ...editButtonStyles, color: 'red' }}
        >
          <DeleteForeverOutlinedIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ShiftTableRow;
