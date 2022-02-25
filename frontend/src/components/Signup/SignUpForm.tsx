 /** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import { initialSignUpValues } from 'constants/signup';
import { signUpSchema } from 'schemas/signUp';
import { TextInput, PhoneInput, PasswordInput } from 'components/shared/Input';

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
  const [handleUserSignUp, { data, loading, error }] = useMutation(SIGNUP_USER);
  const navigate = useNavigate();

  const renderErrorTasters = () => {
    if (error) {
      error.graphQLErrors.forEach((error) => {
        toast.error(error.message)
      })
    }
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
    <div css={css({
        position: 'relative',
        borderRadius: '15px',
        background: 'white',
        boxShadow: '0 0 14px 0 rgb(0 0 0 / 15%)',
        padding: '30px',
        margin: 'auto',
        maxWidth: '100%',
        width: '540px',
      })}
    >
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
            <div>
              <form onSubmit={handleSubmit}>
                <h2 css={css({
                    fontFamily: 'serif',
                    color: '#5acee8',
                    fontWeight: '500',
                    fontSize: '36px',
                    marginBottom: '15px',
                  })}
                >
                  Sign up
                </h2>

                <h3 css={css({
                    fontSize: '18px',
                    fontWeight: '600',
                    marginTop: '10px',
                    marginBottom: '15px'
                  })}
                >
                  Join Tipaw today. It's free !
                </h3>

                <div css={css({
                    marginBottom: '30px'
                  })}
                >
                  Are you a shelter, breeder, veterinarian or groomer?
                  <a href="/inscription-tipaw" >Click here</a>
                </div>

                <div css={css({
                    width: '100%',
                    height: '1px',
                    background: '#d7dae0',
                    margin: '20px 0'
                  })}
                ></div>

                <div css={css({
                    marginTop: '25px'
                  })}
                >
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

                  <div>
                    <div css={css({
                        marginBottom: '15px',
                        verticalAlign: 'top',
                        width: 'calc( 100% - 0px )',
                        display: 'block',
                      })}
                    >
                      <button type='submit' data-testid='submit' css={css({
                          whiteSpace: 'nowrap',
                          boxSizing: 'border-box',
                          borderRadius: '15px',
                          height: '40px',
                          lineHeight: 'unset',
                          padding: '0px 24px',
                          boxShadow: 'none',
                          width: '100%',
                          color: 'white',
                          backgroundColor: '#ffcc01',
                          border: 'none',
                          borderColor: 'white',
                          textAlign: 'center',
                          fontWeight: '700',
                          fontSize: '14px',
                          letterSpacing: '0',
                          cursor: 'pointer',
                          position: 'relative',
                          alignItems: 'center',
                        })}
                      >
                        Submit
                      </button>
                    </div>
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
