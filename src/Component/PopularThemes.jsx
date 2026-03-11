import themeImg from "../assets/amader sikkha.jpg";
import themeImg1 from "../assets/specturm.jpg";
import themeImg2 from "../assets/juelary.jpg";

const themes = [
  {
    id: 1,
    title: "AmaderShikkha Theme",
    image: themeImg,
    oldPrice: "$150",
    price: "$100",
  },
  {
    id: 2,
    title: "AmaderShikkha Theme",
    image: themeImg1,
    oldPrice: "$150",
    price: "$100",
  },
  {
    id: 3,
    title: "AmaderShikkha Theme",
    image: themeImg2,
    oldPrice: "$150",
    price: "$100",
  },
];

export default function PopularThemes() {
  return (
    <section className="py-16 bg-[#EEF3FF]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">
            Popular Themes
          </h2>

          <button className="text-blue-600 text-sm hover:underline">
            See More
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {themes.map((theme) => (
            <div
              key={theme.id}
              className="bg-white rounded-lg border shadow-sm overflow-hidden"
            >

              {/* Image */}
              <div className="p-3">
                <div className="bg-[#2f3242] rounded-md p-2">
                  <img
                    src={theme.image}
                    className="rounded-md w-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4">

                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Bestseller
                </span>

                <h3 className="mt-3 font-medium text-gray-800">
                  {theme.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mt-1 mb-4">
                  <span className="text-sm text-gray-400 line-through">
                    {theme.oldPrice}
                  </span>

                  <span className="text-blue-600 font-semibold">
                    {theme.price}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <button className="flex-1 bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition">
                    Live Demo
                  </button>

                  <button className="flex-1 border border-blue-400 text-blue-600 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
                    Details
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}