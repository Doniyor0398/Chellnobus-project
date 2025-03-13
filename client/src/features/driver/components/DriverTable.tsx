import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Driver } from '../../../entities/driver/types/driverTypes';

interface DriverTableProps {
  data: Driver[];
}

const DriverTable: React.FC<DriverTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ФИО</TableCell>
            <TableCell>Телефон</TableCell>
            <TableCell>График</TableCell>
            <TableCell>Смена</TableCell>
            <TableCell>ТС</TableCell>
            <TableCell>Госномер</TableCell>
            <TableCell>Перерыв</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>{driver.name}</TableCell>
              <TableCell>{driver.phone}</TableCell>
              <TableCell>{driver.schedule}</TableCell>
              <TableCell>{driver.shift}</TableCell>
              <TableCell>{driver.vehicle.name}</TableCell>
              <TableCell>{driver.vehicle.licensePlate}</TableCell>
              <TableCell>{driver.break.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DriverTable;
