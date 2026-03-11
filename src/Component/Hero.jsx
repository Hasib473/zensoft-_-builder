import React from "react";
import img2 from "../assets/191dd62a0da18955d808a8a8c771a3b6cd219d03.jpg";
import { MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0f172a]">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={img2}
          alt="background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/60 via-[#1e1b4b]/50 to-[#312e81]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 text-white space-y-6 text-center lg:text-left"
          >

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight">

              <ReactTyped
                strings={[
                  "Leverage next-generation digital solutions to stay ahead and drive unstoppable success."
                ]}
                typeSpeed={50}
                showCursor={true}
              />

            </h1>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 rounded-lg font-medium shadow-lg shadow-indigo-900/30"
            >
              Explore Our Services
            </motion.button>

          </motion.div>

          {/* Right Side Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72">

              <div className="absolute top-4 left-4 w-full h-full bg-[#DFE8FF] border-2 border-blue-300 rounded-2xl" />
              <div className="absolute top-2 left-2 w-full h-full bg-[#DFE8FF] border-2 border-blue-300 rounded-2xl" />

              <motion.div
                whileHover={{ y: -6 }}
                className="relative bg-[#DFE8FF] border-2 border-blue-300 rounded-2xl p-6 shadow-2xl"
              >
                <div className="space-y-3">

                  <div className="flex justify-center gap-3 items-center bg-indigo-600 text-white py-2 px-4 rounded-lg text-center font-medium shadow-md">
                    web <MousePointerClick />
                  </div>

                  <div className="bg-white border-2 border-blue-300 text-black py-2 px-4 rounded-lg text-center hover:bg-gray-100 transition">
                    mobile
                  </div>

                  <div className="bg-white border-2 border-blue-300 text-black py-2 px-4 rounded-lg text-center hover:bg-gray-100 transition">
                    cloud
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}