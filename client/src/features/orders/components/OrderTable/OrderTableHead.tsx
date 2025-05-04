import { TableHead, TableRow, TableCell } from '@mui/material';

const OrderTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell
        sx={{
          width: '180px',
          position: 'sticky',
          left: 0,
          backgroundColor: 'white',
          zIndex: 2,
        }}
      >
        Дата и время
      </TableCell>
      <TableCell sx={{ width: '100px' }}>Статус</TableCell>
      <TableCell sx={{ width: '120px' }}>Тип</TableCell>
      <TableCell sx={{ width: '150px' }}>ТС/Водитель</TableCell>
      <TableCell sx={{ width: '120px' }}>Откуда</TableCell>
      <TableCell sx={{ width: '120px' }}>Куда</TableCell>
      <TableCell sx={{ width: '120px' }}>Отправитель</TableCell>
      <TableCell sx={{ width: '120px' }}>Получатель</TableCell>
      <TableCell sx={{ width: '150px' }}>Груз</TableCell>
      <TableCell sx={{ width: '200px' }}>Комментарий</TableCell>
    </TableRow>
  </TableHead>
);

export default OrderTableHead;
