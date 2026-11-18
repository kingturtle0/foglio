export type DiagramData = { id: string; caption: string; nodes: Array<{ label: string; description?: string; key?: boolean }> };
export type CodeData = { caption?: string; language: string; code: string };
export type ProjectSection = { id: string; title: string; paragraphs: string[]; bullets?: string[]; diagram?: DiagramData; code?: CodeData };
export type Project = { slug: string; title: string; year: string; summary: string; technologies: string[]; period?: string; role?: string; scope?: string; featured: boolean; featuredOrder?: number; sections: ProjectSection[] };
export type ExperienceEntry = { period: string; company: string; role: string; description: string };
export type SiteProfile = { name: string; positioning: string; description: string; coreAreas: string[]; emailUrl: string | null; githubUrl: string | null; linkedinUrl: string | null; resumeUrl: string | null };
