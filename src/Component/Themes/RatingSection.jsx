import React from "react";
import ratingImg from "../../assets/Themeimg1.png";
import ratingImg1 from "../../assets/ratingimg.jpg" // your image

const RatingSection = () => {
  return (
    <section className="max-w-7xl mx-auto bg-gray-100 p-6 ">
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Left Image */}
        <div className=" rounded-xl overflow-hidden">
          <img
            src={ratingImg}
            alt="rating"
            className="w-10/12 mx-auto h-95 rounded-sm object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-white shadow-sm p-5">
          
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-semibold">Rating</h2>
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="font-medium">5 Star</span>
              <span>(160)</span>
            </div>
          </div>

          {/* Review 1 */}
          <div className="flex gap-3 pb-4 border-b">
            <img
              src={ratingImg1}
              alt="user"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h3 className="font-semibold text-sm">
                Solid pick for any online store.
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <span className="text-yellow-500">★★★★★</span>
                <span>Raymond A. Edwards</span>
                <span>12/12/2012</span>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                The theme looks great and works smoothly on all devices.
                Packed with features like mega menus and product sliders,
                it’s a solid pick for any online store. Highly recommended.
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex gap-3 pt-4">
            <img
              src={ratingImg1}
              alt="user"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h3 className="font-semibold text-sm">
                Solid pick for any online store.
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <span className="text-yellow-500">★★★★★</span>
                <span>Raymond A. Edwards</span>
                <span>12/12/2012</span>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                The theme looks great and works smoothly on all devices.
                Packed with features like mega menus and product sliders,
                it’s a solid pick for any online store. Highly recommended.
              </p>
            </div>
          </div>

          {/* See More */}
          <div className="text-center mt-4">
            <button className="text-blue-600 text-sm font-medium hover:underline">
              See More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RatingSection;