"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 rounded-full border-2 border-orange/30 border-t-orange animate-spin" />
      </div>
    ),
  }
);

export default function GitHubGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [totalContribs, setTotalContribs] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTotalContributions() {
      try {
        const res = await fetch(
          "https://github-contributions-api.deno.dev/saurabhraghuvanshii.json"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        setTotalContribs(data.totalContributions ?? 0);
      } catch (err) {
        console.error("GitHub contribution fetch error:", err);
        setTotalContribs(null);
      } finally {
        setLoading(false);
      }
    }

    fetchTotalContributions();
  }, []);

  const customTheme = {
    light: ["#161b22", "#4a2000", "#7a3500", "#CC5500", "#FF6B00"],
    dark: ["#161b22", "#4a2000", "#7a3500", "#CC5500", "#FF6B00"],
  };

  return (
    <section ref={ref} className="relative w-full py-24 md:py-40">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-400 font-mono">
            Contributions
          </span>
          <div className="flex-1 h-px bg-gray-800" />
        </motion.div>

        {/* Title + Total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            GitHub <span className="text-gradient-orange">Activity</span>
          </h2>

          <div className="text-sm font-mono text-gray-500">
            {loading ? (
              "Loading…"
            ) : totalContribs !== null ? (
              <>
                <span className="text-orange font-bold">
                  {totalContribs.toLocaleString()}
                </span>{" "}
                contributions
              </>
            ) : (
              "—"
            )}
          </div>
        </motion.div>

        {/* Calendar Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            w-full
            bg-gray-900/30
            border border-gray-800
            rounded-2xl
            p-4 sm:p-6 md:p-8
            hover:border-orange/20
            transition-colors
          "
        >
          <div className="w-full overflow-x-auto">
            <div className="github-calendar-container">
              <GitHubCalendar
                username="saurabhraghuvanshii"
                theme={customTheme}
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={11}
                weekStart={1}
                showMonthLabels
                showWeekdayLabels={false}
                showTotalCount={false}
                showColorLegend={false}
              />
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-6">
            <span className="text-xs text-gray-500">Less</span>
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: customTheme.dark[i] }}
              />
            ))}
            <span className="text-xs text-gray-500">More</span>
          </div>
        </motion.div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .github-calendar-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .github-calendar-container svg {
          width: 100%;
          height: auto;
          max-width: 100%;
        }

        .github-calendar-container text {
          fill: #6b7280 !important;
          font-family: monospace !important;
        }
      `}</style>
    </section>
  );
}
