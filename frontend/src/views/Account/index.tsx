import { Key } from 'react';
import { useQuery, gql } from "@apollo/client";
import UserList from 'components/Accounts/UserList';
import PageContainer from 'components/shared/Container';

const ALL_USERS_QUERY = gql`
  query GetAllUsers {
    allUsers {
      firstName
      lastName
      email
      phoneNumber
    }
  }
`;

const Account = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <PageContainer grid='row' fullWidth={true}>
      <UserList users={data?.allUsers} />
    </PageContainer>
  )
}

export default Account;
