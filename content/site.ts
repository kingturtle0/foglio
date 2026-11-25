import type { SiteProfile } from "./types";

export const publicAssetPath = (path: string) => `${process.env.GITHUB_ACTIONS === "true" ? "/foglio" : ""}${path}`;

export const siteProfile: SiteProfile = {
  name: "영재",
  positioning: "Software Engineer",
  description: "업무에서 발생하는 문제를 분석하고, 적절한 기술을 선택해 실제로 활용할 수 있는 소프트웨어 시스템으로 해결합니다. 바이오인포매틱스 도메인에서 대용량 데이터 처리의 한계를 개선하고, 반복적인 분석 업무를 자동화해 왔습니다. 백엔드 개발부터 머신러닝, AI 서비스 및 Kubernetes 기반 운영까지 필요한 기술을 연결해 문제를 해결하는 데 집중합니다.",
  coreAreas: ["Backend", "Data Processing", "ML/AI", "Infrastructure"],
  emailUrl: "mailto:dhdnqkrtk22@naver.com",
  githubUrl: "https://github.com/kingturtle0",
  linkedinUrl: null,
  resumeUrl: publicAssetPath("/resume.pdf"),
};
