import jwt from "jsonwebtoken";

export default function isAuth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.send({
      message: "You are authorized",
    });
  }
  try {
    const data = jwt.verify(token, "secret");
    console.log(data);
    next();
  } catch (error) {
    res.send({
      message: "you are not authorized",
    });
  }
}
