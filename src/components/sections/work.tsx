import { Fragment } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { WorkList } from "./work-list";

export function Work() {
  return (
    <section id="work" aria-label="Selected work" className="shell pt-28 md:pt-40">
      <SectionHeader
        number={3}
        eyebrow="Selected work"
        title={[
          <Fragment key="line-1">Products, platforms</Fragment>,
          <Fragment key="line-2">
            &amp; <span className="serif-accent">systems.</span>
          </Fragment>,
        ]}
        intro="A selection of things I've designed and built: AI tooling, finance automation, SaaS products, and the backend systems behind banks and businesses."
      />
      <WorkList />
    </section>
  );
}
