# Gezahegn Gulilat — Portfolio

Personal portfolio of **Gezahegn Gulilat**, Software Engineer · Full-Stack · Backend · AI Engineer.

Built with **Next.js 16 (App Router, Cache Components)**, **TypeScript**, **Tailwind CSS v4**, **Motion**, and **Zod**.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: fill in RESEND_API_KEY to enable the contact form
npm run dev                  # http://localhost:3000
```

Production check:

```bash
npm run lint
npm run build && npm start
```

## Editing content

All content lives in `src/content/` — no component changes needed:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, roles, email, socials, location, availability badge, résumé PDF, SEO copy |
| `experience.ts` | Work history (add `period` strings once dates are confirmed) |
| `projects.ts` | Case studies (summary, role, stack, capabilities, approach, links) + side projects |
| `skills.ts` | Skill groups, "How I work" steps, AI principles, "Currently exploring" |

- **Résumé:** drop `resume.pdf` into `public/` and set `resumePdf: "/resume.pdf"` in `site.ts`. Until then, every résumé button opens `/resume` — a printable page generated from the same data (Save as PDF).
- **Project links:** add `links: { live: "...", github: "..." }` to a project only when the URL is public.
- **Screenshots:** project visuals are coded, illustrative compositions (`src/components/visuals/project-visual.tsx`). Replace with real screenshots via `next/image` when available.
- **Profile photo:** `public/images/gezahegn-gulilat.jpg`.

## Contact form

`POST /api/contact` validates input with the shared Zod schema (`src/lib/contact-schema.ts`), applies a honeypot and a simple per-IP rate limit, then sends via the Resend REST API.

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | yes (to send) | Without it the form shows a friendly "email me directly" message. |
| `CONTACT_TO_EMAIL` | no | Defaults to the email in `site.ts`. |
| `CONTACT_FROM_EMAIL` | no | Must be a sender verified in Resend. Defaults to `onboarding@resend.dev`. |
| `NEXT_PUBLIC_SITE_URL` | no | Defaults to `https://gezahegngulilat.vercel.app`. |

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. Import it in Vercel (framework: Next.js — no extra config needed).
3. Add the environment variables above in **Project → Settings → Environment Variables**.
4. Deploy. Sitemap (`/sitemap.xml`), robots (`/robots.txt`), Open Graph image, manifest, and JSON-LD `Person` data are generated automatically.

## Structure

```
src/
  app/            layout (fonts, SEO, JSON-LD), home, /work/[slug], /resume, /api/contact, sitemap, robots, OG image
  components/
    layout/       nav, footer, theme toggle, brand, back-to-top
    sections/     hero, facts, about, experience, work, ai-lab, skills, process, contact
    visuals/      agent-trace (hero), project-visual (illustrative UIs)
    ui/           reveal/masked-line animations, section header, buttons, icons, year
  content/        all editable portfolio data
  lib/            shared contact schema
```

Motion respects `prefers-reduced-motion` globally (MotionConfig + CSS).
