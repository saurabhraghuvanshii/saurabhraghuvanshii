"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitBranch } from "lucide-react";

const experiences = [
  {
    role: "Open Source Maintainer",
    company: "Layer5",
    companyUrl: "https://layer5.io",
    repoUrl: "https://github.com/layer5io/layer5",
    period: "Sep 2025 - Present",
    description:
      "Contributing to and maintaining Layer5's open source projects including Meshery - the cloud native management plane. Active contributor to the service mesh ecosystem, working on improving developer experience and documentation.",
    tech: ["React", "Next.js", "Go", "Kubernetes", "Docker", "GraphQL"],
    logo: "L5",
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative w-full py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-mono">Experience</span>
          <div className="flex-1 h-px bg-gray-800" />
        </motion.div>
        <br />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Where I&apos;ve <span className="text-gradient-orange">Worked</span>
        </motion.h2>
        <br />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange via-orange/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              className="relative pl-16 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-orange border-4 border-black glow-orange" />

              {/* Card */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-orange/30 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    {/* Company logo */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange/20 to-orange-dark/10 border border-orange/20 flex items-center justify-center group-hover:border-orange/50 transition-colors duration-300">
                      <span className="text-orange font-bold text-sm">{exp.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange transition-colors duration-300">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange hover:text-orange-light transition-colors font-medium"
                        >
                          {exp.company}
                        </a>
                        <ExternalLink size={12} className="text-orange/50" />
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-mono whitespace-nowrap">{exp.period}</span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">{exp.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-gray-800 text-gray-400 border border-gray-700 hover:border-orange/40 hover:text-orange transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Repo link */}
                <a
                  href={exp.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange transition-colors duration-300"
                >
                  <GitBranch size={14} />
                  <span>View Repository</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
