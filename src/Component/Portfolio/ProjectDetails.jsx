import { useParams } from "react-router";
import { projects } from "../../Data/ProjectData";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

export default function ProjectDetails() {

  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return <h2 className="text-center mt-20">Project not found</h2>;
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <FadeLoader />
      </div>
    );
  }

  return (
    <section className="py-20 bg-[#eef1f7] min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg p-6">

          {/* Left Image */}
          <div className="rounded-lg overflow-hidden border">
            <img
              src={project.image}
              className="w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h1>

            <p className="text-gray-500 mb-6">
              {project.description}
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              {project.details}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-2">

                {project.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-md"
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>

            {/* Button */}
            <a
              href={project.live}
              target="_blank"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md transition"
            >
              View Live Demo
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}