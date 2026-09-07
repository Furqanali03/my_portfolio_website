import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiZap,
  FiArrowUpRight,
} from "react-icons/fi";

function About() {
  const highlights = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      text: "Building responsive and modern interfaces with React and JavaScript.",
    },
    {
      icon: <FiLayers />,
      title: "Modern Architecture",
      text: "Writing clean, reusable and scalable components for real-world applications.",
    },
    {
      icon: <FiZap />,
      title: "Web3 Exploration",
      text: "Learning blockchain development and exploring decentralized applications.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Turning ideas into{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-slate-300">
              I'm a frontend developer focused on creating modern,
              responsive and user-friendly web applications. I enjoy
              turning ideas into clean interfaces and interactive
              experiences.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-400">
              My current focus is React and modern JavaScript development,
              while I'm also exploring Web3 and blockchain technologies.
              I enjoy learning by building real projects and continuously
              improving my development skills.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white">React</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Frontend
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white">JS</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Language
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white">Web3</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Exploring
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400 transition group-hover:bg-blue-500/20">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <FiArrowUpRight className="text-slate-600 transition group-hover:text-blue-400" />
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;