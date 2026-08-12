import type { Project } from "@/content/types";
import { ProjectRow } from "./project-row";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section className="project-section" id="work" aria-labelledby="work-title">
      <div className="section-heading"><p className="section-index">02</p><h2 className="section-label" id="work-title">주요 프로젝트</h2></div>
      <div className="project-list">{projects.map((project, index) => <ProjectRow key={project.slug} project={project} index={index + 1} />)}</div>
    </section>
  );
}
