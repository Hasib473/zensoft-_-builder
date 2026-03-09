import React from "react";

export default function OurServices() {
  return (
    <section className="bg-[#EEF2FF] py-15overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>

          {/* Small underline */}
          <div className="flex items-center  mt-3">
            <div className="w-10 h-[3px] bg-red-500"></div>
            <div className="w-6 h-[3px] bg-blue-500"></div>
          </div>

          <p className="text-gray-500 mt-6 max-w-md leading-relaxed">
            We provide solutions built for measurable business growth.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[500px] flex items-center justify-center">

  {/* Bottom Shadow */}
  <div className="absolute bottom-6 w-[380px] h-10 bg-gray-300/40 rounded-full blur-md"></div>

  {/* Stack Wrapper */}
  <div className="relative w-[420px] h-[420px]">

    {/* E-commerce */}
    <div className="absolute top-13 left-24 bg-[#dfe8ff] border border-blue-400 text-blue-600 px-6 py-2 rounded-md rotate-[-6deg]">
      E-commerce
    </div>

    {/* Web App Development */}
    <div className="absolute top-22.5 left-16 bg-indigo-600 text-white px-8 py-3 rounded-md rotate-[-7deg] shadow-lg">
      Web App Development
    </div>

    {/* Small circle */}
    <div className="absolute top-34 left-48 w-4 h-4 bg-blue-300 rounded-full"></div>

    {/* Cloud DevOps */}
    <div className="absolute top-38 left-20 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-10 py-3 rounded-md">
      Cloud DevOps
    </div>

    {/* Mobile App Development */}
    <div className="absolute top-50 left-8 bg-red-500 text-white px-10 py-3 rounded-md shadow-lg">
      Mobile App Development
    </div>

    {/* Software Testing */}
    <div className="absolute top-63 left-25 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-7 py-3 rounded-md">
      Software Testing
    </div>

    {/* AI & ML */}
    <div className="absolute top-76 left-20 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-8 py-3 rounded-md">
      AI & ML
    </div>

    {/* ERP */}
    <div className="absolute top-76 left-55 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-8 py-3 rounded-md">
      ERP
    </div>

    {/* UI/UX */}
    <div className="absolute bottom-5 left-24 bg-gray-800 text-white px-8 py-3 rounded-md shadow-lg">
      UI/UX and Graphics Design
    </div>

    {/* E-Learning */}
    <div className="absolute top-78 left-73 bg-[#dfe8ff] border border-blue-300 text-blue-600 px-10 py-3 w-48 rounded-md rotate-40">
  E-Learning
</div>

  </div>
</div>
      </div>
    </section>
  );
}