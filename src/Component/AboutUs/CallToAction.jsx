import cubeImg from "../../assets/curve.png";
import bgImg from "../../assets/calltoaction.jpg";

const CallToAction = () => {
  return (
    <section className="relative w-full py-24 bg-[#1e1b5c] overflow-hidden">

      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={cubeImg}
            alt="cube"
            className="w-[260px] md:w-[320px] animate-float"
          />
        </div>

        {/* Right Content */}
        <div className="text-white max-w-md">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Ready to Start Your Project?
          </h2>

          <p className="text-gray-200 mb-8 leading-relaxed">
            Let's work together to create something amazing.
            Reach out to our team today!
          </p>

          <button className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-md font-medium shadow-lg">
            Get In Touch
          </button>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;