"use client";

import { SectionWrapper } from "./SectionWrapper";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export function ExperienceSection() {
    return (
        <SectionWrapper
            id="experience"
            title="Work Experience"
            eyebrow="EXPERIENCE"
        >
            <div className="relative">
                <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-sky-500/60 via-slate-700 to-transparent md:left-4" />

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.article
                            key={`${exp.company}-${exp.role}-${index}`}
                            className="relative ml-8 rounded-2xl border border-white/5 bg-slate-900/70 p-4 shadow-sm shadow-black/40"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="absolute -left-8 top-4 flex h-6 w-6 items-center justify-center md:-left-9">
                                <div className="h-2.5 w-2.5 rounded-full bg-sky-400 ring-4 ring-sky-500/30" />
                            </div>

                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <h3 className="text-sm font-semibold text-slate-50">
                                    {exp.role}
                                </h3>
                                <span className="text-[11px] text-sky-400">{exp.period}</span>
                            </div>

                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                <span className="font-medium text-slate-300">{exp.company}</span>
                                {exp.location && (
                                    <>
                                        <span className="h-1 w-1 rounded-full bg-slate-600" />
                                        <span>{exp.location}</span>
                                    </>
                                )}
                            </div>

                            <p className="mt-3 text-xs text-slate-300">{exp.description}</p>

                            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                                {exp.highlights.map((item, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="mt-[6px] h-1 w-1 flex-shrink-0 rounded-full bg-sky-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
