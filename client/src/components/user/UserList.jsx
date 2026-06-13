import UserCard from "./UserCard";

const UserList = ({
  users,
  refreshUsers,
}) => {
  return (
    <div className="grid gap-4">
      {users?.map((user) => (
        <UserCard
          key={user._id}
          user={user}
          refreshUsers={refreshUsers}
        />
      ))}
    </div>
  );
};

export default UserList;