import { TableHead, TableRow, TableCell } from '@mui/material';
import { themeForTableCell } from '../../../driver/components/DriverTable/driverTableStyles';

const ShiftTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell sx={themeForTableCell}>ТС</TableCell>
      <TableCell sx={themeForTableCell}>Водитель</TableCell>
      <TableCell sx={themeForTableCell}>Начало смены</TableCell>
      <TableCell sx={themeForTableCell}>Окончание смены</TableCell>
      <TableCell sx={themeForTableCell}>Терминал начала</TableCell>
      <TableCell sx={themeForTableCell}>Терминал окончания</TableCell>
      <TableCell sx={themeForTableCell}>Зона старта</TableCell>
      <TableCell sx={themeForTableCell}>Перерывы</TableCell>
      <TableCell sx={themeForTableCell}>Статус</TableCell>
      <TableCell sx={themeForTableCell}>Действия</TableCell>
    </TableRow>
  </TableHead>
);

export default ShiftTableHead;
