import { geez } from "@/content/site";
import { MaskedLines, Reveal } from "./reveal";

type Props = {
  number: number;
  eyebrow: string;
  title: React.ReactNode[];
  intro?: React.ReactNode;
  aside?: React.ReactNode;
};

/** Editorial chapter header: index rule, masked display title, optional intro. */
export function SectionHeader({ number, eyebrow, title, intro, aside }: Props) {
  const n = String(number).padStart(2, "0");
  return (
    <header className="mb-14 md:mb-20">
      <Reveal className="mb-8 flex items-center gap-4 border-t border-line pt-5 md:mb-12">
        <span className="label text-ink">
          {n} <span className="text-muted">/</span>
        </span>
        <span className="font-ethiopic text-sm text-accent" aria-hidden>
          {geez[number - 1]}
        </span>
        <span className="label text-muted">{eyebrow}</span>
        {aside ? <span className="ml-auto hidden md:block">{aside}</span> : null}
      </Reveal>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <h2 className="display text-[clamp(2.6rem,6.2vw,5.6rem)] md:col-span-8">
          <MaskedLines lines={title} />
        </h2>
        {intro ? (
          <Reveal delay={0.15} className="max-w-md text-[1.05rem] leading-relaxed text-ink-2 md:col-span-4 md:pb-2">
            {intro}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
