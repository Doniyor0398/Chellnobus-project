import { TableHead, TableRow, TableCell } from '@mui/material';

const OrderTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell>Дата и время</TableCell>
      <TableCell>Статус</TableCell>
      <TableCell>Тип заказа</TableCell>
      <TableCell>ТС и водитель</TableCell>
      <TableCell>Откуда</TableCell>
      <TableCell>Куда</TableCell>
      <TableCell>Отправитель</TableCell>
      <TableCell>Получатель</TableCell>
      <TableCell>Груз</TableCell>
      <TableCell>Комментарий</TableCell>
    </TableRow>
  </TableHead>
);

export default OrderTableHead;
