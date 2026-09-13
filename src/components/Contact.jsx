import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />

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
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Let's build something{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Have a project, opportunity or idea you'd like to discuss?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-14 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
                  <FiMail />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Start a conversation
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Whether you're looking for a developer, want to discuss
                  Web3, or simply want to connect, feel free to reach out.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex gap-3">
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
                  href="mailto:your@email.com"
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
                >
                  <FiMail size={19} />
                </a>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-slate-400"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-white/[0.07]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-slate-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-white/[0.07]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-slate-400"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Let's work together"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-white/[0.07]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-slate-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-white/[0.07]"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                Send Message

                <FiSend
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-3 text-sm text-slate-500"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          Open to opportunities & collaborations
        </motion.div>

        {/* Footer */}
        <div className="mt-24 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Furqan Ali. Built with React,
            JavaScript & lots of ☕.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;