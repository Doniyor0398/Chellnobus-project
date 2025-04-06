import { TableRow, TableCell, Button } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Driver } from '../../../../entities/driver/types/driverTypes';
import { formatPhoneNumber } from './utils';
import { editButtonStyles } from './driverTableStyles';

interface Props {
  driver: Driver;
  onEdit: (driver: Driver) => void;
  onDelete: (driverId: string) => void;
}

const DriverTableRow: React.FC<Props> = ({ driver, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell>{driver.name}</TableCell>
      <TableCell>{formatPhoneNumber(driver.phone)}</TableCell>
      <TableCell>{driver.schedule}</TableCell>
      <TableCell>{driver.shift}</TableCell>
      <TableCell>{driver.vehicle.name || 'Не назначено'}</TableCell>
      <TableCell>{driver.vehicle.licensePlate || 'Не назначено'}</TableCell>
      <TableCell>{driver.breaks.join(', ')}</TableCell>
      <TableCell sx={{ display: 'flex' }}>
        <Button onClick={() => onEdit(driver)} sx={editButtonStyles}>
          <EditOutlinedIcon />
        </Button>
        <Button
          onClick={() => onDelete(driver.id)}
          sx={{ ...editButtonStyles, color: 'red' }}
        >
          <DeleteForeverOutlinedIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default DriverTableRow;
