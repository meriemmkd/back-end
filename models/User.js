import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
 
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
