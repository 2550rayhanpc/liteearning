"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Phone, Mail, Lock, Gift, ArrowRight,
  Eye, EyeOff, ArrowLeft, Loader2, CheckCircle2, AlertCircle, Sparkles,
} from "lucide-react";

const fieldVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.06, duration: 0.4, ease: "easeOut" },
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const passwordsFilled =
    formData.password.length > 0 && formData.confirmPassword.length > 0;
  const passwordsMatch = formData.password === formData.confirmPassword;
  const showMismatch = passwordsFilled && !passwordsMatch;

  // 🟢 handleRegister API লজিক হুবহু অপরিবর্তিত
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
        router.push("/login");
      } else {
        alert(data.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে!");
      }
    } catch (error) {
      console.error("Register Error:", error);
      alert("নেটওয়ার্ক বা সার্ভার সমস্যা: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputWrapClass = (name) =>
    `relative rounded-2xl transition-all duration-300 ${
      focusedField === name
        ? "ring-2 ring-indigo-400/70 shadow-lg shadow-indigo-500/20 bg-white/[0.07]"
        : "ring-1 ring-white/10 bg-white/[0.03] hover:ring-white/20"
    }`;

  return (
    <div className="min-h-screen bg-[#080b1a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* ✨ অ্যানিমেটেড ব্যাকগ্রাউন্ড গ্লো */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[26rem] h-[26rem] bg-indigo-600/25 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.55, 0.3], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute -bottom-32 -left-32 w-[26rem] h-[26rem] bg-fuchsia-600/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* সূক্ষ্ম গ্রিড প্যাটার্ন */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

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
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        {/* গ্রেডিয়েন্ট বর্ডার র‍্যাপার */}
        <div className="rounded-[1.75rem] p-[1.5px] bg-gradient-to-b from-white/25 via-white/5 to-transparent shadow-2xl shadow-black/40">
          <div className="bg-[#0d1124]/80 backdrop-blur-2xl rounded-[1.65rem] p-8 relative overflow-hidden">
            {/* উপরের গ্লোয়িং লাইন */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" />

            {/* Brand Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center mb-7"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-indigo-600/40 border border-white/20 mb-4 relative"
              >
                LE
                <Sparkles className="absolute -top-1.5 -right-1.5 w-4 h-4 text-amber-300 fill-amber-300" />
              </motion.div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                নতুন অ্যাকাউন্ট খুলুন
              </h2>
              <p className="text-slate-400 text-sm mt-1.5 text-center">
                আজই যুক্ত হন এবং সহজে আয় করা শুরু করুন
              </p>
            </motion.div>

            <form onSubmit={handleRegister} className="space-y-3.5">
              {/* Full Name */}
              <motion.div custom={0} variants={fieldVariant} initial="hidden" animate="visible">
                <label className="block text-slate-300 text-xs font-medium mb-1.5 ml-1">পূর্ণ নাম</label>
                <div className={inputWrapClass("fullName")}>
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="আপনার নাম লিখুন"
                    className="w-full pl-11 pr-4 py-3 bg-transparent rounded-2xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
                  />
                </div>
              </motion.div>

              {/* Mobile Number */}
              <motion.div custom={1} variants={fieldVariant} initial="hidden" animate="visible">
                <label className="block text-slate-300 text-xs font-medium mb-1.5 ml-1">মোবাইল নম্বর</label>
                <div className={inputWrapClass("phone")}>
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="017XXXXXXXX"
                    className="w-full pl-11 pr-4 py-3 bg-transparent rounded-2xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div custom={2} variants={fieldVariant} initial="hidden" animate="visible">
                <label className="block text-slate-300 text-xs font-medium mb-1.5 ml-1">ইমেইল ঠিকানা</label>
                <div className={inputWrapClass("email")}>
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="example@gmail.com"
                    className="w-full pl-11 pr-4 py-3 bg-transparent rounded-2xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div custom={3} variants={fieldVariant} initial="hidden" animate="visible">
                <label className="block text-slate-300 text-xs font-medium mb-1.5 ml-1">পাসওয়ার্ড</label>
                <div className={inputWrapClass("password")}>
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-3 bg-transparent rounded-2xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-400 transition-colors"
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
                <label className="block text-slate-300 text-xs font-medium mb-1.5 ml-1">কনফার্ম পাসওয়ার্ড</label>
                <div
                  className={`relative rounded-2xl transition-all duration-300 ${
                    showMismatch
                      ? "ring-2 ring-red-500/60 shadow-lg shadow-red-500/10 bg-red-500/[0.04]"
                      : focusedField === "confirmPassword"
                      ? "ring-2 ring-indigo-400/70 shadow-lg shadow-indigo-500/20 bg-white/[0.07]"
                      : "ring-1 ring-white/10 bg-white/[0.03] hover:ring-white/20"
                  }`}
                >
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("confirmPassword")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-3 bg-transparent rounded-2xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-400 transition-colors"
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

                <AnimatePresence>
                  {passwordsFilled && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex items-center gap-1.5 text-xs font-medium overflow-hidden ml-1 ${
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
                <label className="block text-slate-300 text-xs font-medium mb-1.5 ml-1">
                  রেফারেল কোড <span className="text-slate-500">(ঐচ্ছিক)</span>
                </label>
                <div className={inputWrapClass("referCode")}>
                  <Gift className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    name="referCode"
                    value={formData.referCode}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("referCode")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="রেফার কোড থাকলে দিন"
                    className="w-full pl-11 pr-4 py-3 bg-transparent rounded-2xl text-slate-100 focus:outline-none text-sm placeholder:text-slate-500"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                custom={6}
                variants={fieldVariant}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: isLoading || showMismatch ? 1 : 1.02 }}
                whileTap={{ scale: isLoading || showMismatch ? 1 : 0.98 }}
                type="submit"
                disabled={isLoading || showMismatch}
                className="w-full mt-5 py-3.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-semibold rounded-2xl hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/30 relative overflow-hidden group"
              >
                {/* হোভারে শাইন ইফেক্ট */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
              <Link href="/login" className="text-indigo-400 hover:text-indigo-300 hover:underline font-medium">
                লগইন করুন
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
