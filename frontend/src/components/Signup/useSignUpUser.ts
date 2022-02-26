import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SIGNUP_USER = gql`
  mutation CreateUser($InputUser: InputUser) {
    createUser(InputUser: $InputUser) {
      email
      firstName
      lastName
      phoneNumber
      password
    }
  }
`;

interface IUser {
  email: String,
  firstName: String,
  lastName?: String,
  phoneNumber?: String,
  password: String,
}

const useSignUpUser = () => {
  const navigate = useNavigate();
  const [handleUserSignUp, { loading, error }] = useMutation(SIGNUP_USER);

  const handleFormSubmit = async (values: IUser) => {
    const { email, firstName, lastName, password, phoneNumber } = values;

    const { data } = await handleUserSignUp({ variables: {
      InputUser: {
        email,
        firstName,
        lastName,
        password,
        phoneNumber
      }
    }})

    if (data?.createUser?.email) {
      toast.success('Logged in successfully');
      navigate('/accounts');
    }
  };

  return {
    loading, error, handleFormSubmit,
  }
};

export default useSignUpUser;
