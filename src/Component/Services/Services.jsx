import React from "react";
import {
  Code,
  Smartphone,
  Brain,
  ShoppingCart,
  GraduationCap,
  Database,
  Cloud,
  ShieldCheck,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web App Development",
    desc: "Develop robust online applications to suit your business needs and cater to your clients faithfully.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Developing innovative and native mobile apps for Android, iOS platforms.",
  },
  {
    icon: Brain,
    title: "AI & ML",
    desc: "Expertly crafted AI and ML solutions to transform your organization and drive smart decision-making.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "We provide dynamic e-commerce solutions as well as customization for e-commerce businesses.",
  },
  {
    icon: GraduationCap,
    title: "E-Learning",
    desc: "We develop custom Moodle-based platforms to bring your online learning vision to life.",
  },
  {
    icon: Database,
    title: "ERP",
    desc: "Experts in all-in-one management software to streamline every process in your organization.",
  },
  {
    icon: Cloud,
    title: "Cloud DevOps",
    desc: "We optimize and automate your cloud infrastructure, ensuring seamless deployment and scalability.",
  },
  {
    icon: ShieldCheck,
    title: "Software Testing as a Service",
    desc: "Our testing ensures your software is reliable, secure, and performs flawlessly with tailored automation.",
  },
  {
    icon: Palette,
    title: "UI/UX and Graphics Design",
    desc: "Crafting intuitive designs and visuals that enhance user experience and elevate your brand.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#EEF3FF] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-3xl font-semibold text-gray-800 mt-20 mb-12">
          Our Services & Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="flex  gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-indigo-100 mb-4">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {service.desc}
                </p>

                <button className="text-indigo-600 text-sm font-medium hover:underline">
                  Know More
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;