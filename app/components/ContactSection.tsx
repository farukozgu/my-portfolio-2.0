import { SectionWrapper } from "./SectionWrapper";

export function ContactSection() {
    return (
        <SectionWrapper id="contact" title="Contact" eyebrow="LET'S TALK">
            <div className="space-y-4 text-sm text-slate-300">
                <p>
                    You can always reach out to me for new projects, job opportunities, or just to say hello.
                </p>
                <a
                    href="mailto:ornekmail@ornek.com"
                    className="inline-flex items-center rounded-full border border-sky-500/60 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500 hover:text-slate-950"
                >
                    Send me an email
                </a>
            </div>
        </SectionWrapper>
    );
}
