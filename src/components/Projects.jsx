import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Redux E-Commerce",
    category: "Frontend Development",
    description:
      "A modern e-commerce experience with product management, Redux-powered cart state, cart count and dynamic total calculation.",
    tech: ["React", "Redux", "JavaScript", "CSS"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    number: "02",
    title: "Firebase Blogging App",
    category: "Full-Stack Web App",
    description:
      "A blogging application with authentication, user-specific content and a clean workflow for creating and managing blog posts.",
    tech: ["React", "Firebase", "JavaScript"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    number: "03",
    title: "Meme Generator",
    category: "Next.js Application",
    description:
      "A dynamic meme generator built with Next.js, focused on API integration, interactive UI and generating custom meme content.",
    tech: ["Next.js", "React", "JavaScript", "API"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    number: "04",
    title: "SecureBank",
    category: "Blockchain / Solidity",
    description:
      "A Solidity-based banking smart contract exploring deposits, withdrawals, balances, events, access control and secure withdrawal patterns.",
    tech: ["Solidity", "Ethereum", "Smart Contracts"],
    github: "#",
    demo: "#",
    featured: true,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Selected Work
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Things I've{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                built.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400">
            A selection of projects that reflect my journey across frontend
            development, modern web applications and blockchain.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-md transition duration-500 hover:border-blue-400/30 hover:bg-white/[0.055]"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-500/10 opacity-0 blur-[100px] transition duration-500 group-hover:opacity-100" />

              <div className="relative grid gap-8 p-7 md:grid-cols-[100px_1fr_auto] md:p-10">

                {/* Number */}
                <div>
                  <span className="text-sm font-medium tracking-widest text-slate-600">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-white transition group-hover:text-blue-400 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-start gap-3 md:flex-col">
                  <a
                    href={project.github}
                    aria-label={`${project.title} GitHub`}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
                  >
                    <FiGithub size={19} />
                  </a>

                  <a
                    href={project.demo}
                    aria-label={`${project.title} live demo`}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
                  >
                    <FiExternalLink size={19} />
                  </a>
                </div>
              </div>

              {/* Bottom Arrow */}
              <div className="absolute bottom-6 right-8 hidden text-slate-700 transition group-hover:text-blue-400 md:block">
                <FiArrowUpRight size={24} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            More projects are coming as I continue learning and building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;