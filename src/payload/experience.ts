export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "KT · GenAI기술팀",
    role: "선임 연구원 (경력 1년 인정)",
    period: "2025.03 - 현재",
    duration: "1년+",
    description: "메리츠화재 공동연구, KT 미디어본부 기술지원 프로젝트 수행",
  },
  {
    company: "KT · Vision AI연구담당",
    role: "Research Intern",
    period: "2024.07 - 2024.08",
    duration: "6주",
    description: "대사 기반 하이라이트 탐지 및 숏폼 자동 생성",
  },
  {
    company: "POSCO · 생산기술전략실 Smart Factory 기획그룹",
    role: "사원",
    period: "2021.06 - 2023.01",
    duration: "1년 7개월",
    description: "Smart Factory 전략 수립, 생산/물류 Simulation 투자 검증, AI 인재 커뮤니티 운영",
  },
];
