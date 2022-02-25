import { Formik } from "formik";
import { toast } from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import { initialSignUpValues } from 'constants/signup';
import { signUpSchema } from 'schemas/signUp';

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

const SignupForm = () => {
  const [signupUserFunc, { data, loading, error }] = useMutation(SIGNUP_USER);

  const handleFormSubmit = async (values: { email: string; password: string; firstName: any; lastName: any; }) => {
    signupUserFunc({ variables: {
      InputUser: {
        email: "ben+2@example.com",
        firstName: "Ben",
        lastName: "Pratt",
        password: "ben12345"
      }
    }})
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({error.message}</p>;

  return (
    <div>
      <Formik
        initialValues={initialSignUpValues}
        onSubmit={handleFormSubmit}
        validationSchema={signUpSchema}
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
            <div>
              <form onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                <div>
                <div><label>First Name</label></div>
                  <input name='firstName' placeholder='First Name' required />
                </div>

                <div>
                  <div><label>Last Name</label></div>
                  <input name='lastName' placeholder='Last Name' required />
                </div>

                <div>
                  <div><label>Email</label></div>
                  <input name='email' placeholder='Email' required />
                </div>

                <div>
                  <div><label>Password</label></div>
                  <input name='password' placeholder='Password' required />
                </div>

                <div>
                  <div><label>Confirm Password</label></div>
                  <input name='confirmPassword' placeholder='Confirm Password' required />
                </div>

                <div>
                  <div>
                    <button type='submit' data-testid='submit'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )
        }}
      </Formik>
    </div>
  )
};

export default SignupForm;
