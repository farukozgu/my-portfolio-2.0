"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experince" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <button
                    onClick={() => handleNavClick("hero")}
                    className="text-left text-lg font-semibold tracking-tight"
                >
                    <span className="text-slate-100">Faruk</span>
                    <span className="ml-1 text-sm text-sky-400">/ Frontend Dev</span>
                </button>

                {/* Desktop menu */}
                <ul className="hidden items-center gap-4 text-sm md:flex">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <button
                                onClick={() => handleNavClick(section.id)}
                                className="rounded-full px-3 py-1 cursor-pointer text-slate-300 transition hover:bg-slate-800 hover:text-slate-50"
                            >
                                {section.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <motion.button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-200 hover:bg-slate-800 md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Menüyü aç/kapat"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {open ? (
                            <motion.span
                                key="close"
                                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                transition={{ duration: 0.18 }}
                            >
                                <X className="h-5 w-5 text-slate-200" strokeWidth={2.2} />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="menu"
                                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                transition={{ duration: 0.18 }}
                            >
                                <Menu className="h-5 w-5 text-slate-200" strokeWidth={2.2} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="md:hidden"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                    >
                        <div className="border-t border-white/5 bg-slate-950/95 px-4 pb-4 pt-2">
                            <ul className="flex flex-col gap-1 text-sm">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => handleNavClick(section.id)}
                                            className="flex w-full items-center rounded-xl px-3 py-2 text-left text-slate-200 hover:bg-slate-800"
                                        >
                                            {section.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
