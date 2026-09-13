import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiArrowUpRight,
} from "react-icons/fi";

const experiences = [
  {
    year: "2026 — Present",
    role: "Professional Experience",
    company: "Getz",
    type: "Current Role",
    description:
      "Working in a professional environment while continuing to develop technical, communication and problem-solving skills.",
    skills: ["Professional Growth", "Teamwork", "Problem Solving"],
  },
  {
    year: "2024 — Present",
    role: "Software Engineering Journey",
    company: "Virtual University",
    type: "Education",
    description:
      "Pursuing Software Engineering while building practical development skills through projects, experimentation and continuous learning.",
    skills: ["Software Engineering", "Programming", "Computer Science"],
  },
  {
    year: "2024 — Present",
    role: "Web3 & Blockchain Development",
    company: "Independent Learning",
    type: "Learning",
    description:
      "Exploring blockchain development with a focus on Solidity, smart contracts, Ethereum ecosystem concepts and decentralized applications.",
    skills: ["Solidity", "Smart Contracts", "EVM", "Web3"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Experience &{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              growth.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A journey of professional experience, education and continuous
            technical growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-linear-to-b from-blue-500/60 via-blue-500/20 to-transparent md:left-1/2 md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.year}`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`relative md:flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[18px] top-8 z-20 hidden h-3.5 w-3.5 rounded-full border-2 border-blue-400 bg-[#020617] shadow-[0_0_15px_rgba(59,130,246,0.6)] md:left-1/2 md:block md:-translate-x-1/2" />

                {/* Card */}
                <div className="w-full md:w-[46%]">
                  <div className="group relative rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]">

                    {/* Top */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                          <FiBriefcase size={20} />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-500">
                            {experience.type}
                          </p>

                          <h3 className="mt-1 text-lg font-semibold text-white">
                            {experience.company}
                          </h3>
                        </div>
                      </div>

                      <FiArrowUpRight className="text-xl text-slate-600 transition group-hover:text-blue-400" />
                    </div>

                    {/* Role */}
                    <h4 className="mt-7 text-xl font-semibold text-slate-100">
                      {experience.role}
                    </h4>

                    {/* Date */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-blue-400">
                      <FiCalendar size={15} />
                      <span>{experience.year}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-500">
            The journey is still being written.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;