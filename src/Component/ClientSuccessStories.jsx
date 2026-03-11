import { Play } from "lucide-react";
import React from "react";
import zoomMeeting from "../assets/clientsuccessstory.jpg"

export default function ClientSuccessStories() {
  return (
    <section className="bg-slate-200 py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Client Success Stories
        </h2>

        <p className="text-gray-500 mt-3 mb-10">
          See why businesses trust our expertise: Real feedback and results from the partners we serve.
        </p>

        {/* Image Card */}
        <div className="flex justify-center">
  <div className="w-[900px] bg-black border-2 border-blue-500 rounded-2xl p-3 shadow-xl">
    
    <div className="relative">
      {/* Image */}
      <img
        src={zoomMeeting}
        alt="Client Success Story"
        className="w-full rounded-lg object-cover"
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
          <Play className="text-blue-600 ml-1" size={30} />
        </button>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}