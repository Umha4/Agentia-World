"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
// import AIFeatureCards from "@/components/fetaure";
// import TechCards from "@/components/technology";
import AIAgents from "@/components/ai-agenta";
// import Contact from "@/components/conatct-page";
// import Pricing from "@/components/pricing";

import AIFeatureCards from "./fetaure/page";
import TechCards from "./technology/page";
import Pricing from "./pricing/page";
import Contact from "./contact/page";


export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <div
  className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-fixed text-center px-4"
  style={{ backgroundImage: "url('/back.jpg')" }}
>
  {/* Overlay (without blur) */}
  <div className="absolute inset-0 bg-black/50"></div>

  <motion.section
    className="relative z-10 space-y-6 max-w-3xl"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-6xl font-extrabold leading-tight animate-text-glow text-white">
      <Typewriter
        words={[
          "Enterprise AI Agents for the Future",
          "Revolutionizing AI Automation",
          "Next-Gen AI Innovations",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h1>
    <p className="text-2xl font-semibold text-gray-300 animate-fade-in">
      POWERED BY <span className="text-purple-500">HAFIZ MUHAMMAD UMAR</span>
    </p>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      Explore AI Agents
    </motion.button>
  </motion.section>
</div>


      {/* Main Sections */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        
      </motion.div>
      <AIFeatureCards />
        <TechCards />
        <AIAgents />
        <Pricing />
        <Contact />
      {/* <Footer /> */}
    </div>
  );
}
