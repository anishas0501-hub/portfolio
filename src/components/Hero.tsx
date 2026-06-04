export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-white pt-24 overflow-hidden">

      {/* Stars */}
      <div className="absolute inset-0">
        <div
          className="star"
          style={{ top: "15%", left: "10%", animationDelay: "0s" }}
        />
        <div
          className="star"
          style={{ top: "25%", right: "20%", animationDelay: "1s" }}
        />
        <div
          className="star"
          style={{ top: "40%", left: "35%", animationDelay: "2s" }}
        />
        <div
          className="star"
          style={{ top: "20%", left: "70%", animationDelay: "0.5s" }}
        />
        <div
          className="star"
          style={{ top: "55%", right: "30%", animationDelay: "1.5s" }}
        />
        <div
          className="star"
          style={{ bottom: "30%", right: "25%", animationDelay: "2.5s" }}
        />
        <div
          className="star"
          style={{ bottom: "15%", left: "25%", animationDelay: "1.2s" }}
        />
        <div
          className="star"
          style={{ bottom: "45%", left: "50%", animationDelay: "0.8s" }}
        />
        <div
          className="star"
          style={{
            top: "30%",
            left: "80%",
            width: "3px",
            height: "3px",
            animationDelay: "1.8s",
          }}
        />
        <div
          className="star"
          style={{
            bottom: "25%",
            left: "15%",
            width: "3px",
            height: "3px",
            animationDelay: "0.3s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl text-center">

        {/* Greeting */}
        <p className="text-gray-400 mb-4">
          Hello, I’m
        </p>

        {/* Name */}
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

        {/* Tagline */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Frontend Developer • Learning by Building • Problem Solver
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          I'm a computer science student passionate about web development,
          problem solving, and building projects that help me grow as a developer.
        </p>

        {/* Resume Button */}
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