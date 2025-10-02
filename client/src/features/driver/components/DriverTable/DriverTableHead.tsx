import { TableHead, TableRow, TableCell } from '@mui/material';
import { themeForTableCell } from './driverTableStyles';

const DriverTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell sx={{ ...themeForTableCell, width: '200px' }}>ФИО</TableCell>
      <TableCell sx={{ ...themeForTableCell, width: '150px' }}>
        Телефон
      </TableCell>
      <TableCell sx={{ ...themeForTableCell, width: '120px' }}>
        График
      </TableCell>
      <TableCell sx={{ ...themeForTableCell, width: '100px' }}>Смены</TableCell>
      <TableCell sx={{ ...themeForTableCell, width: '150px' }}>ТС</TableCell>
      <TableCell sx={{ ...themeForTableCell, width: '120px' }}>
        Госномер
      </TableCell>
      <TableCell sx={{ ...themeForTableCell, width: '150px' }}>
        Перерыв
      </TableCell>
      <TableCell sx={{ ...themeForTableCell, width: '120px' }}>
        Действия
      </TableCell>
    </TableRow>
  </TableHead>
);

export default DriverTableHead;
