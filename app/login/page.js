"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!identifier || !password) {
      alert("ইমেইল/মোবাইল এবং পাসওয়ার্ড দিন।");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: identifier.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "লগইন ব্যর্থ হয়েছে।");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      alert(data.message || "লগইন সফল হয়েছে!");

      router.push("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      alert("নেটওয়ার্ক বা সার্ভার সমস্যা হয়েছে।");
    } finally {
      setIsLoading(false);
    }
  };

  const isEmail = identifier.includes("@");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Glass Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-emerald-950/40 backdrop-blur-xl sm:p-8">
          {/* Brand */}
          <div className="mb-8 text-center">
            <motion.div
              initial={{ scale: 0.7, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 shadow-lg shadow-emerald-500/30"
            >
              <div className="absolute inset-1 rounded-[1.35rem] bg-slate-950/80" />
              <span className="relative text-2xl font-black tracking-tighter text-white">
                LE
              </span>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                className="absolute -inset-1 rounded-3xl border border-emerald-300/30"
              />
            </motion.div>

            <div className="mb-2 flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />

              <h1 className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-3xl font-black tracking-tight text-transparent">
                LITE EARNING
              </h1>

              <Sparkles className="h-4 w-4 text-cyan-300" />
            </div>

            <p className="text-sm text-slate-400">
              আপনার একাউন্টে নিরাপদে প্রবেশ করুন
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email / Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                ইমেইল বা মোবাইল নম্বর
              </label>

              <div className="group relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-emerald-400">
                  {isEmail ? (
                    <Mail className="h-5 w-5" />
                  ) : (
                    <Phone className="h-5 w-5" />
                  )}
                </div>

                <input
                  type="text"
                  value={identifier}
                  onChange={(event) => setIdentifier(event.target.value)}
                  placeholder="example@gmail.com অথবা 017XXXXXXXX"
                  required
                  autoComplete="username"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/60 py-3.5 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-white/20 focus:border-emerald-400/70 focus:bg-slate-900/80 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                পাসওয়ার্ড
              </label>

              <div className="group relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-emerald-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/60 py-3.5 pl-12 pr-12 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-white/20 focus:border-emerald-400/70 focus:bg-slate-900/80 focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={
                    showPassword
                      ? "পাসওয়ার্ড লুকান"
                      : "পাসওয়ার্ড দেখান"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-white/10 hover:text-emerald-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  <span>লগইন হচ্ছে...</span>
                </>
              ) : (
                <>
                  <span>লগইন করুন</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>আপনার তথ্য নিরাপদে সংরক্ষিত</span>
          </div>

          {/* Register Link */}
          <div className="mt-6 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
            নতুন ব্যবহারকারী?{" "}
            <Link
              href="/register"
              className="font-bold text-emerald-400 transition hover:text-cyan-300 hover:underline"
            >
              নতুন একাউন্ট তৈরি করুন
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          © 2026 LITE EARNING · সর্বস্বত্ব সংরক্ষিত
        </p>
      </motion.section>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-50 bg-emerald-950/10"
          />
        )}
      </AnimatePresence>
    </main>
  );
}
