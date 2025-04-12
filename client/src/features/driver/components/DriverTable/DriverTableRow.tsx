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
      <TableCell sx={{ width: '200px' }}>{driver.name}</TableCell>
      <TableCell sx={{ width: '150px' }}>
        {formatPhoneNumber(driver.phone)}
      </TableCell>
      <TableCell sx={{ width: '120px' }}>{driver.schedule}</TableCell>
      <TableCell sx={{ width: '100px' }}>{driver.shift}</TableCell>
      <TableCell sx={{ width: '150px' }}>
        {driver.vehicle.name || 'Не назначено'}
      </TableCell>
      <TableCell sx={{ width: '120px' }}>
        {driver.vehicle.licensePlate || 'Не назначено'}
      </TableCell>
      <TableCell sx={{ width: '150px' }}>{driver.breaks.join(', ')}</TableCell>
      <TableCell sx={{ width: '120px', display: 'flex' }}>
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
