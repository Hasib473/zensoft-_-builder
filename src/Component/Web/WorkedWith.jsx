import { motion } from "framer-motion";

import pathonLogo from "../../assets/batton (1).png";
import bdGovLogo from "../../assets/govt.png";
import orgLogo from "../../assets/Tssl.png";
import bepzaLogo from "../../assets/bepza.png";
import greenLogo from "../../assets/green.png";

const partners = [
  pathonLogo,
  bdGovLogo,
  orgLogo,
  bepzaLogo,
  greenLogo,
];

export default function WorkedWith() {
  return (
    <section className="bg-[#e6ebf7] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-700"
        >
          Who We've Worked With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mt-4 mb-14"
        >
          At Zensoft Lab, we take pride in building strong partnerships with
          organizations across various sectors. From education to government,
          our tailored solutions have empowered teams to grow, innovate, and lead.
          We've proudly worked with:
        </motion.p>

        {/* Logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {partners.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt="partner"
              className="h-14 object-contain"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}