import themeImg from "../assets/amader sikkha.jpg";
import themeImg1 from "../assets/specturm.jpg";
import themeImg2 from "../assets/juelary.jpg";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Star, ShoppingCart } from "lucide-react";

const themes = [
  {
    id: 1,
    title: "AmaderShikkha Theme",
    image: themeImg,
    oldPrice: "$150",
    price: "$100",
    link: "https://amadershikkha.com/",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    title: "spectrum nurturing academy Theme",
    image: themeImg1,
    oldPrice: "$150",
    price: "$100",
    link: "https://sna-bd.org/",
    rating: 4.8,
    reviews: 96,
  },
  {
    id: 3,
    title: "Nira's Gallery Theme",
    image: themeImg2,
    oldPrice: "$150",
    price: "$100",
    link: "https://nirasgallery.com/",
    rating: 4.7,
    reviews: 84,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function PopularThemes() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-2">
              Popular Themes
            </h2>
            <p className="text-slate-600">
              Professionally crafted templates for your business
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
          >
            See More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {themes.map((theme) => (
            <motion.div
              key={theme.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={theme.image}
                    className="rounded-lg w-full object-cover"
                    alt={theme.title}
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Bestseller
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-md">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-slate-700">
                      {theme.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {theme.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-slate-400 line-through">
                    {theme.oldPrice}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {theme.price}
                  </span>
                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                    Save 33%
                  </span>
                </div>

                {/* Reviews */}
                <p className="text-xs text-slate-500 mb-5">
                  {theme.reviews}+ satisfied customers
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => window.open(theme.link, "_blank")}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate(`/project/${theme.id}`)}
                    className="flex-1 border-2 border-slate-300 text-slate-700 py-2.5 rounded-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
