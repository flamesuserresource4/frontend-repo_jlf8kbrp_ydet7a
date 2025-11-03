import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradients and cinematic vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">
        {/* Spiral S mark (simple minimal motif) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="mb-6"
        >
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent [border-image:conic-gradient(from_0deg,rgba(34,211,238,0)_0%,rgba(34,211,238,0.8)_40%,rgba(34,211,238,0)_60%)_1]" />
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/0 blur-xl" />
            <div className="absolute inset-3 flex items-center justify-center text-cyan-300/90">
              <span className="text-lg font-semibold tracking-widest">S</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-6xl"
            initial={{ letterSpacing: '0.1em' }}
            animate={{ letterSpacing: '0em' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          >
            We build intelligent experiences.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Snapshot AI crafts immersive, cinematic products powered by real-time AI.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button
              onClick={scrollToNext}
              className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
            >
              <span className="relative z-10">Explore</span>
              <span className="relative z-10 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-[0_0_20px] shadow-cyan-400/50" />
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </button>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/60 sm:flex">
          <span className="h-px w-10 bg-white/30" />
          <span>Scroll</span>
          <span className="h-px w-10 bg-white/30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
