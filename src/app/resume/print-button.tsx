"use client";

import { Download } from "@/components/ui/icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group inline-flex h-11 items-center gap-3 bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-accent-ink"
    >
      Save as PDF
      <Download size={15} className="transition-transform group-hover:translate-y-0.5" />
    </button>
  );
}
