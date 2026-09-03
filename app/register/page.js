"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Phone, Mail, Lock, Gift, ArrowRight,
  Eye, EyeOff, ArrowLeft, Loader2, CheckCircle2, AlertCircle,
} from "lucide-react";

// ইনপুট মাইক্রো-ইন্টার‌্যাকশনের জন্য ভ্যারিয়েন্ট
const fieldVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

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

  // 🟢 নতুন: পাসওয়ার্ড দেখা/লুকানোর স্টেট
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 🟢 নতুন: ফোকাসড ফিল্ড ট্র্যাক করা (গ্লো ইফেক্টের জন্য)
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 রিয়েল-টাইম পাসওয়ার্ড ম্যাচ চেক (ক্লায়েন্ট-সাইড)
  const passwordsFilled =
    formData.password.length > 0 && formData.confirmPassword.length > 0;
  const passwordsMatch = formData.password === formData.confirmPassword;
  const showMismatch = passwordsFilled && !passwordsMatch;

  // 🟢 আপডেট করা handleRegister ফাংশন (লজিক অপরিবর্তিত)
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
        router.push("/login"); // রেজিস্ট্রেশন সফল হলে লগইন পেজে নিয়ে যাবে
      } else {
        // ব্যাকএন্ড থেকে আসা নির্দিষ্ট এরর মেসেজ দেখাবে
        alert(data.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে!");
      }
    } catch (error) {
      console.error("Register Error:", error);
      alert("নেটওয়ার্ক বা সার্ভার সমস্যা: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ইনপুট wrapper হেল্পার — গ্লো বর্ডার সহ
  const inputWrapClass = (name) =>
    `relative rounded-xl transition-all duration-300 ${
      focusedField === name
        ? "ring-2 ring-blue-500/60 shadow-lg shadow-blue-500/10"
        : "ring-1 ring-slate-700/60"
    }`;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Back to Home */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="absolute top-5 left-5 z-20"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>হোমে ফিরুন</span>
        </Link>
      </motion.div>

      {/* Registration Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl relative z-10 overflow-hidden"
      >
        {/* কার্ডের উপরের গ্লোয়িং লাইন */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

        {/* Brand Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-600/30 border border-white/10 mb-4">
            LE
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            নতুন অ্যাকাউন্ট খুলুন
          </h2>
          <p className="text-slate-400 text-sm mt-1.5 text-center">
            আজই যুক্ত হন এবং সহজে আয় করা শুরু করুন
          </p>
        </motion.div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name */}
          <motion.div custom={0} variants={fieldVariant} initial="hidden" animate="visible">
            <label className="block text-slate-300 text-sm mb-1.5">পূর্ণ নাম</label>
            <div className={inputWrapClass("fullName")}>
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                onFocus={() => setFocusedField("fullName")}
                onBlur={() => setFocusedField(null)}
                placeholder="আপনার নাম লিখুন"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 rounded-xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
              />
            </div>
          </motion.div>

          {/* Mobile Number */}
          <motion.div custom={1} variants={fieldVariant} initial="hidden" animate="visible">
            <label className="block text-slate-300 text-sm mb-1.5">মোবাইল নম্বর</label>
            <div className={inputWrapClass("phone")}>
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder="017XXXXXXXX"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 rounded-xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div custom={2} variants={fieldVariant} initial="hidden" animate="visible">
            <label className="block text-slate-300 text-sm mb-1.5">ইমেইল ঠিকানা</label>
            <div className={inputWrapClass("email")}>
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="example@gmail.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 rounded-xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
              />
            </div>
          </motion.div>

          {/* Password */}
          <motion.div custom={3} variants={fieldVariant} initial="hidden" animate="visible">
            <label className="block text-slate-300 text-sm mb-1.5">পাসওয়ার্ড</label>
            <div className={inputWrapClass("password")}>
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                placeholder="••••••••"
                className="w-full pl-10 pr-11 py-2.5 bg-slate-950/60 rounded-xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Toggle password visibility"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={showPassword ? "eye" : "eyeoff"}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </motion.div>

          {/* Confirm Password */}
          <motion.div custom={4} variants={fieldVariant} initial="hidden" animate="visible">
            <label className="block text-slate-300 text-sm mb-1.5">কনফার্ম পাসওয়ার্ড</label>
            <div
              className={`relative rounded-xl transition-all duration-300 ${
                showMismatch
                  ? "ring-2 ring-red-500/60 shadow-lg shadow-red-500/10"
                  : focusedField === "confirmPassword"
                  ? "ring-2 ring-blue-500/60 shadow-lg shadow-blue-500/10"
                  : "ring-1 ring-slate-700/60"
              }`}
            >
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => setFocusedField("confirmPassword")}
                onBlur={() => setFocusedField(null)}
                placeholder="••••••••"
                className="w-full pl-10 pr-11 py-2.5 bg-slate-950/60 rounded-xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Toggle confirm password visibility"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={showConfirmPassword ? "eye" : "eyeoff"}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            {/* রিয়েল-টাইম পাসওয়ার্ড ম্যাচ ফিডব্যাক */}
            <AnimatePresence>
              {passwordsFilled && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-center gap-1.5 text-xs font-medium overflow-hidden ${
                    passwordsMatch ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {passwordsMatch ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>পাসওয়ার্ড মিলে গেছে</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>পাসওয়ার্ড মিলছে না</span>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Referral Code */}
          <motion.div custom={5} variants={fieldVariant} initial="hidden" animate="visible">
            <label className="block text-slate-300 text-sm mb-1.5">
              রেফারেল কোড <span className="text-slate-500">(ঐচ্ছিক)</span>
            </label>
            <div className={inputWrapClass("referCode")}>
              <Gift className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                name="referCode"
                value={formData.referCode}
                onChange={handleChange}
                onFocus={() => setFocusedField("referCode")}
                onBlur={() => setFocusedField(null)}
                placeholder="রেফার কোড থাকলে দিন"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 rounded-xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            custom={6}
            variants={fieldVariant}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            type="submit"
            disabled={isLoading || showMismatch}
            className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>প্রসেসিং হচ্ছে...</span>
              </>
            ) : (
              <>
                <span>রেজিস্ট্রেশন করুন</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-6 text-center text-sm text-slate-400"
        >
          ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
          <Link href="/login" className="text-blue-400 hover:underline font-medium">
            লগইন করুন
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
