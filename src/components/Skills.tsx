export default function Skills() {
  const skills = {
    Languages: ["C", "C++", "Python"],
    "Core CS" : ["Data Structures", "Algorithms", "OOP"],
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    Tools: ["Git", "GitHub", "VS Code"],
  };

  return (
    <section id="skills" className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
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