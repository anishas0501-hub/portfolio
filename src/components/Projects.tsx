export default function Projects() {
  const projects = [
    {
      title: "A2Z Sheet Progress Tracker",
      image: "/projects/tracker.png",
      description:
        "Built a React-based DSA tracking platform inspired by the Striver A2Z roadmap. Features progress tracking, filtering, dashboard analytics, charts, and local storage persistence.",
      tech: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "React Router",
        "Recharts",
      ],
      github:
        "https://github.com/anishas0501-hub/A2Z-Sheet-Progress-Tracker",
      demo:
        "https://dsa-portal-eight.vercel.app/",
    },
    {
      title: "Portfolio Website",
      image: "",
      description:
        "Responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase projects, skills, and achievements.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/anishas0501-hub/portfolio",
      demo:
        "https://portfolio-henna-rho-2rzy8tl2an.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of projects focused on frontend development,
          problem solving, and building useful tools.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                border border-gray-700
                rounded-xl
                overflow-hidden
                bg-zinc-900/50
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-white
                hover:shadow-xl
              "
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-48
                    object-cover
                    border-b
                    border-gray-700
                  "
                />
              )}

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-gray-800
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      py-2
                      border
                      border-gray-600
                      rounded-lg
                      hover:bg-white
                      hover:text-black
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      py-2
                      bg-white
                      text-black
                      rounded-lg
                      hover:opacity-80
                      transition
                    "
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}