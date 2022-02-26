import styled from '@emotion/styled';
import { mq, theme } from 'styles/theme';
import IUser from '../type';
import Avatar from 'assets/avatar.jpeg';

const CardContainer = styled.div({
  borderRadius: 6,
  color: theme.color.text,
  backgroundSize: 'cover',
  backgroundColor: '#5acee8',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [mq[0]]: {
    width: '90%',
  },
  [mq[1]]: {
    width: '47%',
  },
  [mq[2]]: {
    width: '31%',
  },
  height: 500,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  ':hover': {
    backgroundColor: theme.color.textSecondary,
  },
  cursor: 'pointer',
});

const CardContent = styled.div({
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  backgroundColor: 'white',
  height: '100%',
});


const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  color: theme.color.textSecondary,
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const CardImageContainer = styled.div({
  height: 300,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const CardImage = styled.img({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  filter: 'grayscale(60%)',
});

const UserItems = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '5rem',
  padding: '20px'
});

const UserItem = styled.div({
  textAlign: 'center',
  color: 'black',
  backgroundColor: theme.color.textSecondary,
  flex: 1,
});

const UserCard = (props:{ user: IUser}) => {
  const { firstName, lastName, email, phoneNumber } = props.user;

  return (
    <CardContainer>
      <CardContent>
        <CardImageContainer>
          <CardImage src={Avatar} alt='alt' />
        </CardImageContainer>
        <CardBody>
          <UserItems>
            <UserItem>Name: {`${firstName} ${lastName}`}</UserItem>
            <UserItem>Email: {email}</UserItem>
            <UserItem>Number: {phoneNumber}</UserItem>
          </UserItems>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default UserCard;
