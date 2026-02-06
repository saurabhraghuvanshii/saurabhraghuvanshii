"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  { rank: "🥇", label: "Innovation", description: "Pushing boundaries with cutting-edge tech" },
  { rank: "🥈", label: "Performance", description: "Optimized for speed and efficiency" },
  { rank: "🥉", label: "Design", description: "Beautiful interfaces, great UX" },
];

export default function ChampionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-mono">The Champion</span>
          <div className="flex-1 h-px bg-gray-800" />
        </motion.div>

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
          >
            THE
            <br />
            <span className="text-gradient-orange">CHAMPION</span>
          </motion.h2>
        </div>

        {/* Ball on podium */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mx-auto max-w-md"
        >
          {/* Floating football emoji/visual */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 z-10 animate-float">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 via-white to-gray-300 flex items-center justify-center shadow-[0_0_60px_rgba(255,107,0,0.3)] border-2 border-orange/20">
              <span className="text-5xl sm:text-7xl md:text-8xl">⚽</span>
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full border border-orange/20 animate-pulse" />
          </div>

          {/* Podium */}
          <div className="relative -mt-6">
            {/* Podium top surface */}
            <div className="w-36 sm:w-48 h-4 mx-auto bg-gradient-to-b from-orange/40 to-orange/20 rounded-t-lg" />
            {/* Podium body */}
            <div className="w-48 sm:w-64 mx-auto">
              <div
                className="h-24 sm:h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg border border-gray-700 border-t-0 flex items-center justify-center"
                style={{
                  clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <span className="text-2xl sm:text-3xl font-black text-orange/30">1</span>
              </div>
            </div>

            {/* Reflection */}
            <div
              className="w-48 sm:w-64 h-20 mx-auto mt-1 rounded-lg opacity-20"
              style={{
                background: "linear-gradient(180deg, rgba(255, 107, 0, 0.15) 0%, transparent 100%)",
                transform: "scaleY(-0.6)",
                filter: "blur(6px)",
              }}
            />
          </div>
        </motion.div>

        {/* Tier system */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
              className="stat-card rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-3">{tier.rank}</div>
              <h3 className="text-lg font-bold text-white mb-2">{tier.label}</h3>
              <p className="text-sm text-gray-500">{tier.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
