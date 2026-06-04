export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md text-white border-b border-gray-900">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight">
          Anisha
        </h1>

        {/* Links */}
        <ul className="flex gap-8 text-sm text-gray-400">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#problem-solving" className="hover:text-white transition">
              Problem Solving
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
} 