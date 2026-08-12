import type { DiagramData } from "@/content/types";

export function Diagram({ data }: { data: DiagramData }) {
  return (
    <figure className="diagram" aria-labelledby={`diagram-${data.id}`}>
      <figcaption id={`diagram-${data.id}`}>{data.caption}</figcaption>
      <div className="diagram__flow">{data.nodes.map((node, index) => (
        <div className="diagram__step" key={node.label}>
          <div className={node.key ? "diagram__node diagram__node--key" : "diagram__node"}><span>{node.label}</span>{node.description ? <small>{node.description}</small> : null}</div>
          {index < data.nodes.length - 1 ? <span className="diagram__arrow" aria-hidden="true">→</span> : null}
        </div>
      ))}</div>
    </figure>
  );
}
