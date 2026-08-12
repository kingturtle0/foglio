import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "document-retrieval-system", title: "Document Retrieval / RAG System", year: "2026",
    summary: "A retrieval system exploring how ingestion, indexing, and hybrid search can stay observable as a document collection changes.",
    technologies: ["Python", "RAG", "Qdrant", "BM25"], period: "Placeholder period", role: "Development and technical investigation", scope: "Ingestion, indexing, retrieval", featured: true, featuredOrder: 1,
    sections: [
      { id: "context", title: "Context & Problem", paragraphs: ["Document retrieval quality depends on more than an embedding model. The surrounding ingestion, chunking, metadata, and update path must remain understandable as source material changes.", "This placeholder case study focuses on the engineering questions involved in keeping those stages explicit. It does not claim production outcomes or measured improvements."] },
      { id: "retrieval-design", title: "Retrieval Design", paragraphs: ["The proposed flow keeps lexical and vector retrieval independently inspectable before combining their candidate sets. Each stage can be evaluated without hiding behavior behind a single score."], diagram: { id: "retrieval-flow", caption: "Placeholder retrieval flow", nodes: [{ label: "Documents", description: "ingest" }, { label: "Index", description: "chunk + metadata" }, { label: "Hybrid retrieval", description: "vector + BM25", key: true }, { label: "Ranked context", description: "inspect" }] } },
      { id: "implementation", title: "Implementation", paragraphs: ["Index updates are treated as explicit events rather than requiring a full rebuild for every change. The implementation boundary separates source parsing, chunk construction, storage, and retrieval orchestration."], bullets: ["Keep document identity and chunk provenance throughout the pipeline.", "Allow lexical and vector candidates to be inspected separately.", "Make incremental indexing behavior visible and replaceable."] },
      { id: "outcome", title: "Outcome", paragraphs: ["The current content is a structural placeholder. Verified evaluation criteria and project-specific outcomes will replace this section after the visual and narrative system is reviewed."] },
    ],
  },
  {
    slug: "large-scale-sequence-analysis", title: "Large-Scale Sequence Analysis", year: "2025",
    summary: "An investigation into memory pressure and representation choices when processing large nucleotide sequence collections.",
    technologies: ["Python", "Profiling", "Streaming", "Sequence Data"], period: "Placeholder period", role: "Performance investigation", scope: "Representation, profiling, processing strategy", featured: true, featuredOrder: 2,
    sections: [
      { id: "problem", title: "Problem", paragraphs: ["Large sequence workloads can fail well before an algorithm becomes computationally interesting. Representation overhead, temporary copies, and input strategy may dominate the usable working set."] },
      { id: "investigation", title: "Investigation", paragraphs: ["The investigation starts by separating input size from in-memory representation, then profiles allocation behavior around parsing and transformation boundaries."], bullets: ["Compare whole-file and streaming input paths.", "Identify copies introduced by intermediate representations.", "Keep benchmarks reproducible without inventing final performance claims."] },
      { id: "alternatives", title: "Representation Alternatives", paragraphs: ["Candidate approaches include compact encodings, chunked processing, and iterator-based transformations. The appropriate choice depends on access patterns and the operations that follow ingestion."] },
      { id: "next-steps", title: "Next Steps", paragraphs: ["Project-specific measurements, constraints, and selected trade-offs remain placeholders until source material can be reviewed and published safely."] },
    ],
  },
  {
    slug: "bioinformatics-workflow-automation", title: "Bioinformatics Workflow Automation", year: "2024",
    summary: "A repeatable workflow model connecting scheduled analysis, data movement, execution, persistence, and notification.",
    technologies: ["Kubernetes", "Python", "Workflow", "Data Pipeline"], period: "Placeholder period", role: "Workflow development", scope: "Scheduling, execution, persistence, reporting", featured: true, featuredOrder: 3,
    sections: [
      { id: "context", title: "Context", paragraphs: ["Recurring analysis involves more than scheduling a script. Inputs must arrive predictably, workloads must expose failure, and outputs need an explicit path to persistence and review."] },
      { id: "workflow", title: "Workflow Boundaries", paragraphs: ["The workflow is described as a small set of observable boundaries: transfer, execution, analysis, persistence, and notification. This keeps operational responsibilities visible without turning the portfolio article into infrastructure documentation."] },
      { id: "implementation", title: "Implementation Notes", paragraphs: ["Scheduled Kubernetes workloads provide an execution boundary while domain analysis remains independent from cluster-specific concerns. Status and output handling are modeled explicitly for later replacement with verified project details."] },
      { id: "outcome", title: "Outcome", paragraphs: ["This skeleton intentionally avoids operational metrics and ownership claims. The section demonstrates article rhythm and will be replaced with approved evidence-based content."] },
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((project) => project.featured).sort((a, b) => (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity));
export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const getNextProject = (slug: string) => projects[(projects.findIndex((project) => project.slug === slug) + 1) % projects.length];
