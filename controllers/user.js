import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

let users = [];

export async function getUsers(req, res) {
  const users = await User.find();
  res.send(users);
}
export async function getUserById(req, res) {
  const users = await User.findOne({ userName: req.params.id });
  if (users) {
    res.send(users);
  } else {
    res.send({ message: "User not found" });
  }
}
export async function createUser(req, res) {
  try {
    const { password } = req.body;
    console.log(password);

    const hashedPassword = await bcryptjs.hash(password, 12);
    console.log(hashedPassword);

    const userCreation = await User.create({
      userName: req.body.userName,
      password: hashedPassword,
    });
    res.send({
      message: "User created successfully",
      User: userCreation,
    });
  } catch (error) {
    res.send({
      message: "Error while creating the user",
    });
  }
}
export async function updateUserById(req, res) {
  try {
    const updateUser = await User.findOneAndUpdate(req.params.id, req.body);
    res.send({
      message: "User updated",
    });
  } catch (error) {
    res.send({
      message: "User doesn't exist ",
    });
  }
}

export async function deleteUser(req, res) {
  await User.deleteMany();
  res.send({
    msg: "All users deleted",
  });
}

export async function deleteUserById(req, res) {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.send({
      message: "User " + deleteUser.userName + " deleted successfully",
    });
  } catch (error) {
    res.send({
      message: "User doesn't exist, search again!",
    });
  }
}

export async function login(req, res) {
  const { firstName, password } = req.body;

  const user = await User.findOne({ firstName: firstName });
  if (!user) {
    res.send({ message: "Invalid first name" });
  }
  const isValid = await bcryptjs.compare(password, user.password);
  if (isValid) {
    const token = jwt.sign({ userId: user._id }, "secret", { expiresIn: "1d" });
    res.send({
      message: "Logged in successfully",
      token: token,
    });
  } else {
    res.send({ message: "Invalid password" });
  }
}
