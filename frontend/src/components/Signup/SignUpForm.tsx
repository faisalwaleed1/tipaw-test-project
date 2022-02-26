import { Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import { initialSignUpValues } from 'constants/signup';
import { signUpSchema } from 'schemas/signUp';
import { TextInput, PhoneInput, PasswordInput } from 'components/shared/Input';
import { SubmitButton } from 'components/shared/Button';
import {
  FormContainer,
  FieldsWrapper,
  Questionnaire,
  Heading3,
  Heading2,
  ButtonContainer,
  FormLink,
  Line,
} from './StyledComponents';

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
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  password: String,
}

const SignupForm = () => {
  const [handleUserSignUp, { data, loading, error }] = useMutation(SIGNUP_USER);
  const navigate = useNavigate();

  const renderErrorTasters = () => {
    error?.graphQLErrors.forEach((error) => toast.error(error.message))
  }

  const handleFormSubmit = async (values: { email: string; password: string; firstName: string; lastName: string; phoneNumber: string;}) => {
    const { email, firstName, lastName, password, phoneNumber } = values;

    await handleUserSignUp({ variables: {
      InputUser: {
        email,
        firstName,
        lastName,
        password,
        phoneNumber
      }
    }})

    if (data) {
      toast.success('Successfully logged in!');
      navigate('/accounts');
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) renderErrorTasters();

  return (
    <FormContainer>
      {renderErrorTasters()}
      <Formik
        initialValues={initialSignUpValues}
        onSubmit={handleFormSubmit}
        validationSchema={signUpSchema}
        validateOnChange
      >
        {(formikValues) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
          } = formikValues;
          return (
            <form onSubmit={handleSubmit}>

              <Heading2>Sign up</Heading2>

              <Heading3>Join Tipaw today. It's free !</Heading3>

              <Questionnaire>
                Are you a shelter, breeder, veterinarian or groomer?
                <FormLink href="/inscription-tipaw">Click here</FormLink>
              </Questionnaire>

              <Line />

              <FieldsWrapper>
                <TextInput
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  touch={touched.firstName}
                  isRequired={true}
                />

                <TextInput
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  touch={touched.lastName}
                  isRequired={true}
                />

                <TextInput
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  touch={touched.email}
                  isRequired={true}
                />

                <PhoneInput
                  label="Phone number"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={values.phoneNumber}
                  error={errors.phoneNumber}
                  touch={touched.phoneNumber}
                />

                <PasswordInput
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  touch={touched.password}
                  isRequired={true}
                />

                <PasswordInput
                  label="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  touch={touched.confirmPassword}
                  isRequired={true}
                />

                <ButtonContainer>
                  <SubmitButton label='Submit' />
                </ButtonContainer>
              </FieldsWrapper>
            </form>
          )
        }}
      </Formik>
    </FormContainer>
  )
};

export default SignupForm;
