import { useEffect } from "react";

import useFetch from "../../hooks/useFetch";
import { getUsers } from "../../services/userService";

import CreateUser from "./CreateUser";
import UserList from "./UserList";

const ManageUser = () => {
  const {
    data: users,
    loading,
    error,
    fetchData: loadUsers,
  } = useFetch(getUsers);

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading)
    return <h1>Loading...</h1>;

  if (error)
    return <h1>{error}</h1>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Manage Users
      </h1>

      <CreateUser
        refreshUsers={loadUsers}
      />

      <div className="mt-8">
        <UserList
          users={users}
          refreshUsers={loadUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;