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
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignettes and color washes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-6xl"
            initial={{ letterSpacing: '0.1em' }}
            animate={{ letterSpacing: '0em' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          >
            We Build Intelligent Experiences.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Snapshot AI crafts cinematic, interactive products that feel alive — merging
            creativity with real-world AI.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button
              onClick={scrollToNext}
              className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
            >
              <span className="relative z-10">Explore the Experience</span>
              <span className="relative z-10 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-[0_0_20px] shadow-cyan-400/50" />
              <span className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </button>
          </motion.div>
        </motion.div>

        {/* Subtle HUD lines */}
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
