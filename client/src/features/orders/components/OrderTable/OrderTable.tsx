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
      <TableContainer component={Paper}>
        <Table>
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