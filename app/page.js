"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, LogIn, UserPlus, Zap, ShieldCheck, Headphones, 
  MessageCircle, Star, ArrowRight, Info, Menu 
} from "lucide-react";

// ইংরেজি সংখ্যাকে বাংলায় রূপান্তর
const toBanglaDigit = (num) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (digit) => banglaDigits[digit]);
};

// কাউন্টার কম্পোনেন্ট
function Counter({ targetNumber, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 3500;
      const increment = targetNumber / (duration / 20);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  return (
    <span ref={ref}>
      {prefix}{toBanglaDigit(count)}{suffix}
    </span>
  );
}

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // লগইন বা রেজিস্ট্রেশন বাটনে ক্লিক করলে কাজ করার ফাংশন
  const handleNavigation = (path = "/login") => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(path);
    }, 1500); // ১.৫ সেকেন্ড লোডিং এনিমেশন দেখাবে
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-x-hidden bg-[#dcfce7]/60 select-none">
      
      {/* 🟢১. লোডিং স্ক্রিন অ্যানিমেশন */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#065f46] flex flex-col items-center justify-center"
          >
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

      {/* BACKGROUND GRAPHICS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-200/60 rounded-full blur-2xl"></div>
      </div>

      {/* HEADER / NAVBAR */}
      <header className="w-full bg-white/70 backdrop-blur-md border-b border-emerald-100/80 sticky top-0 z-40 px-4 md:px-8 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-emerald-800 p-1 rounded-lg focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
          <div className="flex items-center gap-2 font-bold text-xl text-emerald-900 tracking-wide cursor-pointer" onClick={() => handleNavigation('/')}>
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm shadow-md border-2 border-amber-400"
            >
              LE
            </motion.div>
            <span>LITE EARNING</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/login')}
            className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            <span>লগইন</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/login')}
            className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>রেজিস্ট্রেশন</span>
          </motion.button>
        </div>
      </header>

      {/* HERO SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="px-4 pt-10 pb-16 text-center max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>লাইভ • ২৪/৭ সক্রিয়</span>
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-emerald-950 tracking-tight leading-tight mb-6">
          স্মার্ট <span className="animate-gradient-text drop-shadow-sm">উপার্জন</span> <br /> প্ল্যাটফর্ম
        </h1>

        <p className="text-emerald-900/80 text-base md:text-lg max-w-2xl font-medium mb-8 leading-relaxed">
          প্রিমিয়াম টাস্ক, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট — <span className="text-amber-600 font-bold">LITE EARNING</span> এ আপনি পাবেন সেরা ডিজিটাল আর্নিং এক্সপেরিয়েন্স।
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.button 
            whileHover={{ scale: 1.06, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/login')}
            className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-full shadow-lg shadow-amber-500/30 transition cursor-pointer"
          >
            <Rocket className="w-5 h-5 animate-bounce" />
            <span>ফ্রি রেজিস্ট্রেশন</span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/login')}
            className="flex items-center gap-2 px-7 py-3.5 bg-white/70 hover:bg-white text-emerald-900 font-bold border border-emerald-200 rounded-full transition shadow-sm cursor-pointer"
          >
            <LogIn className="w-5 h-5" />
            <span>লগইন করুন</span>
          </motion.button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { label: "সক্রিয় ইউজার", target: 147, color: "text-emerald-600" },
            { label: "মোট পেমেন্ট", target: 490, prefix: "৳ ", color: "text-amber-500" },
            { label: "সাপোর্ট", text: "২৪/৭", color: "text-emerald-600" },
            { label: "নিরাপদ", target: 100, suffix: "%", color: "text-amber-500" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-emerald-100/80 shadow-sm text-center"
            >
              <h3 className={`text-2xl md:text-3xl font-extrabold ${stat.color} mb-1`}>
                {stat.text ? stat.text : <Counter targetNumber={stat.target} prefix={stat.prefix} suffix={stat.suffix} />}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA BANNER */}
      <motion.section className="px-4 py-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-800 to-emerald-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
            আজই শুরু করুন <span className="text-amber-400">আপনার যাত্রা</span>
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6">প্রিমিয়াম ফিচার, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট — সবই আপনার জন্য</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleNavigation('/login')}
              className="flex items-center gap-2 px-7 py-3 bg-white text-emerald-900 font-bold rounded-full hover:bg-emerald-50 transition shadow-lg cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>ফ্রি রেজিস্ট্রেশন</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-white/80 border-t border-emerald-100 pt-10 pb-6 px-4 text-center mt-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 LITE EARNING • BUILT WITH ❤️ IN BD
          </p>
        </div>
      </footer>

    </div>
  );
}
