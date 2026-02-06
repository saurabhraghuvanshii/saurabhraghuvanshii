"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toFixed(end < 1 ? 2 : 0)}{suffix}</span>;
}

const stats = [
  {
    label: "DRAG COEFFICIENT",
    value: 0.2,
    unit: "Cd",
    description: "Optimized for minimal air resistance",
    suffix: "",
  },
  {
    label: "ROTATIONAL STABILITY",
    value: 98,
    unit: "%",
    description: "Perfect spin axis maintenance",
    suffix: "%",
  },
  {
    label: "MAX VELOCITY",
    value: 132,
    unit: "km/h",
    description: "Peak recorded launch speed",
    suffix: "",
  },
  {
    label: "FLIGHT TIME",
    value: 4.2,
    unit: "sec",
    description: "Average air time per kick",
    suffix: "s",
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative w-full py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-mono">Perfect Flight</span>
          <div className="flex-1 h-px bg-gray-800" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Title & description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-gradient-orange">PERFECT</span>
              <br />
              FLIGHT
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Like a perfectly struck football that defies aerodynamic expectations,
              my approach to development combines precision engineering with creative innovation.
              Every project is crafted for optimal performance.
            </p>

            {/* Flight path visualization */}
            <div className="mt-8 relative h-20">
              <svg className="w-full h-full" viewBox="0 0 400 80" fill="none">
                <motion.path
                  d="M 0 60 Q 100 0 200 40 Q 300 80 400 20"
                  stroke="#FF6B00"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="400"
                  cy="20"
                  r="4"
                  fill="#FF6B00"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 2.5 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Right - Stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="stat-card rounded-2xl p-4 sm:p-6"
              >
                <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-gray-500 mb-3 font-mono">
                  {stat.label}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-orange mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <span className="text-xs sm:text-sm text-gray-500 ml-1 font-normal">{stat.unit}</span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-2">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
