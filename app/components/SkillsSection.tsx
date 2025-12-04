"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";

const skillGroups = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
        title: "UI & Styling",
        items: ["Tailwind CSS", "Responsive Design", "Component-Driven UI"],
    },
    {
        title: "Tools",
        items: ["Git & GitHub", "VS Code", "Chrome DevTools", "Figma", "GPT-5.1", "Gemini Pro"],
    },
    {
        title: "Concepts",
        items: ["State Management", "REST API Integration", "Clean Code"],
    },
];

export function SkillsSection() {
    return (
        <SectionWrapper id="skills" title="Skills" eyebrow="STACK">
            <motion.div
                className="grid gap-4 md:grid-cols-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {skillGroups.map((group) => (
                    <motion.div
                        key={group.title}
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/70 p-4"
                    >
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />

                        <div className="relative">
                            <h3 className="mb-3 text-sm font-semibold text-slate-100">
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 text-xs">
                                {group.items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-100"
                                        whileHover={{ y: -1, scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
