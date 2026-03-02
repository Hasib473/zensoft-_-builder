import React from "react";
import img1 from '../assets/fimg1.png'
import img2 from '../assets/fimg2.png'
import img3 from '../assets/fimg3.png'

const FeaturedProjectsSection = () => {
  return (
    <section className="max-w-7xl mx-auto bg-[#EEF2FF] py-10 ">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 px-5">
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-md border border-indigo-200 bg-white text-indigo-600 hover:bg-indigo-50">
              ‹
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-md border border-indigo-200 bg-white text-indigo-600 hover:bg-indigo-50">
              ›
            </button>
          </div>

          <div className="ml-auto flex flex-wrap justify-around items-center gap-10 text-sm font-medium">
            <button className="text-indigo-600">New</button>
            <button className="text-slate-500 hover:text-slate-800">Web</button>
            <button className="text-slate-500 hover:text-slate-800">
              Mobile
            </button>
            <button className="text-slate-500 hover:text-slate-800">
              Themes
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="overflow-hidden  ">
          <div className="grid grid-cols-1  p-5 md:grid-cols-2  md:p-8">
            {/* Left: Combined 3 images */}
            <div className="relative  bg-slate-900 p-2">
              <div className="grid grid-cols-1 ">
                <div className="overflow-hidden ">
                  <img
                    src={img1}
                    alt="Preview 1"
                    className="h-[180px] w-full object-cover"
                  />
                </div>
                <div className="grid ">
                  <div className="overflow-hiddden">
                    <img
                      src={img2}
                      alt="Preview 2"
                      className="h-[180px] w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={img3}
                      alt="Preview 3"
                      className="h-[180px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between bg-white p-6 shadow-lg">
              <div>
                <h3 className="mb-1 text-xl font-semibold text-slate-900">
                  AmaderShikkha
                </h3>
                <p className="mb-3 text-sm text-slate-500">
                  Training Center Management System
                </p>

                <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs">
                    ⏱
                  </span>
                  <span>4 months</span>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  AmaderShikkha provides smart, dynamic, and user-friendly
                  educational software and website solutions for schools,
                  colleges, training centers, and other learning institutions.
                  From concept to launch, we deliver everything you need to
                  build, manage, and grow your online presence — including
                  responsive websites, CRM systems, bulk SMS tools, free
                  domains, and lifetime updates. Experience professional
                  support, fast delivery, and premium hosting — all in one
                  platform powered by Zensoft Lab.
                </p>

                <div className="mb-20">
                  <p className="mt-20 mb-5 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "React", "PostgreSQL", "Django"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
                  View Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-indigo-200" />
          <span className="h-2 w-4 rounded-full bg-indigo-600" />
          <span className="h-2 w-2 rounded-full bg-indigo-200" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;