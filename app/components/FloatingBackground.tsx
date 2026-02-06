"use client";

import { motion } from "framer-motion";

interface TriangleProps {
  delay: number;
  size: number;
  x: string;
  y: string;
  rotation: number;
  opacity?: number;
}

function FloatingTriangle({ delay, size, x, y, rotation, opacity = 0.25 }: TriangleProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity, scale: 1 }}
      transition={{ delay, duration: 2, ease: "easeOut" }}
    >
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [rotation, rotation + 12, rotation],
        }}
        transition={{
          duration: 7 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,5 95,95 5,95"
            stroke="#FF6B00"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

const triangles: TriangleProps[] = [
  // Top area
  { delay: 0, size: 80, x: "5%", y: "3%", rotation: 0, opacity: 0.22 },
  { delay: 0.3, size: 50, x: "88%", y: "2%", rotation: 45, opacity: 0.2 },
  { delay: 0.4, size: 70, x: "35%", y: "1%", rotation: 60, opacity: 0.18 },
  // Upper-mid area
  { delay: 0.6, size: 120, x: "78%", y: "12%", rotation: -15, opacity: 0.2 },
  { delay: 0.9, size: 40, x: "12%", y: "15%", rotation: 30, opacity: 0.25 },
  { delay: 0.8, size: 90, x: "92%", y: "10%", rotation: -45, opacity: 0.18 },
  // Mid area
  { delay: 1.0, size: 60, x: "55%", y: "22%", rotation: -30, opacity: 0.2 },
  { delay: 0.5, size: 45, x: "8%", y: "30%", rotation: 20, opacity: 0.22 },
  { delay: 1.2, size: 75, x: "82%", y: "28%", rotation: 50, opacity: 0.18 },
  // Lower-mid area
  { delay: 0.7, size: 55, x: "25%", y: "40%", rotation: -10, opacity: 0.2 },
  { delay: 1.1, size: 85, x: "70%", y: "42%", rotation: 35, opacity: 0.18 },
  { delay: 0.4, size: 65, x: "95%", y: "38%", rotation: -55, opacity: 0.22 },
  // Below half
  { delay: 0.9, size: 50, x: "3%", y: "52%", rotation: 25, opacity: 0.2 },
  { delay: 1.3, size: 100, x: "48%", y: "55%", rotation: -20, opacity: 0.16 },
  { delay: 0.6, size: 40, x: "88%", y: "58%", rotation: 40, opacity: 0.22 },
  // Lower area
  { delay: 1.0, size: 70, x: "15%", y: "68%", rotation: -35, opacity: 0.18 },
  { delay: 0.8, size: 55, x: "65%", y: "70%", rotation: 15, opacity: 0.2 },
  { delay: 1.4, size: 80, x: "90%", y: "72%", rotation: -60, opacity: 0.16 },
  // Bottom area
  { delay: 0.5, size: 60, x: "40%", y: "82%", rotation: 50, opacity: 0.2 },
  { delay: 1.1, size: 45, x: "8%", y: "85%", rotation: -25, opacity: 0.22 },
  { delay: 0.7, size: 95, x: "75%", y: "88%", rotation: 30, opacity: 0.18 },
  { delay: 1.2, size: 35, x: "55%", y: "93%", rotation: -40, opacity: 0.2 },
];

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-orange" />
        <div className="absolute left-[35%] top-0 bottom-0 w-px bg-orange" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-orange" />
        <div className="absolute left-[65%] top-0 bottom-0 w-px bg-orange" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-orange" />
        <div className="absolute top-[20%] left-0 right-0 h-px bg-orange" />
        <div className="absolute top-[40%] left-0 right-0 h-px bg-orange" />
        <div className="absolute top-[60%] left-0 right-0 h-px bg-orange" />
        <div className="absolute top-[80%] left-0 right-0 h-px bg-orange" />
      </div>

      {/* Floating triangles */}
      {triangles.map((t, i) => (
        <FloatingTriangle key={i} {...t} />
      ))}
    </div>
  );
}
