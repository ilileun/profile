export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "KT · GenAI기술팀",
    role: "선임 연구원 (경력 1년 인정)",
    period: "2025.03 - 현재",
    duration: "1년+",
    location: "서울",
    description: "Document AI · Media AI 모델 연구개발 및 서비스 내재화",
  },
  {
    company: "KT · Vision AI연구담당",
    role: "Research Intern",
    period: "2024.07 - 2024.08",
    duration: "6주",
    location: "서울",
    description: "Video AI 기반 하이라이트 탐지 및 숏폼 자동 생성 연구",
  },
  {
    company: "POSCO · 생산기술전략실 Smart Factory 기획그룹",
    role: "사원",
    period: "2021.06 - 2023.01",
    duration: "1년 7개월",
    location: "포항",
    description: "Smart Factory 전략 수립, 생산/물류 Simulation 투자 검증, AI 인재 커뮤니티 운영",
  },
];
