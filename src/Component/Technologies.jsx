import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import djangoLogo from "../assets/django.png";
import kotlinLogo from "../assets/kotlin.png";
import pythonLogo from "../assets/python.png";
import reactLogo from "../assets/react.png";
import swiftLogo from "../assets/swift.png";
import dartlogo from "../assets/Dart.png";
import javalogo from '../assets/java.png'

export default function Technologies() {
  const techs = [
    { name: "Django", logo: djangoLogo },
    { name: "Kotlin", logo: kotlinLogo },
    { name: "Python", logo: pythonLogo },
    { name: "React", logo: reactLogo },
    { name: "Swift", logo: swiftLogo },
    { name: "Dart", logo: dartlogo },
    { name: "Java", logo: javalogo },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const orbitVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.12,
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    }),
  };

  const pulseGlow = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-slate-200 py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Title with typewriter-like reveal */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block"
            whileInView={{
              textShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 20px rgba(100,150,255,0.5)",
                "0 0 0px rgba(0,0,0,0)",
              ],
            }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            Technologies We Use
          </motion.span>
        </motion.h2>

        {/* Tech Logos with orbit entrance and 3D flip on hover */}
        <div className="relative py-8">
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg blur-3xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4 bg-[#EEF3FF] rounded-lg p-6">
            {techs.map((tech, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={orbitVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="
                  bg-white border border-gray-200 rounded-lg
                  flex flex-col items-center justify-center
                  shadow-sm cursor-pointer
                  w-[45%] sm:w-[30%] md:w-[22%] lg:w-[16%]
                  py-4 px-3
                "
                style={{ perspective: 1000 }}
              >
                <AnimatePresence mode="wait">
                  {hoveredIndex === index ? (
                    <motion.div
                      key="flipped"
                      initial={{ rotateY: 90, scale: 0.8 }}
                      animate={{ rotateY: 0, scale: 1.08 }}
                      exit={{ rotateY: -90, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-10 sm:h-12 md:h-14 object-contain"
                      />
                      {/* Glow ring effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-blue-400 rounded-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.3, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ rotateY: -90, scale: 0.8 }}
                      animate={{ rotateY: 0, scale: 1 }}
                      exit={{ rotateY: 90, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-10 sm:h-12 md:h-14 object-contain"
                        variants={pulseGlow}
                        animate="animate"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech name appears on hover */}
                <motion.div
                  className="mt-2 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}