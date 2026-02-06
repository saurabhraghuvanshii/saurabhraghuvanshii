"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Code2, Zap } from "lucide-react";

export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative w-full py-20 md:py-32" ref={ref}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="w-2 h-2 rounded-full bg-orange" />
                    <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-mono">About Me</span>
                    <div className="flex-1 h-px bg-gray-800" />
                </motion.div>
                <br /> <br />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left side - Image (smaller) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-4"
                    >
                        <div className="relative group max-w-[240px] sm:max-w-[260px] mx-auto lg:mx-0">
                            <div className="absolute -inset-1 bg-gradient-to-br from-orange via-orange-dark to-transparent rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity blur-sm" />
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 group-hover:border-orange/40 transition-colors duration-300">
                                <Image
                                    src="/hilh.jpg"
                                    alt="Saurabh Raghuvanshi"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                {/* Orange accent corner */}
                                <div className="absolute top-0 right-0 w-12 h-12">
                                    <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-orange rounded-full animate-pulse" />
                                </div>
                            </div>
                        </div>
                        <br />
                        {/* Quick info cards */}
                        <div className="mt-5 space-y-2.5 max-w-[240px] sm:max-w-[260px] mx-auto lg:mx-0">
                            <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange transition-colors duration-300 cursor-default">
                                <MapPin size={14} className="text-orange flex-shrink-0" />
                                <span>India</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange transition-colors duration-300 cursor-default">
                                <Code2 size={14} className="text-orange flex-shrink-0" />
                                <span>Full-Stack Developer</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange transition-colors duration-300 cursor-default">
                                <Zap size={14} className="text-orange flex-shrink-0" />
                                <span>Web3 & Blockchain</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-8"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Building the <span className="text-gradient-orange">future</span> of the web
                        </h2>

                        <div className="space-y-4 text-gray-400 leading-relaxed text-base md:text-lg">
                            <p>
                                I&apos;m a passionate Full-Stack Developer and Web3 Developer who loves turning complex ideas into
                                elegant, functional applications. With a deep interest in blockchain technology and decentralized
                                systems, I&apos;m constantly exploring the cutting edge of web development.
                            </p>
                            <p>
                                From building real-time collaborative tools to AI-powered applications and blockchain solutions,
                                I enjoy tackling challenging problems and shipping products that make a real impact. I&apos;m also
                                an active open-source contributor, currently maintaining projects at Layer5.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
