import { Fragment } from "react";
import { aiPrinciples } from "@/content/skills";
import { labProjects } from "@/content/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const pipeline = [
  { k: "Input", v: "Specs & test cases" },
  { k: "Plan", v: "LLM drafts scenarios" },
  { k: "Generate", v: "Code, tests, workflows" },
  { k: "Validate", v: "Run in a sandbox" },
  { k: "Review", v: "Human approves" },
  { k: "Ship", v: "Versioned & audited" },
];

export function AiLab() {
  return (
    <section id="ai" aria-label="AI engineering" className="surface-dark relative mt-28 border-y border-line py-28 md:mt-40 md:py-40">
      <div className="shell">
        <div>
          <SectionHeader
            number={4}
            eyebrow="AI engineering"
            title={[
              <Fragment key="line-1">Where software</Fragment>,
              <Fragment key="line-2">
                meets <span className="serif-accent text-accent">intelligence.</span>
              </Fragment>,
            ]}
            intro="I build AI into products the way I build anything for production: with clear interfaces, real validation, and a human in the loop where it counts."
          />
        </div>

        {/* Pipeline figure */}
        <Reveal>
          <figure aria-label="Diagram of an AI-assisted delivery pipeline: input, plan, generate, validate, review, ship">
            <div className="mb-4 flex items-center justify-between">
              <span className="label text-muted">Fig. 02 — The agent loop</span>
              <span className="label hidden text-muted sm:inline">AI proposes · platform validates · human approves</span>
            </div>
            <ol className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
              {pipeline.map((p, i) => (
                <li
                  key={p.k}
                  className="relative flex min-h-36 flex-col justify-between overflow-hidden bg-paper p-5"
                >
                  <span
                    className="pointer-events-none absolute inset-0 bg-accent opacity-0"
                    style={{ animation: `pipeline-glow 7.2s ${i * 1.2}s infinite` }}
                    aria-hidden
                  />
                  <span className="relative label text-muted">0{i + 1}</span>
                  <span className="relative">
                    <span className="block text-[1.5rem] font-medium tracking-[-0.03em]">{p.k}</span>
                    <span className="mt-1 block text-sm text-ink-2">{p.v}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="relative mt-px h-px overflow-hidden bg-line" aria-hidden>
              <span className="absolute inset-y-0 left-0 w-1/4 bg-accent" style={{ animation: "travel 7.2s linear infinite" }} />
            </div>
          </figure>
        </Reveal>

        {/* Principles */}
        <div className="mt-20 grid gap-px border border-line bg-line md:mt-28 md:grid-cols-2 lg:grid-cols-4">
          {aiPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="flex flex-col gap-6 bg-paper p-6 md:p-8">
              <span className="font-mono text-xs text-accent">P.0{i + 1}</span>
              <h3 className="text-[1.3rem] leading-tight font-medium tracking-[-0.025em]">{p.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-ink-2">{p.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Lab */}
        <div className="mt-20 md:mt-28">
          <Reveal className="mb-8 flex items-end justify-between gap-6 border-b border-line pb-5">
            <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.03em]">
              From the <span className="serif-accent">workbench</span>
            </h3>
            <span className="label text-muted">Side projects & experiments</span>
          </Reveal>
          <ul>
            {labProjects.map((l, i) => (
              <Reveal
                as="li"
                key={l.title}
                delay={i * 0.05}
                className="group grid gap-3 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="label text-muted md:col-span-1">L.0{i + 1}</span>
                <span className="text-[1.35rem] font-medium tracking-[-0.02em] transition-colors group-hover:text-accent md:col-span-3">
                  {l.title}
                </span>
                <span className="text-[0.95rem] leading-relaxed text-ink-2 md:col-span-5">{l.body}</span>
                <span className="flex flex-col gap-1 md:col-span-3 md:items-end md:text-right">
                  <span className="font-mono text-xs text-ink-2">{l.stack}</span>
                  <span className="label text-muted">{l.tag}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
