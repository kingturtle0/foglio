import Link from "next/link";
import type { Project } from "@/content/types";
import { CodeBlock } from "./code-block";
import { Diagram } from "./diagram";

export function ProjectArticle({ project, nextProject }: { project: Project; nextProject: Project }) {
  return (
    <article className="project-article">
      <Link className="back-link" href="/#work"><span aria-hidden="true">←</span> Selected Work</Link>
      <header className="article-header">
        <p className="article-header__year">{project.year}</p>
        <h1>{project.title}</h1>
        <p className="article-header__summary">{project.summary}</p>
      </header>
      <dl className="project-meta">
        {project.period ? <div><dt>Period</dt><dd>{project.period}</dd></div> : null}
        {project.role ? <div><dt>Role</dt><dd>{project.role}</dd></div> : null}
        {project.scope ? <div><dt>Scope</dt><dd>{project.scope}</dd></div> : null}
        <div><dt>Tech</dt><dd>{project.technologies.join(", ")}</dd></div>
      </dl>
      <div className="article-sections">
        {project.sections.map((section, index) => (
          <section key={section.id} aria-labelledby={`section-${section.id}`}>
            <div className="article-section__heading"><span>{String(index + 1).padStart(2, "0")}</span><h2 id={`section-${section.id}`}>{section.title}</h2></div>
            <div className="article-body">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              {section.diagram ? <Diagram data={section.diagram} /> : null}
              {section.code ? <CodeBlock data={section.code} /> : null}
            </div>
          </section>
        ))}
      </div>
      <nav className="next-project" aria-label="다음 프로젝트"><span>Next Project</span><Link href={`/work/${nextProject.slug}`}>{nextProject.title} <span aria-hidden="true">→</span></Link></nav>
    </article>
  );
}
