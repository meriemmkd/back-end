import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
  deleteUserById,
  login,
} from "../controllers/user.js";
const userRouter = express.Router();
export default userRouter;

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);
userRouter.post("/login", login);

userRouter.put("/:id", updateUserById);

userRouter.delete("/", deleteUser);
userRouter.delete("/:id", deleteUserById);
