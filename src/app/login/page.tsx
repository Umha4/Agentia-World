"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
    alert("Login Successful! 🚀");
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Header />
      
      {/* Add space between Header and Login Card */}
      <div className="mt-28"></div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/login-back.jpg" // Ensure this path is correct
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80" // Adjust opacity as needed
        />
      </div>

      {/* Login Card */}
      <motion.div 
        className="relative z-10 bg-black/70 p-8 rounded-2xl shadow-2xl backdrop-blur-xl w-full max-w-lg flex flex-col items-center space-y-6 border border-gray-700/50"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image src="/Login.jpg" alt="Login Illustration" width={80} height={80} className="rounded-full shadow-lg" />
        </div>
        
        <h2 className="text-3xl font-bold text-center text-white">Welcome Back!</h2>
        <p className="text-gray-400 text-center">Sign in to access your AI-powered dashboard.</p>

        <form onSubmit={handleLogin} className="w-full space-y-4">
          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="email" 
              placeholder="Email" 
              className="pl-10 w-full py-3 px-4 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 outline-none"
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
              className="pl-10 w-full py-3 px-4 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        {/* Forgot Password & Sign Up */}
        <div className="text-center text-sm text-gray-300">
          <Link href="#" className="text-purple-400 hover:underline">Forgot Password?</Link> | 
          <Link href="#" className="text-blue-400 hover:underline ml-2">Create an Account</Link>
        </div>
      </motion.div>
    </main>
  );
};

export default LoginPage;
