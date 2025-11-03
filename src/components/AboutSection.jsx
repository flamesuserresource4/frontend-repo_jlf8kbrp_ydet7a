import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black via-[#07070b] to-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute left-24 bottom-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Creativity x AI
          </h2>
          <p className="mt-5 text-white/80">
            We design immersive interfaces where machine intelligence feels intuitive and
            human. From 3D visuals to reactive voice and language systems, our
            products tell stories that move.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {["Discover", "Design", "Deploy"].map((stage, i) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="absolute inset-0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" style={{
                background: 'radial-gradient(600px circle at 0% 0%, rgba(34,211,238,0.08), transparent 40%), radial-gradient(600px circle at 100% 100%, rgba(34,211,238,0.08), transparent 40%)'
              }} />
              <div className="relative">
                <span className="text-xs uppercase tracking-widest text-cyan-300/80">Phase {i + 1}</span>
                <h3 className="mt-2 text-xl font-medium">{stage}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {i === 0 && 'Map the problem space, audience, and narrative beats.'}
                  {i === 1 && 'Craft interactions, motion systems, and AI touchpoints.'}
                  {i === 2 && 'Ship robustly, measure impact, and iterate in real time.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
