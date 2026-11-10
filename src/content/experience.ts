export type Experience = {
  company: string;
  role: string;
  location?: string;
  /** Display string. Leave undefined when the dates are not yet confirmed. */
  period?: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

/**
 * Professional experience, most recent first.
 * NOTE: dates for EagleLion and Mysource are not yet confirmed. Add `period`
 * strings (e.g. "Jan 2025 — Present") once verified.
 */
export const experience: Experience[] = [
  {
    company: "EagleLion Systems Technology",
    role: "Backend Developer",
    location: "Addis Ababa, Ethiopia",
    current: true,
    summary:
      "Backend engineering for banking and financial-technology products, including financial super apps used by Ethiopian banks.",
    highlights: [
      "Build and maintain backend services and APIs for financial super apps.",
      "Integrate with banking platforms, including Dashen Bank and the Commercial Bank of Ethiopia.",
      "Run quality assurance and test automation for banking web portals and mobile applications.",
      "Focus on reliability, correctness, and safe integrations in a regulated domain.",
    ],
    stack: ["REST APIs", "API Integrations", "Playwright", "RestAssured", "API Testing"],
  },
  {
    company: "Mysource Digital Marketing",
    role: "Web Development Team Lead",
    summary:
      "Led web development for a digital marketing agency, shipping client websites, funnels, and automation.",
    highlights: [
      "Led the web development team and coordinated delivery of client projects.",
      "Built and maintained client websites with WordPress and Laravel.",
      "Built sales funnels with ClickFunnels and DropFunnels.",
      "Designed n8n workflow automations connecting marketing tools and client systems.",
    ],
    stack: ["Laravel", "WordPress", "PHP", "n8n", "ClickFunnels", "DropFunnels"],
  },
  {
    company: "Omishtu-Joy Tech-Solutions",
    role: "Backend Developer",
    location: "Addis Ababa, Ethiopia",
    period: "Jun 2024 — Sep 2024",
    summary:
      "Backend development for an e-learning platform, working in a five-person engineering team.",
    highlights: [
      "Developed scalable Laravel backend services for an e-learning platform.",
      "Built REST APIs for authentication, course management, and progress tracking.",
      "Worked closely with the React frontend and UI/UX teams to ship features end-to-end.",
    ],
    stack: ["Laravel", "PHP", "React", "REST APIs"],
  },
  {
    company: "KurazTech",
    role: "Backend Developer",
    location: "Addis Ababa, Ethiopia",
    period: "Jun 2023 — Sep 2023",
    summary:
      "Backend development for ERP and business applications serving hotels, hospitals, and institutions.",
    highlights: [
      "Built REST APIs for ERP modules across hospitality, healthcare, and institutional use cases.",
      "Implemented JWT authentication and strengthened application security.",
      "Improved database performance and backend scalability, including caching strategies.",
    ],
    stack: ["REST APIs", "JWT", "Caching", "SQL"],
  },
];
