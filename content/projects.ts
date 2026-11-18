import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "large-scale-sequence-analysis", title: "대규모 염기서열 데이터 처리 최적화",
    summary: "대규모 염기서열 분석에서 발생한 메모리 부족 문제를 해결하기 위해 데이터 표현 방식과 메모리 접근 구조를 개선한 프로젝트입니다.",
    technologies: ["Go", "4bit Encoding", "mmap", "Memory Profiling", "Linux", "Kubernetes"], role: "데이터 처리 및 메모리 최적화 방안 분석, 구현, 검증", scope: "데이터 표현, 메모리 접근, 실행 환경", featured: true, featuredOrder: 1,
    sections: [
      { id: "problem", title: "문제", paragraphs: ["온프레미스 환경에서 대규모 nucleotide sequence를 처리하는 분석 시스템을 운영하고 있었습니다.", "기존 구현은 염기서열 데이터를 문자열 중심으로 처리했으며, 분석 규모가 커질수록 메모리 사용량이 크게 증가했습니다. 고메모리 컴퓨팅 환경에서도 OOM이 발생하거나 분석 실행에 한계가 생기는 상황이었습니다.", "단순히 서버 메모리를 늘리는 방식보다는 데이터가 메모리에 표현되고 접근되는 구조 자체를 검토할 필요가 있었습니다."] },
      { id: "investigation", title: "원인 분석", paragraphs: ["메모리 사용량을 줄이기 위해 문제를 여러 계층으로 나누어 조사했습니다.", "먼저 염기서열을 문자열로 표현하는 방식의 메모리 비용을 검토하고, 2bit 및 4bit encoding과 압축 방식을 비교했습니다. 데이터를 한 번에 처리하는 방식과 chunk 또는 streaming 기반 처리 방식도 검토했습니다.", "이와 함께 worker 수에 따른 자원 사용, Go의 GC 동작, 애플리케이션 프로세스의 메모리 사용량을 조사했습니다. 외부 분석 명령인 blastdbcmd가 메모리 사용에 미치는 영향도 별도로 테스트했습니다.", "이를 통해 데이터 표현과 접근 방식뿐 아니라 실행 과정에서 발생할 수 있는 메모리 사용 요인을 구분해 검토했습니다."] },
      { id: "alternatives", title: "개선 — 4bit Encoding과 mmap", paragraphs: ["검토한 대안 중 염기서열 데이터의 표현 방식과 접근 구조를 변경하는 방향으로 개선안을 구체화했습니다.", "4bit Encoding: 기존 문자열 기반 염기서열 표현을 보다 압축된 형태로 변경하는 방식을 구현했습니다. 염기서열을 표현하는 데 필요한 데이터 크기를 줄여, 대량의 데이터를 처리할 때 발생하는 메모리 부담을 낮추는 것이 목적이었습니다.", "Memory-Mapped File: 압축된 데이터를 처리할 때 전체 데이터를 애플리케이션 메모리의 자료구조로 상주시켜야 하는 부담을 줄이기 위해 mmap 기반 접근 방식을 적용했습니다. 필요한 데이터 영역에 접근하는 구조로 변경하여 기존 메모리 사용 방식의 한계를 개선하고자 했습니다.", "이 과정에서는 메모리 사용량뿐 아니라 데이터 크기와 처리 시간도 함께 고려했습니다."] },
      { id: "outcome", title: "검증 및 결과", paragraphs: ["개선안을 제안하기 전에 실제 데이터를 이용해 기존 방식과 변경 방식을 비교했습니다.", "전체 대규모 분석을 반복 실행하기보다는 비교가 가능한 중간 규모의 실제 데이터를 사용하여 메모리 사용과 처리 특성을 확인했습니다.", "이러한 비교 결과를 근거로 개선안을 제안했고, 팀 내 검토를 거쳐 적용했습니다.", "결과적으로 4bit encoding과 mmap을 활용한 개선안이 적용되었으며, 기존 대규모 분석에서 발생하던 메모리 부족 문제를 해결했습니다.", "이 프로젝트에서는 데이터 표현 방식과 메모리 접근 구조가 대규모 데이터 처리의 실행 가능성에 직접적인 영향을 미친다는 점을 확인했습니다."] },
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
