import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-transparent" />

      {/* Blue Glow */}
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 md:px-10">
        <div className="max-w-2xl">

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-blue-400"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl"
          >
            Furqan{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ali
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-2xl font-semibold text-slate-200 sm:text-3xl"
          >
            Frontend Developer{" "}
            <span className="text-blue-500">&</span>{" "}
            <span className="text-blue-400">Web3 Enthusiast</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            I build modern, responsive and user-focused web applications
            using React and modern JavaScript technologies, while exploring
            the world of Web3 and blockchain development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              View Projects

              <FiArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur-sm transition hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex items-center gap-3"
          >
            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FiGithub size={19} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FiLinkedin size={19} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
            >
              <FiMail size={19} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#020617] to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 md:flex"
      >
        <span>Scroll Down</span>

        <div className="h-8 w-px bg-gradient-to-b from-blue-400 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Hero;