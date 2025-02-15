'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Code, Database, Cloud } from 'lucide-react';

const technologies = [
  {
    title: 'Quantum Computing',
    icon: <Cpu size={32} className='text-purple-400' />, 
    desc: 'Experience the next-gen computing power with  bits.',
    img: '/Quantum Computing.jpg',
  },
  {
    title: 'AI-Powered DevOps',
    icon: <Code size={32} className='text-blue-400' />, 
    desc: 'Automate workflows with AI-driven DevOps pipelines.',
    img: '/ai-devops.jpg',
  },
  {
    title: 'Self-Healing Databases',
    icon: <Database size={32} className='text-green-400' />, 
    desc: 'Databases that repair themselves using AI and ML.',
    img: '/self-healing-db.jpg',
  },
  {
    title: 'Cloud AI Ecosystem',
    icon: <Cloud size={32} className='text-yellow-400' />, 
    desc: 'AI-optimized cloud services for next-gen applications.',
    img: '/cloud-ai.jpg',
  },
];

const TechCards = () => {
  return (
    <div className='min-h-screen mt-10 bg-gray-900 flex flex-col items-center justify-center p-10'>
      <h2 className='text-4xl font-bold text-blue-700 mb-10'>Next-Gen Technologies</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl'>
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className='relative bg-gray-800 rounded-2xl p-6 shadow-lg border border-blue-600 backdrop-blur-md overflow-hidden'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent z-0' />
            <div className='relative z-10'>
              <div className='flex items-center space-x-3 mb-4'>
                {tech.icon}
                <h3 className='text-xl font-semibold text-white'>{tech.title}</h3>
              </div>
              <p className='text-gray-300 text-sm mb-4'>{tech.desc}</p>
              <div className='w-full flex justify-center'>
                <Image
                  src={tech.img}
                  alt={tech.title}
                  width={150} 
                  height={100} 
                  className='rounded-lg shadow-md object-cover'
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechCards;
