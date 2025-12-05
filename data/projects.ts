export type Project = {
    name: string;
    description: string;
    tech: string[];
    liveUrl: string;
    repoUrl: string;
    highlight?: boolean;
};

export const projects: Project[] = [
    {
        name: "Subscription Dashboard",
        description:
            "A modern dashboard built with Next.js, TypeScript, Tailwind, Supabase, and Framer Motion, allowing users to track digital subscriptions, monitor monthly/yearly costs, and view simple spending analytics. Designed with smooth animations and a clean SaaS-style UI.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Supabase"],
        liveUrl: "https://subscription-tracker-lyart-ten.vercel.app/",
        repoUrl: "https://github.com/farukozgu/subscription-tracker",
        highlight: true,
    },
    {
        name: "Zentro – Task Management",
        description:
            "A task management web app built with React, TypeScript, Tailwind, and Framer Motion. Allows users to create, organize, and track tasks with priority, status filtering, analytics cards, and smooth animations for a polished, modern experience.",
        tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        liveUrl: "https://zentro-saas.vercel.app/",
        repoUrl: "https://github.com/farukozgu/zentro-SaaS",
    },
    {
        name: "TMDB Movie Project",
        description:
            "A movie database project that lists popular movies and offers search and filter features using React and TMDB API.",
        tech: ["React", "API", "Custom Hooks", "CSS Modules", "Tailwind"],
        liveUrl: "https://tmdb-react-project.netlify.app/",
        repoUrl: "https://github.com/farukozgu/tmdb-react-project",
    },

];
