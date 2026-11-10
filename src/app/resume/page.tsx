import type { Metadata } from "next";
import { site } from "@/content/site";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";
import { Nav } from "@/components/layout/nav";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name}: software engineer specializing in backend, full-stack, and AI engineering.`,
  alternates: { canonical: "/resume" },
};

export default function Resume() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-[4.5rem] print:pt-0">
        <div className="no-print shell flex flex-wrap items-center justify-between gap-4 pt-10">
          <p className="label text-muted">Printable résumé · generated from the same data as the site</p>
          <PrintButton />
        </div>
        <article className="mx-auto my-10 max-w-[52rem] border border-line bg-paper p-6 shadow-plate sm:p-12 print:my-0 print:border-0 print:p-0 print:shadow-none">
          <header className="flex flex-wrap items-end justify-between gap-6 border-b border-ink pb-6">
            <div>
              <h1 className="display text-[2.8rem]">{site.name}</h1>
              <p className="mt-2 text-lg text-ink-2">
                {site.role} · Full-Stack · Backend · AI Engineer
              </p>
            </div>
            <ul className="space-y-1 text-right text-sm text-ink-2">
              <li>{site.location}</li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>{site.phone}</li>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href}>{s.href.replace(/^https?:\/\/(www\.)?/, "")}</a>
                </li>
              ))}
            </ul>
          </header>

          <section className="mt-7">
            <h2 className="label mb-3 text-accent">Profile</h2>
            <p className="leading-relaxed text-ink-2">
              Software engineer with {site.experienceYears} years of experience across backend engineering, full-stack
              web development, API design, quality assurance, and AI-powered tooling. I have built software for banking
              super apps, ERP systems, e-learning platforms, and marketing technology, and I&apos;m focused on applying LLMs
              and agentic workflows to real engineering problems.
            </p>
          </section>

          <section className="mt-7">
            <h2 className="label mb-4 text-accent">Experience</h2>
            <div className="space-y-6">
              {experience.map((e) => (
                <div key={e.company} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[1.05rem] font-semibold">
                      {e.role} · <span className="font-medium">{e.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{e.period ?? (e.current ? "Current" : "")}</span>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] text-ink-2 marker:text-line-strong">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h2 className="label mb-4 text-accent">Selected projects</h2>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.slug} className="break-inside-avoid text-[0.95rem]">
                  <span className="font-semibold">{p.title}</span>
                  <span className="text-muted"> · {p.kicker}{p.inDevelopment ? " (in development)" : ""}</span>
                  <p className="text-ink-2">{p.summary}</p>
                  <p className="font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7 grid gap-7 sm:grid-cols-2">
            <div>
              <h2 className="label mb-3 text-accent">Skills</h2>
              <dl className="space-y-1.5 text-[0.92rem]">
                {skills.map((s) => (
                  <div key={s.title}>
                    <dt className="inline font-semibold">{s.title}: </dt>
                    <dd className="inline text-ink-2">{s.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="label mb-3 text-accent">Education</h2>
              <p className="font-semibold">{site.education.degree}</p>
              <p className="text-ink-2">{site.education.school}</p>
              <p className="text-sm text-muted">{site.education.place}</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
