"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { projectCategories, projects, type Project } from "@/content/projects";
import { ProjectVisual } from "@/components/visuals/project-visual";
import { ArrowRight, ArrowUpRight, GitHub } from "@/components/ui/icons";
import { Tag } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function StatusPill({ project }: { project: Project }) {
  return (
    <span
      className={`label inline-flex items-center gap-2 border px-2 py-1.5 ${
        project.inDevelopment ? "border-warn/50 text-warn" : "border-line text-ink-2"
      }`}
    >
      <span className={`size-1.5 ${project.inDevelopment ? "bg-warn" : "bg-ink-2"}`} aria-hidden />
      {project.status}
    </span>
  );
}

function ProjectCase({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.7, ease }}
      className="group grid gap-10 border-t border-line pt-10 pb-20 md:pt-14 md:pb-28 lg:grid-cols-12 lg:gap-12"
      aria-labelledby={`p-${project.slug}`}
    >
      <Link
        href={`/work/${project.slug}`}
        prefetch
        className={`block min-w-0 transition-transform duration-700 ease-out hover:-translate-y-1 lg:col-span-7 ${
          flip ? "lg:order-2" : ""
        }`}
        aria-label={`Read the ${project.title} case study`}
        tabIndex={-1}
      >
        <ProjectVisual kind={project.visual} title={project.title} />
      </Link>

      <div className={`flex min-w-0 flex-col lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="label text-ink">{project.index}</span>
          <span className="h-px w-6 bg-line-strong" aria-hidden />
          <span className="label text-muted">{project.category}</span>
          <StatusPill project={project} />
        </div>

        <h3 id={`p-${project.slug}`} className="display text-[clamp(2.4rem,4.4vw,3.9rem)]">
          {project.title}
        </h3>
        <p className="serif-accent mt-3 text-[1.5rem] text-ink-2">{project.kicker}</p>
        <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-ink-2">{project.summary}</p>

        <dl className="mt-8 grid grid-cols-[6.5rem_1fr] gap-y-4 border-t border-line pt-6 text-sm">
          <dt className="label pt-0.5 text-muted">Role</dt>
          <dd className="text-ink">
            {project.role}
            {project.context ? <span className="text-muted"> · {project.context}</span> : null}
          </dd>
          <dt className="label pt-1.5 text-muted">Stack</dt>
          <dd className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            {project.stack.length > 6 ? <Tag className="text-muted">+{project.stack.length - 6}</Tag> : null}
          </dd>
          <dt className="label pt-0.5 text-muted">Builds</dt>
          <dd className="text-ink-2">{project.capabilities.slice(0, 4).join(" · ")}</dd>
        </dl>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-10">
          <Link
            href={`/work/${project.slug}`}
            prefetch
            className="group/cta inline-flex items-center gap-3 border-b border-ink pb-1.5 text-[0.95rem] font-medium transition-colors hover:border-accent hover:text-accent"
          >
            View case study
            <ArrowRight size={16} className="transition-transform group-hover/cta:translate-x-1" />
          </Link>
          {project.links?.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-accent"
            >
              Live site <ArrowUpRight size={14} />
            </a>
          ) : null}
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-accent"
            >
              <GitHub size={14} /> Source
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function WorkList() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="mb-12 flex flex-wrap gap-2">
        {projectCategories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={active}
              className={`inline-flex h-10 items-center gap-2.5 border px-4 text-sm transition-colors duration-300 ${
                active ? "border-ink bg-ink text-paper" : "border-line text-ink-2 hover:border-ink hover:text-ink"
              }`}
            >
              {c}
              <span className={`font-mono text-[0.65rem] ${active ? "text-paper/60" : "text-muted"}`}>
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
      <motion.div layout>
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p, i) => (
            <ProjectCase key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
