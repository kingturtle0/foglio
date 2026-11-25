import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "large-scale-sequence-analysis", title: "대규모 염기서열 데이터 처리 최적화",
    summary: "고메모리 컴퓨팅 환경에서도 발생하던 대규모 분석의 메모리 부족 문제를 해결했습니다. 데이터 표현 방식과 실행 환경을 분석하고, 4bit encoding과 mmap 기반 접근 방식을 비교 검증하여 적용했습니다.",
    technologies: ["Go", "4bit Encoding", "mmap", "Memory Profiling", "Linux", "Kubernetes"], role: "데이터 처리 및 메모리 최적화 방안 분석, 구현, 검증", scope: "데이터 표현, 메모리 접근, 실행 환경", featured: true, featuredOrder: 1,
    sections: [
      { id: "problem", title: "문제", paragraphs: ["온프레미스 환경에서 대규모 nucleotide sequence를 처리하는 분석 시스템을 운영하고 있었습니다.", "기존 구현은 염기서열 데이터를 문자열 중심으로 처리했으며, 분석 규모가 커질수록 메모리 사용량이 크게 증가했습니다. 고메모리 컴퓨팅 환경에서도 OOM이 발생하거나 분석 실행에 한계가 생기는 상황이었습니다.", "단순히 서버 메모리를 늘리는 방식보다는 데이터가 메모리에 표현되고 접근되는 구조 자체를 검토할 필요가 있었습니다."] },
      { id: "investigation", title: "원인 분석 — 데이터와 실행 환경", paragraphs: ["메모리 부족 문제를 데이터 표현, 애플리케이션 실행, 외부 프로세스의 여러 계층으로 나누어 조사했습니다.", "먼저 염기서열을 문자열로 표현하는 방식의 메모리 비용을 검토하고, 2bit 및 4bit encoding과 압축 방식을 비교했습니다. 데이터를 한 번에 처리하는 방식과 chunk 또는 streaming 기반 처리 방식도 함께 검토했습니다.", "실행 환경에서는 worker 수에 따른 자원 사용, Go의 GC 동작, 애플리케이션 프로세스의 메모리 사용량을 조사했습니다. 외부 분석 명령인 blastdbcmd가 메모리 사용에 미치는 영향도 별도로 테스트했습니다.", "이 과정을 통해 데이터 표현과 접근 방식, Go 런타임, worker 구성, 외부 프로세스에서 발생할 수 있는 메모리 사용 요인을 구분해 검토했습니다."] },
      { id: "alternatives", title: "대안 비교와 개선 — 4bit Encoding과 mmap", paragraphs: ["검토한 대안을 실제 데이터로 비교한 뒤, 염기서열 데이터의 표현 방식과 접근 구조를 변경하는 개선안을 구체화했습니다.", "4bit Encoding: 기존 문자열 기반 염기서열 표현을 보다 압축된 형태로 변경하는 방식을 구현했습니다. 염기서열을 표현하는 데 필요한 데이터 크기를 줄여, 대량의 데이터를 처리할 때 발생하는 메모리 부담을 낮추는 것이 목적이었습니다.", "Memory-Mapped File: 압축된 데이터를 처리할 때 전체 데이터를 애플리케이션 메모리의 자료구조로 상주시켜야 하는 부담을 줄이기 위해 mmap 기반 접근 방식을 적용했습니다. 필요한 데이터 영역에 접근하는 구조로 변경하여 기존 메모리 사용 방식의 한계를 개선하고자 했습니다.", "비교 과정에서는 메모리 사용량뿐 아니라 데이터 크기와 처리 시간도 함께 확인했습니다."] },
      { id: "outcome", title: "검증 및 결과", paragraphs: ["개선안을 제안하기 전에 실제 데이터를 이용해 기존 방식과 변경 방식을 비교했습니다.", "전체 대규모 분석을 반복 실행하기보다는 비교가 가능한 중간 규모의 실제 데이터를 사용하여 메모리 사용과 처리 특성을 확인했습니다.", "이러한 비교 결과를 근거로 개선안을 제안했고, 팀 내 검토를 거쳐 적용했습니다.", "결과적으로 4bit encoding과 mmap을 활용한 개선안이 적용되었으며, 기존 대규모 분석에서 발생하던 메모리 부족 문제를 해결했습니다.", "이 프로젝트에서는 데이터 표현 방식과 메모리 접근 구조가 대규모 데이터 처리의 실행 가능성에 직접적인 영향을 미친다는 점을 확인했습니다."] },
    ],
  },
  {
    slug: "bioinformatics-workflow-automation", title: "바이오인포매틱스 분석 워크플로 자동화", year: "2026",
    summary: "담당자가 반복적으로 수행하던 정기 분석 업무를 자동화된 워크플로로 전환했습니다. 데이터 수집부터 Kubernetes 기반 분석 실행, 결과 저장, 보고서 생성 및 알림까지 연결했습니다.",
    technologies: ["Linux", "Kubernetes CronJob", "SSH/SCP", "Database", "Excel Reporting"], role: "분석 워크플로 자동화 개발 및 Kubernetes 기반 분석 운영", scope: "수집, 분석 실행, 결과 전달", featured: true, featuredOrder: 2,
    sections: [
      { id: "context", title: "문제 — 반복되는 정기 분석 업무", paragraphs: ["바이오인포매틱스 분석 환경에서는 여러 종류의 변이 모니터링 작업을 정기적으로 수행해야 했습니다.", "2024~2025년에는 이러한 분석이 담당자가 반복적으로 수행하는 연구지원 업무였습니다. 분석을 실행하는 것뿐 아니라 데이터를 확보하고, 결과를 정리해 후속 업무에 전달하는 과정도 필요했습니다.", "따라서 이 프로젝트에서는 새로운 분석 알고리즘을 개발하는 것보다 담당자가 나누어 수행하던 분석과 결과 처리 과정을 하나의 자동화 워크플로로 연결하는 데 집중했습니다."] },
      { id: "workflow", title: "자동화 — 분석부터 결과 전달까지", paragraphs: ["2026년에는 정기 분석 업무를 데이터 수집부터 결과 전달까지 이어지는 자동화 워크플로로 전환했습니다."], bullets: ["데이터 수집 및 전달: 외부 데이터를 다운로드하고, 스케줄링 및 SSH/SCP 기반 전송을 통해 분석 환경으로 전달합니다.", "분석 실행: Kubernetes CronJob을 활용하여 여러 바이오인포매틱스 분석 워크플로를 실행합니다.", "결과 저장: 분석 결과를 데이터베이스에 저장합니다.", "보고서 생성: 분석 결과를 Excel 형식의 보고서로 생성합니다.", "후속 처리: 실험적 검증에 필요한 대상 데이터를 처리합니다.", "결과 알림: 사용자와 관리자에게 이메일 알림을 전달합니다."], diagram: { id: "workflow-automation-flow", caption: "자동화 워크플로 흐름", nodes: [{ label: "외부 데이터 수집", description: "데이터 확보" }, { label: "스케줄링 및 SSH/SCP 전송", description: "분석 환경 전달" }, { label: "Kubernetes CronJob", description: "자동 분석 실행" }, { label: "바이오인포매틱스 분석", description: "워크플로 실행", key: true }, { label: "DB 저장 및 Excel 보고서", description: "결과 정리" }, { label: "후속 데이터 처리 및 이메일 알림", description: "결과 전달" }] } },
      { id: "validation", title: "안정성 — 입력 데이터 검증", paragraphs: ["정기적으로 외부 데이터를 수집하는 워크플로에서는 입력 데이터가 예상과 다른 상태로 들어올 가능성도 고려해야 했습니다.", "이를 위해 다운로드한 데이터의 크기가 평소와 크게 달라지는 경우 이상 가능성을 확인하는 검증 로직을 포함했습니다.", "이 검증은 자동화된 분석이 입력 데이터의 상태를 확인할 수 있도록 하는 방어 장치입니다."] },
      { id: "outcome", title: "결과 — 반복 업무의 워크플로 전환", paragraphs: ["담당자가 반복 수행하던 정기 모니터링 업무를 2026년에 자동화된 워크플로로 전환했습니다.", "분석 대상 데이터의 수집, Kubernetes 기반 분석 실행, 결과 저장, Excel 보고서 생성, 후속 데이터 처리 및 사용자 알림이 연결된 형태로 구성됐습니다.", "기존에 분리되어 있던 분석과 결과 처리 단계를 연결해 반복 업무가 정해진 흐름으로 이어지도록 전환했습니다."] },
    ],
  },
  {
    slug: "document-retrieval-system", title: "사내 문서 검색 시스템 개발", year: "2026",
    summary: "다양한 형식의 사내 문서를 검색하고 AI 질의에 활용할 수 있는 검색 기반을 개발했습니다. 벡터 검색과 키워드 검색을 활용하고, 문서 변경에 대응하는 인덱싱 구조를 개선하는 작업을 진행했습니다.",
    technologies: ["OpenAI API", "Qdrant", "BM25", "Document Parsing", "Embedding", "Docker"], role: "문서 검색 시스템 개발 및 인덱싱 구조 개선 참여", scope: "문서 파싱, 인덱싱, 검색", featured: true, featuredOrder: 3,
    sections: [
      { id: "context", title: "배경 — 다양한 문서를 검색 가능한 데이터로", paragraphs: ["사내에서 사용하는 여러 형식의 문서를 검색하고, 문서 내용을 AI 질의에 활용할 수 있는 시스템을 개발했습니다.", "검색 대상에는 PDF뿐 아니라 Excel, PowerPoint, Word 계열 문서가 포함됐습니다.", "서로 다른 문서 형식을 검색에 활용하기 위해 문서 내용을 처리하고, 검색 인덱스를 구성하는 작업이 필요했습니다."] },
      { id: "implementation", title: "구현 — 문서 처리와 검색", paragraphs: ["문서 처리 과정에서는 PDF, XLSX, XLSM, PPTX, DOCX, DOCM 형식을 대상으로 파싱과 청크 단위 인덱싱을 다뤘습니다.", "검색에는 임베딩과 Qdrant를 활용한 벡터 검색, BM25 기반 키워드 검색을 사용했습니다.", "벡터 검색과 키워드 검색 구성 요소를 함께 활용하는 문서 검색 구조를 개발했으며, OpenAI API를 활용하는 AI 질의 시스템 개발에도 참여했습니다."], diagram: { id: "document-retrieval-concept", caption: "문서 검색 구성 개념", nodes: [{ label: "PDF / Office Documents" }, { label: "Parsing / Chunking / Indexing" }, { label: "Qdrant Vector Search + BM25 Lexical Search", key: true }] } },
      { id: "reindexing", title: "개선 — 선택적 재인덱싱", paragraphs: ["기존 문서 인덱싱에는 주기적으로 변경 여부를 확인하는 polling 방식이 사용되고 있었습니다.", "이를 파일 업로드 이벤트를 기준으로 변경된 문서만 다시 인덱싱하는 구조로 개선하는 작업을 진행했습니다.", "2026년 8월 기준으로 선택적 재인덱싱 구조의 개선이 진행 중이었으며, 기존 사내 콘텐츠 관리 시스템의 업로드 이벤트와 인덱싱 API를 최종 연결하는 작업은 남아 있었습니다."] },
      { id: "outcome", title: "결과 — 검색 기반 구성과 시스템 연동", paragraphs: ["다양한 문서 형식을 대상으로 문서 파싱과 인덱싱을 다루고, Qdrant 벡터 검색과 BM25 키워드 검색을 활용하는 검색 구조를 개발했습니다.", "이와 함께 polling 기반 문서 변경 확인을 이벤트 기반 선택적 재인덱싱 구조로 전환하는 개선 작업을 진행했습니다.", "이 프로젝트에서는 문서를 검색 가능한 데이터로 처리하는 과정뿐 아니라 문서 변경과 검색 인덱스 갱신을 연결하는 문제도 다뤘습니다."] },
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((project) => project.featured).sort((a, b) => (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity));
export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const getNextProject = (slug: string) => projects[(projects.findIndex((project) => project.slug === slug) + 1) % projects.length];
