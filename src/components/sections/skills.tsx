import { Fragment } from "react";
import { skills } from "@/content/skills";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" aria-label="Technical skills" className="shell pt-28 md:pt-40">
      <SectionHeader
        number={5}
        eyebrow="Toolkit"
        title={[
          <Fragment key="line-1">The stack I use to</Fragment>,
          <Fragment key="line-2">
            build, test &amp; <span className="serif-accent">ship.</span>
          </Fragment>,
        ]}
        intro="No percentage bars. These are the tools I reach for, grouped by the job they do. Marked items are the ones I use every day."
        aside={
          <span className="label flex items-center gap-2 text-muted">
            <span className="size-1.5 bg-accent" aria-hidden /> Daily driver
          </span>
        }
      />
      <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal
            key={g.title}
            delay={(i % 3) * 0.06}
            className="group flex flex-col bg-paper p-6 transition-colors duration-500 hover:bg-paper-2 md:p-8"
          >
            <div className="mb-10 flex items-baseline justify-between">
              <h3 className="text-[1.45rem] font-medium tracking-[-0.03em]">{g.title}</h3>
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <ul className="flex flex-wrap gap-x-1 gap-y-1.5">
              {g.items.map((item, j) => {
                const core = g.core?.includes(item);
                return (
                  <li key={item} className="text-[1.08rem] text-ink-2">
                    <span className={`relative ${core ? "text-ink" : ""}`}>
                      {core ? (
                        <span className="absolute -top-0.5 -right-1.5 size-1 bg-accent" aria-label="(daily driver)" />
                      ) : null}
                      {item}
                    </span>
                    {j < g.items.length - 1 ? <span className="mx-1.5 text-line-strong" aria-hidden>/</span> : null}
                  </li>
                );
              })}
            </ul>
            <p className="mt-auto pt-10 text-sm text-muted">{g.blurb}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
