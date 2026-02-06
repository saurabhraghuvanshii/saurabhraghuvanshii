"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "PDF Talks",
    description:
      "An AI-powered application that lets you chat with your PDF documents. Upload any PDF and ask questions to get intelligent, context-aware responses.",
    tech: ["TypeScript", "Next.js", "AI/ML", "RAG"],
    github: "https://github.com/saurabhraghuvanshii/pdf-talks",
    live: "",
    gradient: "from-orange/20 to-red-900/20",
    icon: "📄",
  },
  {
    title: "DrawNew",
    description:
      "A real-time collaborative drawing and whiteboard application. Share, draw together, and write things in real-time with others.",
    tech: ["TypeScript", "React", "WebSocket", "Canvas"],
    github: "https://github.com/saurabhraghuvanshii/DrawNew",
    live: "",
    gradient: "from-blue-900/20 to-orange/20",
    icon: "🎨",
  },
  {
    title: "PDF-TO-Anything",
    description:
      "A powerful PDF converter that can transform PDF documents into various formats. Simple, fast, and reliable document conversion tool.",
    tech: ["TypeScript", "Next.js", "File Processing"],
    github: "https://github.com/saurabhraghuvanshii/Pdf-TO-Anything",
    live: "",
    gradient: "from-purple-900/20 to-orange/20",
    icon: "🔄",
  },
  {
    title: "Galaxie",
    description:
      "An immersive web experience featuring stunning galaxy visualizations and interactive 3D space elements. Explore the cosmos through your browser.",
    tech: ["TypeScript", "Three.js", "WebGL", "3D"],
    github: "https://github.com/saurabhraghuvanshii/Galaxie",
    live: "",
    gradient: "from-orange/20 to-amber-900/20",
    icon: "🌌",
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
        <br/>  
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
         className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Featured <span className="text-gradient-orange">Work</span>
        </motion.h2>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="project-card group rounded-2xl overflow-hidden bg-gray-900/50"
            >
              {/* Card header gradient */}
              <div className={`h-32 sm:h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                {/* Floating icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500">
                  {project.icon}
                </div>
                {/* Corner accent */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-orange hover:text-black transition-all duration-300"
                  >
                    <Github size={14} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-orange hover:text-black transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 group-hover:text-orange transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-1"
                  />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
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

                {/* Links */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-800/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange transition-colors duration-300"
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange transition-colors duration-300"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-gray-700">
                      <ExternalLink size={14} />
                      <span>No Live Link</span>
                    </span>
                  )}
                </div>
              </div>
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
