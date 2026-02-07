"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitBranch, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Open Source Maintainer",
    company: "Layer5",
    companyUrl: "https://layer5.io",
    repoUrl: "https://github.com/layer5io/layer5",
    period: "Sep 2025 — Present",
    location: "Remote",
    description:
      "Contributing to and maintaining Layer5's open source projects including Meshery — the cloud native management plane. Active contributor to the service mesh ecosystem, improving developer experience, documentation, and core tooling.",
    // highlights: [
    //   "Pull Shark ×3 achievement on GitHub",
    //   "Pair Extraordinaire ×2 achievement",
    //   "Active contributor to cloud-native tooling",
    //   "Collaborating with global open-source community",
    // ],
    tech: ["React", "Next.js", "Go", "Kubernetes", "Docker", "GraphQL"],
    logo: "L5",
  },
];

// const orgs = [
//   {
//     name: "Layer5",
//     avatar: "https://avatars.githubusercontent.com/u/44620851?s=64&v=4",
//     url: "https://github.com/layer5io",
//   },
//   {
//     name: "Meshery",
//     avatar: "https://avatars.githubusercontent.com/u/52376019?s=64&v=4",
//     url: "https://github.com/meshery",
//   },
//   {
//     name: "JoinMarket",
//     avatar: "https://avatars.githubusercontent.com/u/94058607?s=64&v=4",
//     url: "https://github.com/joinmarket-webui",
//   },
//   {
//     name: "Meshery Ext",
//     avatar: "https://avatars.githubusercontent.com/u/200984402?s=64&v=4",
//     url: "https://github.com/meshery-extensions",
//   },
// ];

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-14"
        >
          Where I&#39;ve <span className="text-gradient-orange">Worked</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
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
              <div className="timeline-dot left-4 md:left-6 top-1" />

              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 card-hover group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange/20 to-orange-dark/10 border border-orange/20 flex items-center justify-center group-hover:border-orange/50 transition-colors duration-300">
                      <span className="text-orange font-display font-bold text-sm">
                        {exp.logo}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-orange transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange hover:text-orange-light transition-colors font-medium text-sm"
                        >
                          {exp.company}
                        </a>
                        <ExternalLink size={12} className="text-orange/50" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground/70">
                      <MapPin size={10} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-body leading-relaxed mb-5 text-sm sm:text-base">
                  {exp.description}
                </p>

                {/* Highlights */}
                {/* <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-secondary-foreground font-body"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-1.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul> */}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border hover:border-orange/40 hover:text-orange transition-all duration-300 font-mono"
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
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange transition-colors duration-300"
                >
                  <GitBranch size={14} />
                  <span>View Repository</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Organizations */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* <h3 className="font-display text-lg font-semibold text-foreground mb-8 text-center">
            Organizations I Contribute To
          </h3> */}
          {/* <div className="flex items-center justify-center gap-8 flex-wrap">
            {orgs.map((org, i) => (
              <motion.a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-border group-hover:border-orange group-hover:glow-orange-subtle transition-all duration-300">
                  <img
                    src={org.avatar}
                    alt={org.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-mono text-muted-foreground group-hover:text-orange transition-colors duration-300">
                  {org.name}
                </span>
              </motion.a>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
