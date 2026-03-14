import React from "react";
import { motion } from "framer-motion";

const tags = ["Python", "Django", "React", "PostgreSQL"];

const WebAppDevelopment = () => {
  return (
    <section className="bg-[#e9edf6] py-20">
      <div className="max-w-3xl mx-auto text-center px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-700 mb-3"
        >
          Web App Development
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-xl font-semibold mb-8"
        >
          Develop robust online applications to suit your business needs and
          cater to your clients faithfully.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed mb-6"
        >
          At Zensoft Lab, we build mobile experiences that drive real business
          growth. With deep expertise in cross-platform and responsive app
          development, our team crafts solutions that are intuitive, fast, and
          scalable — built to perform across all devices and platforms.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed mb-10"
        >
          While others chase trends, we focus on creating elegant interfaces
          paired with secure, high-performing backends. Our developers
          specialize in delivering seamless mobile solutions for startups,
          SMEs, and enterprises, tailored to industries like e-commerce,
          healthcare, banking.
        </motion.p>

        {/* Tech Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="px-4 py-1 border border-blue-400 text-blue-600 text-sm rounded-md"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WebAppDevelopment;