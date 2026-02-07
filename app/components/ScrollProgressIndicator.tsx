"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgressIndicator() {
    const [startY, setStartY] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);
    const [progress, setProgress] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const update = () => {
            const aboutSection = document.getElementById("about");
            const contactSection = document.getElementById("contact");

            if (aboutSection && contactSection) {
                const aboutTop = aboutSection.offsetTop;
                const contactBottom = contactSection.offsetTop + contactSection.offsetHeight;
                const height = contactBottom - aboutTop;

                if (height > 100) {
                    setStartY(aboutTop);
                    setLineHeight(height);

                    // Calculate progress
                    const scrollY = window.scrollY;
                    const viewportCenter = scrollY + window.innerHeight / 2;
                    const range = contactBottom - aboutTop;

                    if (range > 0) {
                        const p = Math.max(0, Math.min(1, (viewportCenter - aboutTop) / range));
                        setProgress(p);
                    }
                }
            }
        };

        update();

        let rafId: number | null = null;
        const handleScroll = () => {
            if (rafId === null) {
                rafId = requestAnimationFrame(() => {
                    update();
                    rafId = null;
                });
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", () => {
            setTimeout(update, 100);
        });

        // Retry finding sections
        const timeouts = [
            setTimeout(update, 200),
            setTimeout(update, 500),
            setTimeout(update, 1000),
        ];

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    if (!mounted) return null;

    const filledHeight = progress * lineHeight;
    const indicatorY = progress * Math.max(0, lineHeight - 28);

    // Always show something if we have valid data, otherwise show test dot
    if (lineHeight < 100) {
        return (
            <div className="fixed left-4 top-20 z-[9998] pointer-events-none">
                <div className="w-3 h-3 bg-orange rounded-full animate-pulse shadow-[0_0_20px_rgba(255,107,0,1)]" />
            </div>
        );
    }

    return (
        <div className="fixed left-4 md:left-8 z-[9998] pointer-events-none">
            {/* Background line */}
            <div
                className="absolute w-1.5 bg-gray-800/70 rounded-full"
                style={{
                    top: `${startY}px`,
                    height: `${lineHeight}px`,
                }}
            />

            {/* Filled orange line */}
            <motion.div
                className="absolute w-1.5 bg-gradient-to-b from-orange via-orange to-orange-dark rounded-full"
                style={{
                    top: `${startY}px`,
                    height: `${filledHeight}px`,
                }}
                animate={{ height: `${filledHeight}px` }}
                transition={{ duration: 0.2, ease: "linear" }}
            />

            {/* Moving indicator */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                    top: `${startY + indicatorY}px`,
                }}
                animate={{ top: `${startY + indicatorY}px` }}
                transition={{ duration: 0.2, ease: "linear" }}
            >
                <div className="relative w-7 h-7">
                    {/* Main glowing dot */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-orange"
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            boxShadow: "0 0 25px rgba(255, 107, 0, 1), 0 0 50px rgba(255, 107, 0, 0.7)",
                        }}
                    />
                    {/* Pulse ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-orange"
                        animate={{
                            scale: [1, 2.5, 1],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
