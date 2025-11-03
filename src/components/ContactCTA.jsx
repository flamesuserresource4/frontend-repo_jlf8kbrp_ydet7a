import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-[#090a0f] to-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_120%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Let’s Build the Future Together
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We partner with visionary teams to craft intelligent, cinematic experiences.
          Tell us about your world — we’ll design what it feels like.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:hello@snapshot.ai?subject=Let%27s%20Build%20the%20Future"
            className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <span className="relative z-10">Start a conversation</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px] shadow-cyan-400/30 transition hover:shadow-fuchsia-400/30"
          >
            View capabilities
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
