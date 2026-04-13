import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Djangoimg from '../../assets/django.png'
import Dartimg from '../../assets/Dart.png'
import Kotlinimg from '../../assets/kotlin.png'
import Pythonimg from '../../assets/Python.png'
import Reactimg from '../../assets/React.png'
import Javaimg from '../../assets/java.png'
import Swiftimg from '../../assets/swift.png'

export default function Technologies() {
  const techs = [
    { name: "Django", img: Djangoimg },
    { name: "Dart", img: Dartimg },
    { name: "Kotlin", img: Kotlinimg },
    { name: "Python", img: Pythonimg },
    { name: "React", img: Reactimg },
    { name: "Java", img: Javaimg },
    { name: "Swift", img: Swiftimg },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-gray-200 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center" ref={ref}>

        <motion.h2
          className="text-3xl font-bold text-gray-600 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Technologies
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {techs.map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer perspective-1000"
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{
                  filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))",
                }}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-40 h-40 object-contain"
                />
              </motion.div>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}