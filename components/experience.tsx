import type { ExperienceEntry } from "@/content/types";

export function Experience({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="section-heading"><p className="section-index">03</p><h2 className="section-label" id="experience-title">Experience</h2></div>
      <div className="experience-list">{entries.map((entry) => (
        <article className="experience-entry" key={`${entry.company}-${entry.period}`}>
          <p className="experience-entry__period">{entry.period}</p>
          <div><h3>{entry.company}</h3><p className="experience-entry__role">{entry.role}</p><p className="experience-entry__description">{entry.description}</p></div>
        </article>
      ))}</div>
    </section>
  );
}
