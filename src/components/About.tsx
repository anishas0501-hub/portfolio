export default function About() {
  return (
    <section id="about" className="text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">

            <p>
              I’m a Computer Science student building my way through web development,
              one project at a time.
            </p>

            <p>
              I spend a lot of time solving DSA problems across different platforms —
              sometimes focused, sometimes stuck, but always learning something new.
            </p>

            <p>
              Recently, I’ve been exploring <span className="text-gray-200">generative AI</span>
              and how it can shape the way we build smarter applications.
            </p>

            <p>
              Outside of code, I like playing <span className="text-gray-200">chess</span> —
              it helps me slow down and think better.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-500 transition">
              <p className="font-semibold text-white mb-2">Web Dev</p>
              <p className="text-sm text-gray-400">
                Building clean and responsive applications
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-500 transition">
              <p className="font-semibold text-white mb-2">DSA</p>
              <p className="text-sm text-gray-400">
                Problem solving across platforms
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-500 transition">
              <p className="font-semibold text-white mb-2">GenAI</p>
              <p className="text-sm text-gray-400">
                Exploring AI-driven applications
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-500 transition">
              <p className="font-semibold text-white mb-2">Chess</p>
              <p className="text-sm text-gray-400">
                Thinking, slowing down, improving focus
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}