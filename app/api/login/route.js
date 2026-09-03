import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { identifier, password } = await request.json();

    if (!identifier || !password) {
      return NextResponse.json(
        {
          message: "ইমেইল/মোবাইল এবং পাসওয়ার্ড প্রদান করুন।",
        },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const searchValue = identifier.trim();

    const user = await User.findOne({
      $or: [
        { email: searchValue.toLowerCase() },
        { phone: searchValue },
      ],
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "এই ইমেইল বা মোবাইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি।",
        },
        { status: 404 }
      );
    }

    const passwordMatched = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatched) {
      return NextResponse.json(
        {
          message: "পাসওয়ার্ড সঠিক নয়।",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "লগইন সফল হয়েছে!",
        user: {
          id: user._id.toString(),
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          role: user.role,
          balance: user.balance,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error);

    return NextResponse.json(
      {
        message: "সার্ভারে সমস্যা হয়েছে।",
      },
      { status: 500 }
    );
  }
}
