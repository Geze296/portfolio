import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Facts } from "@/components/sections/facts";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience-section";
import { Work } from "@/components/sections/work";
import { AiLab } from "@/components/sections/ai-lab";
import { Skills } from "@/components/sections/skills";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Facts />
        <About />
        <Experience />
        <Work />
        <AiLab />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
