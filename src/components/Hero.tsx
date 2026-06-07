import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-white pt-24 overflow-hidden">

      {/* Stars */}
      <div className="absolute inset-0">
        <div
          className="star floating-star"
          style={{
            top: "15%",
            left: "10%",
            animationDelay: "0s",
            animationDuration: "8s",
            opacity: 0.4,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "25%",
            right: "20%",
            animationDelay: "1s",
            animationDuration: "7s",
            opacity: 0.9,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "40%",
            left: "35%",
            animationDelay: "2s",
            animationDuration: "5s",
            opacity: 0.7,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "20%",
            left: "70%",
            animationDelay: "0.5s",
            animationDuration: "9s",
            opacity: 0.4,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "55%",
            right: "30%",
            animationDelay: "1.5s",
            animationDuration: "6s",
            opacity: 0.9,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "30%",
            right: "25%",
            animationDelay: "2.5s",
            animationDuration: "8s",
            opacity: 0.3,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "15%",
            left: "25%",
            animationDelay: "1.2s",
            animationDuration: "7s",
            opacity: 0.4,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "45%",
            left: "50%",
            animationDelay: "0.8s",
            animationDuration: "9s",
            opacity: 0.5,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "30%",
            left: "80%",
            width: "3px",
            height: "3px",
            animationDelay: "1.8s",
            animationDuration: "10s",
            opacity: 0.4,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "25%",
            left: "15%",
            width: "3px",
            height: "3px",
            animationDelay: "0.3s",
            animationDuration: "6s",
            opacity: 0.3,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "10%",
            left: "55%",
            animationDelay: "1.7s",
            animationDuration: "8s",
            opacity: 0.4,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "65%",
            left: "75%",
            animationDelay: "0.4s",
            animationDuration: "7s",
            opacity: 0.4,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "10%",
            right: "10%",
            animationDelay: "2.2s",
            animationDuration: "4s",
            opacity: 0.5,
          }}
        />
        
        <div
          className="star floating-star"
          style={{
            top: "8%",
            left: "25%",
            animationDelay: "0.6s",
            animationDuration: "9s",
            opacity: 0.5,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "12%",
            right: "12%",
            animationDelay: "1.3s",
            animationDuration: "6s",
            opacity: 0.5,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "35%",
            left: "5%",
            animationDelay: "2.1s",
            animationDuration: "7s",
            opacity: 0.9,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "45%",
            right: "8%",
            animationDelay: "0.8s",
            animationDuration: "8s",
            opacity: 0.7,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "60%",
            left: "18%",
            animationDelay: "1.9s",
            animationDuration: "5s",
            opacity: 0.5,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "72%",
            left: "42%",
            animationDelay: "0.4s",
            animationDuration: "10s",
            opacity: 0.9,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "78%",
            right: "35%",
            animationDelay: "1.5s",
            animationDuration: "7s",
            opacity: 0.4,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "18%",
            left: "65%",
            animationDelay: "2.3s",
            animationDuration: "6s",
            opacity: 0.5,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "8%",
            left: "38%",
            animationDelay: "0.9s",
            animationDuration: "8s",
            opacity: 0.5,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "5%",
            right: "22%",
            animationDelay: "1.7s",
            animationDuration: "9s",
            opacity: 0.9,
          }}
        />

        <div
          className="star floating-star"
          style={{
            top: "22%",
            left: "48%",
            width: "3px",
            height: "3px",
            animationDelay: "0.5s",
            animationDuration: "11s",
            opacity: 0.9,
          }}
        />

        <div
          className="star floating-star"
          style={{
            bottom: "40%",
            right: "45%",
            width: "3px",
            height: "3px",
            animationDelay: "2s",
            animationDuration: "7s",
            opacity: 0.4,
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
        <MagneticButton href="/AnishaResume.pdf">
          <div
            className="
              inline-flex items-center gap-2
              px-8 py-4
              rounded-xl

              bg-gradient-to-b
              from-white/10
              to-white/5

              backdrop-blur-md

              border border-white/10

              text-white
              font-semibold

              hover:from-white/15
              hover:to-white/8
              hover:border-white/20

              transition-all duration-300
            "
          >
            View Resume
          </div>
        </MagneticButton>

      </div>
    </section>
  );
}