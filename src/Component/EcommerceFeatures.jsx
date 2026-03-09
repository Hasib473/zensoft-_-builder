import { Database, Truck, ShieldCheck, BarChart3, ClipboardList, Boxes, ShieldAlert, Sparkles } from "lucide-react";

const features = [
  {
    title: "Omnichannel Order Sync",
    description:
      "Centralize orders from all channels in one dashboard. Sync inventory real-time to prevent overselling.",
    icon: <ClipboardList size={24} />,
  },
  {
    title: "Multi-Warehouse Inventory",
    description:
      "Track stock across multiple warehouses. Automate transfers and levels to eliminate stockouts.",
    icon: <Boxes size={24} />,
  },
  {
    title: "Automated Courier APIs",
    description:
      "Directly integrate Pathao, RedX, Carrybee, and Steadfast. Auto-generate labels and track shipments instantly.",
    icon: <Truck size={24} />,
  },
  {
    title: "Customer Data (CRM)",
    description:
      "Build profiles with purchase history and insights. Drive retention via automated SMS marketing.",
    icon: <Database size={24} />,
  },
  {
    title: "Accounting & COD",
    description:
      "Automate expense tracking and COD reconciliation. Generate channel-specific profitability reports.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Fraud Protection",
    description:
      "Detect fraud automatically. Block suspicious IPs to stop fake orders before processing.",
    icon: <ShieldAlert size={24} />,
  },
  {
    title: "Delivery Success Meter",
    description:
      "Boost delivery rates using courier history. Use data to approve orders confidently.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "AI Reporting",
    description:
      "Forecast sales trends and buyer behavior with AI. Optimize inventory using predictive analytics.",
    icon: <Sparkles size={24} />,
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="bg-slate-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800">
          Entire E-Commerce Operation,{" "}
          <span className="text-blue-600">Simplified.</span>
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          From order placement to final delivery—control every step of your
          business from a single, powerful command center.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-12">
          {features.map((feature, index) => (
            <div className="bg-white py-6 px-4 rounded-xl border border-gray-200 hover:shadow-md transition">
  
  <div className="flex items-start gap-3 mb-3">
    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100 text-blue-600">
      {feature.icon}
    </div>

    <h3 className="font-semibold text-gray-800">
      {feature.title}
    </h3>
  </div>

  <p className="text-sm text-gray-500 leading-relaxed text-left">
    {feature.description}
  </p>

</div>
          ))}
        </div>
      </div>
    </section>
  );
}