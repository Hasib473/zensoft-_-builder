import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/smartslider.png";
import img2 from "../../assets/menu.png";
import img3 from "../../assets/smartcursor.png";
import img4 from "../../assets/modalcard.png";
import img5 from "../../assets/badge.png";
import img6 from "../../assets/dealcursor.png";
import img7 from "../../assets/zoom.png";
import img8 from "../../assets/blogs.png";
import img9 from "../../assets/onpage.png";

const features = [
  { img: img1, title: "Smart Slider", desc: "Effortlessly build and manage eye-catching homepage sliders to highlight your products or promotions." },
  { img: img2, title: "Smart Mega Menu", desc: "With Mega Menu plugin you can create a clean, organized menu visually rich for your store." },
  { img: img3, title: "Smart Carousel", desc: "Display products in eye-catching rotating sliders across different sections." },
  { img: img4, title: "Quick View", desc: "Quick View lets customers preview product details instantly without leaving the page." },
  { img: img5, title: "Product Badge", desc: "Highlight key products with customizable badges like 'New', 'Sale', or 'Best Selling'." },
  { img: img6, title: "Deal Carousel", desc: "Showcase special offers, discounts, or featured products in eye-catching sliders." },
  { img: img7, title: "Picture Zoom", desc: "Enable customers to zoom product images for a clearer view and better shopping experience." },
  { img: img8, title: "Blogs and News", desc: "Share updates, stories, and announcements directly on your homepage." },
  { img: img9, title: "One Page Checkout (OPC)", desc: "Streamline checkout with a simplified one-page purchasing process." }
];

const FeatureGrid = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ y: -8 }}
            className="space-y-5"
          >

            {/* Image */}
            <div className="w-full overflow-hidden rounded-md shadow-sm">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default FeatureGrid;