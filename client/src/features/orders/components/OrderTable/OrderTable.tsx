import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import OrderTableHead from './OrderTableHead';
import OrderTableRow from './OrderTableRow';
import { Order } from '../../types/OrderTypes';

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 'calc(100vh - 200px)',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          height: 8,
          width: 8,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#bdbdbd',
          borderRadius: 4,
        },
      }}
    >
      <Table
        stickyHeader
        sx={{
          minWidth: '100%',
          tableLayout: 'fixed',
        }}
      >
        <OrderTableHead />
        <TableBody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <OrderTableRow key={order.id} order={order} />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={10} align="center">
                Нет данных о заказах
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
