import React from "react";
import { motion } from "framer-motion";
import specImg from "../../assets/specificationimg.png";

const Specifications = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const left = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const right = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto bg-[#C7D1E3] p-4 rounded-lg">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-semibold text-gray-700 mb-12"
        >
          Specifications
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          {/* Image */}
          <motion.div
            variants={left}
            className="flex justify-center"
          >
            <img
              src={specImg}
              alt="specification"
              className="w-full max-w-md"
            />
          </motion.div>

          {/* List */}
          <motion.ul
            variants={right}
            className="list-disc pl-6 space-y-3 text-gray-700 text-sm leading-relaxed"
          >
            <motion.li variants={item}>Open to modification public view</motion.li>
            <motion.li variants={item}>Multi store supported responsive theme</motion.li>
            <motion.li variants={item}>RTL (Right-To-Left) Support</motion.li>
            <motion.li variants={item}>Tested with all major browsers</motion.li>
            <motion.li variants={item}>Friendly menu on both Mobile devices and Desktop</motion.li>
            <motion.li variants={item}>Clean HTML and CSS structure for easy customization</motion.li>
            <motion.li variants={item}>Fully localizable and can be used in any language</motion.li>
            <motion.li variants={item}>Blog, forum and news pages styled</motion.li>
          </motion.ul>

        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;