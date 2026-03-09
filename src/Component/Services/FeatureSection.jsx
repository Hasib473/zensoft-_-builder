import { ShieldCheck, RefreshCw, Clock } from "lucide-react";
import featureimg from "../../assets/featuresection.jpg"

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Reliable & Scalable Solutions",
      desc: "Get high-performance services tailored to your business growth.",
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Always Quick Turnaround",
      desc: "We ensure fast delivery and efficient solutions to keep your business running smoothly.",
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Email & Live Chat Support",
      desc: "Get round-the-clock assistance from our expert team whenever you need help.",
    },
  ];

  return (
    <section className="relative bg-[#1B1A4C] py-24 px-6 overflow-hidden">
      
      {/* background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: `url(${featureimg})` }}
      ></div>

      {/* content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-12">
          Build a Brand Your <br />
          <span className="text-indigo-300">Customers Love</span>
        </h2>

        <div className="space-y-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/90 rounded-xl p-6 shadow-lg"
            >
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                {item.icon}
              </div>

              <div className="text-left">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}