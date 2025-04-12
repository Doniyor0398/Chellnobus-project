import { useState } from 'react';
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch';
import { deleteDriverThunk } from '../../../../entities/driver/thunks/deleteDriverThunk';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  TableRow,
  TableCell,
} from '@mui/material';
import DriverTableHead from './DriverTableHead';
import DriverTableRow from './DriverTableRow';
import DriverPagination from './DriverPagination';
import { Driver } from '../../../../entities/driver/types/driverTypes';
import { EditDriverModal } from '../EditDriver/EditDriverModal';

interface Props {
  data: Driver[];
  onDeleteSuccess: () => void;
  onEditSuccess: () => void;
}

const DriverTable: React.FC<Props> = ({
  data,
  onDeleteSuccess,
  onEditSuccess,
}) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);
  const itemsPerPage = 10;

  const currentData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const handleDeleteDriver = async (driverId: string) => {
    try {
      await dispatch(deleteDriverThunk(driverId)).unwrap();
      onDeleteSuccess();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Paper
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <TableContainer
          sx={{
            flex: '1 1 auto',
            overflow: 'auto',
            width: '100%',
            maxHeight: 'calc(100vh - 200px)', // Установите нужную высоту
          }}
        >
          <Table
            stickyHeader
            sx={{
              minWidth: '100%',
              tableLayout: 'fixed',
            }}
          >
            <DriverTableHead />
            <TableBody>
              {currentData.length > 0 ? (
                currentData.map((driver) => (
                  <DriverTableRow
                    key={driver.id}
                    driver={driver}
                    onEdit={setEditingDriver}
                    onDelete={handleDeleteDriver}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    Нет данных
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <DriverPagination
        dataLength={data.length}
        itemsPerPage={itemsPerPage}
        page={page}
        setPage={setPage}
      />
      {editingDriver && (
        <EditDriverModal
          driver={editingDriver as Driver}
          onClose={() => setEditingDriver(null)}
          onSuccess={onEditSuccess}
        />
      )}
    </Box>
  );
};

export default DriverTable;
