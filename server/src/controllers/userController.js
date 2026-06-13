import User from "../models/User.js";

// Create User
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Users
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get Single User
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// Update User
export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(user);
};

// Delete User
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json({ message: "User deleted" });
};
