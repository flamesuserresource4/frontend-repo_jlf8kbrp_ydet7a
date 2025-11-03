import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const tiles = [
  {
    title: 'Interactive Storyworld',
    subtitle: 'Narrative UI',
    color: 'from-cyan-400/20 to-cyan-300/0',
    image: 'linear-gradient(135deg, rgba(34,211,238,0.18), rgba(34,211,238,0.0))',
    desc: 'Cinematic navigation with composited layers and responsive motion.',
  },
  {
    title: 'Real-time Visuals',
    subtitle: 'WebGL Systems',
    color: 'from-cyan-400/20 to-cyan-300/0',
    image: 'linear-gradient(135deg, rgba(34,211,238,0.18), rgba(34,211,238,0.0))',
    desc: 'Shader-driven depth, adaptive light, and spatial feedback.',
  },
  {
    title: 'Voice + Language',
    subtitle: 'AI Interface',
    color: 'from-cyan-400/20 to-cyan-300/0',
    image: 'linear-gradient(135deg, rgba(34,211,238,0.18), rgba(34,211,238,0.0))',
    desc: 'Conversational controls that shape the journey in real time.',
  },
  {
    title: 'Data as Atmosphere',
    subtitle: 'Live Inputs',
    color: 'from-cyan-400/20 to-cyan-300/0',
    image: 'linear-gradient(135deg, rgba(34,211,238,0.18), rgba(34,211,238,0.0))',
    desc: 'Signals become texture — informing motion, layout, and tone.',
  },
];

const TiltCard = ({ title, subtitle, desc }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -10; // rotateX
    const ry = ((x - rect.width / 2) / rect.width) * 10; // rotateY
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="snap-center shrink-0 basis-[80vw] px-4 sm:basis-[60vw] lg:basis-[40vw]">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative h-[60vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 300ms ease' }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-400/0" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(34,211,238,0.18),transparent_60%)] opacity-70" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 80% 120%, rgba(255,255,255,0.06), transparent 40%)' }} />
        <div className="relative flex h-full flex-col justify-end p-6">
          <p className="text-xs uppercase tracking-widest text-white/60">{subtitle}</p>
          <h3 className="mt-1 text-2xl font-semibold">{title}</h3>
          <p className="mt-2 max-w-md text-sm text-white/70">{desc}</p>
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300" />
        </div>
      </div>
    </div>
  );
};

const HorizontalShowcase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section id="work" ref={targetRef} className="relative w-full bg-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(800px_500px_at_100%_120%,rgba(34,211,238,0.08),transparent)]" />
      </div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Selected Work
          </h2>
          <p className="hidden max-w-sm text-sm text-white/70 sm:block">
            A horizontally scrolling gallery of 3D motion tiles with subtle parallax.
          </p>
        </div>

        <div className="mt-8 no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {tiles.map((t) => (
            <TiltCard key={t.title} title={t.title} subtitle={t.subtitle} desc={t.desc} />)
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HorizontalShowcase;
