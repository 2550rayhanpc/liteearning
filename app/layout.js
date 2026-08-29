import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

export const metadata = {
  title: "LITE EARNING - স্মার্ট উপার্জন প্ল্যাটফর্ম",
  description: "বাংলাদেশের সেরা প্রিমিয়াম ডিজিটাল আর্নিং প্ল্যাটফর্ম",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body className="font-sans bg-[#eaf8f3] text-slate-800 antialiased selection:bg-emerald-200">
        {children}
      </body>
    </html>
  );
}
