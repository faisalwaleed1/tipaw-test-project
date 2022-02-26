import { Formik } from "formik";
import { toast } from 'react-toastify';
import { initialSignUpValues } from 'constants/signup';
import { signUpSchema } from 'schemas/signUp';
import { TextInput, PhoneInput, PasswordInput } from 'components/shared/Input';
import { SubmitButton } from 'components/shared/Button';
import {
  FormContainer,
  ColoredContainer,
  FormWrapper,
  FieldsWrapper,
  Questionnaire,
  Heading3,
  Heading2,
  ButtonContainer,
  FormLink,
  Line,
} from './StyledElements';
import useSignUpUser from './useSignUpUser';

const SignupForm = () => {
  const { loading, error, handleFormSubmit } = useSignUpUser();

  const renderErrorTasters = () => {
    error?.graphQLErrors.forEach((error) => toast.error(error.message))
  }

  // if (loading) return <p>Loading...</p>;

  if (error) renderErrorTasters();

  return (
    <ColoredContainer>
      <FormContainer>
        <FormWrapper>
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
        </FormWrapper>
      </FormContainer>
    </ColoredContainer>
  )
};

export default SignupForm;
