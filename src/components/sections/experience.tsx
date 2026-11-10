"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { experience } from "@/content/experience";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function ExperienceList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ol className="border-t border-line">
      {experience.map((job, i) => {
        const isOpen = open === i;
        const panelId = `exp-panel-${i}`;
        return (
          <Reveal as="li" key={job.company} delay={i * 0.05} className="border-b border-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 py-7 text-left md:grid-cols-12 md:gap-x-6 md:py-9"
              >
                <span className="label text-muted md:col-span-1">0{i + 1}</span>
                <span className="md:col-span-5">
                  <span
                    className={`block text-[clamp(1.45rem,2.6vw,2.2rem)] leading-tight font-medium tracking-[-0.03em] transition-colors duration-300 ${
                      isOpen ? "text-ink" : "text-ink-2 group-hover:text-ink"
                    }`}
                  >
                    {job.company}
                  </span>
                  {job.location ? <span className="mt-1 block text-sm text-muted">{job.location}</span> : null}
                </span>
                <span className="col-start-2 text-[0.98rem] text-ink md:col-span-3 md:col-start-auto">
                  {job.role}
                </span>
                <span className="col-start-2 flex items-center gap-3 md:col-span-2 md:col-start-auto">
                  {job.current ? (
                    <span className="label inline-flex items-center gap-2 border border-ok/40 px-2 py-1.5 text-ok">
                      <span className="status-dot" aria-hidden />
                      Current
                    </span>
                  ) : null}
                  {job.period ? <span className="font-mono text-xs text-muted">{job.period}</span> : null}
                </span>
                <span
                  className="col-start-3 row-start-1 inline-flex size-9 items-center justify-center self-center border border-line transition-colors group-hover:border-ink md:col-span-1 md:col-start-auto md:row-start-auto md:justify-self-end"
                  aria-hidden
                >
                  <span className="relative block size-3">
                    <span className="absolute top-1/2 left-0 h-px w-3 bg-ink" />
                    <span
                      className={`absolute top-0 left-1/2 h-3 w-px bg-ink transition-transform duration-300 ${
                        isOpen ? "scale-y-0" : ""
                      }`}
                    />
                  </span>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-10 md:grid-cols-12 md:gap-6">
                    <p className="text-[1.05rem] leading-relaxed text-ink md:col-span-4 md:col-start-2">
                      {job.summary}
                    </p>
                    <ul className="space-y-3 text-[0.98rem] leading-relaxed text-ink-2 md:col-span-5">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3">
                          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap content-start gap-1.5 md:col-span-2">
                      {job.stack.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </ol>
  );
}
