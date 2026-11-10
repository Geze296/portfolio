import type { ProjectVisual as Kind } from "@/content/projects";

/**
 * Hand-built, illustrative interface compositions for each project.
 * They are deliberately abstract: they communicate what the product does
 * without pretending to be real screenshots. Swap for real screenshots
 * (next/image) when available.
 */
export function ProjectVisual({ kind, title }: { kind: Kind; title: string }) {
  const View = views[kind];
  return (
    <figure className="plate" aria-label={`Illustrative interface for ${title}`}>
      <div className="overflow-hidden border border-line bg-paper-2 shadow-plate">
        <div className="flex items-center justify-between border-b border-line bg-paper px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
          </span>
          <span className="font-mono text-[0.65rem] tracking-wide text-muted">{title.toLowerCase()}</span>
          <span className="font-mono text-[0.6rem] tracking-[0.14em] text-muted uppercase">illustration</span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden" aria-hidden>
          <View />
        </div>
      </div>
    </figure>
  );
}

const mono = "font-mono text-[0.62rem] tracking-wide";

function QaOs() {
  return (
    <div className="grid h-full grid-cols-[38%_minmax(0,1fr)] text-ink">
      {/* Inputs */}
      <div className="flex flex-col gap-2 border-r border-line bg-paper p-3.5">
        <span className={`${mono} text-muted uppercase`}>Sources</span>
        {[
          ["test_cases.xlsx", "Excel"],
          ["checkout_srs.pdf", "SRS"],
          ["payments.postman.json", "API"],
        ].map(([f, t], i) => (
          <div
            key={f}
            className={`flex items-center justify-between border px-2.5 py-2 transition-transform duration-500 group-hover:translate-x-1 ${
              i === 1 ? "border-accent bg-accent-soft" : "border-line bg-paper-2"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <span className="truncate text-[0.68rem]">{f}</span>
            <span className={`${mono} text-muted`}>{t}</span>
          </div>
        ))}
        <span className={`${mono} mt-2 text-muted uppercase`}>Proposed scenarios</span>
        {["Valid card checkout", "Expired token → 401", "Amount over limit"].map((s, i) => (
          <div key={s} className="flex items-center gap-2 text-[0.66rem]">
            <span
              className={`inline-flex size-3.5 items-center justify-center border text-[0.5rem] ${
                i < 2 ? "border-ok bg-ok text-paper" : "border-line-strong"
              }`}
            >
              {i < 2 ? "✓" : ""}
            </span>
            <span className={i < 2 ? "" : "text-muted"}>{s}</span>
          </div>
        ))}
        <div className="mt-auto flex gap-1.5">
          <span className={`${mono} border border-line bg-paper-2 px-1.5 py-1`}>AI proposes</span>
          <span className={`${mono} border border-ink bg-ink px-1.5 py-1 text-paper`}>Human approves</span>
        </div>
      </div>
      {/* Code */}
      <div className="flex min-w-0 flex-col overflow-hidden bg-code p-3.5 font-mono text-[0.68rem] leading-[1.75] text-code-ink">
        <div className="mb-2 flex items-center justify-between text-white/40">
          <span>CheckoutApiTest.java</span>
          <span className="text-[#5cc184]">● 3 passed</span>
        </div>
        <pre className="whitespace-pre text-code-ink/90">
          <span className="text-[#8798ff]">@Test</span>
          {"\n"}
          <span className="text-[#e0a84b]">void</span> validCardCheckout() {"{"}
          {"\n  "}given()
          {"\n    "}.spec(<span className="text-white/60">requestSpec</span>)
          {"\n    "}.body(<span className="text-[#9fd6a5]">payload(&quot;valid&quot;)</span>)
          {"\n  "}.when()
          {"\n    "}.post(<span className="text-[#9fd6a5]">&quot;/checkout&quot;</span>)
          {"\n  "}.then()
          {"\n    "}.statusCode(<span className="text-[#e0a84b]">201</span>)
          {"\n    "}.body(<span className="text-[#9fd6a5]">&quot;status&quot;</span>, equalTo(
          <span className="text-[#9fd6a5]">&quot;PAID&quot;</span>));
          {"\n}"}
          {"\n\n"}
          <span className="text-[#8798ff]">@Test</span>
          {"\n"}
          <span className="text-[#e0a84b]">void</span> expiredTokenReturns401() {"{"}
          {"\n  "}given().auth().oauth2(<span className="text-[#9fd6a5]">EXPIRED</span>)
          {"\n  "}.when().post(<span className="text-[#9fd6a5]">&quot;/checkout&quot;</span>)
          {"\n  "}.then().statusCode(<span className="text-[#e0a84b]">401</span>);
          {"\n}"}
        </pre>
        <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-2 text-white/45">
          <span className="size-1.5 bg-[#5cc184]" />
          sandbox · maven:3.9-temurin-21 · exit 0
        </div>
      </div>
    </div>
  );
}

function FinFlow() {
  const stages = ["Requested", "Manager", "Finance", "Paid"];
  return (
    <div className="flex h-full flex-col gap-3 bg-paper p-4 text-ink">
      <div className="flex items-center justify-between">
        <div>
          <span className={`${mono} text-muted uppercase`}>Request · FR-0142</span>
          <p className="text-[0.95rem] font-medium tracking-tight">Laptop procurement — Design team</p>
        </div>
        <span className={`${mono} border border-warn/50 px-2 py-1 text-warn uppercase`}>Awaiting finance</span>
      </div>
      {/* Stage track */}
      <div className="grid grid-cols-4 gap-1.5">
        {stages.map((s, i) => (
          <div key={s} className="flex flex-col gap-1.5">
            <div className="h-1 overflow-hidden bg-line">
              <div
                className="h-full bg-ink transition-[width] duration-700 ease-out"
                style={{ width: i < 2 ? "100%" : i === 2 ? "45%" : "0%" }}
              />
            </div>
            <span className={`${mono} ${i <= 2 ? "text-ink" : "text-muted"}`}>{s}</span>
          </div>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-[1fr_44%] gap-3">
        {/* Budget */}
        <div className="flex flex-col gap-2 border border-line bg-paper-2 p-3">
          <span className={`${mono} text-muted uppercase`}>Budget check</span>
          <div className="flex items-end justify-between">
            <span className="text-[1.35rem] leading-none font-medium tracking-tight">Within budget</span>
            <span className={`${mono} text-ok`}>✓ OK</span>
          </div>
          <div className="mt-1 h-2 bg-line">
            <div className="h-full w-[62%] bg-accent transition-[width] duration-700 group-hover:w-[71%]" />
          </div>
          <div className="mt-2 space-y-1.5 border-t border-line pt-2">
            {[
              ["Laptops × 4", "line item"],
              ["Warranty", "line item"],
              ["Vendor", "verified"],
            ].map(([a, b]) => (
              <div key={a} className="flex items-center justify-between text-[0.66rem]">
                <span>{a}</span>
                <span className={`${mono} text-muted`}>{b}</span>
              </div>
            ))}
          </div>
          <div className={`${mono} flex justify-between text-muted`}>
            <span>Q3 · Operations</span>
            <span>committed / available</span>
          </div>
          <div className="mt-auto grid grid-cols-2 gap-1.5">
            <span className={`${mono} border border-ink bg-ink py-1.5 text-center text-paper`}>Approve</span>
            <span className={`${mono} border border-line-strong py-1.5 text-center`}>Return</span>
          </div>
        </div>
        {/* Audit */}
        <div className="flex flex-col gap-1.5 border border-line p-3">
          <span className={`${mono} text-muted uppercase`}>Audit trail</span>
          {[
            ["Submitted", "requester"],
            ["Approved", "manager"],
            ["Budget checked", "system"],
            ["Email sent", "finance"],
            ["Payment", "pending"],
            ["Receipt", "pending"],
          ].map(([a, b], i) => (
            <div key={a} className="flex items-center gap-2 text-[0.66rem]">
              <span className={`size-1.5 shrink-0 ${i === 3 ? "bg-accent" : i > 3 ? "border border-line-strong" : "bg-ink"}`} />
              <span className="flex-1">{a}</span>
              <span className={`${mono} text-muted`}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuickPost() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const posts: Record<number, { t: string; c: string }[]> = {
    0: [
      { t: "Launch teaser", c: "bg-ink text-paper" },
      { t: "Poll", c: "border border-line-strong" },
    ],
    1: [
      { t: "Carousel", c: "bg-accent text-accent-ink" },
      { t: "Reel", c: "border border-line-strong" },
      { t: "Quote card", c: "border border-line-strong" },
    ],
    2: [{ t: "Behind the scenes", c: "border border-line-strong" }],
    3: [
      { t: "Thread", c: "bg-ink text-paper" },
      { t: "Short video", c: "bg-accent text-accent-ink" },
    ],
    4: [
      { t: "Case study", c: "border border-line-strong" },
      { t: "Story", c: "bg-accent text-accent-ink" },
      { t: "Live Q&A", c: "bg-ink text-paper" },
    ],
    5: [{ t: "Weekend tip", c: "border border-line-strong" }],
    6: [{ t: "Recap", c: "border border-line-strong" }],
  };
  return (
    <div className="flex h-full flex-col bg-paper p-4 text-ink">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[0.95rem] font-medium tracking-tight">Content calendar</span>
        <div className="flex gap-1">
          {["A", "B", "C", "D"].map((n, i) => (
            <span
              key={n}
              className={`inline-flex size-5 items-center justify-center font-mono text-[0.55rem] ${
                i === 0 ? "bg-ink text-paper" : "border border-line-strong text-muted"
              }`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
      <div className="grid flex-1 grid-cols-7 border-t border-l border-line">
        {days.map((d, i) => (
          <div key={d} className="flex flex-col gap-1 border-r border-b border-line p-1.5">
            <span className={`${mono} text-muted`}>{d}</span>
            {(posts[i] ?? []).map((p, j) => (
              <span
                key={p.t}
                className={`truncate px-1 py-1 text-[0.55rem] leading-tight transition-transform duration-500 group-hover:-translate-y-0.5 ${p.c}`}
                style={{ transitionDelay: `${(i + j) * 40}ms` }}
              >
                {p.t}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-[1fr_auto] items-end gap-4">
        <div className="flex h-12 items-end gap-1">
          {[30, 45, 38, 62, 55, 78, 70, 88, 64, 92, 80, 96].map((h, i) => (
            <span
              key={i}
              className={`flex-1 transition-[height] duration-700 ${i > 8 ? "bg-accent" : "bg-ink/80"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <span className={`${mono} text-muted uppercase`}>Engagement · 12 wks</span>
      </div>
    </div>
  );
}

function Banking() {
  return (
    <div className="grid h-full grid-cols-[1fr_1.15fr] items-center gap-4 bg-paper p-4 text-ink">
      {/* Phone */}
      <div className="mx-auto flex aspect-[9/17] h-[92%] flex-col gap-2 rounded-[1.4rem] border-[5px] border-ink bg-paper-2 p-2.5 transition-transform duration-700 group-hover:-rotate-2">
        <div className="mx-auto h-1 w-8 rounded-full bg-ink/70" />
        <span className={`${mono} text-muted uppercase`}>Balance</span>
        <span className="text-[1.05rem] leading-none font-medium tracking-tight">ETB ••••••</span>
        <div className="grid grid-cols-3 gap-1">
          {["Send", "Pay", "Top-up", "Bills", "Loans", "More"].map((a, i) => (
            <span
              key={a}
              className={`flex aspect-square items-center justify-center text-[0.5rem] ${
                i === 0 ? "bg-accent text-accent-ink" : "border border-line bg-paper"
              }`}
            >
              {a}
            </span>
          ))}
        </div>
        <div className="mt-auto space-y-1">
          {[1, 2, 3].map((r) => (
            <div key={r} className="flex items-center gap-1.5">
              <span className="size-3 bg-line" />
              <span className="h-1 flex-1 bg-line" />
              <span className="h-1 w-5 bg-ink/60" />
            </div>
          ))}
        </div>
      </div>
      {/* API trace */}
      <div className="flex flex-col gap-1.5 border border-line bg-code p-3 font-mono text-[0.6rem] leading-[1.65] text-code-ink">
        <span className="text-white/40">api trace · integration</span>
        {[
          ["POST", "/auth/token", "200"],
          ["GET", "/accounts", "200"],
          ["POST", "/transfers", "201"],
          ["GET", "/transfers/:id", "200"],
          ["POST", "/bills/pay", "202"],
        ].map(([m, p, s], i) => (
          <div key={p} className="flex gap-2 transition-opacity duration-500" style={{ transitionDelay: `${i * 70}ms` }}>
            <span className={`w-8 ${m === "POST" ? "text-[#8798ff]" : "text-[#9fd6a5]"}`}>{m}</span>
            <span className="flex-1 truncate">{p}</span>
            <span className="text-[#5cc184]">{s}</span>
          </div>
        ))}
        <div className="mt-2 border-t border-white/10 pt-2 text-white/50">
          <span className="text-[#5cc184]">✓</span> e2e · transfer flow
          <br />
          <span className="text-[#5cc184]">✓</span> contract · /transfers
        </div>
      </div>
    </div>
  );
}

function Erp() {
  const modules = ["Front desk", "Inventory", "Patients", "Billing", "HR", "Reports"];
  return (
    <div className="grid h-full grid-cols-[30%_1fr] bg-paper text-ink">
      <div className="flex flex-col gap-1 border-r border-line bg-paper-2 p-3">
        <span className={`${mono} mb-1 text-muted uppercase`}>Modules</span>
        {modules.map((m, i) => (
          <span
            key={m}
            className={`px-2 py-1.5 text-[0.66rem] ${i === 3 ? "bg-ink text-paper" : "text-ink-2"}`}
          >
            {m}
          </span>
        ))}
        <div className="mt-auto border-t border-line pt-2">
          <span className={`${mono} text-muted`}>role · admin</span>
          <div className="mt-1 flex items-center gap-1.5 text-[0.6rem]">
            <span className="size-1.5 bg-ok" /> JWT session
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-3.5">
        <div className="grid grid-cols-3 gap-2">
          {["Hotel", "Hospital", "Institution"].map((s, i) => (
            <div key={s} className="border border-line p-2">
              <span className={`${mono} text-muted uppercase`}>{s}</span>
              <div className="mt-2 h-1.5 bg-line">
                <div
                  className="h-full bg-ink transition-[width] duration-700 group-hover:bg-accent"
                  style={{ width: `${[72, 54, 86][i]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 border border-line">
          <div className={`${mono} grid grid-cols-[1.4fr_1fr_0.8fr] border-b border-line bg-paper-2 px-2.5 py-1.5 text-muted uppercase`}>
            <span>Invoice</span>
            <span>Department</span>
            <span className="text-right">Status</span>
          </div>
          {[
            ["INV-2041", "Rooms", "Paid"],
            ["INV-2042", "Pharmacy", "Pending"],
            ["INV-2043", "Admissions", "Paid"],
            ["INV-2044", "Catering", "Draft"],
            ["INV-2045", "Labs", "Paid"],
          ].map(([a, b, c]) => (
            <div key={a} className="grid grid-cols-[1.4fr_1fr_0.8fr] border-b border-line px-2.5 py-1.5 text-[0.64rem] last:border-b-0">
              <span className="font-mono">{a}</span>
              <span className="text-ink-2">{b}</span>
              <span className={`text-right ${c === "Paid" ? "text-ok" : c === "Pending" ? "text-warn" : "text-muted"}`}>
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const views: Record<Kind, () => React.JSX.Element> = {
  qaos: QaOs,
  finflow: FinFlow,
  quickpost: QuickPost,
  banking: Banking,
  erp: Erp,
};
