import React from "react";
import img2 from "../assets/191dd62a0da18955d808a8a8c771a3b6cd219d03.jpg";
import { MousePointerClick } from "lucide-react";

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

        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/60 via-[#1e1b4b]/50 to-[#312e81]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Side */}
          <div className="lg:col-span-3 text-white space-y-6 text-center lg:text-left">
            {" "}
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight">
              Leverage next-generation{" "}
              <span className="text-indigo-400">digital solutions</span> to stay
              ahead and drive unstoppable{" "}
              <span className="text-indigo-500">success.</span>
            </h1>
            <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 rounded-lg font-medium shadow-lg shadow-indigo-900/30 hover:scale-105">
              Explore Our Services
            </button>
          </div>

          {/* Right Side Card */}
         <div className="lg:col-span-2 relative flex justify-center lg:justify-end">

  {/* Wrapper for stacking */}
  <div className="relative w-72">

    {/* Back Layer 2 */}
    <div className="absolute top-4 left-4 w-full h-full bg-[#DFE8FF] border-2 border-blue-300 rounded-2xl" />

    {/* Back Layer 1 */}
    <div className="absolute top-2 left-2 w-full h-full bg-[#DFE8FF] border-2 border-blue-300 rounded-2xl" />

    {/* Main Card */}
    <div className="relative bg-[#DFE8FF] border-2 border-blue-300 rounded-2xl p-6 shadow-2xl">
      
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

    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
