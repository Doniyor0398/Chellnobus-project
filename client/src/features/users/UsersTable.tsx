import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material';
import { fetchAllUsers } from './api/userAuthApi';
import { Timestamp } from 'firebase/firestore';

interface User {
  id: string;
  uid?: string;
  name: string;
  email: string;
  role: string;
  createdAt?: Timestamp | Date;
}

const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchAllUsers();
        setUsers(usersData as User[]);
      } catch (err) {
        setError('Ошибка загрузки пользователей');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const formatDate = (date: Timestamp | Date | undefined): string => {
    if (!date) return 'Не указано';
    if (date instanceof Timestamp) {
      return date.toDate().toLocaleString();
    }
    return date.toLocaleString();
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (users.length === 0)
    return <Alert severity="info">Пользователи не найдены</Alert>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Роль</TableCell>
            <TableCell>Дата создания</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name || 'Не указано'}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role || 'user'}</TableCell>
              <TableCell>{formatDate(user.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
