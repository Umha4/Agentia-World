'use client'

import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(/^[0-9]{10,15}$/, "Invalid phone number").required("Phone is required"),
      message: Yup.string().required("Message cannot be empty"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Message sent successfully!");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <motion.div 
        className="bg-white/10 p-8 rounded-xl shadow-2xl backdrop-blur-lg w-full max-w-4xl border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image src="/contact.jpg" alt="Contact AI" width={300} height={300} className="rounded-xl shadow-lg" />
          </motion.div>
          <form onSubmit={formik.handleSubmit} className="w-full md:w-1/2 flex flex-col space-y-4">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label className="block text-white">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="pl-10 w-full py-2 px-3 border border-white/30 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </motion.div>
            
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <label className="block text-white">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="pl-10 w-full py-2 px-3 border border-white/30 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </motion.div>
            
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <label className="block text-white">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} className="pl-10 w-full py-2 px-3 border border-white/30 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </motion.div>
            
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <label className="block text-white">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea name="message" value={formik.values.message} onChange={formik.handleChange} className="pl-10 w-full py-2 px-3 border border-white/30 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-600 outline-none" rows={4}></textarea>
              </div>
            </motion.div>
            
            <motion.button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
