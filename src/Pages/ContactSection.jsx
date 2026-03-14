import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="bg-[#1E1B4B] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* LEFT CONTACT FORM */}
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 rounded-xl text-white shadow-lg">

          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-indigo-200 mb-6">
            Have a question or remark? Feel free to contact us!
          </p>

          <form className="space-y-4">

            <div>
              <label className="text-sm">Name</label>
              <input
                type="text"
                placeholder="Hasib Al Mamun"
                className="w-full mt-1 p-3 rounded-md bg-white/80 text-gray-700 outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="hasib@gmail.com"
                className="w-full mt-1 p-3 rounded-md bg-white/80 text-gray-700 outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Phone</label>
              <input
                type="text"
                placeholder="(+880)1700000000"
                className="w-full mt-1 p-3 rounded-md bg-white/80 text-gray-700 outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Project Details</label>
              <textarea
                rows="4"
                placeholder="Write your projects details here."
                className="w-full mt-1 p-3 rounded-md bg-white/80 text-gray-700 outline-none"
              ></textarea>
            </div>

            <button className="w-full mt-4 bg-indigo-700 hover:bg-indigo-800 py-3 rounded-md font-medium">
              Submit
            </button>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">

          {/* LOCATION CARD */}
          <div className="bg-[#A8B6E8] p-6 rounded-xl">

            <h3 className="text-indigo-700 font-semibold mb-4">
              Location
            </h3>

            <iframe
              title="map"
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              className="w-full h-40 rounded-md mb-3"
            ></iframe>

            <div className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt />
              <span>Dhaka, Bangladesh</span>
            </div>

          </div>

          {/* CONTACT CARD */}
          <div className="bg-[#A8B6E8] p-6 rounded-xl ">

            <h3 className="text-indigo-700 font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-3 text-gray-700 text-right">

              <p className="flex items-center gap-2 text-right">
                <FaPhone /> +88 01303-129515
              </p>

              <p className="flex items-center gap-2 text-right">
                <FaPhone /> +88 01761-834096
              </p>

              <p className="flex items-center gap-2 text-right">
                <FaPhone /> +88 01518-389378
              </p>

              <p className="flex items-center gap-2 text-right">
                <FiMail /> info@zensoftlab.com
              </p>

            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 text-xl mt-6 text-indigo-700">

              <FaFacebook className="cursor-pointer" />
              <FaXTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaLinkedin className="cursor-pointer" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;