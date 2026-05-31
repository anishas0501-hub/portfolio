export default function Projects() {
  const projects = [
    {
      title: "DSA Tracker",
      description:
        "A web app to track DSA progress with filtering, charts, and local storage.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}