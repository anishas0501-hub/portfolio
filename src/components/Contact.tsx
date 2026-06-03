import { Mail, Phone, Link } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Contact Me
      </h2>

      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-8 border border-zinc-200 dark:border-zinc-800">
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8">
          I'm currently looking for internship opportunities and exciting
          projects. Feel free to reach out!
        </p>

        <div className="space-y-6">
          <a
            href="mailto:anisha251044@iiitmanipur.ac.in"
            className="flex items-center gap-4 hover:translate-x-1 transition"
          >
            <Mail size={22} />
            <span>anisha251044@iiitmanipur.ac.in</span>
          </a>

          <a
            href="tel:+916291352421"
            className="flex items-center gap-4 hover:translate-x-1 transition"
          >
            <Phone size={22} />
            <span>+91 62913 52421</span>
          </a>

          <a
            href="https://www.linkedin.com/in/anisha-sadhukhan-a17646237/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:translate-x-1 transition"
          >
            <Link size={22} />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}