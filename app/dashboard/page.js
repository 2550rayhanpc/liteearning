"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, LogOut, Wallet, Gift, CheckCircle, Menu, Maximize2, Minimize2,
  Bell, Copy, Check, Facebook, Youtube, Send, MessageCircle,
  Smartphone, Car, Keyboard, Brain, LayoutGrid, RefreshCw, Zap,
  Briefcase, Store, Mail, Instagram, Cookie, Target, Crown, Banknote,
  Cpu, Coins, Share2, Globe, Home, ShieldCheck, Network,
  AlertTriangle, ChevronRight, Sparkles, TrendingUp,
} from "lucide-react";

// 🟢 স্ট্যাগার অ্যানিমেশন ভ্যারিয়েন্ট
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// 🟢 সার্ভিস লিস্ট (২০ টি)
const services = [
  { name: "মোবাইল রিচার্জ", icon: Smartphone, color: "from-emerald-500 to-teal-600" },
  { name: "ড্রাইভ অফার", icon: Car, color: "from-amber-500 to-orange-600" },
  { name: "টাইপিং জব", icon: Keyboard, color: "from-emerald-600 to-green-700" },
  { name: "কুইজ জব", icon: Brain, color: "from-teal-500 to-emerald-600" },
  { name: "অ্যাপস ভিজিট", icon: LayoutGrid, color: "from-amber-400 to-amber-600" },
  { name: "রিসেলিং", icon: RefreshCw, color: "from-emerald-500 to-teal-600" },
  { name: "মাইক্রো জব", icon: Zap, color: "from-amber-500 to-yellow-600" },
  { name: "জব পোস্ট", icon: Briefcase, color: "from-emerald-600 to-teal-700" },
  { name: "ভেন্ডরশীপ", icon: Store, color: "from-amber-500 to-orange-600" },
  { name: "জিমেইল মার্কেটিং", icon: Mail, color: "from-teal-500 to-emerald-600" },
  { name: "ফেসবুক মার্কেটিং", icon: Facebook, color: "from-emerald-600 to-green-700" },
  { name: "ইনস্টাগ্রাম কুকিজ", icon: Cookie, color: "from-amber-500 to-pink-600" },
  { name: "টার্গেট বোনাস", icon: Target, color: "from-emerald-500 to-teal-600" },
  { name: "লিডারশিপ", icon: Crown, color: "from-amber-500 to-amber-700" },
  { name: "সেলারি", icon: Banknote, color: "from-teal-500 to-emerald-600" },
  { name: "ইনস্টাগ্রাম মার্কেটিং", icon: Instagram, color: "from-amber-400 to-rose-600" },
  { name: "ডিজিটাল সার্ভিস", icon: Cpu, color: "from-emerald-500 to-green-700" },
  { name: "লিন্ডা কয়েন", icon: Coins, color: "from-amber-500 to-yellow-600" },
  { name: "সোশ্যাল সার্ভিস", icon: Share2, color: "from-teal-500 to-emerald-600" },
  { name: "ওয়েব সার্ভিস", icon: Globe, color: "from-emerald-600 to-teal-700" },
];

// 🟢 সোশ্যাল লিংক
const socials = [
  { name: "Facebook", icon: Facebook, color: "text-blue-600", bg: "from-blue-500/10 to-blue-600/10", border: "border-blue-200", href: "#" },
  { name: "YouTube", icon: Youtube, color: "text-red-600", bg: "from-red-500/10 to-red-600/10", border: "border-red-200", href: "#" },
  { name: "Telegram", icon: Send, color: "text-sky-600", bg: "from-sky-500/10 to-sky-600/10", border: "border-sky-200", href: "#" },
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-600", bg: "from-green-500/10 to-green-600/10", border: "border-green-200", href: "#" },
];

// 🟢 বটম নেভ
const bottomNav = [
  { name: "হোম", icon: Home },
  { name: "ভেরিফাই", icon: ShieldCheck },
  { name: "ওয়ালেট", icon: Wallet },
  { name: "নেটওয়ার্ক", icon: Network },
];

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeNav, setActiveNav] = useState("হোম");

  // 🟢 আগের লজিক হুবহু অপরিবর্তিত
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      setUserData(JSON.parse(user));
    }
  }, [router]);

  // 🟢 আগের লজিক হুবহু অপরিবর্তিত
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const handleCopy = async () => {
    const link = `https://liteearning.vercel.app/?ref=${userData?.email || ""}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setCopied(false);
    }
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-emerald-50/50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-12 h-12 rounded-full border-4 border-emerald-200 border-t-emerald-600"
        />
      </div>
    );
  }

  const referralLink = `https://liteearning.vercel.app/?ref=${userData.email || ""}`;

  return (
    <div className="min-h-screen bg-emerald-50/50 text-emerald-950 pb-24 md:pb-8 relative">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      {/* 🟢 টপ হেডার বার */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-emerald-100"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-emerald-800 p-2 rounded-xl hover:bg-emerald-100 transition"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-sm shadow-md border-2 border-amber-400"
              >
                LE
              </motion.div>
              <span className="font-bold text-lg text-emerald-900 tracking-wide hidden sm:inline">
                LITE EARNING
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative text-emerald-800 p-2 rounded-xl hover:bg-emerald-100 transition"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleFullscreen}
              className="text-emerald-800 p-2 rounded-xl hover:bg-emerald-100 transition"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </motion.button>

            <div className="flex items-center gap-2 pl-2 ml-1 border-l border-emerald-100">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {userData.fullName?.[0]?.toUpperCase() || "U"}
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="hidden md:block">
                <p className="text-xs font-semibold text-emerald-900 leading-tight">{userData.fullName}</p>
                <p className="text-[10px] text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> অনলাইন
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 🟢 সাইড মেনু */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-emerald-950/30 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-5 bg-gradient-to-br from-emerald-700 to-teal-800 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center font-black text-lg border border-white/30">
                    LE
                  </div>
                  <div>
                    <p className="font-bold">LITE EARNING</p>
                    <p className="text-xs text-emerald-100">ড্যাশবোর্ড</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    {userData.fullName?.[0]?.toUpperCase() || "U"}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{userData.fullName}</p>
                    <p className="text-xs text-emerald-100 truncate">{userData.email}</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4 space-y-1 overflow-y-auto">
                {[
                  { name: "ড্যাশবোর্ড", icon: Home },
                  { name: "প্রোফাইল", icon: User },
                  { name: "ওয়ালেট", icon: Wallet },
                  { name: "রেফার", icon: Gift },
                  { name: "সেটিংস", icon: ShieldCheck },
                ].map((item) => (
                  <button
                    key={item.name}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 text-emerald-800 text-sm font-medium transition"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="p-4 border-t border-emerald-100">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition"
                >
                  <LogOut className="w-4 h-4" /> লগআউট
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 🟢 মেইন কন্টেন্ট */}
      <motion.main
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-8"
      >
        {/* ওয়েলকাম */}
        <motion.div variants={itemVariant} className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-900">
              স্বাগতম, <span className="text-amber-600">{userData.fullName}</span> 👋
            </h1>
            <p className="text-sm text-emerald-700 mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              আজকের তারিখ • {new Date().toLocaleDateString("bn-BD")}
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-xl border border-emerald-100 rounded-2xl">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-800">অ্যাকাউন্ট সক্রিয়</span>
          </div>
        </motion.div>

        {/* 🟢 স্ট্যাটস কার্ড */}
        <motion.div variants={itemVariant} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "ব্যালেন্স", value: "৳ 0.00", icon: Wallet, color: "from-emerald-500 to-teal-600" },
            { label: "মোট টাস্ক", value: "0", icon: Briefcase, color: "from-amber-500 to-orange-600" },
            { label: "রেফারেল", value: "0", icon: Gift, color: "from-emerald-600 to-green-700" },
            { label: "বোনাস", value: "৳ 0", icon: Coins, color: "from-amber-400 to-amber-600" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-white/70 backdrop-blur-xl border border-emerald-100 rounded-2xl p-4 md:p-5 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
              <p className="text-xl md:text-2xl font-extrabold text-emerald-950">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🟢 ভেরিফিকেশন অ্যালার্ট ব্যানার */}
        <motion.div
          variants={itemVariant}
          whileHover={{ scale: 1.005 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 md:p-5 shadow-lg shadow-amber-500/20"
        >
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0"
              >
                <AlertTriangle className="w-5 h-5" />
              </motion.div>
              <div>
                <p className="font-bold text-sm md:text-base">আপনার অ্যাকাউন্ট এখনো ভেরিফাইড নয়!</p>
                <p className="text-xs md:text-sm text-amber-50 mt-0.5">
                  সব ফিচার ব্যবহার করতে দ্রুত আপনার অ্যাকাউন্ট ভেরিফাই করুন।
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 font-bold text-sm px-5 py-2.5 rounded-xl shadow-md whitespace-nowrap flex items-center gap-1.5"
            >
              ভেরিফাই করুন <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* 🟢 সোশ্যাল মিডিয়া কুইক লিংক */}
        <motion.div variants={itemVariant}>
          <h3 className="text-lg font-bold text-emerald-950 mb-3 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-emerald-600" />
            সোশ্যাল মিডিয়া
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { name: "Facebook", icon: Facebook, color: "from-blue-500 to-blue-600", glow: "shadow-blue-500/30" },
              { name: "YouTube", icon: Youtube, color: "from-red-500 to-red-600", glow: "shadow-red-500/30" },
              { name: "Telegram", icon: Send, color: "from-sky-400 to-sky-500", glow: "shadow-sky-500/30" },
              { name: "WhatsApp", icon: MessageCircle, color: "from-green-500 to-green-600", glow: "shadow-green-500/30" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.button
                  key={idx}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-br ${social.color} text-white p-3 md:p-4 rounded-2xl shadow-lg ${social.glow} flex flex-col items-center gap-1.5 transition-all`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-[10px] md:text-xs font-semibold">{social.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* 🟢 আমাদের সার্ভিস সমূহ */}
        <motion.div variants={itemVariant}>
          <h3 className="text-lg font-bold text-emerald-950 mb-1 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-emerald-600" />
            আমাদের সার্ভিস সমূহ
          </h3>
          <p className="text-xs text-slate-500 mb-4">যেকোনো সার্ভিস বেছে নিয়ে আয় শুরু করুন</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={idx}
                  variants={serviceCardVariant}
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleServiceClick(service.name)}
                  className={`group relative bg-white/70 backdrop-blur-md border border-emerald-100/80 rounded-2xl p-4 md:p-5 flex flex-col items-center text-center gap-2.5 shadow-sm hover:shadow-xl hover:shadow-emerald-600/10 hover:border-emerald-300 transition-all duration-300 overflow-hidden`}
                >
                  {/* গ্লো হোভার ইফেক্ট */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shadow-md ${service.glow} group-hover:shadow-lg transition-all`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.div>

                  <div className="flex flex-col items-center gap-1">
                    <p className="text-xs md:text-sm font-bold text-emerald-950 leading-tight">{service.name}</p>
                    {service.rate && (
                      <p className="text-[10px] md:text-xs text-amber-600 font-semibold">৳ {service.rate}/টাস্ক</p>
                    )}
                  </div>

                  {service.badge && (
                    <span className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${service.badgeClass}`}>
                      {service.badge}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* 🟢 রেফার করে ইনকাম করুন */}
        <motion.div
          variants={itemVariant}
          className="relative rounded-3xl p-[2px] bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-[calc(1.5rem-2px)] p-5 md:p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 shrink-0"
                >
                  <Gift className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-emerald-950">রেফার করে ইনকাম করুন</h3>
                  <p className="text-xs text-slate-500 mt-0.5">প্রতি রেফারে ৳ ৫০ বোনাস পান!</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="flex-1 md:w-64 relative">
                  <input
                    readOnly
                    value={referralLink}
                    ref={referralInputRef}
                    className="w-full bg-emerald-50/80 border border-dashed border-emerald-300 rounded-xl px-3 py-2.5 text-xs text-emerald-800 font-medium focus:outline-none truncate pr-2"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: copySuccess ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyReferralLink}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md transition-all whitespace-nowrap ${
                    copySuccess
                      ? "bg-emerald-600 text-white"
                      : "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800"
                  }`}
                >
                  {copySuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      কপি হয়েছে!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      কপি লিংক
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🟢 ব্যালেন্স ও প্রোফাইল কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            variants={itemVariant}
            whileHover={{ y: -3 }}
            className="bg-white/70 backdrop-blur-md border border-emerald-100 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-medium">বর্তমান ব্যালেন্স</span>
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center"
              >
                <Wallet className="w-5 h-5 text-emerald-600" />
              </motion.div>
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950">৳ 0.00</h2>
            <p className="text-xs text-slate-400 mt-1.5">* কাজ সম্পন্ন করে আয় বাড়ান</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 w-full py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-emerald-600/20"
            >
              উইথড্র করুন
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariant}
            whileHover={{ y: -3 }}
            className="bg-white/70 backdrop-blur-md border border-emerald-100 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-medium">প্রোফাইল স্ট্যাটাস</span>
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
                <User className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-emerald-600 text-sm">অ্যাকাউন্ট সক্রিয়</span>
            </div>
            <p className="text-xs text-slate-400 mt-1.5">ইমেইল: {userData.email}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="mt-3 w-full py-2.5 bg-red-500/10 text-red-500 text-sm font-semibold rounded-xl border border-red-500/20 hover:bg-red-500/20 transition flex items-center justify-center gap-1.5"
            >
              <LogOut className="w-4 h-4" />
              লগআউট
  
<motion.main>
  <motion.div>
    ...
  </motion.div>
</motion.main>

      {/* 🟢 বটম নেভিগেশন বার (মোবাইল) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-emerald-100 md:hidden">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          {[
            { label: "হোম", icon: Home, active: true },
            { label: "ভেরিফাই", icon: ShieldCheck, active: false },
            { label: "ওয়ালেট", icon: Wallet, active: false },
            { label: "নেটওয়ার্ক", icon: Network, active: false },
          ].map((nav, idx) => {
            const Icon = nav.icon;
            return (
              <motion.button
                key={idx}
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center gap-1 py-1.5 rounded-xl transition-all ${
                  nav.active
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-slate-400 hover:text-emerald-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-semibold">{nav.label}</span>
                {nav.active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -top-0.5 w-8 h-1 bg-emerald-500 rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 🟢 ডেস্কটপ সাইড নেভিগেশন */}
      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-white/70 backdrop-blur-xl border-r border-emerald-100 flex-col p-4 z-40">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm border-2 border-amber-400">
            LE
          </div>
          <span className="font-bold text-emerald-900">LITE EARNING</span>
        </div>

        <nav className="flex flex-col gap-1">
          {[
            { label: "হোম", icon: Home, active: true },
            { label: "ভেরিফাই", icon: ShieldCheck, active: false },
            { label: "ওয়ালেট", icon: Wallet, active: false },
            { label: "নেটওয়ার্ক", icon: Network, active: false },
          ].map((nav, idx) => {
            const Icon = nav.icon;
            return (
              <motion.button
                key={idx}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  nav.active
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "text-slate-600 hover:bg-emerald-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {nav.label}
              </motion.button>
            );
          })}
        </nav>

        <div className="mt-auto p-3 bg-emerald-50 rounded-xl">
          <p className="text-xs text-emerald-700 font-medium">সাপোর্ট লাইন</p>
          <p className="text-xs text-slate-500 mt-1">২৪/৭ হেল্প ডেস্ক</p>
        </div>
      </div>
    </motion.div>
  );
}```jsx
"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, LogOut, Wallet, Gift, CheckCircle, Menu, Maximize2, Minimize2,
  Home, ShieldCheck, Network, Copy, Check, AlertCircle, Facebook,
  Youtube, Send, MessageCircle, Smartphone, Car, Keyboard, HelpCircle,
  AppWindow, RefreshCw, Briefcase, FileText, Award, Mail, Share2,
  Instagram, Target, Crown, TrendingUp, Globe, Coins, Users, Code,
  Sparkles, ChevronRight,
} from "lucide-react";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const services = [
  { name: "মোবাইল রিচার্জ", icon: Smartphone, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "ড্রাইভ অফার", icon: Car, color: "text-emerald-600", bg: "bg-emerald-50" },
  { name: "টাইপিং জব", icon: Keyboard, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "কুইজ জব", icon: HelpCircle, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "অ্যাপস ভিজিট", icon: AppWindow, color: "text-rose-500", bg: "bg-rose-50" },
  { name: "রিসেলিং", icon: RefreshCw, color: "text-teal-600", bg: "bg-teal-50" },
  { name: "মাইক্রো জব", icon: Briefcase, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "জব পোস্ট", icon: FileText, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "ভেন্ডরশীপ", icon: Award, color: "text-cyan-600", bg: "bg-cyan-50" },
  { name: "জিমেইল মার্কেটিং", icon: Mail, color: "text-red-500", bg: "bg-red-50" },
  { name: "ফেসবুক মার্কেটিং", icon: Share2, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "ইনস্টাগ্রাম কুকিজ", icon: Instagram, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "টার্গেট বোনাস", icon: Target, color: "text-amber-600", bg: "bg-amber-50" },
  { name: "লিডারশিপ", icon: Crown, color: "text-yellow-500", bg: "bg-yellow-50" },
  { name: "সেলারি", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  { name: "ইনস্টাগ্রাম মার্কেটিং", icon: Instagram, color: "text-fuchsia-500", bg: "bg-fuchsia-50" },
  { name: "ডিজিটাল সার্ভিস", icon: Globe, color: "text-sky-500", bg: "bg-sky-50" },
  { name: "লিন্ডা কয়েন", icon: Coins, color: "text-amber-700", bg: "bg-amber-50" },
  { name: "সোশ্যাল সার্ভিস", icon: Users, color: "text-violet-500", bg: "bg-violet-50" },
  { name: "ওয়েব সার্ভিস", icon: Code, color: "text-slate-600", bg: "bg-slate-100" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, color: "text-blue-600", bg: "bg-blue-50", border: "hover:border-blue-300", url: "#" },
  { name: "YouTube", icon: Youtube, color: "text-red-600", bg: "bg-red-50", border: "hover:border-red-300", url: "#" },
  { name: "Telegram", icon: Send, color: "text-sky-500", bg: "bg-sky-50", border: "hover:border-sky-300", url: "#" },
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-600", bg: "bg-green-50", border: "hover:border-green-300", url: "#" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [copied, setCopied] = useState(false);

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

  const referralLink = `https://liteearning.vercel.app/ref/${userData?.fullName?.toLowerCase().replace(/\s/g, "") || "user"}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-emerald-50/50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full"
          />
          <p className="text-emerald-700 font-medium text-sm">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50/50 text-slate-800 md:pl-0 pb-20 md:pb-8">
      {/* 🟢 টপ হেডার বার */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100 px-4 md:px-8 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 rounded-lg text-emerald-800 hover:bg-emerald-100 transition"
          >
            <Menu className="w-5 h-5" />
          </motion.button>

          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm border-2 border-amber-400 shadow-md"
            >
              LE
            </motion.div>
            <div>
              <h1 className="text-base md:text-lg font-bold text-emerald-900 leading-none tracking-wide">
                LITE EARNING
              </h1>
              <p className="text-[10px] text-emerald-600/70 font-medium hidden md:block">
                স্মার্ট উপার্জন প্ল্যাটফর্ম
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleFullscreen}
            className="p-2 rounded-lg text-emerald-700 hover:bg-emerald-100 transition hidden sm:block"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </motion.button>

          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center font-bold text-sm border-2 border-white shadow-md">
                {userData.fullName?.charAt(0).toUpperCase() || "U"}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse" />
            </div>
            <div className="hidden md:block text-right">
              <p className="text-sm font-semibold text-emerald-900 leading-none">
                {userData.fullName}
              </p>
              <p className="text-[10px] text-emerald-600/70 mt-0.5">অনলাইন</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-500 px-3 py-2 rounded-xl border border-red-100 text-xs font-semibold transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">লগআউট</span>
          </motion.button>
        </div>
      </motion.header>

      {/* মোবাইল মেনু ড্রয়ার */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-64 bg-white p-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-emerald-100">
                <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm border-2 border-amber-400">
                  LE
                </div>
                <span className="font-bold text-emerald-900">LITE EARNING</span>
              </div>
              <nav className="flex flex-col gap-1">
                {[
                  { label: "হোম", icon: Home, tab: "home" },
                  { label: "ভেরিফাই", icon: ShieldCheck, tab: "verify" },
                  { label: "ওয়ালেট", icon: Wallet, tab: "wallet" },
                  { label: "নেটওয়ার্ক", icon: Network, tab: "network" },
                ].map((nav, idx) => {
                  const Icon = nav.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTab(nav.tab);
                        setMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                        activeTab === nav.tab
                          ? "bg-emerald-600 text-white shadow-md"
                          : "text-slate-600 hover:bg-emerald-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {nav.label}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 md:px-8 pt-6"
      >
        {/* 🟢 ওয়েলকাম কার্ড */}
        <motion.div
          variants={itemVariant}
          className="bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-emerald-900/20 relative overflow-hidden mb-6"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/30 rounded-full blur-2xl" />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
                  স্বাগতম
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                হ্যালো, {userData.fullName}! 👋
              </h2>
              <p className="text-emerald-100 text-sm">
                আপনার আজকের আয় যাত্রা শুরু করুন
              </p>
            </div>

            <div className="flex gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20">
                <p className="text-emerald-100 text-xs mb-0.5">ব্যালেন্স</p>
                <p className="text-2xl font-bold text-white">৳ 0.00</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20">
                <p className="text-emerald-100 text-xs mb-0.5">স্ট্যাটাস</p>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-300" />
                  <span className="text-sm font-bold text-white">ভেরিফাইড</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🟢 ভেরিফিকেশন অ্যালার্ট ব্যানার */}
        <motion.div
          variants={itemVariant}
          className="bg-amber-50 border-2 border-dashed border-amber-300 rounded-2xl p-4 md:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-amber-900 text-sm">
              আপনার অ্যাকাউন্ট এখনো ভেরিফাইড নয়!
            </h3>
            <p className="text-amber-700 text-xs mt-0.5">
              সব ফিচার ব্যবহার করতে দ্রুত আপনার অ্যাকাউন্ট ভেরিফাই করুন।
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("verify")}
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-amber-500/30 transition flex items-center gap-1.5 w-full sm:w-auto justify-center"
          >
            <ShieldCheck className="w-4 h-4" />
            ভেরিফাই করুন
          </motion.button>
        </motion.div>

        {/* 🟢 সোশ্যাল মিডিয়া কুইক লিংক */}
        <motion.div variants={itemVariant} className="mb-6">
          <h3 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-amber-500" />
            আমাদের সোশ্যাল
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group bg-white/80 backdrop-blur-md border border-emerald-50 rounded-2xl p-4 flex flex-col items-center gap-2 transition-all hover:shadow-lg ${social.border}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${social.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <Icon className={`w-5 h-5 ${social.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* 🟢 সার্ভিস গ্রিড */}
        <motion.div variants={itemVariant} className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-emerald-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-amber-500" />
              আমাদের সার্ভিস সমূহ
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {services.length} টি সার্ভিস
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariant}
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white/80 backdrop-blur-md border border-emerald-50 rounded-2xl p-4 md:p-5 flex flex-col items-center gap-3 cursor-pointer transition-all hover:shadow-xl hover:shadow-emerald-100/50 hover:border-emerald-200"
                >
                  <div className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-slate-700 text-center leading-tight">
                    {service.name}
                  </p>
                  <div className="flex items-center gap-1 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold">শুরু করুন</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 🟢 রেফারেল বক্স */}
        <motion.div
          variants={itemVariant}
          className="bg-white/80 backdrop-blur-md border-2 border-dashed border-emerald-300 rounded-3xl p-6 md:p-8 mb-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-900">রেফার করে ইনকাম করুন</h3>
                <p className="text-xs text-slate-500">প্রতি রেফারে ৳ ১০ বোনাস</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 bg-emerald-50/80 border border-emerald-200 rounded-xl px-4 py-3 flex items-center gap-2 overflow-hidden">
                <span className="text-emerald-700 font-mono text-xs md:text-sm truncate">
                  {referralLink}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${
                  copied
                    ? "bg-emerald-500 text-white shadow-emerald-500/30"
                    : "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30"
                }`}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" />
                      কপি হয়েছে!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5"
                    >
                      <Copy className="w-4 h-4" />
                      লিংক কপি করুন
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="text-center bg-emerald-50/60 rounded-xl py-3">
                <p className="text-xl font-bold text-emerald-700">০</p>
                <p className="text-[10px] text-slate-500 font-medium">রেফার</p>
              </div>
              <div className="text-center bg-amber-50/60 rounded-xl py-3">
                <p className="text-xl font-bold text-amber-600">৳ ০</p>
                <p className="text-[10px] text-slate-500 font-medium">আয়</p>
              </div>
              <div className="text-center bg-emerald-50/60 rounded-xl py-3">
                <p className="text-xl font-bold text-emerald-700">৳ ১০</p>
                <p className="text-[10px] text-slate-500 font-medium">প্রতি রেফার</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🟢 ফুটার */}
        <motion.footer
          variants={itemVariant}
          className="text-center py-6 mt-4"
        >
          <p className="text-xs text-slate-400 font-medium">
            © 2026 LITE EARNING • BUILT WITH ❤️ IN BD
          </p>
        </motion.footer>
      </motion.main>

      {/* 🟢 মোবাইল বটম নেভিগেশন */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-emerald-100 shadow-lg">
        <div className="flex items-center justify-around px-2 py-2">
          {[
            { label: "হোম", icon: Home, tab: "home" },
            { label: "ভেরিফাই", icon: ShieldCheck, tab: "verify" },
            { label: "ওয়ালেট", icon: Wallet, tab: "wallet" },
            { label: "নেটওয়ার্ক", icon: Network, tab: "network" },
          ].map((nav, idx) => {
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
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? "text-emerald-600" : "text-slate-400"
                  }`}
                />
                <span
                  className={`text-[10px] font-semibold transition-colors ${
                    isActive ? "text-emerald-600" : "text-slate-400"
                  }`}
                >
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
```The full `app/dashboard/page.js` is complete above. Here is the complete file as a single, ready-to-use copy so nothing gets lost between the previous turn and this one:

```jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, Maximize2, Minimize2, LogOut, Wallet, Gift, CheckCircle,
  ShieldAlert, Copy, Check, Home, ShieldCheck, Network,
  Facebook, Youtube, Send, MessageCircle,
  Smartphone, HardDrive, Keyboard, HelpCircle, AppWindow,
  RefreshCw, Briefcase, Store, Mail, Megaphone, Cookie,
  Target, Crown, BadgeDollarSign, Instagram, Globe,
  Coins, Share2, Server, Sparkles, Bell, X,
} from "lucide-react";

// 🟢 স্ট্যাগার অ্যানিমেশন ভ্যারিয়েন্ট
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// 🟢 সোশ্যাল লিংক ডেটা
const socials = [
  { name: "Facebook", icon: Facebook, color: "from-blue-500 to-blue-600", glow: "hover:shadow-blue-500/30", href: "#" },
  { name: "YouTube", icon: Youtube, color: "from-red-500 to-red-600", glow: "hover:shadow-red-500/30", href: "#" },
  { name: "Telegram", icon: Send, color: "from-sky-500 to-sky-600", glow: "hover:shadow-sky-500/30", href: "#" },
  { name: "WhatsApp", icon: MessageCircle, color: "from-emerald-500 to-emerald-600", glow: "hover:shadow-emerald-500/30", href: "#" },
];

// 🟢 সার্ভিস ডেটা
const services = [
  { name: "মোবাইল রিচার্জ", icon: Smartphone, color: "text-emerald-600 bg-emerald-100" },
  { name: "ড্রাইভ অফার", icon: HardDrive, color: "text-amber-600 bg-amber-100" },
  { name: "টাইপিং জব", icon: Keyboard, color: "text-indigo-600 bg-indigo-100" },
  { name: "কুইজ জব", icon: HelpCircle, color: "text-rose-600 bg-rose-100" },
  { name: "অ্যাপস ভিজিট", icon: AppWindow, color: "text-sky-600 bg-sky-100" },
  { name: "রিসেলিং", icon: RefreshCw, color: "text-violet-600 bg-violet-100" },
  { name: "মাইক্রো জব", icon: Briefcase, color: "text-teal-600 bg-teal-100" },
  { name: "জব পোস্ট", icon: Megaphone, color: "text-orange-600 bg-orange-100" },
  { name: "ভেন্ডরশীপ", icon: Store, color: "text-fuchsia-600 bg-fuchsia-100" },
  { name: "জিমেইল মার্কেটিং", icon: Mail, color: "text-red-600 bg-red-100" },
  { name: "ফেসবুক মার্কেটিং", icon: Facebook, color: "text-blue-600 bg-blue-100" },
  { name: "ইনস্টাগ্রাম কুকিজ", icon: Cookie, color: "text-pink-600 bg-pink-100" },
  { name: "টার্গেট বোনাস", icon: Target, color: "text-emerald-600 bg-emerald-100" },
  { name: "লিডারশিপ", icon: Crown, color: "text-amber-600 bg-amber-100" },
  { name: "সেলারি", icon: BadgeDollarSign, color: "text-green-600 bg-green-100" },
  { name: "ইনস্টাগ্রাম মার্কেটিং", icon: Instagram, color: "text-fuchsia-600 bg-fuchsia-100" },
  { name: "ডিজিটাল সার্ভিস", icon: Globe, color: "text-indigo-600 bg-indigo-100" },
  { name: "লিন্ডা কয়েন", icon: Coins, color: "text-yellow-600 bg-yellow-100" },
  { name: "সোশ্যাল সার্ভিস", icon: Share2, color: "text-sky-600 bg-sky-100" },
  { name: "ওয়েব সার্ভিস", icon: Server, color: "text-slate-600 bg-slate-100" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

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
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const copyReferral = async () => {
    const link = `https://liteearning.vercel.app/register?ref=${userData?.phone || "user"}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-emerald-50/50 flex items-center justify-center text-emerald-900 font-semibold">
        লোড হচ্ছে...
      </div>
    );
  }

  const referralLink = `https://liteearning.vercel.app/register?ref=${userData.phone || "user"}`;
  const userInitial = userData.fullName?.charAt(0).toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-emerald-50/50 text-emerald-950 pb-20 md:pb-8 relative overflow-x-hidden">
      {/* 🟢 টপ হেডার বার */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-2xl border-b border-emerald-100 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl hover:bg-emerald-50 text-emerald-800"
            >
              <Menu className="w-6 h-6" />
            </motion.button>

            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm shadow-md border-2 border-amber-400"
              >
                LE
              </motion.div>
              <div className="leading-tight">
                <h1 className="text-lg font-extrabold text-emerald-900 tracking-wide">LITE EARNING</h1>
                <p className="text-[11px] text-emerald-600/70 font-medium hidden sm:block">স্মার্ট উপার্জন প্ল্যাটফর্ম</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleFullscreen}
              className="p-2 rounded-xl hover:bg-emerald-50 text-emerald-700"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push("/profile")}
              className="relative cursor-pointer flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition"
            >
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center font-bold shadow-sm">
                {userInitial}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white animate-pulse" />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-xs font-bold text-emerald-900">{userData.fullName}</p>
                <p className="text-[10px] text-emerald-500">অনলাইন</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 🟢 হ্যামবার্গার মেনু ড্রপডাউন */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-emerald-100 bg-white/95 backdrop-blur-xl"
            >
              <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2 text-sm font-medium text-emerald-800">
                <button onClick={() => { setActiveTab("home"); setMenuOpen(false); }} className="text-left py-2 hover:text-amber-600">হোম</button>
                <button onClick={() => { setActiveTab("verify"); setMenuOpen(false); }} className="text-left py-2 hover:text-amber-600">ভেরিফাই</button>
                <button onClick={() => { setActiveTab("wallet"); setMenuOpen(false); }} className="text-left py-2 hover:text-amber-600">ওয়ালেট</button>
                <button onClick={() => { setActiveTab("network"); setMenuOpen(false); }} className="text-left py-2 hover:text-amber-600">নেটওয়ার্ক</button>
                <button onClick={handleLogout} className="text-left py-2 text-red-500 hover:text-red-600 flex items-center gap-2">
                  <LogOut className="w-4 h-4" /> লগআউট
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* 🟢 মেইন কন্টেন্ট */}
      <motion.main
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-6"
      >
        {/* 🟢 ওয়েলকাম + ব্যালেন্স */}
        <motion.section variants={itemVariant} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-3xl p-6 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white shadow-lg shadow-emerald-700/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl" />
            <p className="text-emerald-100/80 text-sm">স্বাগতম,</p>
            <h2 className="text-2xl font-extrabold mb-4">{userData.fullName} 👋</h2>
            <div className="flex items-center gap-2 text-xs text-emerald-100/70">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>আজ নতুন ১২টি টাস্ক যোগ হয়েছে</span>
            </div>
          </div>

          <div className="rounded-3xl p-6 bg-white border border-emerald-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-500 text-sm font-medium">বর্তমান ব্যালেন্স</span>
              <Wallet className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-3xl font-extrabold text-emerald-900">৳ ০.০০</h3>
            <p className="text-xs text-slate-400 mt-1">* কাজ সম্পন্ন করে আয় বাড়ান</p>
          </div>
        </motion.section>

        {/* 🟢 ভেরিফিকেশন অ্যালার্ট ব্যানার */}
        <AnimatePresence>
          {showAlert && (
            <motion.div
              variants={itemVariant}
              className="relative rounded-2xl p-4 md:p-5 bg-amber-50 border border-amber-200 flex items-start gap-3 md:gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-amber-900 font-semibold text-sm md:text-base">
                  আপনার অ্যাকাউন্ট এখনো ভেরিফাইড নয়!
                </p>
                <p className="text-amber-700/80 text-xs md:text-sm mt-0.5">
                  সব ফিচার ব্যবহার করতে দ্রুত আপনার অ্যাকাউন্ট ভেরিফাই করুন।
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/verify")}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold shadow-md shadow-amber-500/30 whitespace-nowrap"
              >
                ভেরিফাই করুন
              </motion.button>
              <button
                onClick={() => setShowAlert(false)}
                className="absolute top-2 right-2 text-amber-500 hover:text-amber-700"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🟢 সোশ্যাল মিডিয়া কুইক লিংক */}
        <motion.section variants={itemVariant}>
          <h3 className="text-lg font-bold text-emerald-900 mb-3">সোশ্যাল মিডিয়া</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group rounded-2xl p-4 bg-white border border-emerald-100 shadow-sm hover:shadow-xl ${s.glow} transition-all flex items-center gap-3`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-900 group-hover:text-emerald-700">{s.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        {/* 🟢 সার্ভিস গ্রিড */}
        <motion.section variants={itemVariant}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-emerald-900">আমাদের সার্ভিস সমূহ</h3>
            <span className="text-xs text-emerald-600 font-medium">{services.length} টি সার্ভিস</span>
          </div>
          <motion.div
            variants={containerVariant}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
          >
            {services.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariant}
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer rounded-2xl p-4 bg-white/70 backdrop-blur-md border border-emerald-100/80 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all flex flex-col items-center text-center gap-2"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${srv.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold text-emerald-900 leading-tight">{srv.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* 🟢 রেফারেল বক্স */}
        <motion.section variants={itemVariant}>
          <div className="rounded-3xl p-6 bg-white border-2 border-dashed border-emerald-300 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-emerald-900">রেফার করে ইনকাম করুন</h3>
            </div>
            <p className="text-sm text-slate-500 mb-4">
              আপনার রেফারেল লিংক শেয়ার করে বন্ধুদের যুক্ত করুন এবং প্রতি রেফারেলে আয় করুন ৳১০।
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                readOnly
                value={referralLink}
                className="flex-1 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={copyReferral}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all ${
                  copied
                    ? "bg-emerald-600 text-white shadow-emerald-600/30"
                    : "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-amber-500/30"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> কপি হয়েছে!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> কপি লিংক
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* 🟢 প্রোফাইল স্ট্যাটাস */}
        <motion.section variants={itemVariant} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl p-5 bg-white border border-emerald-100 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-500 text-sm font-medium">প্রোফাইল স্ট্যাটাস</span>
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="font-semibold text-emerald-700">অ্যাকাউন্ট ভেরিফাইড</p>
            <p className="text-xs text-slate-400 mt-1">ইমেইল: {userData.email}</p>
          </div>
          <div className="rounded-2xl p-5 bg-white border border-emerald-100 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-500 text-sm font-medium">মোট রেফারেল</span>
              <Network className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-2xl font-extrabold text-emerald-900">০</p>
            <p className="text-xs text-slate-400 mt-1">এখনো কোনো রেফারেল নেই</p>
          </div>
        </motion.section>

        {/* 🟢 ফুটার */}
        <motion.footer variants={itemVariant} className="text-center py-6 mt-4">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 LITE EARNING • BUILT WITH ❤️ IN BD
          </p>
        </motion.footer>
      </motion.main>

      {/* 🟢 মোবাইল বটম নেভিগেশন */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-emerald-100 shadow-lg">
        <div className="flex items-center justify-around px-2 py-2">
          {[
            { label: "হোম", icon: Home, tab: "home" },
            { label: "ভেরিফাই", icon: ShieldCheck, tab: "verify" },
            { label: "ওয়ালেট", icon: Wallet, tab: "wallet" },
            { label: "নেটওয়ার্ক", icon: Network, tab: "network" },
          ].map((nav, idx) => {
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
```

## সংক্ষিপ্ত ফিচার তালিকা

- **টপ হেডার** — LITE EARNING ব্র্যান্ড, হ্যামবার্গার মেনু (ড্রপডাউন সহ), অনলাইন ইন্ডিকেটরযুক্ত প্রোফাইল অ্যাভাটার, ফুলস্ক্রিন টগল।
- **ওয়েলকাম + ব্যালেন্স কার্ড** — emerald গ্রেডিয়েন্ট হিরো + সাদা ব্যালেন্স কার্ড।
- **ভেরিফিকেশন অ্যালার্ট ব্যানার** — amber থিমে, ক্লোজ বাটন ও "ভেরিফাই করুন" CTA।
- **সোশ্যাল কুইক লিংক** — Facebook, YouTube, Telegram, WhatsApp, প্রতিটিতে হোভার গ্লো।
- **সার্ভিস গ্রিড** — তোমার দেওয়া ২০টি সার্ভিস, প্রতিটিতে আলাদা Lucide আইকন ও `whileHover={{ y: -5, scale: 1.03 }}`।
- **রেফারেল বক্স** — ড্যাশ বর্ডার, কপি বাটনে রিয়েল-টাইম ফিডব্যাক (✓ কপি হয়েছে)।
- **বটম নেভ** — হোম, ভেরিফাই, ওয়ালেট, নেটওয়ার্ক — `layoutId` দিয়ে স্মুথ অ্যাক্টিভ ইন্ডিকেটর।
- **থিম** — emerald + amber, soft `bg-emerald-50/50` ব্যাকগ্রাউন্ড, ডার্ক গ্রিন টাইপোগ্রাফি।
- **অ্যানিমেশন** — স্ট্যাগারড পেজ রেন্ডার, হোভার/ট্যাপ ইন্টারঅ্যাকশন, `AnimatePresence` দিয়ে মেনু ও অ্যালার্ট।

লোকাল স্টোরেজ থেকে `user` আনা, `handleLogout`, আর লগইন না থাকলে রিডাইরেক্ট — তোমার আগের লজিক হুবহু রাখা হয়েছে।The previous responses hit HTTP errors before the full code reached you — here's the complete `app/dashboard/page.js` with everything wired up.

```jsx
"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, LogOut, Wallet, Gift, CheckCircle, Menu, X, Maximize2,
  Minimize2, Facebook, Youtube, Send, MessageCircle, AlertTriangle,
  Smartphone, Car, Keyboard, HelpCircle, AppWindow, RefreshCw,
  Briefcase, FileText, Store, Mail, Instagram, Target, Crown,
  DollarSign, Cpu, Coins, Share2, Globe, Copy, Check, Bell,
  Home, ShieldCheck, Network, ChevronRight, Zap, TrendingUp,
} from "lucide-react";

// স্ট্যাগারড পেজ অ্যানিমেশন
const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// সার্ভিস তালিকা
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
  { name: "ফেসবুক মার্কেটিং", icon: Facebook, color: "from-blue-500 to-emerald-600" },
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
      {/* ===== TOP HEADER ===== */}
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
              className="p-2 rounded-xl hover:bg-emerald-100 text-emerald-700 transition"
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

      {/* ===== MAIN ===== */}
      <motion.main
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 py-6 space-y-6"
      >
        {/* Welcome + Balance Hero */}
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
            variants={cardVariant}
            className="bg-white rounded-3xl border border-emerald-100 p-6 shadow-sm flex flex-col justify-center"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-emerald-600 font-semibold">স্ট্যাটাস</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
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
                <AlertTriangle className="w-5 h-5 text-amber-600" />
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
                variants={cardVariant}
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
```

সব ফিচার এক জায়গায় — হেডার (হ্যামবার্গার + ফুলস্ক্রিন + অনলাইন অ্যাভাটার), ভেরিফিকেশন অ্যালার্ট, সোশ্যাল কুইক লিংক, ২০টি সার্ভিস কার্ড, রেফারেল বক্স (কপি ফিডব্যাক সহ), আর মোবাইল বটম নেভ (`layoutId` অ্যাক্টিভ ইন্ডিকেটর)। তোমার আগের `localStorage` লজিক, `handleLogout`, আর লগইন রিডাইরেক্ট হুবহু রাখা হয়েছে।কোডটি সম্পূর্ণ — এখানেই শেষ। উপরের পুরো `app/dashboard/page.js` ফাইলটি কপি করে ব্যবহার করতে পারবেন, সব সেকশন (হেডার, সোশ্যাল লিংক, ভেরিফিকেশন ব্যানার, ২০টি সার্ভিস কার্ড, রেফারেল বক্স, বটম নেভ) একসাথে কাজ করবে।
