import logoimg from '../../assets/zensoft logo.png'
import bgimg from '../../assets/service.jpg'
export default function AboutSection() {
  return (
    <section className="relative bg-[#1e1b5c] py-24 px-6 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Top Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>
            <img
              src={logoimg}
              alt="logo"
              className="w-30 mb-6"
            />

            <p className="text-gray-300 uppercase tracking-widest text-sm">
              We Are
            </p>

            <h2 className="text-4xl font-bold text-indigo-400 mb-6">
              ZENSOFT LAB
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-md">
              <span className="font-semibold text-white">Zensoft Lab</span> is a
              forward-thinking software development company based in Dhaka,
              Bangladesh, dedicated to helping businesses
              <span className="font-semibold text-white">
                {" "}
                "Think, Transform, and Thrive".
              </span>
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-10">

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading innovator in next-generation digital
                solutions, shaping the future with AI-driven products that
                empower businesses to excel in a fast-evolving digital world.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading innovator in next-generation digital
                solutions, shaping the future with AI-driven products that
                empower businesses to excel in a fast-evolving digital world.
              </p>
            </div>

          </div>

        </div>

        {/* Milestones */}
        <div className="mt-20 text-center">

          <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-10">
            Milestones & Achievements
          </h4>

          <div className="flex flex-wrap justify-center gap-10">

            <div className="flex items-center gap-3">
              <span className="border border-indigo-400 px-4 py-1 rounded-full text-indigo-300">
                2020
              </span>
              <p className="text-gray-300 text-sm">
                Company Founded <br /> Launched First Product
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="border border-indigo-400 px-4 py-1 rounded-full text-indigo-300">
                2023
              </span>
              <p className="text-gray-300 text-sm">
                50+ Projects Delivered
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="border border-indigo-400 px-4 py-1 rounded-full text-indigo-300">
                2024
              </span>
              <p className="text-gray-300 text-sm">
                AI Solutions Launch
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}