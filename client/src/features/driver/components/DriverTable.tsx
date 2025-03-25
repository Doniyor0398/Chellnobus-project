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
  Typography,
  Button,
} from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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

  const editButtonStyles = {
    border: '1px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'primary.main',
    borderRadius: '10px',
    mr: 1.5,
    p: 1,
    '&:hover': {
      backgroundColor: 'primary.light',
      color: 'white',
      borderColor: 'primary.dark',
    },
    '& svg': { fontSize: '20px' },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
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
            {currentData.length > 0 ? (
              currentData.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>{driver.schedule}</TableCell>
                  <TableCell>{driver.shift}</TableCell>
                  <TableCell>{driver.vehicle.name}</TableCell>
                  <TableCell>{driver.vehicle.licensePlate}</TableCell>
                  <TableCell>{driver.break.join(', ')}</TableCell>
                  <TableCell
                    sx={{
                      display: 'flex',
                      alignContent: 'center',
                    }}
                  >
                    <Button
                      sx={{
                        editButtonStyles,
                        minWidth: '20px',
                      }}
                    >
                      <EditOutlinedIcon />
                    </Button>
                    <Button
                      sx={{
                        editButtonStyles,
                        color: 'Red',
                      }}
                    >
                      <DeleteForeverOutlinedIcon
                        onClick={() => handleDelete(driver.id)}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center" sx={{ py: 41 }}>
                  <Typography variant="body1" color="textSecondary">
                    Нет данных
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {emptyRows > 0 && currentData.length > 0 && (
              <TableRow style={{ height: 67 * emptyRows }}>
                <TableCell colSpan={11} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          pt: 2,
          pb: 1,
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'background.paper',
          zIndex: 1,
        }}
      >
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
