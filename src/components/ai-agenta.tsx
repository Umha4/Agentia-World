'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Code, Brain } from "lucide-react";

const agents = [
  {
    title: "Code Generator AI",
    icon: <Code size={32} className="text-blue-400" />, 
    desc: "An AI agent that writes efficient, optimized code in any language.",
    img: "/code-generator.jpg",
  },
  {
    title: "Neural Analyst",
    icon: <Brain size={32} className="text-purple-400" />, 
    desc: "Analyzes complex patterns and provides deep insights using ML.",
    img: "/neural.jpg",
  },
  {
    title: "Automation Bot",
    icon: <Cpu size={32} className="text-green-400" />, 
    desc: "Handles repetitive tasks with high accuracy and zero fatigue.",
    img: "/new.jpg",
  },
];

const AIAgents = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-10">
      <h2 className="text-4xl font-bold text-blue-600 mb-10">AI Agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-blue-600 backdrop-blur-md relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent z-0" />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                {agent.icon}
                <h3 className="text-xl font-semibold text-white">{agent.title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">{agent.desc}</p>
              <div className="w-full flex justify-center">
                <Image
                  src={agent.img}
                  alt={agent.title}
                  width={100}  // ✅ Fixed width
                  height={100} // ✅ Height remains auto
                  className="w-40 md:w-48 lg:w-56 rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIAgents;
