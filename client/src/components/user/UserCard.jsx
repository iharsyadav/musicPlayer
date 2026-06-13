import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

const UserCard = ({
  user,
  refreshUsers,
}) => {
  return (
    <div className="border rounded-xl p-5 shadow">
      <h2 className="text-xl font-bold">
        {user.name}
      </h2>

      <p>{user.email}</p>

      <div className="flex gap-3 mt-4">
        <UpdateUser
          user={user}
          refreshUsers={refreshUsers}
        />

        <DeleteUser
          id={user._id}
          refreshUsers={refreshUsers}
        />
      </div>
    </div>
  );
};

export default UserCard;