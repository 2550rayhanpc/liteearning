"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, LogOut, Wallet, Gift, CheckCircle, Menu, X, Maximize2, Minimize2,
  Bell, Copy, Check, Facebook, Youtube, Send, MessageCircle,
  Smartphone, Car, Keyboard, HelpCircle, AppWindow, RefreshCw,
  Briefcase, FileText, Store, Mail, Instagram, Target, Crown,
  DollarSign, Cpu, Coins, Share2, Globe, ShieldAlert, Home,
  ShieldCheck, Network, ChevronRight, Zap,
} from "lucide-react";

// 🟢 অ্যানিমেশন
const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// 🟢 সার্ভিস লিস্ট
const services = [
  { name: "মোবাইল রিচার্জ", icon: Smartphone, color: "from-emerald-500 to-teal-600" },
  { name: "ড্রাইভ অফার", icon: Car, color: "from-amber-500 to-orange-600" },
  { name: "টাইপিং জব", icon: Keyboard, color: "from-emerald-600 to-green-700" },
  { name: "কুইজ জব", icon: HelpCircle, color: "from-amber-600 to-yellow-600" },
  { name: "অ্যাপস ভিজিট", icon: AppWindow, color: "from-teal-500 to-emerald-600" },
  { name: "রিসেলিং", icon: RefreshCw, color: "from-emerald-500 to-cyan-600" },
  { name: "মাইক্রো জব", icon: Briefcase, color: "from-amber-500 to-amber-700" },
  { name: "জব পোস্ট", icon: FileText, color: "from-green-600 to-emerald-700" },
  { name: "ভেন্ডরশীপ", icon: Store, color: "from-teal-600 to-emerald-700" },
  { name: "জিমেইল মার্কেটিং", icon: Mail, color: "from-emerald-600 to-teal-700" },
  { name: "ফেসবুক মার্কেটিং", icon: Facebook, color: "from-blue-500 to-blue-600" },
  { name: "ইনস্টাগ্রাম কুকিজ", icon: Instagram, color: "from-pink-500 to-amber-500" },
  { name: "টার্গেট বোনাস", icon: Target, color: "from-amber-600 to-red-500" },
  { name: "লিডারশিপ", icon: Crown, color: "from-amber-500 to-yellow-600" },
  { name: "সেলারি", icon: DollarSign, color: "from-emerald-500 to-green-600" },
  { name: "ইনস্টাগ্রাম মার্কেটিং", icon: Instagram, color: "from-fuchsia-500 to-amber-500" },
  { name: "ডিজিটাল সার্ভিস", icon: Cpu, color: "from-emerald-600 to-teal-600" },
  { name: "লিন্ডা কয়েন", icon: Coins, color: "from-amber-400 to-amber-600" },
  { name: "সোশ্যাল সার্ভিস", icon: Share2, color: "from-emerald-500 to-green-600" },
  { name: "ওয়েব সার্ভিস", icon: Globe, color: "from-teal-500 to-emerald-600" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, color: "from-blue-500 to-blue-600", bg: "hover:bg-blue-500/10", text: "text-blue-600", url: "#" },
  { name: "YouTube", icon: Youtube, color: "from-red-500 to-red-600", bg: "hover:bg-red-500/10", text: "text-red-600", url: "#" },
  { name: "Telegram", icon: Send, color: "from-sky-500 to-sky-600", bg: "hover:bg-sky-500/10", text: "text-sky-600", url: "#" },
  { name: "WhatsApp", icon: MessageCircle, color: "from-green-500 to-green-600", bg: "hover:bg-green-500/10", text: "text-green-600", url: "#" },
];

const bottomNavs = [
  { tab: "home", label: "হোম", icon: Home },
  { tab: "verify", label: "ভেরিফাই", icon: ShieldCheck },
  { tab: "wallet", label: "ওয়ালেট", icon: Wallet },
  { tab: "network", label: "নেটওয়ার্ক", icon: Network },
];

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      setUserData(JSON.parse(user));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const referralLink =
    typeof window !== "undefined"
      ? `${window.location.origin}/register?ref=${userData?.phone || "LE"}`
      : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-emerald-50/50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50/50 text-emerald-950 pb-24 md:pb-8">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 rounded-xl hover:bg-emerald-100 text-emerald-800 transition"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>

            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center font-extrabold text-sm shadow-md border border-amber-400"
              >
                LE
              </motion.div>
              <h1 className="text-lg font-extrabold tracking-wide text-emerald-900 hidden sm:block">
                LITE EARNING
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleFullscreen}
              className="p-2 rounded-xl hover:bg-emerald-100 text-emerald-700 transition hidden sm:block"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="relative p-2 rounded-xl hover:bg-emerald-100 text-emerald-700 transition"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
            </motion.button>

            <div className="flex items-center gap-2 pl-2 border-l border-emerald-100">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-sm shadow">
                  {userData.fullName?.charAt(0) || "U"}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden bg-white/95 backdrop-blur-xl border-t border-emerald-100"
            >
              <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
                <div className="flex items-center gap-3 px-2 py-2 mb-2 rounded-xl bg-emerald-50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold">
                    {userData.fullName?.charAt(0) || "U"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-900">{userData.fullName}</p>
                    <p className="text-xs text-emerald-600">{userData.email}</p>
                  </div>
                </div>
                {[
                  { label: "প্রোফাইল", icon: User },
                  { label: "ওয়ালেট", icon: Wallet },
                  { label: "রেফারেল", icon: Gift },
                  { label: "ভেরিফিকেশন", icon: ShieldCheck },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-emerald-50 text-sm font-medium text-emerald-800 transition"
                  >
                    <item.icon className="w-4 h-4 text-emerald-600" />
                    <span>{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-sm font-medium text-red-600 transition mt-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>লগআউট</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <motion.main
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 py-6 space-y-6"
      >
        {/* Welcome + Balance */}
        <motion.div variants={itemVariant} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 p-6 text-white shadow-xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl" />
            <div className="relative">
              <p className="text-emerald-100 text-sm">স্বাগতম,</p>
              <h2 className="text-2xl font-extrabold mb-4">{userData.fullName} 👋</h2>
              <div className="flex items-center gap-2 mb-1">
                <Wallet className="w-5 h-5 text-amber-300" />
                <span className="text-emerald-100 text-sm">বর্তমান ব্যালেন্স</span>
              </div>
              <h3 className="text-4xl font-black text-amber-300">৳ 0.00</h3>
              <p className="text-emerald-200/70 text-xs mt-2">* কাজ সম্পন্ন করে আয় বাড়ান</p>
            </div>
          </div>

          <motion.div
            variants={itemVariant}
            className="bg-white rounded-3xl border border-emerald-100 p-6 shadow-sm flex flex-col justify-center"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-emerald-600 font-semibold">স্ট্যাটাস</span>
              <Zap className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-bold text-amber-600 text-sm">অ্যাকাউন্ট আনভেরিফাইড</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-emerald-50 rounded-xl p-2.5 text-center">
                <p className="text-lg font-bold text-emerald-700">০</p>
                <p className="text-[10px] text-emerald-600">টাস্ক</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-2.5 text-center">
                <p className="text-lg font-bold text-amber-600">০</p>
                <p className="text-[10px] text-amber-600">রেফার</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Verification Alert Banner */}
        <AnimatePresence>
          {showAlert && (
            <motion.div
              variants={itemVariant}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="relative rounded-2xl border border-amber-300/60 bg-gradient-to-r from-amber-50 to-amber-50/60 p-4 md:p-5 flex items-start md:items-center gap-3 md:gap-4 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-amber-800 text-sm md:text-base">
                  আপনার অ্যাকাউন্ট এখনো ভেরিফাইড নয়!
                </p>
                <p className="text-amber-700/80 text-xs md:text-sm mt-0.5">
                  সব ফিচার ব্যবহার করতে দ্রুত আপনার অ্যাকাউন্ট ভেরিফাই করুন।
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab("verify")}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-xl shadow-md shadow-amber-500/30 transition"
                >
                  ভেরিফাই করুন
                </motion.button>
                <button
                  onClick={() => setShowAlert(false)}
                  className="p-1.5 rounded-lg hover:bg-amber-100 text-amber-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Quick Links */}
        <motion.div variants={itemVariant}>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-amber-500" />
            <h2 className="text-lg font-bold text-emerald-900">কুইক লিংক</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialLinks.map((s) => (
              <motion.a
                key={s.name}
                href={s.url}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative overflow-hidden bg-white border border-emerald-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-lg transition ${s.bg}`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-emerald-950">{s.name}</p>
                  <p className={`text-xs ${s.text} font-medium`}>ফলো করুন</p>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition ml-auto" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariant}>
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-4 h-4 text-amber-500" />
            <h2 className="text-lg font-bold text-emerald-900">আমাদের সার্ভিস সমূহ</h2>
          </div>
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {services.map((svc) => (
              <motion.button
                key={svc.name}
                variants={itemVariant}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform`}>
                  <svc.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-emerald-900 text-center leading-tight">
                  {svc.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Referral Box */}
        <motion.div
          variants={itemVariant}
          className="relative rounded-3xl border-2 border-dashed border-emerald-400/60 bg-white/60 backdrop-blur-md p-6 overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-amber-300/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-emerald-300/20 rounded-full blur-2xl" />

          <div className="relative flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-md">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-emerald-900">রেফার করে ইনকাম করুন</h2>
              <p className="text-xs text-emerald-600">প্রতি সফল রেফারে পান বোনাস</p>
            </div>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-2 mt-2">
            <input
              readOnly
              value={referralLink}
              className="flex-1 px-4 py-3 bg-white border border-emerald-200 rounded-xl text-sm text-emerald-700 font-mono truncate focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleCopy}
              className={`px-5 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition ${
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:brightness-110"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  কপি হয়েছে
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  কপি লিংক
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.main>

      {/* ===== BOTTOM NAV (Mobile) ===== */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-xl border-t border-emerald-100 shadow-lg">
        <div className="grid grid-cols-4 max-w-md mx-auto">
          {bottomNavs.map((nav, idx) => {
            const Icon = nav.icon;
            const isActive = activeTab === nav.tab;
            return (
              <motion.button
                key={idx}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveTab(nav.tab)}
                className="relative flex flex-col items-center gap-0.5 px-3 py-2 w-full"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-0.5 w-8 h-1 bg-emerald-500 rounded-full"
                  />
                )}
                <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                <span className={`text-[10px] font-semibold transition-colors ${isActive ? "text-emerald-600" : "text-slate-400"}`}>
                  {nav.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
