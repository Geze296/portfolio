"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { nav, resumeHref, site } from "@/content/site";
import { ArrowUpRight } from "@/components/ui/icons";
import { Brand } from "./brand";
import { ThemeToggle } from "./theme-toggle";

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section tracking
  useEffect(() => {
    if (!isHome) return;
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isHome]);

  // Close the menu on route change (adjusting state during render, not in an effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }
  // Lock scroll while open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const href = (id: string) => (id === "home" ? "/#home" : `/#${id}`);

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          <Brand onClick={() => setOpen(false)} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const isActive = isHome && active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={href(item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative px-3.5 py-2 text-[0.9rem] tracking-[-0.01em] transition-colors ${
                        isActive ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3.5 -bottom-[1px] h-px bg-accent"
                          transition={{ duration: 0.45, ease }}
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={resumeHref}
              {...(site.resumePdf ? { download: true } : {})}
              className="group hidden h-10 items-center gap-2.5 bg-ink px-4 text-[0.85rem] font-medium text-paper transition-colors hover:bg-accent hover:text-accent-ink sm:inline-flex"
            >
              Résumé
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative inline-flex size-10 items-center justify-center border border-line lg:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[3px]"}`}
              />
              <span
                className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[3px]"}`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="no-print fixed inset-0 z-40 flex flex-col bg-paper pt-[4.5rem] lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
          >
            <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-between pt-8 pb-8">
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <li key={item.id} className="overflow-hidden border-b border-line">
                    <motion.a
                      href={href(item.id)}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
                    >
                      <span className="display text-[2.6rem]">{item.label}</span>
                      <span className="label text-muted">0{i + 1}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
              <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={resumeHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-between bg-ink px-5 text-paper"
                >
                  Résumé <ArrowUpRight size={16} />
                </a>
                <div className="flex items-center justify-between">
                  <a href={`mailto:${site.email}`} className="text-sm text-ink-2 underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                  <span className="font-ethiopic text-sm text-muted">{site.nameEthiopic}</span>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
