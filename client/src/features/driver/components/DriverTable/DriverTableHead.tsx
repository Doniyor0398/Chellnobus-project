import { TableHead, TableRow, TableCell } from '@mui/material';
import { themeForTableCell } from './driverTableStyles';

const DriverTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell sx={themeForTableCell}>ФИО</TableCell>
      <TableCell sx={themeForTableCell}>Телефон</TableCell>
      <TableCell sx={themeForTableCell}>График</TableCell>
      <TableCell sx={themeForTableCell}>Смена</TableCell>
      <TableCell sx={themeForTableCell}>ТС</TableCell>
      <TableCell sx={themeForTableCell}>Госномер</TableCell>
      <TableCell sx={themeForTableCell}>Перерыв</TableCell>
      <TableCell sx={themeForTableCell}>Действия</TableCell>
    </TableRow>
  </TableHead>
);

export default DriverTableHead;
