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
  Button,
} from '@mui/material';
import { Driver } from '../../../entities/driver/types/driverTypes';
import { useState } from 'react';
import { deleteDriverThunk } from '../../../entities/driver/thunks/deleteDriverThunk';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';

interface DriverTableProps {
  data: Driver[];
  onDeleteSuccess: () => void;
}

const DriverTable: React.FC<DriverTableProps> = ({ data, onDeleteSuccess }) => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const emptyRows = itemsPerPage - currentData.length;

  const handleDelete = async (driverId: string) => {
    try {
      await dispatch(deleteDriverThunk(driverId)).unwrap();
      onDeleteSuccess();
    } catch (error) {
      console.error('Ошибка при удалении водителя:', error);
    }
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const themeForTableCell = {
    color: '#9E9E9E',
    fontWeight: 'bold',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
              <TableCell sx={themeForTableCell}>Дейтвия</TableCell>
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
                <TableCell>
                  <Button
                    onClick={() => handleDelete(driver.id)}
                    color="error"
                    variant="contained"
                  >
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={0} />
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
