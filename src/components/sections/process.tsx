"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { process as steps } from "@/content/skills";
import { geez } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" aria-label="How I work" className="shell pt-28 md:pt-40">
      <SectionHeader
        number={6}
        eyebrow="How I work"
        title={[
          <Fragment key="line-1">From problem</Fragment>,
          <Fragment key="line-2">
            to <span className="serif-accent">production.</span>
          </Fragment>,
        ]}
        intro="A simple loop I've refined across banks, agencies, and product teams. Every stage has a clear output, and testing is part of the plan from the start."
      />
      <div className="relative">
        <div className="absolute inset-x-0 top-0 hidden h-px bg-line lg:block" aria-hidden />
        <motion.div
          className="absolute inset-x-0 top-0 hidden h-px origin-left bg-accent lg:block"
          style={{ scaleX }}
          aria-hidden
        />
        <ol ref={ref} className="grid gap-px lg:grid-cols-5 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 0.08}
              className="relative grid grid-cols-[4.5rem_1fr] gap-4 border-t border-line py-8 lg:block lg:border-t-0 lg:pt-10"
            >
              <span className="absolute -top-[4px] left-0 hidden size-[9px] border border-ink bg-paper lg:block" aria-hidden />
              <div className="flex items-baseline gap-2 lg:mb-10">
                <span className="display text-[2.6rem] lg:text-[3.4rem]">0{i + 1}</span>
                <span className="font-ethiopic text-lg text-accent" aria-hidden>
                  {geez[i]}
                </span>
              </div>
              <div>
                <h3 className="text-[1.35rem] font-medium tracking-[-0.025em]">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
