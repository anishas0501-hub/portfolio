export default function Hero() {
  return ( 
    <section className="min-h-screen pt-24 bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        
        <p className="text-gray-400 mb-4 text-lg">
          Hello, my name is
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Anisha
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Aspiring Software Engineer & Web Developer
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          I love building projects, solving DSA problems,
          and learning modern web development while growing
          as a developer every day.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
            View Projects
          </button>

          <button className="border border-gray-500 px-6 py-3 rounded-full hover:border-white transition">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
} 