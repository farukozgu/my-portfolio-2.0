"use client";

import { SectionWrapper } from "./SectionWrapper";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

export function ProjectsSection() {
    return (
        <SectionWrapper id="projects" title="Projects" eyebrow="WORK">
            <motion.div
                className="grid gap-6 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projects.map((project) => (
                    <motion.article
                        key={project.name}
                        variants={cardVariants}
                        whileHover={{
                            y: -6,
                            scale: 1.01,
                            boxShadow: "0 24px 60px rgba(56,189,248,0.30)",
                        }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-900/70 p-5 shadow-lg shadow-black/30"
                    >
                        {/* üst highlight glow */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute inset-x-0 -top-32 h-40 bg-gradient-to-b from-sky-500/40 via-sky-500/0 to-transparent blur-2xl" />
                        </div>

                        <div className="relative mb-3 flex items-center justify-between gap-2">
                            <h3 className="text-base font-semibold text-slate-50">
                                {project.name}
                            </h3>
                            {project.highlight && (
                                <span className="rounded-full bg-sky-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-400">
                                    Featured
                                </span>
                            )}
                        </div>

                        <p className="relative mb-4 text-sm text-slate-300">
                            {project.description}
                        </p>

                        <div className="relative mb-4 flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <motion.span
                                    key={t}
                                    className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-200"
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                >
                                    {t}
                                </motion.span>
                            ))}
                        </div>

                        <div className="relative mt-auto flex gap-3 text-xs">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                className="rounded-full border border-sky-500/60 px-3 py-1 font-medium text-sky-300 transition group-hover:bg-sky-500 group-hover:text-slate-950"
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                className="rounded-full border border-slate-700 px-3 py-1 font-medium text-slate-200 transition hover:bg-slate-800"
                            >
                                Source Code
                            </a>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
