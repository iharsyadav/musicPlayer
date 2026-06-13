import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { createUser } from "../../services/userService";

const CreateUser = ({ refreshUsers }) => {
  const { fetchData, loading } =
    useFetch(createUser);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetchData(formData);

    refreshUsers();

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-xl p-5 shadow space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading
          ? "Creating..."
          : "Create User"}
      </button>
    </form>
  );
};

export default CreateUser;