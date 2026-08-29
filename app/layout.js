import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata = {
  title: "NIK EARNING - স্মার্ট উপার্জন প্ল্যাটফর্ম",
  description: "বাংলাদেশের সেরা প্রিমিয়াম ডিজিটাল আর্নিং প্ল্যাটফর্ম।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} scroll-smooth`}>
      <body className="font-hind antialiased bg-[#f8fafc] text-[#1e293b]">
        {children}
      </body>
    </html>
  );
}
