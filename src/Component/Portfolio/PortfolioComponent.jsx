import { projects } from "../../Data/ProjectData";
import { Link } from "react-router";

export default function PortfolioComponent() {
  return (
    <section className="bg-[#e9edf6] py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-700">
            Some of Our Great Work
          </h2>
          <p className="text-gray-500 mt-2">
            Explore our portfolio of innovative projects
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "All",
            "Web App",
            "Mobile App",
            "AI & ML",
            "UI/UX",
            "Cloud",
            "E-Commerce",
            "DevOps",
            "Blockchain"
          ].map((tag, index) => (
            <button
              key={index}
              className="px-4 py-1 border rounded-md text-sm text-blue-600 border-blue-400 hover:bg-blue-500 hover:text-white transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >

              <img
                src={project.image}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">

                <h3 className="font-semibold text-gray-800">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {project.description}
                </p>

                <Link to={`/project/${project.id}`}>
                  <button className="w-full border border-blue-400 text-blue-600 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
                    View Project
                  </button>
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}