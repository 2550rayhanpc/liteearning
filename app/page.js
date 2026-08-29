"use client";

import React from "react";
import { 
  Rocket, Shield, Zap, Headset, ArrowRight, 
  UserCheck, CheckCircle, Star, MessageCircle,
  Facebook, Youtube, Send, Info
} from "lucide-react";

// --- Sub-Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e8f7f2]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="bg-[#047857] p-1.5 rounded-lg">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-[#047857] tracking-tight">NIK EARNING</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#047857] font-semibold px-4 py-2 hover:bg-[#e8f7f2] rounded-xl transition-all">
            লগইন
          </button>
          <button className="bg-[#047857] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-emerald-900/10 hover:bg-[#065f46] transition-all">
            রেজিস্ট্রেশন
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#e8f7f2] to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-emerald-100 shadow-sm mb-6 animate-bounce">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
        <span className="text-sm font-medium text-[#047857]">বর্তমানে ১৪৭+ ইউজার অনলাইনে আছে</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#064e3b] leading-tight mb-6">
        স্মার্ট <span className="text-[#047857]">উপার্জন</span> প্ল্যাটফর্ম
      </h1>
      
      <p className="max-w-2xl mx-auto text-lg text-[#1e293b] leading-relaxed mb-10">
        প্রিমিয়াম টাস্ক, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট — <span className="font-bold">NIK EARNING</span> এ আপনি পাবেন সেরা ডিজিটাল আর্নিং এক্সপেরিয়েন্স।
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/20 hover:scale-105 transition-all">
          <Rocket className="w-5 h-5" /> ফ্রি রেজিস্ট্রেশন
        </button>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/40 backdrop-blur-md border border-emerald-200 text-[#047857] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all">
          লগইন করুন
        </button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "সক্রিয় ইউজার", val: "১৪৭+", icon: UserCheck },
          { label: "মোট পেমেন্ট", val: "৳ ৪৯০", icon: CheckCircle },
          { label: "সাপোর্ট", val: "২৪/৭", icon: Headset },
          { label: "নিরাপদ", val: "১০০%", icon: Shield },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[#e8f7f2] flex flex-col items-center">
            <item.icon className="w-8 h-8 text-[#047857] mb-3" />
            <div className="text-2xl font-bold text-[#064e3b]">{item.val}</div>
            <div className="text-sm text-slate-500 font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4">কেন NIK EARNING?</h2>
        <p className="text-slate-500 max-w-lg mx-auto">আধুনিক প্রযুক্তি ও প্রিমিয়াম সেবা একত্রে</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "দ্রুত পেমেন্ট",
            desc: "বিকাশ, নগদ বা ব্যাংকে তাৎক্ষণিক পেমেন্ট পাবেন",
            icon: Zap,
            badge: "প্রিমিয়াম"
          },
          {
            title: "১০০% নিরাপদ",
            desc: "আপনার ডেটা ও ইনকাম সম্পূর্ণ সুরক্ষিত",
            icon: Shield,
            badge: "ভেরিফাইড"
          },
          {
            title: "২৪/৭ সাপোর্ট",
            desc: "যেকোনো সময় আমাদের টিম আপনার পাশে",
            icon: Headset,
            badge: "লাইভ"
          }
        ].map((feat, idx) => (
          <div key={idx} className="group p-8 rounded-3xl border border-[#e8f7f2] hover:border-[#047857] hover:shadow-2xl hover:shadow-emerald-900/5 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-[#e8f7f2] text-[#047857] rounded-xl group-hover:bg-[#047857] group-hover:text-white transition-colors">
                <feat.icon className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 uppercase tracking-widest">{feat.badge}</span>
            </div>
            <h3 className="text-xl font-bold text-[#064e3b] mb-3">{feat.title}</h3>
            <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-[#f8fafc]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-[#064e3b] mb-12">ইউজারদের মতামত</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-[#047857] font-bold">U{i}</div>
              <div>
                <h4 className="font-bold text-[#1e293b]">ইউজার নেম {i}</h4>
                <div className="flex text-amber-400 w-4 h-4">
                  {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={14} />)}
                </div>
              </div>
            </div>
            <p className="text-slate-600 italic mb-4">"এই প্ল্যাটফর্মটি সত্যিই অসাধারণ। পেমেন্ট সিস্টেম খুব দ্রুত এবং কাজগুলো সহজ।"</p>
            <div className="flex gap-2">
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">ভেরিফাইড</span>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">সফল</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-12 px-4">
    <div className="max-w-5xl mx-auto bg-[#047857] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          আজই শুরু করুন আপনার <span className="text-[#f59e0b]">যাত্রা</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-[#047857] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all">
            ফ্রি রেজিস্ট্রেশন <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-emerald-400/40 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
            <Info className="w-5 h-5" /> আরও জানুন
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Zap className="text-[#047857] w-6 h-6" />
        <span className="text-2xl font-bold text-[#047857]">NIK EARNING</span>
      </div>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        বাংলাদেশের সেরা প্রিমিয়াম ডিজিটাল আর্নিং প্ল্যাটফর্ম। আমরা দিচ্ছি ১০০% পেমেন্ট গ্যারান্টি।
      </p>
      
      {/* Socials */}
      <div className="flex justify-center gap-4 mb-10">
        {[Facebook, MessageCircle, Send, Youtube].map((Icon, idx) => (
          <a key={idx} href="#" className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-full text-slate-600 hover:bg-[#047857] hover:text-white transition-all">
            <Icon size={20} />
          </a>
        ))}
      </div>

      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-600 mb-12">
        {["হোম", "আমাদের সম্পর্কে", "যোগাযোগ", "প্রাইভেসি পলিসি", "টার্মস"].map((link) => (
          <a key={link} href="#" className="hover:text-[#047857]">{link}</a>
        ))}
      </nav>
      
      <div className="pt-8 border-t border-slate-100 text-slate-400 text-sm">
        © 2026 <span className="font-bold">NIK EARNING</span> • BUILT WITH ❤️ IN BD
      </div>
    </div>
  </footer>
);

const WhatsAppFAB = () => (
  <a 
    href="https://wa.me/your-number" 
    target="_blank" 
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
  >
    <MessageCircle size={28} />
  </a>
);

// --- Main Page Export ---

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
