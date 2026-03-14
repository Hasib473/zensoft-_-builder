import React from "react";
import { motion } from "framer-motion";
import deliverImg from "../../assets/websectionimg.jpg"; // তোমার image path

const features = [
  {
    title: "Robust & Scalable Applications",
    desc: "Built for a wide range of industries and business goals",
  },
  {
    title: "User-Centric Design",
    desc: "Engaging UI and intuitive UX to elevate user satisfaction",
  },
  {
    title: "Feature-Rich Functionality",
    desc: "Packed with modern tools and smart integrations",
  },
  {
    title: "Cross-Platform Flexibility",
    desc: "Develop once, deploy across iOS, Android & web",
  },
  {
    title: "Diverse App Options",
    desc: "From native to hybrid and web apps, built to fit your needs",
  },
  {
    title: "End-to-End OS Support",
    desc: "Flawless performance across major operating systems",
  },
  {
    title: "Built for Growth",
    desc: "Apps designed to grow your user base and maximize impact",
  },
];

export default function DeliverSection() {
  return (
    <section className="bg-[#EEF3FF] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-700">
            What We Deliver at Zensoft Lab
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Let Zensoft Lab turn your ideas into fully functional,
            beautifully crafted mobile and web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-2 items-center justify-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={deliverImg}
              alt="deliver"
              className="rounded-lg shadow-lg w-125 object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="space-y-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex gap-4"
              >
                {/* Check Icon */}
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                  ✓
                </div>

                <div>
                  <h4 className="text-indigo-600 font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}