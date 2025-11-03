import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import SpiralS from './SpiralS';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25, 0.6], [1, 0.9, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMouseMove = (e) => {
    const el = containerRef.current?.querySelector('#spiralS');
    if (!el || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = y * -6; // subtle tilt like Active Theory
    const ry = x * 6;
    el.style.transform = `translateZ(0) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleMouseLeave = () => {
    const el = containerRef.current?.querySelector('#spiralS');
    if (!el) return;
    el.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradients and cinematic vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Spiral S mark (glowing, reactive) */}
      <motion.div
        id="spiralS"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%]"
        style={{ transformStyle: 'preserve-3d' }}
        aria-hidden
      >
        <div className="grid place-items-center">
          <SpiralS size={260} />
        </div>
      </motion.div>

      <motion.div style={{ opacity: titleOpacity, y: titleY }} className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="text-4xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          We Build Intelligent Experiences.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Snapshot AI crafts immersive, cinematic products powered by real-time AI.
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
            <span className="relative z-10">Explore</span>
            <span className="relative z-10 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-[0_0_20px] shadow-cyan-400/50" />
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/60 sm:flex">
          <span className="h-px w-10 bg-white/30" />
          <span>Scroll</span>
          <span className="h-px w-10 bg-white/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
