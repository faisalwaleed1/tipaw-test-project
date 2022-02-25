import { Key } from 'react';
import { useQuery, gql } from "@apollo/client";

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

  return data.allUsers.map((user: { firstName: String ; lastName: String ; email: String; phoneNumber: Number }, i: Key) => (
    <ul key={i}>
      <li>{user.firstName}</li>
      <li>{user.lastName}</li>
      <li>{user.email}</li>
      <li>{user.phoneNumber}</li>
    </ul>
  ));
}

export default Account;
