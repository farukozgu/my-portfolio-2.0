"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <SectionWrapper id="hero" title="Hello, I'm Faruk" eyebrow="PORTFOLIO">
            <div className="relative overflow-visible">
                <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

                <div className="relative grid gap-10 md:grid-cols-[1.5fr,1fr] md:items-center">
                    <motion.div
                        className="space-y-5"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.p
                            className="text-sm uppercase tracking-[0.25em] text-sky-400/80"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                        >
                            Frontend Developer
                        </motion.p>

                        <motion.h1
                            className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Modern, high-performance, and readable interfaces
                            <span className="block text-sky-400">
                                React &amp; Next.js focused.
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-sm text-slate-300"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.45 }}
                        >
                            I develop projects that are close to real-world scenarios and tailor my portfolio to be suitable for mid-level roles. I prioritize code quality, component architecture, and user experience.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <motion.a
                                href="#projects"
                                className="rounded-full border border-sky-500 bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30"
                                whileHover={{ y: -2, boxShadow: "0 18px 40px rgba(56,189,248,0.45)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                            >
                                View projects
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100"
                                whileHover={{ y: -2, backgroundColor: "rgba(15,23,42,0.9)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                            >
                                Get in touch
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                    >
                        <motion.div
                            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-5 shadow-xl shadow-sky-500/20"
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 220, damping: 20 }}
                        >
                            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-sky-500/40 via-transparent to-purple-500/40 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-100" />

                            <div className="relative">
                                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
                                    Featured Stack
                                </p>

                                <ul className="mb-4 flex flex-wrap gap-2 text-xs">
                                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map(
                                        (tech) => (
                                            <motion.li
                                                key={tech}
                                                className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-slate-100"
                                                whileHover={{ y: -2, scale: 1.03 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                            >
                                                {tech}
                                            </motion.li>
                                        )
                                    )}
                                </ul>

                                <p className="text-[11px] text-slate-400">
                                    I work with component-oriented architecture, state management, animations, and project structures suitable for production environments.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
