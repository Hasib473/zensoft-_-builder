import { motion } from "framer-motion";
import React from "react";
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

  return (
    <section className="bg-gray-200 py-20">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-600 mb-12">
          Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">

          {techs.map((tech, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-40 h-40 object-contain"
              />
              {/* <span className="text-lg font-medium text-gray-700">
                {tech.name}
              </span> */}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}