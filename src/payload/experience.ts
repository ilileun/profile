export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "KT · GenAI기술팀",
    role: "선임 연구원",
    period: "2025.03 - 현재",
    description: "Document AI / Media AI 모델 연구개발 및 서비스 내재화",
    highlights: [
      "문서 왜곡 보정 모델 — 7개 후보 비교 → Fine-tuning → API 개발까지 End-to-End 파이프라인 구축",
      "문서 방향 인식 — 94% → 99.6% 정확도 달성, 10만장 데이터셋 구축, 추론 64ms",
      "비디오 메타데이터 추출 모델 — 4종 학습 아키텍처 설계, Baseline 대비 +10~20pt 성능 향상, 서빙 속도 4× 개선",
    ],
  },
  {
    company: "KT · Vision AI연구담당",
    role: "Research Intern",
    period: "2024.07 - 2024.08",
    description: "대사 기반 하이라이트 탐지 및 숏폼 자동 생성",
    highlights: [
      "STT → LLM 요약 → 하이라이트 탐지 파이프라인 설계, IoU 0.52~0.75 달성",
    ],
  },
  {
    company: "KAIST 전산학부",
    role: "석사 (지도교수: 박대형)",
    period: "2023.02 - 2025.02",
    description: "멀티모달 모델 기반 공간 추론 및 장면 그래프 생성 연구",
    highlights: [
      "50K 합성 데이터셋 자동 생성 → LMM Fine-tuning → GPT-4o 대비 Accuracy +35%",
      "6-DoF 포즈 추정 (SEMES 기업과제) — 시뮬레이션 + 실세계 실험 성공률 100%",
    ],
  },
  {
    company: "POSCO · 생산기술전략실",
    role: "사원",
    period: "2021.01 - 2023.01",
    description: "Smart Factory 전략 수립 및 MLOps 솔루션 도입 검토",
    highlights: [
      "MLOps 도입 검토, 생산/물류 시뮬레이션 투자 타당성 검증, 해외 기술교류회 주관",
    ],
  },
  {
    company: "전남대학교 · BMIL",
    role: "학부 연구생 (유선용 교수님)",
    period: "2020.03 - 2021.02",
    description: "",
    highlights: [],
  },
];
