import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { updateUser } from "../../services/userService";

const UpdateUser = ({
  user,
  refreshUsers,
}) => {
  const { fetchData } =
    useFetch(updateUser);

  const [editing, setEditing] =
    useState(false);

  const [name, setName] =
    useState(user.name);

  const handleUpdate =
    async () => {
      await fetchData(
        user._id,
        {
          name,
        }
      );

      refreshUsers();
      setEditing(false);
    };

  if (editing) {
    return (
      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="border p-2 rounded"
        />

        <button
          onClick={
            handleUpdate
          }
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Save
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() =>
        setEditing(true)
      }
      className="bg-yellow-500 text-white px-3 py-1 rounded"
    >
      Edit
    </button>
  );
};

export default UpdateUser;