export default function isAdmin(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === "yes") {
      next(); // give access
    } else {
      res.send({ message: "You don't have access, Admin only" });
    }
  }
  