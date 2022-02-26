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

const useGetAllUsers = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);

  return {
    loading,
    error,
    data
  }
}

export default useGetAllUsers;
