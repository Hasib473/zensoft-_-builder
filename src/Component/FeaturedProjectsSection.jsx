import React from "react";
import img1 from "../assets/fimg1.png";
import img2 from "../assets/fimg2.png";
import img3 from "../assets/fimg3.png";

const FeaturedProjectsSection = () => {
  return (
    <section className="bg-[#EEF2FF] py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6 px-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-200 bg-white text-indigo-600 transition hover:bg-indigo-50">
              ‹
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-200 bg-white text-indigo-600 transition hover:bg-indigo-50">
              ›
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm font-medium">
            <button className="text-indigo-600 border-b-2 border-indigo-600 pb-1">
              New
            </button>
            <button className="text-slate-500 hover:text-slate-800">
              Web
            </button>
            <button className="text-slate-500 hover:text-slate-800">
              Mobile
            </button>
            <button className="text-slate-500 hover:text-slate-800">
              Themes
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl shadow-lg">

            {/* Left Images */}
            <div className="bg-slate-900 p-3">
              <img
                src={img1}
                alt="Preview"
                className="h-[180px] w-full object-cover  "
              />

              <img
                src={img2}
                alt="Preview"
                className="h-[180px] w-full object-cover "
              />

              <img
                src={img3}
                alt="Preview"
                className="h-[180px] w-full object-cover "
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-between bg-white p-8">

              <div>
                <h3 className="mb-1 text-2xl font-semibold text-slate-900">
                  AmaderShikkha
                </h3>

                <p className="mb-4 text-sm text-indigo-600 font-medium">
                  Training Center Management System
                </p>

                <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border text-xs">
                    ⏱
                  </span>
                  <span>4 months</span>
                </div>

                <p className="mb-8 text-sm leading-relaxed text-slate-600">
                  AmaderShikkha provides smart, dynamic, and user-friendly
                  educational software and website solutions for schools,
                  colleges, training centers, and other learning institutions.
                  From concept to launch, we deliver everything you need to
                  build, manage, and grow your online presence.
                </p>

                {/* Technologies */}
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Node.js", "React", "PostgreSQL", "Django"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="mt-10">
                <button className="rounded-lg cursor-pointer bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:shadow-md">
                  View Live Demo
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-indigo-200" />
          <span className="h-2 w-6 rounded-full bg-indigo-600" />
          <span className="h-2 w-2 rounded-full bg-indigo-200" />
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;