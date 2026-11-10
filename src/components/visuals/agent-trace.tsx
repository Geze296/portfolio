"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const steps = [
  { text: "reading requirements", result: "done" },
  { text: "planning test scenarios", result: "done" },
  { text: "generating RestAssured suite", result: "done" },
  { text: "running in sandbox", result: "passed" },
  { text: "awaiting human review", result: "pending" },
] as const;

/**
 * A small looping "agent run" log. Illustrative of how I build AI workflows:
 * the model does the work, the platform validates, a human approves.
 */
export function AgentTrace({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setShown((s) => (s >= steps.length + 3 ? 0 : s + 1));
    }, 900);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <figure
      className={`border border-black/40 bg-code font-mono text-[0.7rem] leading-[1.75] text-code-ink shadow-plate ${className}`}
      aria-label="Illustration: an AI agent generating and validating API tests, then waiting for human review"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </span>
        <span className="text-[0.6rem] tracking-[0.14em] text-white/45 uppercase">agent · run</span>
      </div>
      <div className="px-3.5 pt-2.5 pb-3" aria-hidden>
        <p className="whitespace-nowrap">
          <span className="text-[#8798ff]">~/agents</span> <span className="text-white/40">$</span> run qa-agent --spec checkout.pdf
        </p>
        {steps.map((s, i) => {
          const visible = reduce || i < shown;
          const status =
            s.result === "pending" ? (
              <span className="text-[#e0a84b]">◐ review</span>
            ) : s.result === "passed" ? (
              <span className="text-[#5cc184]">● passed</span>
            ) : (
              <span className="text-white/45">done</span>
            );
          return (
            <p
              key={s.text}
              className="flex justify-between gap-6 whitespace-nowrap transition-opacity duration-300"
              style={{ opacity: visible ? 1 : 0 }}
            >
              <span>
                <span className="text-white/35">↳</span> {s.text}
              </span>
              {status}
            </p>
          );
        })}
        <p className="mt-0.5">
          <span className="text-white/40">$</span> <span className="caret inline-block h-3 w-1.5 translate-y-0.5 bg-code-ink/80" />
        </p>
      </div>
    </figure>
  );
}
