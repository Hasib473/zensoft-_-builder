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
import { NavLink } from "react-router";

const services = [
  {
    icon: Code,
    title: "Web App Development",
    desc: "Develop robust online applications...",
    route: "/webDev",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Developing innovative and native mobile apps...",
    route: "/appDev",
  },
  {
    icon: Brain,
    title: "AI & ML",
    desc: "Expertly crafted AI and ML solutions...",
    route: "/services/ai-ml",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Dynamic e-commerce solutions...",
    route: "/services/ecommerce",
  },
  {
    icon: GraduationCap,
    title: "E-Learning",
    desc: "Custom Moodle-based platforms...",
    route: "/services/e-learning",
  },
  {
    icon: Database,
    title: "ERP",
    desc: "All-in-one management software...",
    route: "/services/erp",
  },
  {
    icon: Cloud,
    title: "Cloud DevOps",
    desc: "Optimize and automate your cloud...",
    route: "/services/devops",
  },
  {
    icon: ShieldCheck,
    title: "Software Testing",
    desc: "Reliable and secure testing...",
    route: "/services/software-testing",
  },
  {
    icon: Palette,
    title: "UI/UX and Graphics Design",
    desc: "Crafting intuitive designs...",
    route: "/services/ui-ux",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#EEF3FF] py-2">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-3xl font-bold text-gray-800 mt-20 mb-12">
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

                <NavLink to={service.route}>
                  <button className="text-indigo-600 cursor-pointer text-sm font-medium hover:underline">
                  Know More
                </button>
                </NavLink>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;