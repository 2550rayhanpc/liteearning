"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, Eye, EyeOff, LogIn, UserPlus, Send, Code } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ identifier: "", password: "" });

  const handleAction = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    // ২.৫ সেকেন্ড পর লোডিং শেষ হবে (ডেমো হিসেবে)
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-[#dcfce7]/70 font-sans select-none overflow-hidden p-4">
      
      {/* 🟢১. লোডিং স্ক্রিন অ্যানিমেশন (প্রদান করা ছবি ১ অনুকরণে) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#065f46] flex flex-col items-center justify-center"
          >
            {/* ডাবল ডাবল রিং স্পাইরাল অ্যানিমেশন */}
            <div className="relative w-16 h-16 flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute w-14 h-14 border-4 border-emerald-400 border-t-amber-400 border-r-transparent rounded-full shadow-lg"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute w-9 h-9 border-4 border-amber-400 border-b-emerald-300 border-l-transparent rounded-full"
              />
            </div>

            {/* লোড হচ্ছে... টেক্সট অ্যানিমেশন */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-white text-lg font-bold tracking-widest flex items-center gap-1 drop-shadow-md"
            >
              <span>লো ড</span>
              <span className="ml-1">হ চ্ছে . . .</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎨 BACKGROUND GRAPHICS / CIRCLES */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 -right-20 w-96 h-96 bg-teal-200/30 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-200/40 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* ⚪ ২. মূল লগইন কার্ড (প্রদান করা ছবি ২ অনুকরণে) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-[32px] p-6 sm:p-8 border border-white shadow-2xl shadow-emerald-900/10 text-center relative z-10"
      >
        {/* লোগো সেকশন */}
        <div className="flex justify-center mb-3">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="w-20 h-20 rounded-full bg-gradient-to-b from-emerald-800 to-emerald-950 text-white font-black text-2xl flex items-center justify-center shadow-lg border-4 border-amber-400/90 relative"
          >
            <span className="tracking-tighter">LE</span>
            {/* ছোট রিং ডেকোরেশন */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
          </motion.div>
        </div>

        {/* টাইটেল ও হেডার */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-wide mb-0.5">
          LITE EARNING
        </h1>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="h-[1px] w-8 bg-amber-400/60" />
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">প্রিমিয়াম</span>
          <span className="h-[1px] w-8 bg-amber-400/60" />
        </div>
        <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-6">
          স্বাগতম! আপনার একাউন্টে প্রবেশ করুন
        </p>

        {/* ফর্ম */}
        <form onSubmit={handleAction} className="space-y-4">
          
          {/* ইনপুট: মোবাইল বা ইমেইল */}
          <div className="relative flex items-center">
            <User className="absolute left-4 w-5 h-5 text-slate-400" />
            <input
              type="text"
              required
              placeholder="মোবাইল বা ইমেইল"
              value={formData.identifier}
              onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
              className="w-full bg-[#f0fdf4] border border-emerald-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* ইনপুট: পাসওয়ার্ড */}
          <div className="relative flex items-center">
            <Lock className="absolute left-4 w-5 h-5 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="পাসওয়ার্ড"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-[#f0fdf4] border border-emerald-100 rounded-2xl py-3.5 pl-12 pr-11 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-slate-400 hover:text-slate-600 transition p-1"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* পাসওয়ার্ড ভুলে গেছেন লিঙ্ক */}
          <div className="text-right">
            <button
              type="button"
              onClick={handleAction}
              className="text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline transition"
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </button>
          </div>

          {/* প্রবেশ করুন (Submit Button) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogIn className="w-5 h-5" />
            <span>প্রবেশ করুন</span>
            <span className="text-lg">→</span>
          </motion.button>
        </form>

        {/* নতুন? রেজিস্ট্রেশন করুন */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold">
          <span className="text-slate-600">নতুন?</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAction}
            className="text-amber-600 font-extrabold flex items-center gap-1 hover:underline cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>রেজিস্ট্রেশন করুন</span>
          </motion.button>
        </div>

        {/* Developed By & Telegram Connect Footer */}
        <div className="mt-6 flex items-center justify-between pt-3 text-xs font-bold border-t border-dashed border-slate-200">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Code className="w-4 h-4 text-emerald-600" />
            <span>Developed by</span>
            <span className="text-emerald-700 font-extrabold tracking-wider">NEXUSLAB</span>
          </div>

          <motion.a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-3 py-1.5 bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs font-bold rounded-xl shadow-md transition"
          >
            <Send className="w-3.5 h-3.5 fill-current" />
            <span>Connect</span>
          </motion.a>
        </div>

      </motion.div>

      {/* 📜 কপিরাইট ফুটলাইন */}
      <div className="absolute bottom-4 text-center text-[11px] font-semibold text-emerald-900/60 tracking-wider">
        © 2026 LITE EARNING · সর্বস্বত্ব সংরক্ষিত
      </div>

    </div>
  );
}
