"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Glow element ref
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse position relative to the header
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  // Update the glow div background using spring values
  useEffect(() => {
    const unsubX = smoothX.on("change", () => {
      if (glowRef.current && isHovered) {
        const x = smoothX.get();
        const y = smoothY.get();
        glowRef.current.style.background = `radial-gradient(circle 180px at ${x}px ${y}px, rgba(255,107,0,0.18) 0%, rgba(255,107,0,0.06) 40%, transparent 70%)`;
      }
    });
    const unsubY = smoothY.on("change", () => {
      if (glowRef.current && isHovered) {
        const x = smoothX.get();
        const y = smoothY.get();
        glowRef.current.style.background = `radial-gradient(circle 180px at ${x}px ${y}px, rgba(255,107,0,0.18) 0%, rgba(255,107,0,0.06) 40%, transparent 70%)`;
      }
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [smoothX, smoothY, isHovered]);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[999] rounded-full overflow-hidden transition-all duration-500 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-5xl ${
          isScrolled
            ? "bg-black/70 backdrop-blur-xl border border-gray-800/50 shadow-lg shadow-black/20"
            : "bg-black/30 backdrop-blur-md border border-white/[0.04]"
        } ${isHovered ? "border-orange/40 shadow-[0_0_30px_rgba(255,107,0,0.12)]" : ""}`}
        style={{
          transform: `translateX(-50%) ${isHovered ? "scale(1.02)" : "scale(1)"}`,
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Glass spotlight glow that follows cursor */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none z-0 rounded-full transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Subtle glass shine edge */}
        <div
          className="absolute inset-0 pointer-events-none z-0 rounded-full transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.7 : 0,
            background:
              "linear-gradient(135deg, rgba(255,107,0,0.04) 0%, transparent 50%, rgba(255,107,0,0.02) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1 group">
            <span className="text-xl font-black tracking-tight group-hover:text-orange transition-colors duration-300">
              SAURABH<span className="text-orange">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-orange transition-all duration-300 font-medium hover:scale-110 inline-block"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop social */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/saurabhraghuvanshii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-orange hover:bg-orange hover:text-black hover:scale-110 transition-all duration-300"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/saurabhraghuvanshii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-orange hover:bg-orange hover:text-black hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://x.com/saurabhksinghr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-orange hover:bg-orange hover:text-black hover:scale-110 transition-all duration-300"
            >
              <XIcon size={14} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center hover:text-orange transition-colors"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[998] bg-black/95 backdrop-blur-xl pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-bold text-white hover:text-orange transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="flex gap-4 mt-12">
              <a
                href="https://github.com/saurabhraghuvanshii"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-orange hover:bg-orange hover:text-black transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabhraghuvanshii"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-orange hover:bg-orange hover:text-black transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/saurabhksinghr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-orange hover:bg-orange hover:text-black transition-all duration-300"
              >
                <XIcon size={20} />
              </a>
              <a
                href="mailto:saurabhsraghuvanshi@gmail.com"
                className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-orange hover:bg-orange hover:text-black transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
