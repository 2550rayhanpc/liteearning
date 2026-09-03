"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!identifier || !password) {
      alert("ইমেইল/মোবাইল এবং পাসওয়ার্ড দিন।");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: identifier.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "লগইন ব্যর্থ হয়েছে।");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      alert(data.message || "লগইন সফল হয়েছে!");

      router.push("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      alert("নেটওয়ার্ক বা সার্ভার সমস্যা হয়েছে।");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-emerald-50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-800 text-2xl font-bold text-white">
            LE
          </div>

          <h1 className="text-3xl font-bold text-emerald-950">
            LITE EARNING
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            আপনার একাউন্টে প্রবেশ করুন
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              ইমেইল বা মোবাইল নম্বর
            </label>

            <input
              type="text"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder="example@gmail.com অথবা 017XXXXXXXX"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              পাসওয়ার্ড
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-emerald-700 px-4 py-3 font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "লগইন হচ্ছে..." : "লগইন করুন"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          নতুন ব্যবহারকারী?{" "}
          <Link
            href="/register"
            className="font-bold text-emerald-700 hover:underline"
          >
            রেজিস্ট্রেশন করুন
          </Link>
        </p>
      </div>
    </main>
  );
}
