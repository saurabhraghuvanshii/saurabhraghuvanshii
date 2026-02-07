import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techItems = [
  // Outer ring: Full-Stack
  { name: "React", iconPath: "/react.svg", angle: 0, ring: "outer" as const },
  { name: "Next.js", iconPath: "/next.svg", angle: 22.5, ring: "outer" as const },
  { name: "TypeScript", iconPath: "/ts.svg", angle: 45, ring: "outer" as const },
  { name: "Tailwind", iconPath: "/tailwind.svg", angle: 67.5, ring: "outer" as const },
  { name: "Vite", iconPath: "/vite.svg", angle: 90, ring: "outer" as const },
  { name: "TanStack", iconPath: "/tanstack.svg", angle: 112.5, ring: "outer" as const },
  { name: "Node.js", iconPath: "/node.svg", angle: 135, ring: "outer" as const },
  { name: "Python", iconPath: "/python.svg", angle: 157.5, ring: "outer" as const },
  { name: "Express", iconPath: "/express.svg", angle: 180, ring: "outer" as const },
  { name: "MongoDB", iconPath: "/mongodb.svg", angle: 202.5, ring: "outer" as const },
  { name: "PostgreSQL", iconPath: "/postgreSQL.svg", angle: 225, ring: "outer" as const },
  { name: "GraphQL", iconPath: "/GraphQl.svg", angle: 247.5, ring: "outer" as const },
  { name: "Supabase", iconPath: "/supabase.svg", angle: 270, ring: "outer" as const },
  { name: "Bun", iconPath: "/bun.svg", angle: 292.5, ring: "outer" as const },
  { name: "Deno", iconPath: "/deno.svg", angle: 315, ring: "outer" as const },
  { name: "Go", iconPath: "/go.svg", angle: 337.5, ring: "outer" as const },

  // Middle ring: DevOps
  { name: "Docker", iconPath: "/docker.svg", angle: 0, ring: "middle" as const },
  { name: "Kubernetes", iconPath: "/kubernetets.svg", angle: 45, ring: "middle" as const },
  { name: "Terraform", iconPath: "/terraform.svg", angle: 90, ring: "middle" as const },
  { name: "Git", iconPath: "/git.svg", angle: 135, ring: "middle" as const },
  { name: "GitHub", iconPath: "/Github.svg", angle: 180, ring: "middle" as const },
  { name: "Postman", iconPath: "/postman.svg", angle: 225, ring: "middle" as const },
  { name: "Hugo", iconPath: "/Hugo.svg", angle: 270, ring: "middle" as const },
  { name: "CI/CD", icon: "🔄", angle: 315, ring: "middle" as const },

  // Inner ring: Web3
  { name: "Ethereum", iconPath: "/etherum.svg", angle: 0, ring: "inner" as const },
  { name: "Solana", iconPath: "/solana.svg", angle: 90, ring: "inner" as const },
  { name: "Solidity", iconPath: "/solidity.svg", angle: 180, ring: "inner" as const },
  { name: "Web3.js", icon: "W3", angle: 270, ring: "inner" as const },
];

type TechItem = (typeof techItems)[number];

const ringRadii = { outer: 46, middle: 32, inner: 18 };
const ringDurations = { outer: 25, middle: 20, inner: 15 };

function TechIcon({ tech }: { tech: TechItem }) {
  return (
    <div className="group flex flex-col items-center gap-0.5 cursor-default">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/80 border border-orange/30 backdrop-blur-sm flex items-center justify-center group-hover:border-orange group-hover:bg-orange/20 group-hover:scale-125 transition-all duration-300 overflow-hidden">
        {tech.iconPath ? (
          <img
            src={tech.iconPath}
            alt={tech.name}
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:brightness-110 transition-all duration-300"
          />
        ) : (
          <span className="text-sm font-bold text-foreground">{tech.icon}</span>
        )}
      </div>
      <span className="text-[8px] text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tech.name}
      </span>
    </div>
  );
}

function RingItems({
  ring,
  direction,
}: {
  ring: "outer" | "middle" | "inner";
  direction: 1 | -1;
}) {
  const items = techItems.filter((t) => t.ring === ring);
  const r = ringRadii[ring];
  const dur = ringDurations[ring];

  return (
    <motion.div
      animate={{ rotate: direction * 360 }}
      transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
    >
      {items.map((tech) => {
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
            animate={{ rotate: -direction * 360 }}
            transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
          >
            <TechIcon tech={tech} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function TechRadarSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 md:py-32 overflow-hidden"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-mono">
            Tech Radar
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-14"
        >
          My <span className="text-gradient-orange">Tech Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
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

              {/* Center dot */}
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange glow-orange z-10" />

              {/* Scan line */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left bg-gradient-to-r from-orange/60 to-transparent" />
              </motion.div>

              {/* Rotating rings */}
              <RingItems ring="outer" direction={1} />
              <RingItems ring="middle" direction={-1} />
              <RingItems ring="inner" direction={1} />
            </div>
          </motion.div>

          {/* Right panel — tag cloud */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-wrap gap-2.5">
              {techItems.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.03 }}
                  className="px-3.5 py-2.5 text-sm leading-normal rounded-xl border border-orange/30 bg-card backdrop-blur-md text-secondary-foreground whitespace-nowrap hover:border-orange hover:text-orange hover:bg-orange/10 transition-all duration-300 flex items-center gap-2 cursor-default"
                >
                  {tech.iconPath ? (
                    <img
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
