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
});

const FormWrapper = styled.div({
  position: 'relative',
  borderRadius: '15px',
  background: 'white',
  boxShadow: '0 0 14px 0 rgb(0 0 0 / 15%)',
  padding: '30px',
  margin: 'auto',
  maxWidth: '100%',
  width: '540px',
})

const Line = styled.div({
  width: '100%',
  height: '1px',
  background: '#d7dae0',
  margin: '20px 0'
})

const FormLink = styled.a({
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#5acee8',
  fontEeight: 700,
  marginLeft: '2px'
})

const ButtonContainer = styled.a({
  marginBottom: '15px',
  verticalAlign: 'top',
  width: 'calc( 100% - 0px )',
  display: 'block',
})

const Heading2 = styled.h2({
  fontFamily: 'serif',
  color: '#5acee8',
  fontWeight: '500',
  fontSize: '36px',
  marginBottom: '15px',
})

const Heading3 = styled.h3({
  fontSize: '18px',
  fontWeight: '600',
  marginTop: '10px',
  marginBottom: '15px',
  color: '#707070',
})

const Questionnaire = styled.div({
  marginBottom: '30px',
  border: 0,
  verticalAlign: 'baseline',
  fontSize: '100%',
  color: '#707070',
})

const FieldsWrapper = styled.div({
  marginTop: '25px'
})

export {
  ColoredContainer,
  FormContainer,
  FormWrapper,
  FieldsWrapper,
  Questionnaire,
  Heading3,
  Heading2,
  ButtonContainer,
  FormLink,
  Line,
}

