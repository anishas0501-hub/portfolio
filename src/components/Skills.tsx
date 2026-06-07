export default function Skills() {
  const skills = {
    Languages: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "Kotlin",
    ],

    "Core CS": [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
    ],

    Frontend: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],

    "UI/UX": [
      "Figma",
      "Responsive Design",
    ],

    "Mobile Development": [
      "Android Studio",
      "Jetpack Compose",
    ],

    Tools: [
      "Git",
      "GitHub",
      "VS Code",
    ],
    "Problem Solving": [
      "DSA",
      "Competitive Programming",
    ],
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
              className="
                border border-gray-700
                rounded-xl p-6
                bg-zinc-900/50
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-lg
                hover:border-white
              "
            >
              <h3 className="text-2xl font-semibold mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-gray-800
                      px-3 py-1
                      rounded-full
                      text-sm
                      transition
                      hover:bg-gray-700
                      hover:scale-105
                    "
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