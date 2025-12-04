"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionWrapperProps = {
    id: string;
    title: string;
    eyebrow?: string;
    children: React.ReactNode;
};

export function SectionWrapper({ id, title, eyebrow, children }: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            className="scroll-mt-24 py-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="mb-6 space-y-2">
                {eyebrow && (
                    <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
                        {eyebrow}
                    </p>
                )}
                <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
                    {title}
                </h2>
            </div>
            {children}
        </motion.section>
    );
}
