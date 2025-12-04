export type Experience = {
    role: string;
    company: string;
    period: string;
    location?: string;
    description?: string;
    highlights: string[];
};

export const experiences: Experience[] = [
    {
        role: "Frontend Developer",
        company: "Niceye Group",
        period: "2022 – 2025",
        location: "İstanbul (Remote)",
        description: "Developed interactive streaming platforms and corporate websites using React and modern frontend tooling.",
        highlights: [
            "I developed React.js-based interactive streaming platforms and corporate websites for global healthcare companies such as GSK, AstraZeneca, and Pfizer.",
            "I coded the UIs from the design teams pixel-perfectly using HTML5, CSS3, and React; thus minimizing design–code differences and improving the quality of the product delivered to the customer.",
            "By collaborating with UX teams, I improved problematic points identified in the user journey; I created more fluid, intuitive, and user - friendly interfaces.",
        ],
    },
    {
        role: "Frontend Developer (affiliate with Niceye)",
        company: "Pfizer",
        period: "2022 – 2025",
        location: "Istanbul (Remote)",
        description: "Contributed to internal CMS platforms and built reusable UI modules to empower marketing teams.",
        highlights: [
            "I played an active role in the development and maintenance of Pfizer's internal projects, the ‘Canvas’ and ‘Franklin’ platforms. These WordPress - like content management systems(CMS) enabled marketing teams to create digital promotional materials and web pages without coding knowledge.",
            "I developed new modules and UI components so that marketing teams could create content without needing technical knowledge; this accelerated the teams' content production processes and reduced operational dependencies.",
            "I redesigned legacy interfaces in line with modern UI principles; by improving the user experience, I created a more consistent, accessible, and aesthetically pleasing interface.",
        ],
    },
];
