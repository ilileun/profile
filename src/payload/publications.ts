export interface Publication {
  title: string;
  venue: string;
  status: string;
  role: string;
  description: string;
  citations?: number;
}

export const publications: Publication[] = [
  {
    title:
      "A Survey on Integration of Large Language Models with Intelligent Robots",
    venue: "Intelligent Service Robotics",
    status: "Published",
    role: "Co-author",
    description:
      "LLM이 로봇 Reasoning, Planning, Perception, Control에 미치는 영향 체계적 분석",
    citations: 14,
  },
  {
    title: "Spatial Scene Graph Generation Using Large Multimodal Models",
    venue: "IROS 2025",
    status: "Submitted",
    role: "1st Author",
    description:
      "대형 멀티모달 모델을 활용한 공간적 장면 그래프 End-to-End 생성",
  },
  {
    title: "MGHanD: Multi-modal Guidance for Hand Diffusion",
    venue: "ICCV 2025",
    status: "Submitted",
    role: "Co-author",
    description:
      "Text/Image 가이던스 기반 디퓨전 과정 손 이미지 왜곡 개선",
  },
];
