import { Fragment } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { ExperienceList } from "./experience";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="shell pt-28 md:pt-40">
      <SectionHeader
        number={2}
        eyebrow="Experience"
        title={[
          <Fragment key="line-1">Where I&apos;ve</Fragment>,
          <Fragment key="line-2">
            done the <span className="serif-accent">work.</span>
          </Fragment>,
        ]}
        intro="From banking super apps to ERP systems and e-learning platforms: backend-first engineering, with a habit of testing everything I ship."
      />
      <ExperienceList />
    </section>
  );
}
