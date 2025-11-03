import React, { useEffect, useRef } from 'react';

// SpiralS renders a glowing, animated "S"-shaped spiral using SVG with bloom-like glow via filters.
// No external dependencies.
const SpiralS = ({ size = 220 }) => {
  const groupRef = useRef(null);
  const startRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    const speed = 0.3; // radians/sec, within 0.2–0.4 target
    const animate = (t) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = (t - startRef.current) / 1000;
      const rotation = elapsed * speed;
      if (groupRef.current) {
        groupRef.current.style.transform = `rotate(${rotation}rad)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // A smooth S-curve path. Built from two mirrored cubic Béziers for elegance.
  const pathD = [
    'M 50,10',
    'C 10,10 10,60 50,60',
    'C 90,60 90,110 50,110',
  ].join(' ');

  const viewBox = '0 0 100 120';
  const px = size;

  return (
    <div
      className="relative"
      style={{ width: px, height: (px * 1.2), filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.35))' }}
      aria-hidden
    >
      <svg
        width={px}
        height={px * 1.2}
        viewBox={viewBox}
        className="overflow-visible"
        style={{ display: 'block' }}
      >
        <defs>
          {/* Soft glow via multiple Gaussian blurs */}
          <filter id="glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Gradient for electric cyan falloff */}
          <linearGradient id="trail" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(165,243,252,0.95)" />
            <stop offset="60%" stopColor="rgba(34,211,238,0.9)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0.4)" />
          </linearGradient>
        </defs>

        {/* Ambient dust field (optional cinematic ambiance) */}
        <g opacity="0.35">
          {Array.from({ length: 80 }).map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 120;
            const r = Math.random() * 0.7 + 0.15;
            const o = Math.random() * 0.5 + 0.2;
            return <circle key={i} cx={x} cy={y} r={r} fill={`rgba(180,255,255,${o})`} />;
          })}
        </g>

        {/* Group for rotation and pulsing glow */}
        <g ref={groupRef} style={{ transformOrigin: '50px 60px' }}>
          {/* Light trails: multiple strokes with varying widths and opacities */}
          <path d={pathD} fill="none" stroke="url(#trail)" strokeWidth="7" strokeLinecap="round" filter="url(#glow)" className="animate-[pulse_2600ms_ease-in-out_infinite]" />
          <path d={pathD} fill="none" stroke="rgba(165,243,252,0.65)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" className="animate-[pulse_2600ms_ease-in-out_infinite]" />
          <path d={pathD} fill="none" stroke="rgba(34,211,238,0.9)" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

          {/* Subtle dash wave to imply energy flow */}
          <path d={pathD} fill="none" stroke="rgba(165,243,252,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 10" className="animate-[dash_6000ms_linear_infinite]" />
        </g>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.9; }
            50% { opacity: 1; }
          }
          @keyframes dash {
            to { stroke-dashoffset: -200; }
          }
        `}</style>
      </svg>

      {/* Rim light accents */}
      <div className="pointer-events-none absolute -inset-4 rounded-[40%] bg-[radial-gradient(120px_80px_at_50%_50%,rgba(34,211,238,0.12),transparent)]" />
    </div>
  );
};

export default SpiralS;
