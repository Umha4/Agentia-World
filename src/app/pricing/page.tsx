"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Explorer",
      price: "Free forever!",
      description: "For individuals, students, and hobbyists",
      features: [
        "Unlimited public repositories",
        "Unlimited collaborators on public repositories",
        "50GB of data storage",
      ],
      buttonText: "Join for free",
      buttonColor: "bg-blue-600",
      borderColor: "border-blue-600",
      textColor: "text-blue-600",
    },
    {
      name: "Hacker",
      price: billingCycle === "monthly" ? "$20/month" : "$182/year",
      description: "Level up private projects with more storage",
      features: [
        "Unlimited public repositories",
        "Unlimited collaborators on public repositories",
        "100GB of data storage",
        "Unlimited private repositories",
        "2 collaborators per private repository",
      ],
      buttonText: "Get Started",
      buttonColor: "bg-black",
      borderColor: "border-red-500",
      textColor: "text-blue-700",
    },
    {
      name: "Team",
      price: billingCycle === "monthly" ? "$60/seat/month" : "$576/seat/year",
      description: "For bigger teams managing large data sets",
      features: [
        "Unlimited public repositories",
        "Unlimited collaborators on public repositories",
        "1TB of data storage",
        "Unlimited private repositories",
        "Advanced team management tools",
      ],
      buttonText: "Get Started",
      buttonColor: "bg-black",
      borderColor: "border-blue-600",
      textColor: "text-blue-600",
    },
  ];

  return (
    <motion.div 
      className="flex flex-col mt-12 bg-gray-900 items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="text-4xl font-bold text-blue-500 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Pricing built to scale from weekend project to global powerhouse
      </motion.h2>
      <motion.p 
        className="text-center text-gray-400 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Purchase an annual contract and save 20%!
        c Non-Profit & Academic organizations please {" "}
        <span className="text-blue-500 cursor-pointer">contact us</span> for discounting.
      </motion.p>

      {/* Toggle Pricing */}
      <motion.div 
        className="mt-6 flex space-x-2 border text-black border-gray-600  rounded-full p-1 bg-blue-400"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {['monthly', 'yearly'].map((cycle) => (
          <button
            key={cycle}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
              billingCycle === cycle ? "bg-black text-white" : ""
            }`}
            onClick={() => setBillingCycle(cycle)}
          >
            {cycle === "monthly" ? "Pay Monthly" : "Pay Yearly (Save 20%)"}
          </button>
        ))}
      </motion.div>

      {/* Pricing Cards */}
      <motion.div 
        className="mt-10 grid md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`border-2 ${plan.borderColor} p-6 rounded-xl bg-gray-800/40 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300`}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h3 className={`text-xl font-semibold ${plan.textColor}`}>{plan.name}</h3>
            <p className="text-sm text-gray-300 font-semibold bg-gray-700 px-3 py-1 inline-block mt-2 rounded">
              {plan.price}
            </p>
            <p className="text-gray-400 mt-4">{plan.description}</p>

            <motion.button 
              className={`${plan.buttonColor} text-white w-full py-2 mt-4 rounded-lg font-semibold`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {plan.buttonText}
            </motion.button>

            <ul className="mt-6 space-y-2 text-gray-300">
              {plan.features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <span className="text-blue-500 mr-2">✔</span> {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Pricing;
