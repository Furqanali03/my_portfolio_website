import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiArrowUpRight,
} from "react-icons/fi";

function Skills() {
  const skillGroups = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      description:
        "Building modern, responsive and interactive web experiences.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      icon: <FiLayers />,
      title: "Web3 & Blockchain",
      description:
        "Developing decentralized applications and working with blockchain technologies.",
      skills: [
        "Solidity",
        "Smart Contracts",
        "Ethers.js",
        "EVM",
        "DApp Development",
        "Ethereum",
      ],
    },
    {
      icon: <FiDatabase />,
      title: "Backend Development",
      description:
        "Expanding into scalable backend systems and server-side development.",
      skills: ["Node.js", "NestJS", "REST APIs"],
      badge: "Currently Expanding",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Technologies I{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              work with.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A growing technical stack focused on frontend development,
            Web3 and blockchain, with backend development as the next step.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
            >
              {/* Top Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400 transition duration-300 group-hover:bg-blue-500/20">
                  {group.icon}
                </div>

                <FiArrowUpRight className="text-xl text-slate-600 transition duration-300 group-hover:text-blue-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              {/* Badge */}
              {group.badge && (
                <span className="mt-5 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {group.badge}
                </span>
              )}

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition duration-200 hover:border-blue-400/30 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="text-sm text-slate-500">
            Always learning. Always building. Always improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;