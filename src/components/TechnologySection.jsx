import React from 'react';
import { motion } from 'framer-motion';
import { Mic, MessageSquare, Cog } from 'lucide-react';

const tech = [
  { title: 'Voice AI', icon: Mic, desc: 'Natural dialog with spatial cues and realtime feedback.' },
  { title: 'NLP', icon: MessageSquare, desc: 'Language systems that understand context and intent.' },
  { title: 'Automation', icon: Cog, desc: 'From perception to action with robust pipelines.' },
];

const TechnologySection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#07070b] to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl font-semibold sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          Technology
        </motion.h2>
        <p className="mt-2 max-w-xl text-white/70">Animated building blocks that power voice, language, and automation.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
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
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-cyan-300/0" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium">{t.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{t.desc}</p>
                  <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
