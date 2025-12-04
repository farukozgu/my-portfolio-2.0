import { SectionWrapper } from "./SectionWrapper";

export function AboutSection() {
    return (
        <SectionWrapper id="about" title="About" eyebrow="WHO I AM">
            <div className="space-y-4 text-sm text-slate-300">
                <p>
                    As a Frontend Developer with three years of professional experience, I specialize in building user-centric interfaces that are intuitive, engaging, and aligned with modern web standards.  <br /> <br />

                    My expertise lies in creating performant, scalable, and aesthetic applications using a core stack of React, Next.js, JavaScript (ES6+), and Tailwind CSS. I have a proven ability to not only build new features from scratch but also to analyze and refactor existing codebases to improve quality, boost performance, and elevate the overall user experience (UX). <br /> <br />

                    I am an innovative problem-solver, a strong team player, and a developer deeply committed to continuous learning. I thrive in collaborative environments and am always motivated to tackle new challenges and stay current with industry trends.
                </p>
            </div>
        </SectionWrapper>
    );
}
