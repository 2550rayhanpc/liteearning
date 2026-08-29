"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Phone, Mail, Lock, Gift, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referCode: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 ব্যাকএন্ড API-এর সাথে সংযুক্ত handleRegister ফাংশন
  const handleRegister = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "রেজিস্ট্রেশন সফল হয়েছে!");
        setIsLoading(false);
        router.push("/login"); // রেজিস্ট্রেশন সফল হলে লগইন পেজে নিয়ে যাবে
      } else {
        alert(data.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("নেটওয়ার্ক সমস্যা! আবার চেষ্টা করুন।");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            নতুন অ্যাকাউন্ট খুলুন
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            আজই যুক্ত হন এবং সহজে আয় করা শুরু করুন
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">পূর্ণ নাম</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="আপনার নাম লিখুন"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">মোবাইল নম্বর</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="017XXXXXXXX"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">ইমেইল ঠিকানা</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">পাসওয়ার্ড</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">কনফার্ম পাসওয়ার্ড</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Referral Code */}
          <div>
            <label className="block text-slate-300 text-sm mb-1">
              রেফারেল কোড <span className="text-slate-500">(ঐচ্ছিক)</span>
            </label>
            <div className="relative">
              <Gift className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="referCode"
                value={formData.referCode}
                onChange={handleChange}
                placeholder="রেফার কোড থাকলে দিন"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:opacity-90 transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{isLoading ? "প্রসেসিং হচ্ছে..." : "রেজিস্ট্রেশন করুন"}</span>
            {!isLoading && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
          <Link href="/login" className="text-blue-400 hover:underline font-medium">
            লগইন করুন
          </Link>
        </div>
      </div>
    </div>
  );
}
