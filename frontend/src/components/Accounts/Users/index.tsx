import UserList from '../UserList';
import PageContainer from 'components/shared/Container';
import useGetAllUsers from './useGetAllUsers';

const Users = () => {
  const { loading, error, data } = useGetAllUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <PageContainer grid='row' fullWidth={true}>
      <UserList users={data?.allUsers} />
    </PageContainer>
  )
}

export default Users;
