import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { fullName, phone, email, password, confirmPassword, referCode } = await req.json();

    // ১. ফিল্ড চেকিং
    if (!fullName || !phone || !email || !password || !confirmPassword) {
      return NextResponse.json({ message: "সকল ঘর পূরণ করা আবশ্যক!" }, { status: 400 });
    }

    // ২. পাসওয়ার্ড ম্যাচ চেকিং
    if (password !== confirmPassword) {
      return NextResponse.json({ message: "পাসওয়ার্ড দুটি মেলেনি!" }, { status: 400 });
    }

    // ৩. ডাটাবেসে কানেক্ট
    await connectToDatabase();

    // ৪. ইমেইল বা ফোন নম্বর ইতিমধ্যে আছে কিনা চেক
    const existingUser = await User.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "এই ইমেইল বা মোবাইল নম্বরটি দিয়ে ইতিপূর্বে রেজিস্ট্রেশন করা হয়েছে!" },
        { status: 400 }
      );
    }

    // ৫. পাসওয়ার্ড এনক্রিপ্ট/হ্যাশ করা (সিকিউরিটির জন্য)
    const hashedPassword = await bcrypt.hash(password, 10);

    // ৬. নতুন ইউজার সেভ করা
    const newUser = new User({
      fullName,
      phone,
      email,
      password: hashedPassword,
      referCode,
      role: "user",
    });

    await newUser.save();

    return NextResponse.json(
      { message: "রেজিস্ট্রেশন সফল হয়েছে!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { message: "সার্ভারে সমস্যা হয়েছে, আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}
