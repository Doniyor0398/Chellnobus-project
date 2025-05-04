import { TableRow, TableCell, Chip, Typography } from '@mui/material';
import { Order } from '../../types/OrderTypes';

interface Props {
  order: Order;
}

const statusColor = (status: string) => {
  switch (status) {
    case 'Работает':
      return 'primary';
    case 'Выполнен':
      return 'success';
    default:
      return 'default';
  }
};

/**
 * Форматирует данные водителя в строку
 */
const formatDriver = (
  driver:
    | string
    | { firstName?: string; lastName?: string; phone?: string }
    | undefined,
): string => {
  if (!driver) return 'Не указан';
  if (typeof driver === 'string') return driver;
  return (
    [driver.firstName, driver.lastName].filter(Boolean).join(' ') || 'Не указан'
  );
};

const OrderTableRow: React.FC<Props> = ({ order }) => {
  return (
    <TableRow hover>
      <TableCell>
        <Typography variant="body2">
          {order.date}, {order.time}
        </Typography>
      </TableCell>
      <TableCell>
        <Chip
          label={order.status}
          color={statusColor(order.status)}
          size="small"
        />
      </TableCell>
      <TableCell>
        <Typography variant="body2">{order.type}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" component="div">
          {order.vehicle}
          <br />
          {formatDriver(order.driver)}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{order.from}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{order.to}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{order.sender}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{order.receiver}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{order.cargo}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{order.comment}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default OrderTableRow;
