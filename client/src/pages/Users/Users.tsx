import UsersTable from '../../features/users/UsersTable';

const Users: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Пользователи</h1>
      <UsersTable />
    </div>
  );
};

export default Users;
