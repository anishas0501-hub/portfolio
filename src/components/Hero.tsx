export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-white pt-24">
      <div className="max-w-3xl text-center">

        {/* Greeting */}
        <p className="text-gray-400 mb-4">
          Hello, I’m
        </p>

        {/* Name (styled) */}
        <h1
          className="
            text-6xl md:text-7xl
            font-light
            tracking-tight
            mb-6
            text-white
          "
          style={{
            fontFamily: "serif",
            letterSpacing: "-0.02em",
          }}
        >
          Anisha Sadhukhan
        </h1>

        {/* Soft identity line */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Frontend Developer • Learning by Building • Problem Solver
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          I'm a computer science student passionate about web development, problem solving, and building projects that help me grow as a developer.
        </p>
        <a
          href="/AnishaResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            px-8 py-4
            rounded-xl
            border border-zinc-700
            bg-zinc-900
            text-white
            font-semibold
            hover:bg-zinc-800
            hover:border-zinc-500
            hover:scale-105
            transition-all duration-300
          "
        >
          View Resume
        </a>
      </div>
    </section>
  );
}