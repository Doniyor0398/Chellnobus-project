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
  const [page, setPage] = useState(1);
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);
  const itemsPerPage = 10;

  const currentData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TableContainer
        component={Paper}
        sx={{ flex: '1 1 auto', overflow: 'auto' }}
      >
        <Table stickyHeader>
          <DriverTableHead />
          <TableBody>
            {currentData.length > 0 ? (
              currentData.map((driver) => (
                <DriverTableRow
                  key={driver.id}
                  driver={driver}
                  onEdit={setEditingDriver}
                  onDeleteSuccess={onDeleteSuccess}
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
