import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  { value: site.experienceYears, label: "Years building software", note: "Full-stack, backend, QA and AI" },
  { value: "04", label: "Engineering teams", note: "Fintech, ERP, e-learning, marketing tech" },
  { value: "02", label: "Banks integrated", note: "Dashen Bank · Commercial Bank of Ethiopia" },
  { value: "AI", label: "Current focus", note: "LLM tooling, agents and test automation", serif: true },
];

export function Facts() {
  return (
    <section aria-label="Highlights" className="shell mt-24 md:mt-36">
      <dl className="grid grid-cols-2 border-t border-l border-line lg:grid-cols-4">
        {facts.map((f, i) => (
          <Reveal
            key={f.label}
            delay={i * 0.07}
            className="group flex flex-col justify-between gap-10 border-r border-b border-line p-5 transition-colors duration-500 hover:bg-paper-2 md:p-7"
          >
            <dt className="label flex items-center justify-between text-muted">
              <span>{f.label}</span>
              <span className="text-line-strong transition-colors group-hover:text-accent">0{i + 1}</span>
            </dt>
            <dd>
              <span
                className={`block text-[clamp(3rem,6vw,5rem)] leading-none ${
                  f.serif ? "serif-accent text-accent" : "display"
                }`}
              >
                {f.value}
              </span>
              <span className="mt-3 block text-sm leading-snug text-ink-2">{f.note}</span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
