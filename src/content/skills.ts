export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
  /** Items used day to day; highlighted with a marker. */
  core?: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    blurb: "Services, APIs, and the logic that has to be right.",
    items: ["PHP", "Laravel", "Go", "Node.js", "Express.js", "Python", "Django"],
    core: ["Laravel", "Go"],
  },
  {
    title: "Frontend",
    blurb: "Interfaces that are fast, accessible, and maintainable.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Inertia.js", "Tailwind CSS", "HTML / CSS"],
    core: ["React", "TypeScript"],
  },
  {
    title: "AI & Automation",
    blurb: "LLMs and workflows that take real work off people's plates.",
    items: [
      "LLM integrations",
      "Agentic workflows",
      "AI-assisted development",
      "Prompt design",
      "n8n",
      "Workflow automation",
      "API integrations",
    ],
    core: ["LLM integrations", "n8n"],
  },
  {
    title: "Databases",
    blurb: "Modeling data so it stays fast and trustworthy.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    core: ["PostgreSQL"],
  },
  {
    title: "Testing & QA",
    blurb: "Proving software works before users find out it doesn't.",
    items: ["API Testing", "RestAssured", "Playwright", "Cypress", "Selenium", "Manual Testing"],
    core: ["RestAssured", "Playwright"],
  },
  {
    title: "DevOps & Tools",
    blurb: "Shipping, observing, and keeping things running.",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Linux", "Vercel"],
    core: ["Docker", "Git"],
  },
];

export const process = [
  {
    title: "Understand",
    body: "Start with the business problem, the users, and the constraints, before choosing any technology.",
  },
  {
    title: "Architect",
    body: "Design systems that are scalable, maintainable, and secure, and make trade-offs explicit.",
  },
  {
    title: "Build",
    body: "Write clean, well-structured code with modern tools, and use AI where it truly speeds things up.",
  },
  {
    title: "Test",
    body: "Validate functionality, performance, and edge cases with automated suites, not just optimism.",
  },
  {
    title: "Deliver",
    body: "Deploy, monitor, and keep improving. Shipping is where the feedback loop begins.",
  },
] as const;

export const aiPrinciples = [
  {
    title: "AI proposes. Humans approve.",
    body: "I design AI features with explicit review gates. A model drafts the test, the code, or the fix. The system validates it, and a person makes the final call.",
  },
  {
    title: "Provider-agnostic by design",
    body: "Models change fast. I put LLMs behind clean interfaces with mocks for testing, so a product can move between Claude, Gemini, or the next model without a rewrite.",
  },
  {
    title: "Automate the repetitive, gate the critical",
    body: "From n8n workflows to agent pipelines, I automate the repetitive work and keep human judgment where the stakes are high.",
  },
  {
    title: "Evaluate, don't assume",
    body: "AI output is only as good as its verification. I run generated code in sandboxes and capture real evidence before trusting it.",
  },
] as const;

export const exploring = [
  "Agentic workflows",
  "Tool use & MCP",
  "LLM evaluation",
  "AI-assisted QA",
  "RAG pipelines",
  "Workflow automation",
] as const;
