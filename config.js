import mongoose from "mongoose";
export function connectDB() {
  mongoose
    .connect("mongodb+srv://DbAdmin:Db$admin@cluster0.tbp4c.mongodb.net/")
    .then(() => {
      console.log("MongoFb connected successfully");
    })
    .catch((error) => {
      console.log("Error in MongoDB connection" + error);
    });
}
