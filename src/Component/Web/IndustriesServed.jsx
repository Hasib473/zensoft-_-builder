import { motion } from "framer-motion";
import {
  ShoppingBag,
  CreditCard,
  Radio,
  Pill,
  HeartPulse,
  Building2,
  Leaf,
  Globe,
  Rocket,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Scalable platforms that drive online sales and customer engagement",
  },
  {
    icon: CreditCard,
    title: "FinTech",
    desc: "Secure, efficient, and compliant financial applications",
  },
  {
    icon: Radio,
    title: "Telecommunication",
    desc: "Smart integrations and robust service portals",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    desc: "Streamlined operations and data-driven solutions",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Innovative tools for better care and patient management",
  },
  {
    icon: Building2,
    title: "Local Enterprises",
    desc: "Digital empowerment for small and mid-sized businesses",
  },
  {
    icon: Leaf,
    title: "Agriculture",
    desc: "Smart tech for sustainable farming and agri-commerce",
  },
  {
    icon: Globe,
    title: "MNCs",
    desc: "Enterprise-grade solutions for global scale",
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "From MVP to market, full-cycle development support",
  },
];

export default function IndustriesServed() {
  return (
    <section className="bg-[#eef2fb] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-semibold text-gray-700">
            Industries We've Served
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Whatever your industry, we deliver smart, scalable solutions to help you grow.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex gap-4"
              >
                <Icon className="text-indigo-600 mt-1" size={22} />

                <div>
                  <h4 className="font-semibold text-indigo-600">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}