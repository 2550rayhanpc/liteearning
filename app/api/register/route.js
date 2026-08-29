import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { fullName, phone, email, password, referCode } = await req.json();

    if (!fullName || !phone || !email || !password) {
      return NextResponse.json(
        { message: "সকল প্রয়োজনীয় তথ্য প্রদান করুন।" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "এই ইমেইল দিয়ে ইতোমধ্যে অ্যাকাউন্ট তৈরি করা হয়েছে।" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      phone,
      email,
      password: hashedPassword,
      referCode: referCode || null,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "রেজিস্ট্রেশন সফল হয়েছে!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { message: "সার্ভার এরর: " + error.message },
      { status: 500 }
    );
  }
}
