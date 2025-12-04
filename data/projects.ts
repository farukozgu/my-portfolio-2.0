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
        name: "Zentro – Task Management",
        description:
            "A modern task and productivity management interface developed with React, TypeScript, and Tailwind.",
        tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        liveUrl: "https://zentro-saas.vercel.app/",
        repoUrl: "https://github.com/farukozgu/zentro-SaaS",
        highlight: true,
    },
    {
        name: "TMDB Movie Project",
        description:
            "A movie database project that lists popular movies and offers search and filter features using React and TMDB API.",
        tech: ["React", "API", "Custom Hooks", "CSS Modules", "Tailwind"],
        liveUrl: "https://tmdb-react-project.netlify.app/",
        repoUrl: "https://github.com/farukozgu/tmdb-react-project",
    },
    {
        name: "Subscription Dashboard",
        description:
            "A management panel with features to view, add, and edit user subscriptions.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        liveUrl: "#",
        repoUrl: "#",
    },
];
