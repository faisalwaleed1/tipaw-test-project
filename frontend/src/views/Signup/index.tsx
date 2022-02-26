import SignupForm from 'components/Signup/SignUpForm';
import styled from '@emotion/styled';

const ColoredContainer = styled.div({
  background: '#5acee8',
  padding: '50px 0px'
});

const FormContainer = styled.div({
  margin: '30px auto',
  paddingLeft: '50px',
  paddingRight: '50px',
  width: 'min-content',
  maxWidth: '100%',
  position: 'relative'
})

const Signup = () => {
  return (
    <ColoredContainer>
      <FormContainer>
        <SignupForm />
      </FormContainer>
    </ColoredContainer>
  )
};

export default Signup;
