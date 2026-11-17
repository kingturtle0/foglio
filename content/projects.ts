import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "large-scale-sequence-analysis", title: "대규모 염기서열 데이터 처리 최적화", year: "2025",
    summary: "대규모 염기서열 데이터 분석에서 발생한 메모리 병목을 조사하고, 데이터 표현 방식과 처리 구조, 실행 환경에 따른 자원 사용을 비교하고 개선했습니다.",
    technologies: ["Go", "Sequence Processing", "Profiling", "Kubernetes"], period: "기간 자리표시자", role: "성능 검토", scope: "데이터 표현, 프로파일링, 처리 전략", featured: true, featuredOrder: 1,
    sections: [
      { id: "problem", title: "문제", paragraphs: ["대규모 염기서열 작업은 알고리즘의 계산 특성을 살펴보기 전에 실패할 수 있습니다. 데이터 표현의 부가 비용, 임시 복사본, 입력 방식이 실제 사용 가능한 메모리를 좌우할 수 있기 때문입니다."] },
      { id: "investigation", title: "검토 과정", paragraphs: ["입력 파일 크기와 메모리 안에서의 표현 크기를 분리해 살펴보고, 파싱과 변환 경계에서 발생하는 메모리 할당을 프로파일링하는 것으로 검토를 시작합니다."], bullets: ["전체 파일 입력과 스트리밍 입력 경로를 비교합니다.", "중간 표현에서 발생하는 데이터 복사를 찾습니다.", "확인되지 않은 성능 결론을 만들지 않고 재현 가능한 벤치마크를 유지합니다."] },
      { id: "alternatives", title: "데이터 표현 대안", paragraphs: ["압축된 인코딩, 청크 단위 처리, 이터레이터 기반 변환 등을 후보로 검토합니다. 적절한 선택은 데이터 접근 방식과 입력 이후 수행할 작업에 따라 달라집니다."] },
      { id: "next-steps", title: "다음 단계", paragraphs: ["프로젝트별 측정값, 제약 조건, 선택한 절충안은 원본 자료를 검토하고 안전하게 공개할 수 있을 때 확정된 내용으로 교체합니다."] },
    ],
  },
  {
    slug: "bioinformatics-workflow-automation", title: "바이오인포매틱스 분석 워크플로 자동화", year: "2024",
    summary: "반복적으로 수행하던 분석 업무를 데이터 수집부터 분석 실행, 결과 저장, 보고서 생성 및 알림까지 연결된 자동화 워크플로로 전환했습니다.",
    technologies: ["Python", "Kubernetes", "Data Pipeline", "Automation"], period: "기간 자리표시자", role: "워크플로 개발", scope: "예약, 실행, 저장, 보고", featured: true, featuredOrder: 2,
    sections: [
      { id: "context", title: "맥락", paragraphs: ["반복 분석에는 스크립트를 예약하는 일보다 많은 요소가 필요합니다. 입력 데이터가 예측 가능한 방식으로 도착하고, 작업 실패가 드러나며, 결과를 저장하고 검토하는 경로가 명확해야 합니다."] },
      { id: "workflow", title: "워크플로 경계", paragraphs: ["전송, 실행, 분석, 저장, 알림을 관찰 가능한 작은 경계로 나눠 워크플로를 설명합니다. 포트폴리오 본문을 인프라 문서로 만들지 않으면서 운영 책임을 분명하게 보여주기 위한 구조입니다."] },
      { id: "implementation", title: "구현 메모", paragraphs: ["예약된 Kubernetes 작업을 실행 경계로 사용하되 도메인 분석은 클러스터에 종속된 관심사와 분리합니다. 상태와 결과 처리 방식은 나중에 확인된 프로젝트 세부 내용으로 교체할 수 있도록 명시적으로 구성합니다."] },
      { id: "outcome", title: "결과", paragraphs: ["이 스켈레톤에는 확인되지 않은 운영 지표나 소유권 주장을 넣지 않았습니다. 현재 섹션은 본문의 흐름을 검증하기 위한 것으로, 추후 승인된 근거 기반 콘텐츠로 교체합니다."] },
    ],
  },
  {
    slug: "document-retrieval-system", title: "내부 문서 검색 및 RAG 시스템", year: "2026",
    summary: "다양한 내부 문서를 검색할 수 있도록 임베딩과 BM25를 결합한 검색 구조를 구현하고, 문서 변경에 대응하는 인덱싱 방식을 개선했습니다.",
    technologies: ["Python", "Qdrant", "BM25", "RAG"], period: "기간 자리표시자", role: "개발 및 기술 검토", scope: "문서 수집, 인덱싱, 검색", featured: true, featuredOrder: 3,
    sections: [
      { id: "context", title: "맥락과 문제", paragraphs: ["문서 검색 품질은 임베딩 모델 하나만으로 결정되지 않습니다. 원본 자료가 바뀌더라도 문서 수집, 청킹, 메타데이터, 업데이트 경로를 이해할 수 있어야 합니다.", "이 임시 사례 연구는 각 단계를 명확히 유지하기 위해 검토해야 할 엔지니어링 질문에 집중합니다. 실제 운영 성과나 측정된 개선 수치를 주장하지 않습니다."] },
      { id: "retrieval-design", title: "검색 설계", paragraphs: ["키워드 검색과 벡터 검색의 후보군을 각각 점검한 뒤 결합하는 흐름을 가정했습니다. 하나의 점수 뒤에 동작을 숨기지 않고 각 단계를 독립적으로 평가할 수 있도록 구성합니다."], diagram: { id: "retrieval-flow", caption: "검색 흐름 자리표시자", nodes: [{ label: "문서", description: "수집" }, { label: "인덱스", description: "청크·메타데이터" }, { label: "하이브리드 검색", description: "벡터·BM25", key: true }, { label: "정렬된 문맥", description: "검토" }] } },
      { id: "implementation", title: "구현", paragraphs: ["문서가 바뀔 때마다 전체를 다시 만드는 대신 인덱스 변경을 명시적인 이벤트로 다룹니다. 원본 파싱, 청크 생성, 저장, 검색 조율의 구현 경계를 분리합니다."], bullets: ["파이프라인 전체에서 문서 식별자와 청크 출처를 유지합니다.", "키워드 검색과 벡터 검색 후보를 별도로 점검할 수 있게 합니다.", "증분 인덱싱 동작을 관찰하고 교체할 수 있게 구성합니다."] },
      { id: "outcome", title: "결과", paragraphs: ["현재 내용은 구조 검증을 위한 자리표시자입니다. 화면과 서술 구조를 검토한 뒤, 확인된 평가 기준과 프로젝트별 결과로 교체할 예정입니다."] },
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((project) => project.featured).sort((a, b) => (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity));
export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const getNextProject = (slug: string) => projects[(projects.findIndex((project) => project.slug === slug) + 1) % projects.length];
