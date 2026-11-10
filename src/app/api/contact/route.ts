import { headers } from "next/headers";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/content/site";

/**
 * POST /api/contact
 * Sends the message through Resend (https://resend.com) using its REST API.
 * Required env:  RESEND_API_KEY
 * Optional env:  CONTACT_TO_EMAIL   (defaults to the address in content/site.ts)
 *                CONTACT_FROM_EMAIL (defaults to Resend's onboarding sender)
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Please check the highlighted fields.", fields: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { name, email, subject, message, company } = parsed.data;
  // Honeypot tripped: pretend success so bots learn nothing.
  if (company) return Response.json({ ok: true });

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not set; message not sent.");
    return Response.json(
      { ok: false, error: "The contact form isn't configured yet. Please email me directly.", code: "not_configured" },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#121411">
      <p style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6a6d65">New message from your portfolio</p>
      <h2 style="margin:0 0 12px">${escape(subject)}</h2>
      <p><strong>${escape(name)}</strong> &lt;${escape(email)}&gt;</p>
      <hr style="border:none;border-top:1px solid #d8d5cb;margin:16px 0" />
      <p style="white-space:pre-wrap">${escape(message)}</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
        text: `${name} <${email}>\n\n${message}`,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
      return Response.json({ ok: false, error: "Something went wrong sending your message." }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Network error", err);
    return Response.json({ ok: false, error: "Something went wrong sending your message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
