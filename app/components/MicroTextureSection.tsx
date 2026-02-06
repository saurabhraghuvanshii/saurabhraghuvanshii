"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* --- techItems unchanged --- */
const techItems = [
  { name: "React", icon: "⚛️", angle: 0, ring: "outer" },
  { name: "Next.js", icon: "▲", angle: 51, ring: "outer" },
  { name: "TypeScript", icon: "TS", angle: 102, ring: "outer" },
  { name: "Node.js", icon: "⬡", angle: 153, ring: "outer" },
  { name: "Python", icon: "🐍", angle: 204, ring: "outer" },
  { name: "Solana", icon: "◎", angle: 255, ring: "outer" },
  { name: "Web3.js", icon: "W3", angle: 306, ring: "outer" },

  { name: "Docker", icon: "🐳", angle: 0, ring: "middle" },
  { name: "Kubernetes", icon: "☸", angle: 45, ring: "middle" },
  { name: "MongoDB", icon: "🍃", angle: 90, ring: "middle" },
  { name: "PostgreSQL", icon: "🐘", angle: 135, ring: "middle" },
  { name: "GraphQL", icon: "◈", angle: 180, ring: "middle" },
  { name: "Ethers.js", icon: "Ξ", angle: 225, ring: "middle" },
  { name: "Anchor", icon: "⚓", angle: 270, ring: "middle" },
  { name: "AWS", icon: "☁️", angle: 315, ring: "middle" },

  { name: "Git", icon: "⎇", angle: 0, ring: "inner" },
  { name: "Terraform", icon: "TF", angle: 72, ring: "inner" },
  { name: "Web3", icon: "🌐", angle: 216, ring: "inner" },
  { name: "CI/CD", icon: "🔄", angle: 288, ring: "inner" },
];

export default function MicroTextureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-mono">
            Tech Radar
          </span>
          <div className="flex-1 h-px bg-gray-800" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-orange/15" />
              <div className="absolute inset-[14%] rounded-full border border-orange/20" />
              <div className="absolute inset-[28%] rounded-full border border-orange/30" />
              <div className="absolute inset-[42%] rounded-full border-2 border-orange/50" />

              {/* Crosshair */}
              <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-orange/15 to-transparent" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-orange/15 to-transparent" />

              {/* Center */}
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange glow-orange z-10" />

              {/* Scan line */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left bg-gradient-to-r from-orange/60 to-transparent" />
              </motion.div>

              {/* OUTER */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                {techItems.filter(t => t.ring === "outer").map(tech => {
                  const r = 46;
                  const rad = (tech.angle * Math.PI) / 180;
                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute"
                      style={{
                        left: `${50 + r * Math.cos(rad)}%`,
                        top: `${50 + r * Math.sin(rad)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                      <Icon tech={tech} />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* MIDDLE */}
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                {techItems.filter(t => t.ring === "middle").map(tech => {
                  const r = 32;
                  const rad = (tech.angle * Math.PI) / 180;
                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute"
                      style={{
                        left: `${50 + r * Math.cos(rad)}%`,
                        top: `${50 + r * Math.sin(rad)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Icon tech={tech} />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* INNER */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                {techItems.filter(t => t.ring === "inner").map(tech => {
                  const r = 18;
                  const rad = (tech.angle * Math.PI) / 180;
                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute"
                      style={{
                        left: `${50 + r * Math.cos(rad)}%`,
                        top: `${50 + r * Math.sin(rad)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <Icon tech={tech} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-6">
              MY <span className="text-gradient-orange">TECH STACK</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              {techItems.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.03 }}
                  className="
                    px-6 py-3.5
                    text-sm leading-none
                    rounded-2xl
                    border border-orange/40
                    bg-black/50
                    backdrop-blur-md
                    text-gray-200
                    whitespace-nowrap
                    hover:border-orange hover:text-orange hover:bg-orange/15
                    transition-all
                  "
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Icon component (unchanged visuals) */
function Icon({ tech }: any) {
  return (
    <div className="group flex flex-col items-center gap-0.5 cursor-default">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/80 border border-orange/30 backdrop-blur-sm flex items-center justify-center group-hover:border-orange group-hover:bg-orange/20 group-hover:scale-125 transition-all duration-300">
        <span className="text-sm font-bold">{tech.icon}</span>
      </div>
      <span className="text-[8px] text-gray-500 font-mono opacity-0 group-hover:opacity-100">
        {tech.name}
      </span>
    </div>
  );
}
