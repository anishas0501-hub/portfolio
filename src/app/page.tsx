import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProblemSolving from "@/components/ProblemSolving";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";


export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-b
        from-black
        via-[#040d18]
        to-[#031313]
      "
    >
      <Spotlight />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ProblemSolving />
      <Contact />
      <Footer />
    </main>
  );
}