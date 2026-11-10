"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { contactSchema, type ContactField } from "@/lib/contact-schema";
import { site } from "@/content/site";
import { ArrowRight, Check } from "@/components/ui/icons";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<ContactField, string>>;

const fields: { name: ContactField; label: string; type?: string; autoComplete?: string; textarea?: boolean }[] = [
  { name: "name", label: "Your name", autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject" },
  { name: "message", label: "Tell me about your project", textarea: true },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fe = parsed.error.flatten().fieldErrors;
      const next: Errors = {};
      for (const f of fields) if (fe[f.name]?.[0]) next[f.name] = fe[f.name]![0];
      setErrors(next);
      const first = fields.find((f) => next[f.name]);
      if (first) form.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
      return;
    }
    setErrors({});
    setServerError(null);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: Errors };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setServerError(json.error ?? "Something went wrong. Please try again.");
        if (json.fields) {
          const next: Errors = {};
          for (const [k, v] of Object.entries(json.fields)) next[k as ContactField] = Array.isArray(v) ? v[0] : v;
          setErrors(next);
        }
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setServerError("Network error. Check your connection and try again.");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[28rem] flex-col justify-center border border-line bg-paper-2 p-8 md:p-12"
          >
            <span className="mb-8 inline-flex size-12 items-center justify-center bg-accent text-accent-ink">
              <Check size={22} />
            </span>
            <h3 className="display text-[2.4rem]">Message sent.</h3>
            <p className="mt-4 max-w-sm text-ink-2">
              Thanks for reaching out. I read every message and will get back to you as soon as I can.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 self-start border-b border-ink pb-1 text-sm font-medium hover:border-accent hover:text-accent"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border border-line bg-paper p-6 md:p-10"
            aria-describedby={serverError ? "form-error" : undefined}
          >
            <div className="grid gap-x-6 sm:grid-cols-2">
              {fields.map((f) => {
                const err = errors[f.name];
                const id = `cf-${f.name}`;
                const common = {
                  id,
                  name: f.name,
                  "aria-invalid": err ? true : undefined,
                  "aria-describedby": err ? `${id}-err` : undefined,
                  onInput: () => err && setErrors((x) => ({ ...x, [f.name]: undefined })),
                  className:
                    "peer w-full border-0 border-b bg-transparent px-0 pt-7 pb-2.5 text-[1.02rem] text-ink outline-none transition-colors placeholder:text-transparent focus:border-ink " +
                    (err ? "border-danger" : "border-line-strong"),
                  placeholder: f.label,
                };
                return (
                  <div key={f.name} className={`relative mb-6 ${f.textarea || f.name === "subject" ? "sm:col-span-2" : ""}`}>
                    {f.textarea ? (
                      <textarea {...common} rows={5} className={`${common.className} resize-y`} />
                    ) : (
                      <input {...common} type={f.type ?? "text"} autoComplete={f.autoComplete} />
                    )}
                    <label
                      htmlFor={id}
                      className="label pointer-events-none absolute top-1.5 left-0 text-muted transition-colors peer-focus:text-accent"
                    >
                      {f.label}
                    </label>
                    {err ? (
                      <p id={`${id}-err`} className="mt-2 text-sm text-danger">
                        {err}
                      </p>
                    ) : null}
                  </div>
                );
              })}
              {/* Honeypot */}
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                <label htmlFor="cf-company">Company</label>
                <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" />
              </div>
            </div>

            {serverError ? (
              <p id="form-error" role="alert" className="mb-6 border-l-2 border-danger bg-danger/5 px-4 py-3 text-sm text-ink">
                {serverError}{" "}
                <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
                  {site.email}
                </a>
              </p>
            ) : null}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-sm text-muted">Your details are only used to reply to you.</p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-12 items-center gap-3 bg-ink px-6 text-[0.95rem] font-medium text-paper transition-colors hover:bg-accent hover:text-accent-ink disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
