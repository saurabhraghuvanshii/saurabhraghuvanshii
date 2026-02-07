"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "PDF Talks",
    description:
      "An AI-powered application that lets you chat with your PDF documents. Upload any PDF and ask questions to get intelligent, context-aware responses.",
    tech: ["TypeScript", "Next.js", "AI/ML", "RAG"],
    github: "https://github.com/saurabhraghuvanshii/pdf-talks",
    live: "",
  },
  {
    title: "DrawNew",
    description:
      "A real-time collaborative drawing and whiteboard application. Share, draw together, and write things in real-time with others.",
    tech: ["TypeScript", "React", "WebSocket", "Canvas"],
    github: "https://github.com/saurabhraghuvanshii/DrawNew",
    live: "",
  },
  {
    title: "PDF-TO-Anything",
    description:
      "A powerful PDF converter that can transform PDF documents into various formats. Simple, fast, and reliable document conversion tool.",
    tech: ["TypeScript", "Next.js", "File Processing"],
    github: "https://github.com/saurabhraghuvanshii/Pdf-TO-Anything",
    live: "",
  },
  {
    title: "Galaxie",
    description:
      "An immersive web experience featuring stunning galaxy visualizations and interactive 3D space elements. Explore the cosmos through your browser.",
    tech: ["TypeScript", "Three.js", "WebGL", "3D"],
    github: "https://github.com/saurabhraghuvanshii/Galaxie",
    live: "",
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative w-full py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-mono">Projects</span>
          <div className="flex-1 h-px bg-gray-800" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Featured <span className="text-gradient-orange">Work</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="project-card group rounded-2xl bg-gray-900/50 border border-gray-800 p-4 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-1.5 rounded-lg text-gray-500 hover:text-orange hover:bg-orange/10 hover:scale-110 hover:shadow-[0_0_12px_rgba(255,107,0,0.3)] transition-all duration-300"
                  aria-label="View on GitHub"
                >
                  <Github size={20} strokeWidth={2.5} />
                </a>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-black/50 text-gray-400 border border-gray-800 hover:border-orange/40 hover:text-orange transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-gray-500 hover:text-orange transition-colors duration-300"
                >
                  Live Demo →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
}
