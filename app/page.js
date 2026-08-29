import {
  Rocket,
  Shield,
  Zap,
  Headset,
  ArrowRight,
  UserCheck,
  Star,
  Facebook,
  MessageCircle,
  Send,
  Youtube,
  Info,
  LogIn,
  UserPlus,
} from 'lucide-react'

// ---------------- Components ----------------

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e8f7f2] shadow-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#047857] to-[#064e3b] flex items-center justify-center text-white font-bold text-lg shadow-md">
          N
        </div>
        <span className="text-xl font-bold text-[#064e3b] tracking-tight">NIK EARNING</span>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#047857] text-[#047857] font-medium hover:bg-[#e8f7f2] transition">
          <LogIn className="w-4 h-4" />
          লগইন
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#047857] text-white font-medium hover:bg-[#064e3b] shadow-lg shadow-emerald-200 transition">
          <UserPlus className="w-4 h-4" />
          রেজিস্ট্রেশন
        </button>
      </div>
    </div>
  </nav>
)

const StatCard = ({ icon: Icon, title, value }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-[#e8f7f2] shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="w-12 h-12 rounded-full bg-[#e8f7f2] flex items-center justify-center text-[#047857] mb-3">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-[#064e3b]">{value}</h3>
    <p className="text-sm text-[#1e293b]/80 mt-1">{title}</p>
  </div>
)

const Hero = () => (
  <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#064e3b] leading-tight">
          স্মার্ট উপার্জন প্ল্যাটফর্ম
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#1e293b]/80 leading-relaxed">
          প্রিমিয়াম টাস্ক, দ্রুত পেমেন্ট এবং ২৪/৭ সাপোর্ট — NIK EARNING এ আপনি পাবেন সেরা ডিজিটাল আর্নিং এক্সপেরিয়েন্স।
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white font-bold text-lg shadow-xl shadow-orange-200 hover:shadow-2xl hover:scale-105 transition duration-300">
            <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition" />
            ফ্রি রেজিস্ট্রেশন
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/60 backdrop-blur-md border border-[#047857]/30 text-[#047857] font-bold text-lg hover:bg-white hover:border-[#047857] transition duration-300">
            <LogIn className="w-5 h-5" />
            লগইন করুন
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={UserCheck} title="Active Users" value="১৪৭ সক্রিয় ইউজার" />
        <StatCard icon={Zap} title="Total Payout" value="৳ ৪৯০ মোট পেমেন্ট" />
        <StatCard icon={Headset} title="Support" value="২৪/৭ সাপোর্ট" />
        <StatCard icon={Shield} title="Safety" value="১০০% নিরাপদ" />
      </div>
    </div>
  </section>
)

const FeatureCard = ({ icon: Icon, title, desc, badge }) => (
  <div className="relative p-6 sm:p-8 bg-white rounded-2xl border border-[#e8f7f2] shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">
    {badge && (
      <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full bg-[#e8f7f2] text-[#047857]">
        {badge}
      </span>
    )}
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e8f7f2] to-white border border-[#e8f7f2] flex items-center justify-center text-[#047857] mb-5">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-[#064e3b] mb-3">{title}</h3>
    <p className="text-[#1e293b]/80 leading-relaxed">{desc}</p>
  </div>
)

const Features = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#064e3b]">কেন NIK EARNING?</h2>
        <p className="mt-4 text-lg text-[#1e293b]/70">আধুনিক প্রযুক্তি ও প্রিমিয়াম সেবা একত্রে</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Zap}
          title="দ্রুত পেমেন্ট"
          desc="বিকাশ, নগদ বা ব্যাংকে তাৎক্ষণিক পেমেন্ট পাবেন।"
          badge="প্রিমিয়াম"
        />
        <FeatureCard
          icon={Shield}
          title="১০০% নিরাপদ"
          desc="আপনার ডেটা ও ইনকাম সম্পূর্ণ সুরক্ষিত।"
          badge="ভেরিফাইড"
        />
        <FeatureCard
          icon={Headset}
          title="২৪/৭ সাপোর্ট"
          desc="যেকোনো সময় আমাদের টিম আপনার পাশে।"
        />
      </div>
    </div>
  </section>
)

const ReviewCard = ({ name, text, badge }) => (
  <div className="p-6 bg-white rounded-2xl border border-[#e8f7f2] shadow-md hover:shadow-lg transition">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#047857] to-[#064e3b] flex items-center justify-center text-white font-bold text-lg">
        {name[0]}
      </div>
      <div>
        <h4 className="font-bold text-[#064e3b]">{name}</h4>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
          ))}
        </div>
      </div>
      <span className="ml-auto px-3 py-1 text-xs font-bold rounded-full bg-[#e8f7f2] text-[#047857]">
        {badge}
      </span>
    </div>
    <p className="text-[#1e293b]/80 italic leading-relaxed">“{text}”</p>
  </div>
)

const Testimonials = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#064e3b]">ইউজারদের মতামত</h2>
        <p className="mt-4 text-lg text-[#1e293b]/70">আমাদের সন্তুষ্ট ইউজারদের কথা শুনুন</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <ReviewCard
          name="রাকিব হাসান"
          badge="ভেরিফাইড"
          text="NIK EARNING সত্যিই অনেক ভালো প্ল্যাটফর্ম। প্রতি সপ্তাহেই পেমেন্ট পেয়েছি।"
        />
        <ReviewCard
          name="সাবrina আক্তার"
          badge="সফল"
          text="সাপোর্ট টিম অসাধারণ। রাত ১২টায়ও রিপ্লাই পেয়েছি।"
        />
        <ReviewCard
          name="তানভীর ইসলাম"
          badge="ভেরিফাইড"
          text="নিরাপদ এবং দ্রুত পেমেন্ট। ফ্রিল্যান্সিং এর পাশাপাশি ভালো এক্সট্রা আয়।"
        />
      </div>
    </div>
  </section>
)

const CTABanner = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#047857] to-[#064e3b] p-10 sm:p-16 text-center shadow-2xl">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            আজই শুরু করুন আপনার <span className="text-[#f59e0b]">যাত্রা</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            ফ্রি রেজিস্ট্রেশন করুন এবং আজ থেকেই ডিজিটাল আর্নিং শুরু করুন।
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#047857] font-bold text-lg hover:bg-[#e8f7f2] shadow-xl transition duration-300">
              ফ্রি রেজিস্ট্রেশন
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition duration-300">
              <Info className="w-5 h-5" />
              আরও জানুন
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const SocialButton = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    aria-label={label}
    className="w-11 h-11 rounded-full bg-[#e8f7f2] text-[#047857] flex items-center justify-center hover:bg-[#047857] hover:text-white transition duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
)

const Footer = () => (
  <footer className="bg-white border-t border-[#e8f7f2] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto text-center">
      {/* Logo & Tagline */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#047857] to-[#064e3b] flex items-center justify-center text-white font-bold text-2xl shadow-md">
          N
        </div>
        <h3 className="mt-4 text-2xl font-bold text-[#064e3b]">NIK EARNING</h3>
        <p className="mt-3 text-[#1e293b]/70 max-w-lg mx-auto">
          বাংলাদেশের সেরা প্রিমিয়াম ডিজিটাল আর্নিং প্ল্যাটফর্ম। দ্রুত পেমেন্ট, নিরাপত্তা এবং সর্বোত্তম সাপোর্ট আমাদের অঙ্গীকার।
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <SocialButton icon={Facebook} href="#" label="Facebook" />
        <SocialButton icon={MessageCircle} href="#" label="WhatsApp" />
        <SocialButton icon={Send} href="#" label="Telegram" />
        <SocialButton icon={Youtube} href="#" label="YouTube" />
      </div>

      {/* Nav Links */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#1e293b]/70">
        <a href="#" className="hover:text-[#047857] transition">হোম</a>
        <a href="#" className="hover:text-[#047857] transition">আমাদের সম্পর্কে</a>
        <a href="#" className="hover:text-[#047857] transition">যোগাযোগ</a>
        <a href="#" className="hover:text-[#047857] transition">প্রাইভেসি পলিসি</a>
        <a href="#" className="hover:text-[#047857] transition">টার্মস</a>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-[#e8f7f2] text-sm text-[#1e293b]/60">
        © 2026 NIK EARNING • BUILT WITH ❤️ IN BD
      </div>
    </div>
  </footer>
)

const WhatsAppFloat = () => (
  <a
    href="#"
    className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
    aria-label="WhatsApp Support"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
)

// ---------------- Main Page ----------------

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
