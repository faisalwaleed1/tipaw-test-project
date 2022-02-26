import styled from '@emotion/styled';
import { mq, theme } from 'styles/theme';
import { spacing } from 'styles/theme/units';

const ColoredContainer = styled.div({
  background: theme.color.themeColor,
  padding: `${spacing.xlarge} ${spacing.none}`,
  width: '100%',
});

const FormContainer = styled.div({
  margin: `${spacing.large} auto`,
  paddingLeft: spacing.xlarge,
  paddingRight: spacing.xlarge,
  width: 'min-content',
  maxWidth: '100%',
  position: 'relative'
});

const FormWrapper = styled.div({
  position: 'relative',
  borderRadius: '15px',
  background: 'white',
  boxShadow: theme.shadows[1],
  padding: spacing.large,
  margin: 'auto',
  maxWidth: '100%',
  [mq[0]]: {
    width: '330px',
  },
  [mq[1]]: {
    width: '420px',
  },
  [mq[2]]: {
    width: '520px',
  },
})

const Line = styled.div({
  width: '100%',
  height: '1px',
  background: theme.color.light.shade,
  margin: '20px 0'
})

const FormLink = styled.a({
  textDecoration: 'none',
  cursor: 'pointer',
  color: theme.color.themeColor,
  fontWeight: 700,
  marginLeft: '2px'
})

const ButtonContainer = styled.a({
  marginBottom: '15px',
  verticalAlign: 'top',
  width: 'calc( 100% - 0px )',
  display: 'block',
})

const Heading2 = styled.h2({
  color: theme.color.themeColor,
  fontWeight: '500',
  fontSize: '36px',
  marginBottom: '15px',
})

const Heading3 = styled.h3({
  fontSize: '18px',
  fontWeight: '600',
  marginTop: '10px',
  marginBottom: '15px',
  color: theme.color.dark.default,
})

const Questionnaire = styled.div({
  marginBottom: spacing.large,
  border: 0,
  verticalAlign: 'baseline',
  fontSize: '100%',
  color: theme.color.dark.default,
})

const FieldsWrapper = styled.div({
  marginTop: spacing.gutter
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

