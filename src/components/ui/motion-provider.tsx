"use client";

import { MotionConfig } from "motion/react";

/** Honours the user's prefers-reduced-motion setting for every motion component. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
