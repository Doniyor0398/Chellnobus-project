import { TableRow, TableCell, Chip, Typography, Tooltip } from '@mui/material';
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

const formatDriver = (
  driver: string | { firstName?: string; lastName?: string } | undefined,
): string => {
  if (!driver) return 'Не указан';
  if (typeof driver === 'string') return driver;
  return (
    [driver.firstName, driver.lastName].filter(Boolean).join(' ') || 'Не указан'
  );
};

const compactCellStyle = {
  padding: '8px 12px',
  whiteSpace: 'nowrap',
  maxWidth: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const OrderTableRow: React.FC<Props> = ({ order }) => {
  return (
    <TableRow hover>
      <TableCell
        sx={{
          ...compactCellStyle,
          position: 'sticky',
          left: 0,
          backgroundColor: 'background.paper',
          zIndex: 1,
          minWidth: '180px',
        }}
      >
        <Typography variant="body2" sx={{ lineHeight: 1.3 }}>
          {order.date}
          <br />
          {order.time}
        </Typography>
      </TableCell>
      <TableCell sx={compactCellStyle}>
        <Chip
          label={order.status}
          color={statusColor(order.status)}
          size="small"
        />
      </TableCell>
      <TableCell sx={compactCellStyle}>{order.type}</TableCell>
      <TableCell sx={compactCellStyle}>
        <Typography variant="body2" sx={{ lineHeight: 1.3 }}>
          {order.vehicle}
          <br />
          {formatDriver(order.driver)}
        </Typography>
      </TableCell>
      <TableCell sx={compactCellStyle}>{order.from}</TableCell>
      <TableCell sx={compactCellStyle}>{order.to}</TableCell>
      <TableCell sx={compactCellStyle}>{order.sender}</TableCell>
      <TableCell sx={compactCellStyle}>{order.receiver}</TableCell>
      <TableCell sx={compactCellStyle}>
        <Tooltip title={order.cargo || 'Нет данных'}>
          <Typography sx={{ ...compactCellStyle, display: 'inline-block' }}>
            {order.cargo || '-'}
          </Typography>
        </Tooltip>
      </TableCell>
      <TableCell sx={compactCellStyle}>
        <Tooltip title={order.comment || 'Нет комментария'}>
          <Typography sx={{ ...compactCellStyle, display: 'inline-block' }}>
            {order.comment || '-'}
          </Typography>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default OrderTableRow;
