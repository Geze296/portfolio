import { Fragment } from "react";
import Image from "next/image";
import { resumeHref, site } from "@/content/site";
import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { ArrowDownRight, ArrowUpRight, socialIcon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button";
import { AgentTrace } from "@/components/visuals/agent-trace";
import { Year } from "@/components/ui/year";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative pt-[4.5rem]">
      <div className="shell pt-8 md:pt-12 lg:pt-14">
        {/* Meta row */}
        <Reveal immediate className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 md:mb-12" y={8}>
          <span className="label flex items-center gap-2.5 text-ink">
            <span className="size-1.5 bg-accent" aria-hidden />
            {site.location}
          </span>
          <span className="label text-muted">
            Portfolio — <Year />
          </span>
          {site.availability ? (
            <span className="label flex items-center gap-2.5 text-ink-2">
              <span className="status-dot" aria-hidden />
              {site.availability}
            </span>
          ) : null}
          <span className="font-ethiopic ml-auto hidden text-sm text-muted md:inline" lang="am">
            {site.nameEthiopic}
          </span>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <p className="label mb-6 text-muted">
              {site.roles.join(" · ")}
            </p>
            <h1 id="hero-title" className="display text-[clamp(2.4rem,6vw,5.75rem)]">
              <MaskedLines
                immediate
                delay={0.1}
                lines={[
                  <Fragment key="line-1">
                    Building <span className="serif-accent text-accent">intelligent</span>
                  </Fragment>,
                  <Fragment key="line-2">software &amp; digital</Fragment>,
                  <Fragment key="line-3">products that solve</Fragment>,
                  <Fragment key="line-4">
                    <span className="scribble">
                      real-world
                      <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden>
                        <path
                          d="M2 14 C 60 4, 140 4, 298 10 M 10 17 C 90 11, 180 12, 290 15"
                          fill="none"
                          className="stroke-accent"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>{" "}
                    problems.
                  </Fragment>,
                ]}
              />
            </h1>

            <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-8">
              <div className="md:col-span-5">
              <Reveal immediate delay={0.5}>
                <p className="max-w-xl text-[1.08rem] leading-[1.7] text-ink-2">
                  I&apos;m <span className="font-medium text-ink">Gezahegn Gulilat</span>, a software engineer
                  specializing in scalable backend systems, full-stack applications, APIs, and{" "}
                  <span className="text-ink">AI-powered solutions</span>. I turn complex ideas into reliable,
                  production-ready products.
                </p>
              </Reveal>
              <Reveal immediate delay={0.7} className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/#work" icon={<ArrowDownRight size={16} />}>
                  View my work
                </ButtonLink>
                <ButtonLink
                  href={resumeHref}
                  variant="outline"
                  icon={<ArrowUpRight size={16} />}
                  {...(site.resumePdf ? { download: true } : {})}
                >
                  Download résumé
                </ButtonLink>
                <ButtonLink href="/#contact" variant="ghost" className="ml-2" icon={<ArrowUpRight size={16} />}>
                  Contact me
                </ButtonLink>
              </Reveal>
              </div>
              <Reveal immediate delay={0.6} className="flex flex-col gap-3 md:col-span-3 md:items-start">
                <span className="label text-muted">Find me on</span>
                <ul className="flex flex-col gap-2">
                  {site.socials.map((s) => {
                    const Icon = socialIcon(s.label);
                    return (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 text-[0.95rem] text-ink transition-colors hover:text-accent"
                        >
                          <Icon size={15} />
                          <span>{s.label}</span>
                          <span className="font-mono text-xs text-muted">{s.handle}</span>
                          <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>

          </div>

          {/* Portrait plate */}
          <Reveal immediate delay={0.35} y={30} className="relative lg:col-span-4 lg:pt-10">
            <div className="mx-auto max-w-[26rem] lg:max-w-none">
              <div className="mb-3 flex items-center justify-between">
                <span className="label text-muted">Fig. 01</span>
                <span className="label text-muted">Addis Ababa · GMT+3</span>
              </div>
              <div className="plate">
                <div className="group relative aspect-[4/5] overflow-hidden bg-paper-3">
                  <Image
                    src={site.photo.src}
                    alt={site.photo.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 26rem, 90vw"
                    className="object-cover object-[50%_30%] grayscale-[35%] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
                <AgentTrace className="relative z-10 mt-3 w-full sm:absolute sm:bottom-8 sm:-left-14 sm:mt-0 sm:w-[19.5rem] lg:-left-20 xl:-left-28" />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-sm text-ink">{site.name}</span>
                <span className="text-sm text-muted">{site.education.short} · Software Eng.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
