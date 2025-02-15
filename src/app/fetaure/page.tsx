'use client';

import { motion } from 'framer-motion';
import { Sparkles, Cpu, Settings, Shield, Globe, BrainCircuit } from 'lucide-react';

const features = [
  {
    title: 'Self-Learning AI',
    icon: <BrainCircuit size={36} className='text-blue-400' />, 
    desc: 'AI that evolves and adapts based on user interactions.',
  },
  {
    title: 'Quantum Processing',
    icon: <Cpu size={36} className='text-purple-400' />, 
    desc: 'Blazing fast computations powered by quantum cores.',
  },
  {
    title: 'Autonomous Agents',
    icon: <Settings size={36} className='text-green-400' />, 
    desc: 'AI bots that work independently to complete tasks.',
  },
  {
    title: 'Hyper Security AI',
    icon: <Shield size={36} className='text-red-400' />, 
    desc: 'Advanced AI security for ultimate cyber protection.',
  },
  {
    title: 'Global Intelligence',
    icon: <Globe size={36} className='text-yellow-400' />, 
    desc: 'AI network that connects and learns from global data.',
  },
  {
    title: 'AI Creativity Hub',
    icon: <Sparkles size={36} className='text-pink-400' />, 
    desc: 'Generates unique ideas, art, and code autonomously.',
  }
];

const AIFeatureCards = () => {
  return (
    <div className='min-h-screen bg-gray-900 flex mt-10 flex-col items-center justify-center p-10'>
      <h2 className='text-4xl font-bold text-blue-500 mb-10'>Next-Gen AI Features</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl'>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className='bg-gray-800 rounded-2xl p-6 shadow-[0px_0px_5px_1px_rgba(0,191,255,0.2)] border border-blue-600 backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:shadow-[0px_0px_20px_4px_rgba(0,191,255,0.5)]'
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent z-0' />
            <div className='relative z-10 flex flex-col items-center text-center'>
              {feature.icon}
              <h3 className='text-xl font-semibold text-white mt-4'>{feature.title}</h3>
              <p className='text-gray-300 text-sm mt-2'>{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIFeatureCards;
