import { Hind_Siliguri } from 'next/font/google'
import './globals.css'

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
})

export const metadata = {
  title: 'NIK EARNING - স্মার্ট উপার্জন প্ল্যাটফর্ম',
  description: 'বাংলাদেশের সেরা প্রিমিয়াম ডিজিটাল আর্নিং প্ল্যাটফর্ম। দ্রুত পেমেন্ট, ২৪/৭ সাপোর্ট এবং ১০০% নিরাপদ।',
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body className="font-[family-name:var(--font-hind-siliguri)] antialiased bg-gradient-to-b from-[#e8f7f2] to-white text-[#1e293b]">
        {children}
      </body>
    </html>
  )
}
