"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "@/components/ui/icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {}
      }}
      className="label inline-flex h-8 items-center gap-2 border border-line px-2.5 text-ink-2 transition-colors hover:border-ink hover:text-ink"
      aria-live="polite"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function LocalTime({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);
  return <span>{now ? `${now} · GMT+3` : "GMT+3"}</span>;
}
