import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "নাম দেয়া আবশ্যক"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "মোবাইল নম্বর দেয়া আবশ্যক"],
      unique: true, // একই নম্বরে ২টা একাউন্ট হবে না
      trim: true,
    },
    email: {
      type: String,
      required: [true, "ইমেইল দেয়া আবশ্যক"],
      unique: true, // একই ইমেইলে ২টা একাউন্ট হবে না
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "পাসওয়ার্ড দেয়া আবশ্যক"],
    },
    referCode: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user", // স্বয়ংক্রিয়ভাবে ইউজার রোল সেট হবে
    },
    balance: {
      type: Number,
      default: 0, // শুরুতে ব্যালেন্স ০ থাকবে
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
