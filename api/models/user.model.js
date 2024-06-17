import mongoose from "mongoose";
const UserSchema = mongoose.Schema({}, { timestamps: true });
export const User = mongoose.model("User", UserSchema);
