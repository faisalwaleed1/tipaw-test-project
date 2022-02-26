import IUser from '../type';
import Avatar from 'assets/avatar.jpeg';
import {
  CardContainer,
  CardBody,
  CardImageContainer,
  CardImage,
  UserItem,
  UserName
} from '../StyledElements';

const UserCard = (props:{ user: IUser}) => {
  const { firstName, lastName, email, phoneNumber } = props.user;

  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={Avatar} alt='alt' />
      </CardImageContainer>
      <CardBody>
        <UserName>{`${firstName} ${lastName}`}</UserName>
        <UserItem>{email}</UserItem>
        <UserItem>{phoneNumber}</UserItem>
      </CardBody>
    </CardContainer>
  );
};

export default UserCard;
