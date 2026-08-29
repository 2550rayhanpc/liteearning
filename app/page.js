import React from "react";
import { 
  Rocket, LogIn, UserPlus, Zap, ShieldCheck, Headphones, 
  MessageCircle, Star, ArrowRight, Info, Menu 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-x-hidden">
      
      {/* 1. HEADER / NAVBAR */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 px-4 md:px-8 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-emerald-800 p-1">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 font-bold text-xl text-emerald-900 tracking-wide">
            <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm shadow-md border-2 border-amber-400">
              NK
            </div>
            <span>NIK EARNING</span>
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
      <section className="px-4 pt-12 pb-16 text-center max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-black text-emerald-900 tracking-tight leading-tight mb-4">
          স্মার্ট উপার্জন <br /> প্ল্যাটফর্ম
        </h1>
        <p className="text-emerald-900/80 text-base md:text-lg max-w-2xl font-medium mb-8 leading-relaxed">
          প্রিমিয়াম টাস্ক, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট — <span className="text-amber-600 font-bold">NIK EARNING</span> এ আপনি পাবেন সেরা ডিজিটাল আর্নিং এক্সপেরিয়েন্স।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-full shadow-lg shadow-amber-500/30 transition transform hover:-translate-y-0.5">
            <Rocket className="w-5 h-5" />
            <span>ফ্রি রেজিস্ট্রেশন</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3.5 bg-emerald-100/60 hover:bg-emerald-100 text-emerald-800 font-bold border border-emerald-300/60 rounded-full transition">
            <LogIn className="w-5 h-5" />
            <span>লগইন করুন</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { value: "১৪৭", label: "সক্রিয় ইউজার", color: "text-emerald-600" },
            { value: "৳ ৪৯০", label: "মোট পেমেন্ট", color: "text-amber-500" },
            { value: "২৪/৭", label: "সাপোর্ট", color: "text-emerald-600" },
            { value: "১০০%", label: "নিরাপদ", color: "text-amber-500" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-emerald-100 shadow-sm text-center">
              <h3 className={`text-2xl md:text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</h3>
              <p className="text-xs md:text-sm text-slate-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURES SECTION ("কেন NIK EARNING?") */}
      <section className="px-4 py-16 bg-white/50 border-t border-emerald-100/60">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-2">
            কেন <span className="text-amber-500">NIK EARNING?</span>
          </h2>
          <p className="text-slate-600 font-medium mb-10">আধুনিক প্রযুক্তি ও প্রিমিয়াম সেবা একত্রে</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-200/60 flex items-center justify-center text-emerald-700 mb-4">
                <Zap className="w-8 h-8 fill-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">দ্রুত পেমেন্ট</h3>
              <p className="text-slate-600 text-sm mb-4">বিকাশ, নগদ বা ব্যাংকে তাৎক্ষণিক পেমেন্ট পাবেন</p>
              <span className="mt-auto px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">প্রিমিয়াম</span>
            </div>

            {/* Feature 2 */}
            <div className="bg-emerald-50/50 p-6 rounded-3xl border-2 border-emerald-500/60 shadow-md flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-600/30">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">১০০% নিরাপদ</h3>
              <p className="text-slate-600 text-sm mb-4">আপনার ডেটা ও ইনকাম সম্পূর্ণ সুরক্ষিত</p>
              <span className="mt-auto px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">ভেরিফাইড</span>
            </div>

            {/* Feature 3 */}
            <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-200/60 flex items-center justify-center text-emerald-700 mb-4">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">২৪/৭ সাপোর্ট</h3>
              <p className="text-slate-600 text-sm mb-4">যেকোনো সময় আমাদের টিম আপনার পাশে</p>
              <span className="mt-auto px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">সাপোর্ট</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
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
              review: '"NIK EARNING প্ল্যাটফর্মে আমার অভিজ্ঞতা খুবই দারুণ! এখানে কাজ করা বেশ সহজ এবং সব নিয়ম পরিষ্কারভাবে বুঝিয়ে দেওয়া আছে। পেমেন্ট সিস্টেম এবং সাপোর্টিং টিম অনেক হেল্পফুল।"',
              badges: ["ভেরিফাইড", "সফল"]
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm flex flex-col">
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
      </section>

      {/* 5. CTA BANNER */}
      <section className="px-4 py-8">
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
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl z-50 transition transform hover:scale-110"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* 6. FOOTER */}
      <footer className="bg-white border-t border-emerald-100 pt-10 pb-6 px-4 text-center mt-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-lg mb-3 shadow-md border-2 border-amber-400">
            NK
          </div>
          <h3 className="font-extrabold text-xl text-emerald-900 mb-2">NIK EARNING</h3>
          <p className="text-slate-600 text-sm max-w-md mb-6">
            বাংলাদেশের সেরা প্রিমিয়াম ডিজিটাল আর্নিং প্ল্যাটফর্ম। স্মার্ট টাস্ক, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট।
          </p>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-emerald-800 mb-6">
            <a href="#" className="hover:text-emerald-600">হোম</a>
            <a href="#" className="hover:text-emerald-600">আমাদের সম্পর্কে</a>
            <a href="#" className="hover:text-emerald-600">যোগাযোগ</a>
            <a href="#" className="hover:text-emerald-600">প্রাইভেসি পলিসি</a>
            <a href="#" className="hover:text-emerald-600">টার্মস</a>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            © 2026 NIK EARNING • BUILT WITH ❤️ IN BD
          </p>
        </div>
      </footer>

    </div>
  );
}
