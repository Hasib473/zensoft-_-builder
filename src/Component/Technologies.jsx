
import React from "react";
import djangoLogo from '../assets/django.png'
import kotlinLogo from '../assets/kotlin.png'
import pythonLogo from '../assets/python.png'
import reactLogo from '../assets/react.png'
import swiftLogo from '../assets/swift.png'


export default function Technologies() {
  const techs = [
    {
      name: "Django",
      logo: djangoLogo
    },
    {
      name: "Kotlin",
      logo: kotlinLogo
    },
    {
      name: "Python",
      logo: pythonLogo
    },
    {
      name: "React",
      logo: reactLogo,
    },
    {
      name: "Swift",
      logo: swiftLogo,
    },
  ];

  return (
    <section className="bg-slate-200 py-16">
      <div className="max-w-7xl mx-auto  text-center">
        
        {/* Title */}
        <h2 className="text-lg font-medium text-gray-700 mb-8">
          Technologies We Use
        </h2>

        {/* Tech Logos */}
        <div className="flex flex-wrap justify-center gap-4 py-4 bg-[#EEF3FF]">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md px-15 py-4 flex items-center justify-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}