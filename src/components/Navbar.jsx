import { motion } from "framer-motion";

export default function Navbar() {
  const links = ["Home", "About", "Education", "Research", "Projects", "Skills", "Contact"];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-gray-800 shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold text-blue-400">Nisarga</h1>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
