"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Facebook,  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleSignup = (e: any) => {
    e.preventDefault();
    console.log("Signup Attempt:", { name, email, password, otp });
    alert("Signup Successful! 🚀");
  };

  return (
    <main className="bg-slate-400 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Header />
      <div className="mt-20"></div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/login-back.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Signup Card */}
      <motion.div
        className="relative z-10 bg-black p-8 rounded-2xl shadow-2xl backdrop-blur-xl w-full max-w-lg flex flex-col items-center space-y-6 border border-gray-700/50"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image src="/Login.jpg" alt="Signup Icon" width={80} height={80} className="rounded-full shadow-lg" />
        </div>

        <h2 className="text-3xl font-bold text-center text-white">Create Your Account</h2>
        <p className="text-gray-400 text-center">Sign up to explore AI-powered features.</p>

        <form onSubmit={handleSignup} className="w-full space-y-4">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              className="pl-10 w-full py-3 px-4 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-600 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 w-full py-3 px-4 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-600 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 w-full py-3 px-4 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-600 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* OTP Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter OTP (Sent to Email)"
              className="w-full py-3 px-4 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-600 outline-none text-center"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          {/* Signup Button */}
          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>

        {/* Social Login */}
        <div className="flex w-full gap-4">
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2">
            <Facebook size={18} />
            Facebook
          </button>
          <button className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition flex items-center justify-center gap-2">
          <FaGoogle />
  Google
</button>
        </div>

        {/* Login Link */}
        <div className="text-center text-sm text-gray-300">
          Already have an account?
          <Link href="/login" className="text-blue-600 hover:underline ml-2">Login here</Link>
        </div>
      </motion.div>
    </main>
  );
};

export default SignupPage;
