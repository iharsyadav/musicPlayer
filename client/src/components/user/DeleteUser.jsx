import useFetch from "../../hooks/useFetch";
import { deleteUser } from "../../services/userService";

const DeleteUser = ({
  id,
  refreshUsers,
}) => {
  const { fetchData } =
    useFetch(deleteUser);

  const handleDelete =
    async () => {
      await fetchData(id);

      refreshUsers();
    };

  return (
    <button
      onClick={
        handleDelete
      }
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteUser;