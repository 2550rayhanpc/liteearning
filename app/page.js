"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Rocket, LogIn, UserPlus, Zap, ShieldCheck, Headphones, 
  MessageCircle, Star, ArrowRight, Info, Menu 
} from "lucide-react";

// ইংরেজি সংখ্যাকে বাংলায় রূপান্তর করার ফাংশন
const toBanglaDigit = (num) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (digit) => banglaDigits[digit]);
};

// ধীরগতির ও স্মুথ লাইভ নাম্বার কাউন্টার কম্পোনেন্ট
function Counter({ targetNumber, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 3500; // ৩.৫ সেকেন্ড (Slow কাউন্টিং)
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

// স্ক্রোল অ্যানিমেশন এরিয়া
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-x-hidden bg-[#dcfce7]/60">
      
      {/* BACKGROUND GRAPHICS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-200/60 rounded-full blur-2xl"></div>
      </div>

      {/* 1. HEADER / NAVBAR */}
      <header className="w-full bg-white/70 backdrop-blur-md border-b border-emerald-100/80 sticky top-0 z-50 px-4 md:px-8 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-emerald-800 p-1">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 font-bold text-xl text-emerald-900 tracking-wide">
            <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm shadow-md border-2 border-amber-400">
              LE
            </div>
            <span>LITE EARNING</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition">
            <LogIn className="w-4 h-4" />
            <span>লগইন</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition shadow-md shadow-emerald-600/20">
            <UserPlus className="w-4 h-4" />
            <span>রেজিস্ট্রেশন</span>
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
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
          <button className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-full shadow-lg shadow-amber-500/30 transition transform hover:-translate-y-0.5">
            <Rocket className="w-5 h-5 animate-bounce" />
            <span>ফ্রি রেজিস্ট্রেশন</span>
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-white/60 hover:bg-white text-emerald-900 font-bold border border-emerald-200 rounded-full transition shadow-sm">
            <LogIn className="w-5 h-5" />
            <span>লগইন করুন</span>
          </button>
        </div>

        {/* LIVE SLOW COUNTER STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <div className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-emerald-100/80 shadow-sm text-center transform transition hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-600 mb-1">
              <Counter targetNumber={147} />
            </h3>
            <p className="text-xs md:text-sm text-slate-600 font-semibold">সক্রিয় ইউজার</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-emerald-100/80 shadow-sm text-center transform transition hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-amber-500 mb-1">
              <Counter targetNumber={490} prefix="৳ " />
            </h3>
            <p className="text-xs md:text-sm text-slate-600 font-semibold">মোট পেমেন্ট</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-emerald-100/80 shadow-sm text-center transform transition hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-600 mb-1">
              ২৪/৭
            </h3>
            <p className="text-xs md:text-sm text-slate-600 font-semibold">সাপোর্ট</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-emerald-100/80 shadow-sm text-center transform transition hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-amber-500 mb-1">
              <Counter targetNumber={100} suffix="%" />
            </h3>
            <p className="text-xs md:text-sm text-slate-600 font-semibold">নিরাপদ</p>
          </div>
        </div>
      </motion.section>

      {/* 3. FEATURES SECTION */}
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
            <div className="bg-white/70 p-6 rounded-3xl border border-emerald-100/80 flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Zap className="w-8 h-8 fill-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">দ্রুত পেমেন্ট</h3>
              <p className="text-slate-600 text-sm mb-4">বিকাশ, নগদ বা ব্যাংকে তাৎক্ষণিক পেমেন্ট পাবেন</p>
              <span className="mt-auto px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">প্রিমিয়াম</span>
            </div>

            <div className="bg-white/90 p-6 rounded-3xl border-2 border-emerald-500/80 shadow-md flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-600/30">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">১০০% নিরাপদ</h3>
              <p className="text-slate-600 text-sm mb-4">আপনার ডেটা ও ইনকাম সম্পূর্ণ সুরক্ষিত</p>
              <span className="mt-auto px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">ভেরিফাইড</span>
            </div>

            <div className="bg-white/70 p-6 rounded-3xl border border-emerald-100/80 flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">২৪/৭ সাপোর্ট</h3>
              <p className="text-slate-600 text-sm mb-4">যেকোনো সময় আমাদের টিম আপনার পাশে</p>
              <span className="mt-auto px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">সাপোর্ট</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. REVIEWS SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="px-4 py-16 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-900 mb-10">
          ইউজারদের <span className="text-amber-500">মতামত</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Mamun islim",
              review: '"Nice"',
              badges: ["ভেরিফাইড", "সফল"]
            },
            {
              name: "MD Mamun Hossen",
              review: '"LITE EARNING প্ল্যাটফর্মে আমার অভিজ্ঞতা খুবই দারুণ! এখানে কাজ করা বেশ সহজ এবং সব নিয়ম পরিষ্কারভাবে বুঝিয়ে দেওয়া আছে। পেমেন্ট সিস্টেম এবং সাপোর্টিং টিম অনেক হেল্পফুল।"',
              badges: ["ভেরিফাইড", "সফল"]
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/80 p-6 rounded-3xl border border-emerald-100 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{item.name}</h4>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic mb-4 flex-grow">{item.review}</p>
              <div className="flex gap-2">
                {item.badges.map((b, i) => (
                  <span key={i} className={`text-xs px-2.5 py-1 rounded-full font-semibold text-white ${i === 0 ? "bg-emerald-500" : "bg-amber-500"}`}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 5. CTA BANNER */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="px-4 py-8"
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-800 to-emerald-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
            আজই শুরু করুন <span className="text-amber-400">আপনার যাত্রা</span>
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6">প্রিমিয়াম ফিচার, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট — সবই আপনার জন্য</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 font-bold rounded-full hover:bg-emerald-50 transition">
              <UserPlus className="w-4 h-4" />
              <span>ফ্রি রেজিস্ট্রেশন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-emerald-500 text-white font-bold rounded-full hover:bg-emerald-800/50 transition">
              <Info className="w-4 h-4" />
              <span>আরও জানুন</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl z-50 transition transform hover:scale-110 animate-bounce"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* 6. FOOTER */}
      <footer className="bg-white/80 border-t border-emerald-100 pt-10 pb-6 px-4 text-center mt-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-lg mb-3 shadow-md border-2 border-amber-400">
            LE
          </div>
          <h3 className="font-extrabold text-xl text-emerald-900 mb-2">LITE EARNING</h3>
          <p className="text-slate-600 text-sm max-w-md mb-6">
            বাংলাদেশের সেরা প্রিমিয়াম ডিজিটাল আর্নিং প্ল্যাটফর্ম। স্মার্ট টাস্ক, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট।
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-emerald-800 mb-6">
            <a href="#" className="hover:text-emerald-600">হোম</a>
            <a href="#" className="hover:text-emerald-600">আমাদের সম্পর্কে</a>
            <a href="#" className="hover:text-emerald-600">যোগাযোগ</a>
            <a href="#" className="hover:text-emerald-600">প্রাইভেসি পলিসি</a>
            <a href="#" className="hover:text-emerald-600">টার্মস</a>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            © 2026 LITE EARNING • BUILT WITH ❤️ IN BD
          </p>
        </div>
      </footer>

    </div>
  );
}
