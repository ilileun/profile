export interface Publication {
  title: string;
  authors: string;
  venue: string;
  status: string;
  role: string;
  description: string;
  citations?: number;
  link?: string;
  pdf?: string;
}

export const publications: Publication[] = [
  {
    title:
      "A Survey on Integration of Large Language Models with Intelligent Robots",
    authors:
      "Yeseung Kim, Dohyun Kim, Jieun Choi, Jisang Park, Nayoung Oh, Daehyung Park",
    venue: "Intelligent Service Robotics, Vol. 17, Issue 5, 2024",
    status: "Published",
    role: "Co-author",
    description:
      "LLM이 로봇 Reasoning, Planning, Perception, Control에 미치는 영향 체계적 분석",
    citations: 154,
    link: "https://link.springer.com/article/10.1007/s11370-024-00550-5",
  },
  {
    title: "Spatial Scene Graph Generation Using Large Multimodal Models",
    authors: "Jieun Choi, ..., Daehyung Park",
    venue: "arXiv preprint, Mar. 2025",
    status: "Preprint",
    role: "1st Author",
    description:
      "대형 멀티모달 모델을 활용한 공간적 장면 그래프 End-to-End 생성",
    link: "https://arxiv.org/abs/2503.08133",
  },
  {
    title: "MGHanD: Multi-modal Guidance for authentic Hand Diffusion",
    authors: "Taehyeon Eum, Jieun Choi, Tae-Kyun Kim",
    venue: "arXiv preprint, Mar. 2025",
    status: "Preprint",
    role: "Co-author",
    description:
      "Text/Image 가이던스 기반 디퓨전 과정 손 이미지 왜곡 개선",
    link: "https://arxiv.org/abs/2503.08133",
  },
  {
    title: "RA-L 2025 (논문 제목 업데이트 예정)",
    authors: "Jieun Choi et al.",
    venue: "IEEE RA-L (투고)",
    status: "Unpublished",
    role: "Author",
    description: "석사 연구 기반 논문",
    pdf: "/papers/RA_L_2025__Jieun_.pdf",
  },
];
