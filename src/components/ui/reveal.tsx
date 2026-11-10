"use client";

import { motion, type HTMLMotionProps } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "article" | "header";
  /** Animate on mount instead of waiting for the element to scroll into view (above-the-fold content). */
  immediate?: boolean;
};

/** Fades + lifts content in once it scrolls into view. */
export function Reveal({ delay = 0, y = 18, as = "div", immediate = false, children, ...rest }: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "0px 0px -12% 0px" } })}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Splits a heading into masked lines that slide up in sequence. */
export function MaskedLines({
  lines,
  className,
  delay = 0,
  immediate = false,
}: {
  lines: React.ReactNode[];
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  return (
    <motion.span
      className={`block ${className ?? ""}`}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "0px 0px -8% 0px" } })}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "105%" },
              show: { y: "0%", transition: { duration: 1, ease, delay: delay + i * 0.09 } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
