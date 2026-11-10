/**
 * Central profile + site configuration.
 * Edit this file to update personal details, links, and SEO copy.
 */

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gezahegngulilat.vercel.app",
  name: "Gezahegn Gulilat",
  /** Ethiopic (Ge'ez script) spelling of the name — used as a typographic signature. */
  nameEthiopic: "ገዛኸኝ ጉልላት",
  initials: "gg",
  title: "Gezahegn Gulilat | Senior Software Engineer & AI Engineer",
  description:
    "Gezahegn Gulilat is a software engineer specializing in full-stack development, backend engineering, scalable APIs, and AI-powered software solutions.",
  role: "Senior Software Engineer",
  roles: ["Software Engineer", "Full-Stack Developer", "AI Engineer"],
  tagline: "Software & AI Engineer",
  location: "Addis Ababa, Ethiopia",
  timezone: "Africa/Addis_Ababa",
  email: "gezahegngulilat1@gmail.com",
  phone: "+251 985 761 808",
  /** Set to null to hide the availability indicator. */
  availability: "Open to new opportunities" as string | null,
  /**
   * Drop a PDF at /public/resume.pdf and set this to "/resume.pdf"
   * to make every résumé button download the file directly.
   * While null, résumé buttons open the printable /resume page.
   */
  resumePdf: null as string | null,
  photo: {
    src: "/images/gezahegn-gulilat.jpg",
    alt: "Portrait of Gezahegn Gulilat in a grey suit, standing on a tree-lined street in Ethiopia",
  },
  education: {
    degree: "BSc in Software Engineering",
    school: "Adama Science and Technology University",
    short: "ASTU",
    place: "Adama, Ethiopia",
  },
  experienceYears: "7+",
  socials: [
    { label: "GitHub", handle: "Geze296", href: "https://github.com/Geze296" },
    { label: "LinkedIn", handle: "in/geze296", href: "https://www.linkedin.com/in/geze296" },
  ],
} as const;

export const resumeHref = site.resumePdf ?? "/resume";

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/** Ge'ez numerals, used as a secondary index on section headers. */
export const geez = ["፩", "፪", "፫", "፬", "፭", "፮", "፯", "፰", "፱", "፲"] as const;
