import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgclothing.com.co%2F&psig=AOvVaw3G7FOsQPLtrILb4xulPiPY&ust=1697392500612000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiW5f2N9oEDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
