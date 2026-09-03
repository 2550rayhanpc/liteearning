"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, LogOut, Wallet, Gift, CheckCircle } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // লোকাল স্টোরেজ থেকে ইউজারের তথ্য আনা
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login"); // লগইন করা না থাকলে ব্যাক করিয়ে দেবে
    } else {
      setUserData(JSON.parse(user));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        লোড হচ্ছে...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8">
      {/* Top Navbar */}
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Lite Earning
          </h1>
          <p className="text-sm text-slate-400">স্বাগতম, {userData.fullName}!</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-xl border border-red-500/20 text-sm font-medium transition"
        >
          <LogOut className="w-4 h-4" />
          <span>লগআউট</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-8 space-y-6">
        {/* User Balance & Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 text-sm">বর্তমান ব্যালেন্স</span>
              <Wallet className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">৳ 0.00</h2>
            <p className="text-xs text-slate-500 mt-2">* কাজ সম্পন্ন করে আয় বাড়ান</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 text-sm">প্রোফাইল স্ট্যাটাস</span>
              <User className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-semibold capitalize text-green-400">অ্যাকাউন্ট ভেরিফাইড</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">ইমেইল: {userData.email}</p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl">
          <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
            <Gift className="w-5 h-5 text-yellow-400" />
            <span>দৈনিক কাজ</span>
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            সহজ কিছু কাজ সম্পন্ন করে প্রতিদিন আয় করুন।
          </p>
          <button className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 font-medium text-sm rounded-xl hover:opacity-90 transition">
            কাজ শুরু করুন
          </button>
        </div>
      </div>
    </div>
  );
}
