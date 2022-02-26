import UserCard from '../UserCard';
import IUser from '../type';

const UsersList = (props: { users: [IUser] }) => {
  return (
    <>
      {props?.users?.map((user: IUser) => (<UserCard user={user}/>))}
    </>
  )
}

export default UsersList;
