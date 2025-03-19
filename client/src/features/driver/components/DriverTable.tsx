import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Box,
} from '@mui/material';
import { Driver } from '../../../entities/driver/types/driverTypes';
import { useState } from 'react';

interface DriverTableProps {
  data: Driver[];
}

const DriverTable: React.FC<DriverTableProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 13;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const emptyRows = itemsPerPage - currentData.length;

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const themeForTableCell = { color: '#9E9E9E', fontWeight: 'bold' };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={themeForTableCell}>ФИО</TableCell>
              <TableCell sx={themeForTableCell}>Телефон</TableCell>
              <TableCell sx={themeForTableCell}>График</TableCell>
              <TableCell sx={themeForTableCell}>Смена</TableCell>
              <TableCell sx={themeForTableCell}>ТС</TableCell>
              <TableCell sx={themeForTableCell}>Госномер</TableCell>
              <TableCell sx={themeForTableCell}>Перерыв</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((driver) => (
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

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default DriverTable;
