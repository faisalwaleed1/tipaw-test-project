import IUser from '../type';
import Avatar from 'assets/avatar.jpeg';
import {
  CardContainer,
  CardContent,
  CardBody,
  CardImageContainer,
  CardImage,
  UserItems,
  UserItem
} from '../StylesComponents';

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
