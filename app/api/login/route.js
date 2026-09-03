import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // ১. ফিল্ড চেকিং
    if (!email || !password) {
      return NextResponse.json(
        { message: "ইমেইল এবং পাসওয়ার্ড প্রদান করুন!" },
        { status: 400 }
      );
    }

    // ২. ডাটাবেসে কানেক্ট
    await connectToDatabase();

    // ৩. ইউজার খুঁজে দেখা
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি!" },
        { status: 404 }
      );
    }

    // ৪. পাসওয়ার্ড ভেরিফাই করা
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "পাসওয়ার্ড সঠিক নয়!" },
        { status: 401 }
      );
    }

    // ৫. সফল লগইন রেসপন্স
    return NextResponse.json(
      {
        message: "লগইন সফল হয়েছে!",
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          role: user.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "সার্ভার এরর: " + error.message },
      { status: 500 }
    );
  }
}
