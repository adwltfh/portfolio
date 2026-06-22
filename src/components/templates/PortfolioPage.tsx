import { data } from "@/lib/data";
import { BackgroundField } from "../organisms/BackgroundField";
import { Nav } from "../organisms/Nav";
import { Hero } from "../organisms/Hero";
import { Marquee } from "../organisms/Marquee";
import { Featured } from "../organisms/Featured";
import { Projects } from "../organisms/Projects";
import { Skills } from "../organisms/Skills";
import { Experience } from "../organisms/Experience";
import { Contact } from "../organisms/Contact";
import { Footer } from "../organisms/Footer";

/** single-page composition of every section, in order. */
export function PortfolioPage() {
  return (
    <>
      <BackgroundField />
      <Nav />
      <main>
        <Hero />
        <Marquee items={data.marquee} />
        <Featured items={data.featured} />
        <Projects items={data.projects} />
        <Skills skills={data.skills} />
        <Experience items={data.experience} />
        <Contact person={data.person} />
      </main>
      <Footer name={data.person.name} />
    </>
  );
}
