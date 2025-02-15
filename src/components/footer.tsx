'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <motion.div
            className="text-3xl font-bold tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Agentia<span className="text-purple-400">World</span>
          </motion.div>

          <nav className="mt-4 md:mt-0">
            <ul className="flex gap-6 text-gray-300">
              {['Home', 'About', 'Services', 'Contact'].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="hover:text-purple-400 cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <motion.p
            className="text-gray-400 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            "Empowering AI innovations for a better future."
          </motion.p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              { icon: Facebook, link: '#' },
              { icon: Twitter, link: '#' },
              { icon: Instagram, link: '#' },
              { icon: Linkedin, link: '#' },
              { icon: Code, link: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-500"
              >
                <social.icon className="text-white" size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Agentia World. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
