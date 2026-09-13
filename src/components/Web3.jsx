import { motion } from "framer-motion";
import {
  FiBox,
  FiCpu,
  FiShield,
  FiArrowUpRight,
} from "react-icons/fi";

const concepts = [
  {
    icon: <FiBox />,
    title: "Smart Contracts",
    text: "Building and understanding decentralized logic using Solidity.",
  },
  {
    icon: <FiCpu />,
    title: "EVM Development",
    text: "Learning how Ethereum-compatible networks execute smart contracts.",
  },
  {
    icon: <FiShield />,
    title: "Secure Development",
    text: "Exploring access control, checks-effects-interactions and secure contract patterns.",
  },
];

function Web3() {
  return (
    <section
      id="web3"
      className="relative overflow-hidden bg-[#020617] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Web3 & Blockchain
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Building towards the{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              decentralized web.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Blockchain isn't just another technology I'm learning. It's an
            area I'm actively exploring through Solidity, smart contracts
            and practical development.
          </p>
        </motion.div>

        {/* Main Web3 Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-md md:p-12"
        >
          {/* Decorative Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
                  <FiBox />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Current Focus
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Blockchain Development
                  </h3>
                </div>
              </div>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
                I'm developing my understanding of blockchain from the
                fundamentals upward — from Solidity and contract logic to
                interacting with contracts from JavaScript and building
                toward complete decentralized applications.
              </p>

              {/* Tech Pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Solidity",
                  "Ethereum",
                  "EVM",
                  "Smart Contracts",
                  "Ethers.js",
                  "DApps",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-blue-400/10 bg-blue-500/5 px-3 py-2 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {concepts.map((concept, index) => (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-xl text-blue-400">
                      {concept.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {concept.title}
                      </h4>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {concept.text}
                      </p>
                    </div>

                    <FiArrowUpRight className="ml-auto shrink-0 text-slate-700 transition group-hover:text-blue-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Learn the fundamentals → Build → Test → Improve → Repeat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Web3;