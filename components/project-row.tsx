import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-row">
      <Link className="project-row__link" href={`/work/${project.slug}`}>
        <div className="project-row__rail" aria-hidden="true"><span>{String(index).padStart(2, "0")}</span><span>{project.year}</span></div>
        <div className="project-row__content">
          <div className="project-row__title-line"><h3>{project.title}</h3><span className="project-row__arrow" aria-hidden="true">↗</span></div>
          <p className="project-row__summary">{project.summary}</p>
          <p className="project-row__tech">{project.technologies.join(" · ")}</p>
        </div>
      </Link>
    </article>
  );
}
