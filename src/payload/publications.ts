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
    title:
      "Spatial Scene Graph Generation Using Supervised Fine-tuning of a Large Multimodal Model",
    authors: "Jieun Choi, Deokmin Hwang, Daehyung Park",
    venue: "IEEE RA-L (투고)",
    status: "Unpublished",
    role: "1st Author",
    description:
      "물리 엔진 기반 3D 렌더링으로 대규모 공간 관계 데이터셋 자동 생성, LoRA 기반 LMM Fine-tuning, Multi-Agent 기법을 통한 공간적 장면 그래프 생성",
    pdf: "/papers/spatial-scene-graph-sft-lmm-2025.pdf",
  },
  {
    title: "Spatial Scene Graph Generation Using Large Multimodal Models",
    authors: "Jieun Choi, Deokmin Hwang, Daehyung Park",
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
];
