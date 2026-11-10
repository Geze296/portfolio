import { Fragment } from "react";
import { site } from "@/content/site";
import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { geez } from "@/content/site";
import { socialIcon, ArrowUpRight } from "@/components/ui/icons";
import { ContactForm } from "./contact-form";
import { CopyEmail, LocalTime } from "./contact-bits";

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="shell pt-28 pb-24 md:pt-40 md:pb-32">
      <Reveal className="mb-12 flex items-center gap-4 border-t border-line pt-5 md:mb-16">
        <span className="label text-ink">
          07 <span className="text-muted">/</span>
        </span>
        <span className="font-ethiopic text-sm text-accent" aria-hidden>
          {geez[6]}
        </span>
        <span className="label text-muted">Contact</span>
        {site.availability ? (
          <span className="label ml-auto flex items-center gap-2.5 text-ink-2">
            <span className="status-dot" aria-hidden />
            {site.availability}
          </span>
        ) : null}
      </Reveal>

      <h2 className="display max-w-[14ch] text-[clamp(3rem,9vw,8.5rem)]">
        <MaskedLines
          lines={[
            <Fragment key="line-1">Have an idea?</Fragment>,
            <Fragment key="line-2">
              Let&apos;s build something <span className="serif-accent text-accent">meaningful.</span>
            </Fragment>,
          ]}
        />
      </h2>

      <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="max-w-md text-[1.08rem] leading-relaxed text-ink-2">
              Whether you&apos;re hiring for an engineering role, need a backend or AI system built, or want to
              talk through an idea, I&apos;d like to hear about it.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <span className="label mb-3 block text-muted">Email</span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="text-[clamp(1.15rem,2.2vw,1.6rem)] font-medium tracking-[-0.02em] break-all underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
              >
                {site.email}
              </a>
              <CopyEmail email={site.email} />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <dl className="mt-12 grid grid-cols-2 border-t border-line">
              <div className="border-b border-line py-5 pr-4">
                <dt className="label mb-2 text-muted">Based in</dt>
                <dd className="text-ink">{site.location}</dd>
              </div>
              <div className="border-b border-line py-5 pl-4">
                <dt className="label mb-2 text-muted">Local time</dt>
                <dd className="font-mono text-sm text-ink">
                  <LocalTime timeZone={site.timezone} />
                </dd>
              </div>
              {site.socials.map((s, i) => {
                const Icon = socialIcon(s.label);
                return (
                  <div key={s.label} className={`border-b border-line py-5 ${i % 2 ? "pl-4" : "pr-4"}`}>
                    <dt className="label mb-2 text-muted">{s.label}</dt>
                    <dd>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                      >
                        <Icon size={14} /> {s.handle}
                        <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
