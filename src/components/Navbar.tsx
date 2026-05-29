export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 bg-black text-white fixed top-0 left-0">
      
      <h1 className="text-2xl font-bold">
        Anisha
      </h1>

      <ul className="flex gap-6 text-gray-300">
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Projects</li>
        <li className="hover:text-white cursor-pointer">Skills</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>

    </nav>
  );
} 