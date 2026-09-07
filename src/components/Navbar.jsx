import { motion } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/logo.png";



const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Web3",
  "Contact",
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 z-50 w-full px-5 py-5 md:px-10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3 backdrop-blur-xl">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="FA Logo"
            className="h-10 w-10 object-contain"
          />
          

          <span className="hidden text-lg font-semibold text-white sm:block">
            Furqan <span className="text-blue-500">Ali</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative text-sm transition ${
                index === 0
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-500" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400">
            <FiDownload size={18} />
          </button>

          <a
            href="#contact"
            className="rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white lg:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/90 p-5 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 transition hover:text-blue-400"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;