"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* --- techItems organized by category --- */
const techItems = [
  // Outer ring: Full-Stack (Frontend + Backend)
  // Frontend
  { name: "React", iconPath: "/react.svg", angle: 0, ring: "outer" },
  { name: "Next.js", iconPath: "/next.svg", angle: 22.5, ring: "outer" },
  { name: "TypeScript", iconPath: "/ts.svg", angle: 45, ring: "outer" },
  { name: "Tailwind", iconPath: "/tailwind.svg", angle: 67.5, ring: "outer" },
  { name: "Vite", iconPath: "/vite.svg", angle: 90, ring: "outer" },
  { name: "TanStack", iconPath: "/tanstack.svg", angle: 112.5, ring: "outer" },
  // Backend
  { name: "Node.js", iconPath: "/node.svg", angle: 135, ring: "outer" },
  { name: "Python", iconPath: "/python.svg", angle: 157.5, ring: "outer" },
  { name: "Express", iconPath: "/express.svg", angle: 180, ring: "outer" },
  { name: "MongoDB", iconPath: "/mongodb.svg", angle: 202.5, ring: "outer" },
  { name: "PostgreSQL", iconPath: "/postgreSQL.svg", angle: 225, ring: "outer" },
  { name: "GraphQL", iconPath: "/GraphQl.svg", angle: 247.5, ring: "outer" },
  { name: "Supabase", iconPath: "/supabase.svg", angle: 270, ring: "outer" },
  { name: "Bun", iconPath: "/bun.svg", angle: 292.5, ring: "outer" },
  { name: "Deno", iconPath: "/deno.svg", angle: 315, ring: "outer" },
  { name: "Go", iconPath: "/go.svg", angle: 337.5, ring: "outer" },

  // Middle ring: DevOps
  { name: "Docker", iconPath: "/docker.svg", angle: 0, ring: "middle" },
  { name: "Kubernetes", iconPath: "/kubernetets.svg", angle: 45, ring: "middle" },
  { name: "Terraform", iconPath: "/terraform.svg", angle: 90, ring: "middle" },
  { name: "Git", iconPath: "/git.svg", angle: 135, ring: "middle" },
  { name: "GitHub", iconPath: "/Github.svg", angle: 180, ring: "middle" },
  { name: "Postman", iconPath: "/postman.svg", angle: 225, ring: "middle" },
  { name: "Hugo", iconPath: "/Hugo.svg", angle: 270, ring: "middle" },
  { name: "CI/CD", icon: "🔄", angle: 315, ring: "middle" },

  // Inner ring: Web3
  { name: "Ethereum", iconPath: "/etherum.svg", angle: 0, ring: "inner" },
  { name: "Solana", iconPath: "/solana.svg", angle: 90, ring: "inner" },
  { name: "Solidity", iconPath: "/solidity.svg", angle: 180, ring: "inner" },
  { name: "Web3.js", icon: "W3", angle: 270, ring: "inner" },
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
                    px-4 py-3
                    text-sm leading-normal
                    rounded-2xl
                    border border-orange/40
                    bg-black/50
                    backdrop-blur-md
                    text-gray-200
                    whitespace-nowrap
                    hover:border-orange hover:text-orange hover:bg-orange/15
                    transition-all
                    flex items-center gap-2
                  "
                >
                  {tech.iconPath ? (
                    <Image
                      src={tech.iconPath}
                      alt={tech.name}
                      width={18}
                      height={18}
                      className="w-4 h-4 object-contain flex-shrink-0"
                    />
                  ) : tech.icon ? (
                    <span className="text-base flex-shrink-0">{tech.icon}</span>
                  ) : null}
                  <span>{tech.name}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Icon component with SVG support */
function Icon({ tech }: any) {
  return (
    <div className="group flex flex-col items-center gap-0.5 cursor-default">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/80 border border-orange/30 backdrop-blur-sm flex items-center justify-center group-hover:border-orange group-hover:bg-orange/20 group-hover:scale-125 transition-all duration-300 overflow-hidden">
        {tech.iconPath ? (
          <Image
            src={tech.iconPath}
            alt={tech.name}
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter group-hover:brightness-110 transition-all duration-300"
          />
        ) : (
          <span className="text-sm font-bold">{tech.icon}</span>
        )}
      </div>
      <span className="text-[8px] text-gray-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tech.name}
      </span>
    </div>
  );
}
