import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ProjectVisual } from "@/components/visuals/project-visual";
import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, GitHub } from "@/components/ui/icons";
import { StatusPill } from "@/components/sections/work-list";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${p.kicker}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title: `${p.title} · ${site.name}`, description: p.summary, url: `/work/${p.slug}` },
  };
}

export default function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  return (
    <>
      <Nav />
      <main id="main" className="pt-[4.5rem]">
        {/* The shell (nav, footer) is shared by every case; the slug-specific content streams behind Suspense. */}
        <Suspense fallback={<CaseSkeleton />}>
          <CaseContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function CaseSkeleton() {
  return (
    <div className="shell pt-12 md:pt-20" aria-busy="true" aria-label="Loading case study">
      <div className="mb-12 h-3 w-64 bg-paper-3" />
      <div className="h-[clamp(3.2rem,10vw,9rem)] w-3/4 bg-paper-3" />
      <div className="mt-6 h-8 w-80 max-w-full bg-paper-3" />
      <div className="mt-14 h-24 border border-line" />
    </div>
  );
}

async function CaseContent({ params }: { params: PageProps<"/work/[slug]">["params"] }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <>
        <article>
          <header className="shell pt-12 md:pt-20">
            <Reveal y={8} className="mb-12 flex flex-wrap items-center gap-4">
              <Link href="/#work" className="label text-muted transition-colors hover:text-ink">
                ← All work
              </Link>
              <span className="h-px w-6 bg-line-strong" aria-hidden />
              <span className="label text-ink">Case {project.index}</span>
              <span className="label text-muted">{project.category}</span>
              <StatusPill project={project} />
            </Reveal>
            <h1 className="display text-[clamp(3.2rem,10vw,9rem)]">
              <MaskedLines immediate lines={[project.title]} />
            </h1>
            <Reveal delay={0.2}>
              <p className="serif-accent mt-4 text-[clamp(1.5rem,3vw,2.4rem)] text-ink-2">{project.kicker}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <dl className="mt-14 grid grid-cols-2 border-t border-l border-line md:grid-cols-4">
                {[
                  ["Role", project.role],
                  ["Context", project.context ?? "Independent / product"],
                  ["Status", project.status],
                  ["Domain", project.category],
                ].map(([k, v]) => (
                  <div key={k} className="border-r border-b border-line p-5">
                    <dt className="label mb-3 text-muted">{k}</dt>
                    <dd className="text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </header>

          <Reveal delay={0.2} className="shell mt-16 md:mt-24">
            <div className="group">
              <ProjectVisual kind={project.visual} title={project.title} />
            </div>
            <p className="label mt-5 text-muted">
              Illustrative composition — not a product screenshot.
            </p>
          </Reveal>

          <section className="shell mt-24 grid gap-12 md:mt-32 lg:grid-cols-12" aria-labelledby="overview">
            <h2 id="overview" className="label text-muted lg:col-span-3">
              01 — Overview
            </h2>
            <div className="space-y-6 text-[1.15rem] leading-[1.75] text-ink-2 lg:col-span-7">
              {project.overview.map((p, k) => (
                <Reveal key={k} delay={k * 0.05}>
                  <p className={k === 0 ? "text-[1.35rem] leading-[1.6] text-ink" : ""}>{p}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="shell mt-24 grid gap-12 md:mt-32 lg:grid-cols-12" aria-labelledby="capabilities">
            <h2 id="capabilities" className="label text-muted lg:col-span-3">
              02 — Key capabilities
            </h2>
            <ul className="grid border-t border-line sm:grid-cols-2 lg:col-span-9">
              {project.capabilities.map((c, k) => (
                <Reveal
                  as="li"
                  key={c}
                  delay={(k % 2) * 0.05}
                  className="flex items-baseline gap-5 border-b border-line py-5 sm:odd:pr-6 sm:even:pl-6"
                >
                  <span className="font-mono text-xs text-accent">{String(k + 1).padStart(2, "0")}</span>
                  <span className="text-[1.15rem] tracking-[-0.01em] text-ink">{c}</span>
                </Reveal>
              ))}
            </ul>
          </section>

          <section className="shell mt-24 grid gap-12 md:mt-32 lg:grid-cols-12" aria-labelledby="approach">
            <h2 id="approach" className="label text-muted lg:col-span-3">
              03 — Engineering approach
            </h2>
            <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
              {project.approach.map((a, k) => (
                <Reveal key={a.title} delay={k * 0.06} className="flex flex-col gap-5 bg-paper p-6 md:p-8">
                  <span className="font-mono text-xs text-muted">A.0{k + 1}</span>
                  <h3 className="text-[1.25rem] leading-tight font-medium tracking-[-0.025em]">{a.title}</h3>
                  <p className="text-[0.98rem] leading-relaxed text-ink-2">{a.body}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="shell mt-24 grid gap-12 md:mt-32 lg:grid-cols-12" aria-labelledby="stack">
            <h2 id="stack" className="label text-muted lg:col-span-3">
              04 — Technology
            </h2>
            <div className="lg:col-span-9">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Tag key={t} className="px-3.5! py-2! text-[0.8rem]!">
                    {t}
                  </Tag>
                ))}
              </div>
              {project.links?.live || project.links?.github ? (
                <div className="mt-10 flex flex-wrap gap-6">
                  {project.links.live ? (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-ink pb-1 hover:text-accent">
                      Visit live site <ArrowUpRight size={15} />
                    </a>
                  ) : null}
                  {project.links.github ? (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-ink pb-1 hover:text-accent">
                      <GitHub size={15} /> View source
                    </a>
                  ) : null}
                </div>
              ) : (
                <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted">
                  {project.inDevelopment
                    ? "This project is in active development. A public demo will be linked here once it's released."
                    : "This is private or client work, so code and live links aren't public. Happy to walk through it in a conversation."}
                </p>
              )}
            </div>
          </section>

          <nav aria-label="Next project" className="mt-32 border-t border-line">
            <Link href={`/work/${next.slug}`} className="group shell flex items-end justify-between gap-6 py-14 md:py-20">
              <span>
                <span className="label mb-4 block text-muted">Next case · {next.index}</span>
                <span className="display block text-[clamp(2.4rem,7vw,6rem)] transition-colors group-hover:text-accent">
                  {next.title}
                </span>
              </span>
              <span className="mb-4 inline-flex size-14 shrink-0 items-center justify-center border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink md:size-20">
                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </nav>
        </article>
    </>
  );
}
