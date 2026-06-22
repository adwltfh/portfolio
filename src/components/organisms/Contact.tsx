import type { Person } from "@/lib/types";
import { Reveal } from "../molecules/Reveal";
import { ContactField } from "../molecules/ContactField";
import { Button } from "../atoms/Button";

/** centered contact card: lead, 2×2 fields, LinkedIn + email CTAs, thanks footer */
export function Contact({ person }: { person: Person }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <span className="pill-top">· get in touch ·</span>
          <h2>
            let&apos;s build something <span className="pink">♥</span> together
          </h2>
          <p className="lead">
            open to frontend roles, freelance projects &amp; collaborations. i usually reply within a day.
          </p>
          <div className="contact-grid">
            <ContactField label="email" value={person.email} href={`mailto:${person.email}`} />
            <ContactField label="based in" value={person.location} />
            <ContactField label="github" value={`@${person.github}`} href={person.githubUrl} external />
            <ContactField label="portfolio" value="view my work ↑" href="#top" />
          </div>
          <div className="contact-actions">
            <Button variant="primary" href={person.linkedinUrl} target="_blank" rel="noopener">
              connect on linkedin →
            </Button>
            <Button href={`mailto:${person.email}`}>send a note</Button>
          </div>
          <div className="thanks">· thanks for stopping by ·</div>
        </Reveal>
      </div>
    </section>
  );
}
