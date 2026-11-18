import type { SiteProfile } from "./types";

export const publicAssetPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/foglio" : ""}${path}`;

export const siteProfile: SiteProfile = {
  name: "영재",
  positioning: "Software Engineer",
  description: "대용량 데이터 처리와 분석 워크플로 자동화부터 머신러닝, AI 기반 서비스 개발 및 운영까지 다양한 소프트웨어 엔지니어링 업무를 수행해 왔습니다. 주로 바이오인포매틱스 도메인에서 일하며 데이터 처리 성능을 개선하고, 복잡한 분석 요구사항을 실제 운영 가능한 소프트웨어 시스템으로 구현해 왔습니다.",
  coreAreas: ["Backend & Software Engineering", "Data Processing & Workflow Automation", "Machine Learning & AI Applications", "Infrastructure & Operations"],
  // Replace these null values with real URLs when the contact details are ready.
  // For a real PDF, use publicAssetPath("/resume.pdf") after adding it to public/.
  emailUrl: null,
  githubUrl: null,
  linkedinUrl: null,
  resumeUrl: null,
};
