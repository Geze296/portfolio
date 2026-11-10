import { Fragment } from "react";
import { site } from "@/content/site";
import { exploring } from "@/content/skills";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const focus = [
  "Backend engineering & API architecture",
  "Full-stack product development",
  "AI engineering & agent workflows",
  "Automation & workflow engineering",
  "Quality assurance & test automation",
  "Database design & optimization",
];

export function About() {
  return (
    <section id="about" aria-label="About" className="shell pt-28 md:pt-40">
      <SectionHeader
        number={1}
        eyebrow="About"
        title={[
          <Fragment key="line-1">The engineer</Fragment>,
          <Fragment key="line-2">
            behind the <span className="serif-accent">commits.</span>
          </Fragment>,
        ]}
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <blockquote className="serif-accent text-[clamp(1.9rem,3.2vw,2.75rem)] leading-[1.12] text-ink">
            &ldquo;Good software disappears into the work it does. I build the reliable parts people never
            have to think about, and lately, the intelligent parts that do the thinking with them.&rdquo;
          </blockquote>
          <p className="label mt-8 flex items-center gap-3 text-muted">
            <span className="h-px w-8 bg-line-strong" aria-hidden />
            {site.name}
            <span className="font-ethiopic text-[0.8rem] tracking-normal normal-case" lang="am">
              · {site.nameEthiopic}
            </span>
          </p>
        </Reveal>

        <div className="space-y-6 text-[1.06rem] leading-[1.75] text-ink-2 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="text-[1.3rem] leading-[1.6] text-ink">
              I&apos;m a software engineer who loves building scalable applications, reliable backend systems,
              and intelligent software. I studied Software Engineering at Adama Science and Technology
              University, and I have spent the years since turning requirements into products that people rely on.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              My experience spans full-stack development, backend engineering, API architecture, automation, and
              quality assurance, across banking super apps, ERP systems, e-learning platforms, and marketing
              technology. I&apos;ve worked with teams and businesses of different sizes, and I care as much about
              how software is tested and deployed as about how it&apos;s written.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Today I&apos;m especially drawn to <span className="text-ink">AI engineering</span>: LLM-powered tools,
              agentic workflows, and automation that takes real, repetitive work off people&apos;s plates, built
              with the same discipline as any production system.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid border-t border-line md:mt-28 md:grid-cols-3">
        <Reveal className="border-b border-line py-8 md:border-r md:border-b-0 md:pr-8">
          <h3 className="label mb-6 text-muted">Education</h3>
          <p className="text-xl leading-snug font-medium tracking-[-0.02em]">{site.education.degree}</p>
          <p className="mt-2 text-ink-2">{site.education.school}</p>
          <p className="mt-1 font-mono text-xs text-muted">{site.education.place}</p>
        </Reveal>
        <Reveal delay={0.06} className="border-b border-line py-8 md:border-r md:border-b-0 md:px-8">
          <h3 className="label mb-6 text-muted">Focus areas</h3>
          <ul className="space-y-2.5">
            {focus.map((f) => (
              <li key={f} className="flex gap-3 text-[0.98rem] text-ink">
                <span className="mt-[0.6em] size-1 shrink-0 bg-accent" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.12} className="py-8 md:pl-8">
          <h3 className="label mb-6 text-muted">Currently exploring</h3>
          <ul className="flex flex-wrap gap-2">
            {exploring.map((e) => (
              <li
                key={e}
                className="border border-line px-3 py-1.5 text-[0.9rem] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Outside of work: reading engineering write-ups, trying new tools, and building small experiments to
            understand them properly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
