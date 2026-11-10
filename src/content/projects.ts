export type ProjectCategory = "AI" | "Fintech" | "Product" | "Enterprise";

export type ProjectVisual = "qaos" | "finflow" | "quickpost" | "banking" | "erp";

export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  summary: string;
  category: ProjectCategory;
  /** Shown as a status pill. Confirm each value before publishing. */
  status: string;
  inDevelopment?: boolean;
  role: string;
  context?: string;
  stack: string[];
  capabilities: string[];
  overview: string[];
  approach: { title: string; body: string }[];
  /** Only set when a public URL exists. Never invent one. */
  links?: { live?: string; github?: string };
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    slug: "qa-os",
    index: "01",
    title: "QA OS",
    kicker: "AI test automation generator",
    summary:
      "An AI-assisted QA platform that turns manual test cases and software requirements into reviewed, runnable RestAssured API automation.",
    category: "AI",
    status: "In development",
    inDevelopment: true,
    role: "Architect & sole engineer",
    stack: [
      "Go",
      "PostgreSQL",
      "Claude API",
      "Gemini API",
      "Java 21",
      "JUnit 5",
      "RestAssured",
      "Docker",
      "GitHub Actions",
      "htmx",
    ],
    capabilities: [
      "Excel test-case import",
      "SRS document analysis (PDF, DOCX)",
      "Postman & OpenAPI import",
      "AI-assisted test generation",
      "RestAssured code generation",
      "Isolated Docker test runner",
      "AI failure analysis & repair",
      "Project-based test organization",
    ],
    overview: [
      "QA teams often keep test cases in spreadsheets and write automation separately in an IDE. QA OS brings both into one platform. It reads test cases, API collections, and requirement documents, then uses an LLM to propose test scenarios and generate Java RestAssured automation that a human reviews before anything runs.",
      "Generated code is not a throwaway snippet. Each project gets a real, git-backed Maven workspace that engineers can open in their IDE, run with mvn test, or push to their own repository.",
    ],
    approach: [
      {
        title: "AI proposes, the platform validates, a human approves",
        body: "Every AI output goes through three separate gates. Proposed scenarios and generated automation must be explicitly approved, and AI-suggested repairs are trial-run in their own disposable workspace before a person can accept them.",
      },
      {
        title: "Provider-agnostic AI layer",
        body: "All AI features sit behind a single provider interface, with a deterministic mock plus real Claude and Gemini implementations. The workflow can be built and tested without inference cost, then switched to a real model with one setting.",
      },
      {
        title: "Real execution, real evidence",
        body: "Automation runs in a fresh, resource-limited Maven container per run. Stdout, stderr, exit codes, and Surefire results are captured, so pass, fail, and compile errors are told apart from real results.",
      },
    ],
    visual: "qaos",
  },
  {
    slug: "finflow",
    index: "02",
    title: "FinFlow",
    kicker: "Finance automation platform",
    summary:
      "An internal platform that streamlines business finance requests, from submission and multi-stage approval to budget checks, payment, and receipt tracking.",
    category: "Fintech",
    status: "Internal platform",
    role: "Full-stack engineer",
    stack: ["React", "Go", "PostgreSQL", "REST APIs", "Vercel", "Neon", "Northflank"],
    capabilities: [
      "Finance request management",
      "Multi-stage approval workflows",
      "Budget checking",
      "Status tracking",
      "Email notifications",
      "Audit trail",
    ],
    overview: [
      "Finance requests in growing businesses often move through email threads and spreadsheets, which makes approvals slow and hard to audit. FinFlow gives every request a clear lifecycle, from submission through approval, budget validation, payment, and receipt.",
      "The platform pairs a React frontend with a Go API on PostgreSQL. The frontend is deployed on Vercel, the API on Northflank, and the database on Neon.",
    ],
    approach: [
      {
        title: "Workflow as a state machine",
        body: "Each request moves through explicit stages with defined transitions, so status is always clear and approvers only see what needs their attention.",
      },
      {
        title: "Budget checks before money moves",
        body: "Requests are checked against available budgets during approval, which catches overspending before payment instead of after.",
      },
      {
        title: "Everything leaves a trail",
        body: "Every action is recorded in an audit trail, and email notifications keep requesters and approvers informed at each step.",
      },
    ],
    visual: "finflow",
  },
  {
    slug: "quickpost",
    index: "03",
    title: "QuickPost",
    kicker: "Social media management platform",
    summary:
      "A platform for creators and businesses to create, schedule, publish, and analyze content across multiple social networks from one place.",
    category: "Product",
    status: "SaaS product",
    role: "Full-stack engineer",
    stack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS", "Social APIs"],
    capabilities: [
      "Social account integrations",
      "Content publishing",
      "Scheduling",
      "Social media analytics",
      "Content management",
    ],
    overview: [
      "Managing several social accounts means juggling many dashboards. QuickPost brings them together: connect your accounts, draft content once, schedule it, and follow performance in one workspace.",
      "It is built as a Laravel monolith with a React frontend served through Inertia.js. This keeps the speed of a single codebase while still delivering a modern single-page experience.",
    ],
    approach: [
      {
        title: "Integrations as first-class modules",
        body: "Each social platform is integrated behind a consistent interface, so publishing, scheduling, and analytics share one pipeline regardless of the network.",
      },
      {
        title: "Reliable scheduling",
        body: "Scheduled posts are handled by background jobs, which keeps publishing independent of the user's session.",
      },
      {
        title: "Laravel + Inertia for velocity",
        body: "Server-side routing and controllers with React views gave a fast iteration loop without maintaining a separate API layer for the UI.",
      },
    ],
    visual: "quickpost",
  },
  {
    slug: "banking-super-apps",
    index: "04",
    title: "Banking Super Apps",
    kicker: "Fintech backend & quality engineering",
    summary:
      "Backend engineering, integrations, and quality assurance for financial super apps and banking portals in Ethiopia.",
    category: "Fintech",
    status: "Client work",
    role: "Backend developer & QA engineer",
    context: "EagleLion Systems Technology",
    stack: ["REST APIs", "API Integrations", "Playwright", "TypeScript", "RestAssured", "Java"],
    capabilities: [
      "Backend services",
      "API integrations",
      "Banking application workflows",
      "Web & mobile testing",
      "API test automation",
    ],
    overview: [
      "At EagleLion Systems Technology I work on the backend of financial super apps, the all-in-one apps where customers handle payments, transfers, and other banking services. The work includes integrations with banking platforms, including Dashen Bank and the Commercial Bank of Ethiopia.",
      "Alongside backend work, I run quality assurance and automation for banking web portals and mobile apps, using Playwright for UI flows and RestAssured for API suites.",
    ],
    approach: [
      {
        title: "Correctness over cleverness",
        body: "In banking, a subtle bug is a financial incident. Services and integrations are built to be explicit and predictable, with tests that cover the money paths.",
      },
      {
        title: "Testing at two layers",
        body: "UI flows are exercised end-to-end with Playwright, and backend contracts are verified directly with RestAssured. Regressions are caught where they start.",
      },
    ],
    visual: "banking",
  },
  {
    slug: "erp-systems",
    index: "05",
    title: "ERP & Business Systems",
    kicker: "Enterprise resource planning",
    summary:
      "ERP solutions for hotels, hospitals, and institutions, covering backend architecture, REST APIs, business workflows, and security.",
    category: "Enterprise",
    status: "Client work",
    role: "Backend developer",
    context: "KurazTech",
    stack: ["REST APIs", "JWT", "Caching", "SQL"],
    capabilities: [
      "Backend architecture",
      "REST APIs",
      "Database management",
      "Business workflows",
      "Authentication & security",
    ],
    overview: [
      "Hotels, hospitals, and institutions run on very different workflows, but they need the same foundations: reliable data, clear permissions, and APIs that hold up under daily operations.",
      "At KurazTech I built backend modules and REST APIs for these ERP systems, focusing on authentication, data integrity, and performance.",
    ],
    approach: [
      {
        title: "Secure by default",
        body: "JWT-based authentication and careful authorization keep sensitive operational data, such as patient or guest records, behind the right permissions.",
      },
      {
        title: "Performance where it matters",
        body: "Query optimization and caching keep the frequently used screens fast as data grows.",
      },
    ],
    visual: "erp",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "AI",
  "Fintech",
  "Product",
  "Enterprise",
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Smaller experiments & side projects, shown in the AI Lab. */
export const labProjects = [
  {
    title: "Pot Bot",
    body: "A Telegram bot and Mini App that runs a weekly paid fantasy-football mini-league. It verifies payments, settles each gameweek automatically, and keeps the group chat lively with a guard-railed AI persona.",
    stack: "TypeScript · grammY · React · Gemini · PostgreSQL",
    tag: "AI · Automation",
  },
  {
    title: "Mini-Commerce",
    body: "A sample e-commerce backend built as gRPC microservices for auth, orders, and products, exposed over REST through gRPC-Gateway.",
    stack: "Go · gRPC · MongoDB · Docker",
    tag: "Distributed systems",
  },
  {
    title: "Travel Guide",
    body: "A mobile travel app for exploring destinations, with location details, reviews, and personalized recommendations.",
    stack: "Flutter · Firebase · Google Maps",
    tag: "Mobile",
  },
] as const;
