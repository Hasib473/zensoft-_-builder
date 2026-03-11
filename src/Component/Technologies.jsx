import React from "react";
import { motion } from "framer-motion";
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

  return (
    <section className="bg-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-8">
          Technologies We Use
        </h2>

        {/* Tech Logos */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 py-6 bg-[#EEF3FF] rounded-lg">

          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="
                bg-white border border-gray-200 rounded-md 
                flex items-center justify-center 
                shadow-sm hover:shadow-md transition
                
                w-[45%] sm:w-[30%] md:w-[22%] lg:w-[16%]
                py-4
              "
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-10 sm:h-12 md:h-14 object-contain"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}