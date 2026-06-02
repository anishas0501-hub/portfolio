export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-white pt-24">
      <div className="max-w-3xl text-center">

        {/* Greeting */}
        <p className="text-gray-400 mb-4">
          Hey, I’m
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
          Anisha
        </h1>

        {/* Soft identity line */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          I build and learn web development, one project at a time
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          I’m a computer science student exploring software development
          through hands-on projects and problem solving. I’m currently
          growing step by step as I learn to build better, cleaner web apps.
        </p>

      </div>
    </section>
  );
}