"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, Lock, CheckCircle2, Gift, UserPlus, LogIn, Code, Send } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referCode: "",
  });

  const handleRegister = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    // ডেমো লোডিং ও রিডাইরেকশন
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 2000);
  };

  const handleNavigation = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(path);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-[#dcfce7]/70 font-sans select-none overflow-hidden p-4 py-8">
      
      {/* 🌟 নতুন অনন্য লোডিং অ্যানিমেশন */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#043e2e]/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            {/* ৩D পালসিং গ্লো রিং অ্যানিমেশন */}
            <div className="relative w-24 h-24 flex items-center justify-center mb-6">
              <motion.div
                animate={{ scale: [0.8, 1.2, 0.8], rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-amber-400 shadow-lg shadow-amber-400/30"
              />
              <motion.div
                animate={{ scale: [1.1, 0.9, 1.1], rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute w-16 h-16 rounded-full border-4 border-emerald-400 border-t-transparent"
              />
              <motion.div 
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-md font-black text-emerald-950 text-xs"
              >
                LE
              </motion.div>
            </div>

            {/* লোড হচ্ছে... টেক্সট অ্যানিমেশন */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="text-amber-300 text-lg font-extrabold tracking-widest flex items-center gap-1 drop-shadow-md"
            >
              <span>রেজিস্ট্রেশন প্রক্রিয়াকরণ হচ্ছে . . .</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND GRAPHICS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 -right-20 w-96 h-96 bg-teal-200/30 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* ⚪ মূল রেজিস্ট্রেশন কার্ড (ছবি অনুকরণে) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-[32px] p-6 sm:p-8 border border-white shadow-2xl shadow-emerald-900/10 text-center relative z-10 my-auto"
      >
        {/* লোগো সেকশন */}
        <div className="flex justify-center mb-2">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="w-16 h-16 rounded-full bg-gradient-to-b from-emerald-800 to-emerald-950 text-white font-black text-xl flex items-center justify-center shadow-lg border-4 border-amber-400/90 relative"
          >
            <span className="tracking-tighter">LE</span>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
          </motion.div>
        </div>

        {/* হেডার টাইটেল */}
        <h1 className="text-2xl font-black text-emerald-950 tracking-wide mb-0.5">
          ফ্রি রেজিস্ট্রেশন
        </h1>
        <p className="text-xs font-bold text-emerald-700 tracking-wider uppercase mb-1">
          LITE EARNING প্রিমিয়াম
        </p>
        <div className="w-10 h-1 bg-amber-400 rounded-full mx-auto mb-5" />

        {/* ফর্ম ফিল্ডস */}
        <form onSubmit={handleRegister} className="space-y-3.5 text-left">
          
          {/* নাম */}
          <div>
            <label className="text-xs font-bold text-emerald-900 flex items-center gap-1 mb-1">
              <User className="w-3.5 h-3.5 text-emerald-600" /> নাম
            </label>
            <input
              type="text"
              required
              placeholder="পুরো নাম"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-[#f0fdf4] border border-emerald-100 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* মোবাইল */}
          <div>
            <label className="text-xs font-bold text-emerald-900 flex items-center gap-1 mb-1">
              <Phone className="w-3.5 h-3.5 text-emerald-600" /> মোবাইল
            </label>
            <input
              type="tel"
              required
              placeholder="01XXXXXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#f0fdf4] border border-emerald-100 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* ইমেইল */}
          <div>
            <label className="text-xs font-bold text-emerald-900 flex items-center gap-1 mb-1">
              <Mail className="w-3.5 h-3.5 text-emerald-600" /> ইমেইল
            </label>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#f0fdf4] border border-emerald-100 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড (গ্রিড লেআউট) */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="text-xs font-bold text-emerald-900 flex items-center gap-1 mb-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" /> পাসওয়ার্ড
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-[#f0fdf4] border border-emerald-100 rounded-2xl py-3 px-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-emerald-900 flex items-center gap-1 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> কনফার্ম
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full bg-[#f0fdf4] border border-emerald-100 rounded-2xl py-3 px-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* রেফারেল কোড */}
          <div>
            <label className="text-xs font-bold text-amber-600 flex items-center gap-1 mb-1">
              <Gift className="w-3.5 h-3.5 text-amber-500" /> রেফারেল কোড
            </label>
            <input
              type="text"
              placeholder="রেফার কোড (ঐচ্ছিক)"
              value={formData.referCode}
              onChange={(e) => setFormData({ ...formData, referCode: e.target.value })}
              className="w-full bg-[#f0fdf4] border border-emerald-100 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* রেজিস্ট্রেশন সাবমিট বাটন */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
          >
            <UserPlus className="w-5 h-5" />
            <span>রেজিস্ট্রেশন</span>
            <span className="text-lg">→</span>
          </motion.button>
        </form>

        {/* ইতিমধ্যে একাউন্ট আছে? লগইন করুন */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold">
          <span className="text-slate-600">ইতিমধ্যেই একাউন্ট আছে?</span>
          <button
            onClick={() => handleNavigation("/login")}
            className="text-amber-600 font-extrabold hover:underline cursor-pointer"
          >
            লগইন করুন
          </button>
        </div>

        {/* DEVELOPED BY RAYHAN_ISLAM */}
        <div className="mt-5 flex items-center justify-between pt-3 text-xs font-bold border-t border-dashed border-slate-200">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Code className="w-4 h-4 text-emerald-600" />
            <span>Developed by</span>
            <span className="text-emerald-700 font-extrabold tracking-wider">RAYHAN_ISLAM</span>
          </div>

          <motion.a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0088cc] text-white text-xs font-bold rounded-full shadow-md transition"
          >
            <Send className="w-3.5 h-3.5 fill-current" />
            <span>Connect</span>
          </motion.a>
        </div>

      </motion.div>

      {/* FOOTER */}
      <div className="absolute bottom-2 text-center text-[11px] font-semibold text-emerald-900/60 tracking-wider">
        © 2026 LITE EARNING · সর্বস্বত্ব সংরক্ষিত
      </div>

    </div>
  );
}
