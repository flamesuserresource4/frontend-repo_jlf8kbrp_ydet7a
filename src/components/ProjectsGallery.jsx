import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Image, Play, Mic, MessageSquare, Cog } from 'lucide-react';

const projects = [
  {
    title: 'Adaptive Visuals',
    tag: 'Real-time WebGL',
    icon: <Image className="h-5 w-5" />,
    gradient: 'from-cyan-500/20 to-fuchsia-500/20',
    desc: 'Shaders that respond to user intent and data streams.',
  },
  {
    title: 'Cinematic Interfaces',
    tag: 'Framer Motion',
    icon: <Play className="h-5 w-5" />,
    gradient: 'from-fuchsia-500/20 to-indigo-500/20',
    desc: 'Narrative UI with smooth transitions and ambient depth.',
  },
  {
    title: 'Generative Story',
    tag: 'AI-driven',
    icon: <Rocket className="h-5 w-5" />,
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    desc: 'Personalized arcs powered by language and voice models.',
  },
];

const tech = [
  {
    title: 'Voice AI',
    icon: Mic,
    color: 'from-cyan-400 to-fuchsia-400',
    desc: 'Natural dialog and spatialized audio cues for guidance.',
  },
  {
    title: 'NLP',
    icon: MessageSquare,
    color: 'from-fuchsia-400 to-indigo-400',
    desc: 'Understanding context to drive adaptive experiences.',
  },
  {
    title: 'Automation',
    icon: Cog,
    color: 'from-indigo-400 to-cyan-400',
    desc: 'Pipelines that connect perception to action in real-time.',
  },
];

const ProjectsGallery = () => {
  return (
    <section className="relative w-full bg-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(800px_500px_at_100%_120%,rgba(217,70,239,0.08),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 blur-xl transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <div className="flex items-center gap-3 text-white/90">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">{p.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">{p.tag}</p>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/70">{p.desc}</p>
                <div className="mt-5 h-28 w-full rounded-xl bg-gradient-to-br from-white/5 to-white/0 ring-1 ring-inset ring-white/10 transition-all group-hover:ring-white/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology subsection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold">Technology</h3>
          <p className="mt-2 max-w-2xl text-white/70">Animated building blocks that power voice, language, and automation.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {tech.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                >
                  <div className={`pointer-events-none absolute -inset-10 bg-gradient-to-br ${t.color} opacity-10 blur-2xl`} />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-medium">{t.title}</h4>
                    </div>
                    <p className="mt-3 text-sm text-white/70">{t.desc}</p>
                    <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
