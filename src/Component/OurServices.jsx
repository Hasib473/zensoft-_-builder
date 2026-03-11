import React from "react";
import { motion } from "framer-motion";

export default function OurServices() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-[#EEF2FF] py-15 overflow-hidden">
      <div className="max-w-7xl mx-auto  grid lg:grid-cols-2 gap-1 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pl-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>

          <div className="flex items-center mt-3">
            <div className="w-10 h-[3px] bg-red-500"></div>
            <div className="w-6 h-[3px] bg-blue-500"></div>
          </div>

          <p className="text-gray-500 mt-6 max-w-md leading-relaxed">
            We provide solutions built for measurable business growth.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative h-[500px] flex items-center justify-center">

          {/* Bottom Shadow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-6 w-[380px] h-10 bg-gray-300/40 rounded-full blur-md"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-[420px] h-[420px]"
          >

            {/* E-commerce */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute top-13 left-24 bg-[#dfe8ff] border border-blue-400 text-blue-600 px-6 py-2 rounded-md rotate-[-6deg]"
            >
              E-commerce
            </motion.div>

            {/* Web App */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute top-22.5 left-16 bg-indigo-600 text-white px-8 py-3 rounded-md rotate-[-7deg] shadow-lg"
            >
              Web App Development
            </motion.div>

            {/* Small circle */}
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-34 left-48 w-4 h-4 bg-blue-300 rounded-full"
            />

            {/* Cloud */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute top-38 left-20 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-10 py-3 rounded-md"
            >
              Cloud DevOps
            </motion.div>

            {/* Mobile */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute top-50 left-8 bg-red-500 text-white px-10 py-3 rounded-md shadow-lg"
            >
              Mobile App Development
            </motion.div>

            {/* Testing */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute top-63 left-25 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-7 py-3 rounded-md"
            >
              Software Testing
            </motion.div>

            {/* AI */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute top-76 left-20 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-8 py-3 rounded-md"
            >
              AI & ML
            </motion.div>

            {/* ERP */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute top-76 left-55 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-8 py-3 rounded-md"
            >
              ERP
            </motion.div>

            {/* UI UX */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute bottom-5 left-24 bg-gray-800 text-white px-8 py-3 rounded-md shadow-lg"
            >
              UI/UX and Graphics Design
            </motion.div>

            {/* E-Learning */}
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute top-78 left-73 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-10 py-3 w-48 rounded-md rotate-40"
            >
              E-Learning
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}