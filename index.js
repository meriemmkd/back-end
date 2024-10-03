import express from "express";
import cors from "cors";
import bookRouter from "./routers/book.js";
import userRouter from "./routers/user.js";
import isAuth from "./isAuth.js";
import { connectDB } from "./config.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/book", isAuth, bookRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to MyBook API" });
});

connectDB();

app.listen(2000, () => {
  console.log("Your server in running on PORT 2000");
});
