import styled from '@emotion/styled';
import { mq, theme } from 'styles/theme';
import { spacing } from 'styles/theme/units';

const CardContainer = styled.div({
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  backgroundSize: 'cover',
  boxShadow: theme.shadows[2],
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [mq[0]]: {
    width: '90%',
    height: 330,
  },
  [mq[1]]: {
    width: '47%',
    height: 400,
  },
  [mq[2]]: {
    width: '31%',
    height: 455,
  },
  margin: 10,
  cursor: 'pointer',
});

const CardBody = styled.div({
  justifyContent: 'space-around',
  margin: spacing.medium,
  width: '100%',
});

const CardImageContainer = styled.div({
  [mq[0]]: {
    height: 250,
  },
  [mq[1]]: {
    height: 300,
  },
  [mq[2]]: {
    height: 350,
  },
  borderRadius: 6,
});

const CardImage = styled.img({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

const UserName = styled.div({
  fontWeight: 'bold',
  color: theme.color.text,
});

const UserItem = styled.p({
  margin: '0',
  color: theme.color.text,
});

export {
  CardContainer,
  CardBody,
  CardImageContainer,
  CardImage,
  UserItem,
  UserName
}
