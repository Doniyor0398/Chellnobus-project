import { useState } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  TableRow,
  TableCell,
} from '@mui/material';
import ShiftTableHead from './ShiftTableHead';
import ShiftTableRow from './ShiftTableRow';
import { Shift } from '../types/ShiftTypes';
import DriverPagination from '../../driver/components/DriverTable/DriverPagination';

interface Props {
  data: Shift[];
  onDeleteSuccess: () => void;
  onEditSuccess: () => void;
}

const ShiftTable: React.FC<Props> = ({
  data,
  onDeleteSuccess,
  onEditSuccess,
}) => {
  const [page, setPage] = useState(1);
  const [editingShift, setEditingShift] = useState<Shift | null>(null);
  const itemsPerPage = 10;

  const currentData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const handleDeleteShift = async (shiftId: string) => {
    try {
      // await dispatch(deleteShiftThunk(shiftId)).unwrap(); // Замените на ваш thunk
      onDeleteSuccess();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="shifts table">
        <ShiftTableHead />
        <TableBody>
          {currentData.length > 0 ? (
            currentData.map((shift) => (
              <ShiftTableRow
                key={shift.id}
                shift={shift}
                onEdit={() => {}} // Замените на вашу функцию редактирования
                onDelete={handleDeleteShift}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9}>Нет данных</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="center" mt={2}>
        <DriverPagination
          dataLength={data.length}
          itemsPerPage={itemsPerPage}
          page={page}
          setPage={setPage}
        />
      </Box>
    </TableContainer>
  );
};

export default ShiftTable;
