"use client";

import { ArrowUp } from "@/components/ui/icons";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      className="group label inline-flex items-center gap-2.5 text-ink transition-colors hover:text-accent"
    >
      Back to top
      <span className="inline-flex size-8 items-center justify-center border border-line transition-colors group-hover:border-accent">
        <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}
