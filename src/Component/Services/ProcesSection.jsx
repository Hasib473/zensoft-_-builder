import React from "react";
import processImg from "../../assets/section img.jpg";

const steps = [
  {
    id: 1,
    title: "Share Your Vision",
    desc: "Tell us about your business goals, challenges, and ideas. We analyze your needs and craft a tailored strategy to bring your vision to life.",
  },
  {
    id: 2,
    title: "Innovate & Create",
    desc: "Our expert team designs and develops cutting-edge web, mobile, AI, and cloud solutions, ensuring innovation, efficiency, and scalability.",
  },
  {
    id: 3,
    title: "Launch & Grow",
    desc: "We deliver a fully optimized solution, ready to scale with your business. With continuous support and updates, your success never stops.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-[#DFE8FF] py-16">
      <div className="max-w-6xl mx-auto px-6 bg-[#EEF2FF] border border-indigo-200 rounded-lg p-10">

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-10">
          How Zensoft Lab Brings Your Ideas to Life
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={processImg}
              alt="Process Illustration"
              className="w-200"
            />
          </div>

          {/* Steps */}
          <div className="space-y-8">

            {steps.map((step) => (
              <div key={step.id} className="flex gap-4">

                {/* Number Circle */}
                <div className="flex p-4 items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                  {step.id}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-indigo-600">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

            {/* Button */}
            <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
              Order Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;