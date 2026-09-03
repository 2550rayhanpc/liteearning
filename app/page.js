"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Rocket, LogIn, UserPlus, Zap, ShieldCheck, Headphones, 
  MessageCircle, Star, ArrowRight, Info, Menu, Quote 
} from "lucide-react";

// ইংরেজি সংখ্যাকে বাংলায় রূপান্তর
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

// 🟢 রিভিউ কার্ডের জন্য স্ট্যাগার অ্যানিমেশন
const reviewContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const reviewCardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// 🟢 রিভিউ ডেটা
const reviews = [
  {
    name: "সাদিয়া আক্তার",
    role: "স্টুডেন্ট • ঢাকা",
    initial: "সা",
    quote: "পড়াশোনার পাশাপাশি ঘরে বসে কাজ করছি। পেমেন্ট বিকাশে দ্রুত পেয়ে যাই, একদমই দেরি হয় না।",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    name: "রাকিব হাসান",
    role: "ফ্রিল্যান্সার • চট্টগ্রাম",
    initial: "রা",
    quote: "প্ল্যাটফর্মটা খুবই ইউজার-ফ্রেন্ডলি। টাস্কগুলো সহজ আর সাপোর্ট টিম সবসময় হেল্পফুল।",
    color: "from-amber-500 to-amber-600"
  },
  {
    name: "নুসরাত জাহান",
    role: "গৃহিণী • সিলেট",
    initial: "নু",
    quote: "সংসার সামলে অবসর সময়ে ভালো একটা আয়ের পথ পেয়েছি। LITE EARNING সত্যিই নির্ভরযোগ্য।",
    color: "from-teal-500 to-emerald-600"
  },
  {
    name: "তানভীর আহমেদ",
    role: "চাকরিজীবী • রাজশাহী",
    initial: "তা",
    quote: "চাকরির পাশাপাশি বাড়তি ইনকামের জন্য পারফেক্ট। ২৪/৭ সাপোর্ট পাওয়ায় নিশ্চিন্তে কাজ করি।",
    color: "from-emerald-600 to-teal-600"
  }
];

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // ✅ আপডেট করা নেভিগেশন ও লোডিং ফাংশন
  const handleNavigation = (path = "/login") => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(path);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-x-hidden bg-[#dcfce7]/60 select-none">
      
      {/* 🟢 ১. আপডেট করা নতুন লোডিং অ্যানিমেশন */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#043e2e]/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
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

            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="text-amber-300 text-lg font-extrabold tracking-widest flex items-center gap-1 drop-shadow-md"
            >
              <span>প্রসেসিং হচ্ছে . . .</span>
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

          {/* ✅ লিঙ্ক আপডেট: /register */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/register')}
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
          <span>লাইভ • ২৪/৭ সক্রিয়</span>
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-emerald-950 tracking-tight leading-tight mb-6">
          স্মার্ট <span className="animate-gradient-text drop-shadow-sm">উপার্জন</span> <br /> প্ল্যাটফর্ম
        </h1>

        <p className="text-emerald-900/80 text-base md:text-lg max-w-2xl font-medium mb-8 leading-relaxed">
          প্রিমিয়াম টাস্ক, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট — <span className="text-amber-600 font-bold">LITE EARNING</span> এ আপনি পাবেন সেরা ডিজিটাল আর্নিং এক্সপেরিয়েন্স।
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* ✅ লিঙ্ক আপডেট: /register */}
          <motion.button 
            whileHover={{ scale: 1.06, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/register')}
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
            { label: "সক্রিয় ইউজার", target: 147, color: "text-emerald-600" },
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

      {/* FEATURES SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="px-4 py-16 bg-white/40 border-t border-emerald-100/60"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-2">
            কেন <span className="text-amber-500">LITE EARNING?</span>
          </h2>
          <p className="text-slate-600 font-medium mb-10">আধুনিক প্রযুক্তি ও প্রিমিয়াম সেবা একত্রে</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavigation('/login')}
              className="bg-white/80 p-6 rounded-3xl border border-emerald-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <motion.div 
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300"
              >
                <Zap className="w-8 h-8 fill-current" />
              </motion.div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">দ্রুত পেমেন্ট</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">বিকাশ, নগদ বা ব্যাংকে তাৎক্ষণিক পেমেন্ট পাবেন</p>
              <span className="mt-auto px-4 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full shadow-sm hover:bg-amber-600 transition">
                প্রিমিয়াম
              </span>
            </motion.div>

            {/* CARD 2 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavigation('/login')}
              className="bg-white/90 p-6 rounded-3xl border-2 border-emerald-500 shadow-md hover:shadow-xl flex flex-col items-center text-center relative cursor-pointer group"
            >
              <motion.div 
                whileHover={{ scale: 1.15 }}
                className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-600/30 group-hover:bg-emerald-700 transition"
              >
                <ShieldCheck className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">১০০% নিরাপদ</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">আপনার ডেটা ও ইনকাম সম্পূর্ণ সুরক্ষিত</p>
              <span className="mt-auto px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-sm hover:bg-emerald-700 transition">
                ভেরিফাইড
              </span>
            </motion.div>

            {/* CARD 3 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavigation('/login')}
              className="bg-white/80 p-6 rounded-3xl border border-emerald-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <motion.div 
                whileHover={{ rotate: -12, scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300"
              >
                <Headphones className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">২৪/৭ সাপোর্ট</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">যেকোনো সময় আমাদের টিম আপনার পাশে</p>
              <span className="mt-auto px-4 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full shadow-sm hover:bg-amber-600 transition">
                সাপোর্ট
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 🟢 নতুন: TESTIMONIALS / REVIEWS SECTION */}
      <section className="px-4 py-16 relative overflow-hidden">
        {/* সেকশন ব্যাকগ্রাউন্ড গ্লো */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 shadow-sm mb-4">
              <MessageCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>ইউজার রিভিউ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-2">
              আমাদের <span className="text-amber-500">ইউজাররা</span> কী বলছেন
            </h2>
            <p className="text-slate-600 font-medium mb-10">
              হাজারো সন্তুষ্ট ব্যবহারকারীর আস্থা LITE EARNING এ
            </p>
          </motion.div>

          {/* রিভিউ গ্রিড */}
          <motion.div
            variants={reviewContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                variants={reviewCardVariant}
                whileHover={{ y: -10, rotate: -1, scale: 1.03 }}
                className="group relative bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-emerald-100/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-600/10 hover:border-emerald-300 transition-all duration-300 text-left flex flex-col"
              >
                {/* কোট আইকন */}
                <Quote className="absolute top-5 right-5 w-8 h-8 text-emerald-100 group-hover:text-amber-200 transition-colors duration-300" />

                {/* অ্যাভাটার + নাম */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} text-white flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-white`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 text-sm leading-tight">{review.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{review.role}</p>
                  </div>
                </div>

                {/* ৫-স্টার রেটিং */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* রিভিউ টেক্সট */}
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  “{review.quote}”
                </p>

                {/* ভেরিফাইড ব্যাজ */}
                <div className="mt-4 pt-4 border-t border-emerald-50 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[11px] font-semibold text-emerald-600">ভেরিফাইড ইউজার</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <motion.section className="px-4 py-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-800 to-emerald-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
            আজই শুরু করুন <span className="text-amber-400">আপনার যাত্রা</span>
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6">প্রিমিয়াম ফিচার, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট — সবই আপনার জন্য</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* ✅ লিঙ্ক আপডেট: /register */}
            <motion.button 
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleNavigation('/register')}
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
