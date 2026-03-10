import { FaCcAmex, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import themeImg from "../../assets/amader sikkha.jpg";

const ThemeProduct = () => {
  return (
    <section className="bg-[#EEF2F7] py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-8 flex items-center gap-2">
          <span>Home</span>
          <span>&gt;</span>
          <span>Services</span>
          <span>&gt;</span>
          <span className="text-gray-700">Web Development</span>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            AmaderShikkha Theme + Plugin
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4 leading-relaxed">
            AmaderShikka provides smart, dynamic, and user-friendly educational
            software and website solutions for schools, colleges, training
            centers, and other learning institutions. From concept to launch, we
            deliver everything you need to build, manage, and grow your online
            presence.
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <button className="border border-indigo-500 text-indigo-600 px-6 py-2 rounded-md font-medium hover:bg-indigo-50">
              Live Demo
            </button>

            <button className="text-indigo-600 font-medium hover:underline">
              Documentation
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="border border-blue-200 rounded-xl p-6 grid md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="bg-[#1E1E2F] rounded-lg p-4 flex justify-center">
            <img
              src={themeImg}
              alt="theme preview"
              className="rounded-md shadow-lg"
            />
          </div>

          {/* Right Purchase Panel */}
          <div className="border border-gray-200 rounded-lg p-6 bg-[#F7F7F7]">
            {/* Total */}
            <div className="flex justify-between border-b pb-3 mb-4">
              <span className="font-medium text-gray-700">Total:</span>
              <span className="font-semibold text-gray-800">$1379.00</span>
            </div>

            {/* Theme price */}
            <div className="flex justify-between text-gray-600 mb-3">
              <span>Theme</span>
              <span>
                <span className="line-through mr-2">$249.00</span>
                $199.00
              </span>
            </div>

            {/* Source Code */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-1">Source Code *</p>

              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="code" defaultChecked />
                  Yes
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="code" />
                  No
                </label>

                <span className="ml-auto">$1150.00</span>
              </div>
            </div>

            {/* License */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-1">License Type *</p>

              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="license" defaultChecked />
                  Single
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="license" />
                  Multiple
                </label>

                <span className="ml-auto">$0.00</span>
              </div>
            </div>

            {/* Installation */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-1">
                Installation Support (Recommended) *
              </p>

              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="install" defaultChecked />
                  Yes
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="install" />
                  No
                </label>

                <span className="ml-auto">$30.00</span>
              </div>
            </div>

            <div className="flex  items-center justify-between mt-55">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-medium">
                Buy Now
              </button>

              {/* Payment Icons */}
              <div className="flex items-center gap-2 text-2xl text-gray-500">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcAmex />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeProduct;
