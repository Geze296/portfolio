import { nav, resumeHref, site } from "@/content/site";
import { Year } from "@/components/ui/year";
import { socialIcon } from "@/components/ui/icons";
import { BackToTop } from "./back-to-top";

export function Footer() {
  return (
    <footer className="no-print border-t border-line">
      <div className="shell pt-16 pb-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="max-w-sm text-[1.05rem] leading-relaxed text-ink-2">
              Software engineer building scalable backends, full-stack products, and AI-powered tools, from Addis
              Ababa, for teams anywhere.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-ink underline decoration-line-strong underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              {site.email}
            </a>
          </div>
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <span className="label mb-5 block text-muted">Index</span>
            <ul className="grid grid-cols-2 gap-y-2.5">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`/#${n.id}`} className="text-ink-2 transition-colors hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={resumeHref} className="text-ink-2 transition-colors hover:text-ink">
                  Résumé
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-3">
            <span className="label mb-5 block text-muted">Elsewhere</span>
            <ul className="space-y-2.5">
              {site.socials.map((s) => {
                const Icon = socialIcon(s.label);
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-ink-2 transition-colors hover:text-ink"
                    >
                      <Icon size={14} /> {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between gap-6 border-b border-line pb-6 md:mt-28">
          <p className="display text-[clamp(2.6rem,10.5vw,10rem)] leading-[0.85]" aria-hidden>
            Gezahegn<span className="text-accent">.</span>
          </p>
          <span className="font-ethiopic hidden pb-2 text-[clamp(1rem,2vw,1.6rem)] text-muted sm:block" lang="am">
            {site.nameEthiopic}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="label text-muted">
            © <Year /> {site.name}. All rights reserved.
          </p>
          <p className="label hidden text-muted md:block">Designed & built in Addis Ababa</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
