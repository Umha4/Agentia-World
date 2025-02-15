"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg shadow-lg px-6 py-3 flex justify-between items-center z-50 border-b border-gray-700">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-2xl font-extrabold tracking-wide text-white"
      >
        <Link href="/">AGENTIA WORLD</Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-white font-medium">
        {[
          { href: "/", label: "Home" },
          { href: "/fetaure", label: "AI Features" },
          { href: "/technology", label: "Technology AI Agents" },
          { href: "/pricing", label: "Pricing" },
          { href: "/contact", label: "Contact" },
        ].map((item, index) => (
          <motion.div 
            key={item.href}
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={item.href} className="relative group text-white hover:text-gray-300 transition duration-300">
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="/login" className="text-white hover:text-gray-300 transition duration-300">LOG IN</Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link href="/sign" className="bg-white text-black px-4 py-2 rounded-lg hover:scale-105 hover:bg-gray-300 transition duration-300">
            SIGN UP
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black shadow-lg flex flex-col items-center space-y-4 py-4 border-t border-gray-700"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/fetaure", label: "AI Features" },
              { href: "/technology-ai-agents", label: "Technology AI Agents" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <motion.div 
                key={item.href} 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.3 }}
              >
                <Link href={item.href} className="text-white text-lg hover:text-gray-300 transition duration-300">
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link href="/login" className="text-white hover:text-gray-300">LOG IN</Link>
            <Link href="/signup" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
              SIGN UP
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
