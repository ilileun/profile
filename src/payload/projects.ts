export interface Project {
  title: string;
  period: string;
  org: string;
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Spatial Scene Graph Generation Using Large Multimodal Models",
    period: "2024 - 2025",
    org: "KAIST · 1st Author",
    problem:
      "GPT-4, LLaVA 등 기존 대형 멀티모달 모델이 좌우 구분, 객체 카운팅 등 기본적 공간 추론에 한계",
    approach:
      "Blender 기반 50K 공간 관계 데이터셋 자동 생성, LoRA 기반 Vicuna-13B Fine-tuning, Multi-Agent Pipeline(Node Generator → Edge Generator) 설계",
    result:
      "GPT-4o 대비 Accuracy +35%, Precision +7% 달성. 로봇 매니퓰레이션 태스크에 적용 검증",
    techStack: ["LoRA", "Vicuna-13B", "Blender", "CLIP", "Multi-Agent"],
  },
  {
    title: "비정형 다중 삽입구 자동 이/적재 (SEMES 기업과제)",
    period: "2023.05 - 2024.08",
    org: "KAIST",
    problem:
      "비정형 다중 삽입구에 대한 이적재 작업 자동화를 위한 비전 기반 6-DoF 포즈 인식 필요",
    approach:
      "다양한 템플릿 이미지 생성 모듈, 3D Point Cloud 기반 평면 감지, 특징점 우선 탐색 기반 템플릿 매칭 가속화",
    result:
      "시뮬레이션(Gazebo) 및 실세계 실험 성공률 100% 달성",
    techStack: ["ROS2", "Gazebo", "UR5e", "3D Point Cloud", "6-DoF Pose"],
  },
  {
    title: "정밀 3차원 컨셉그래프 생성 및 부엌 시뮬레이션 (과기부 국책과제)",
    period: "2024.04 - 2027.12",
    org: "KAIST",
    problem:
      "자율행동체의 복합작업 자율 수행을 위한 환경변화 인식 기술 필요",
    approach:
      "YOLO-World + SAM Instance Segmentation(5Hz), TSDF Voxel Map(2cm³, 30Hz), Open-vocab zero-shot 엣지 생성(LLM/LMM)",
    result:
      "RoboCasa 기반 주방 시뮬레이션 환경 제작 및 Stretch Robot 연동",
    techStack: ["YOLO-World", "SAM", "TSDF", "LLM", "RoboCasa"],
  },
  {
    title: "MGHanD: Multi-modal Guidance for Hand Diffusion",
    period: "2024 - 2025",
    org: "KAIST · Co-author",
    problem:
      "텍스트-이미지 디퓨전 모델에서 생성되는 손 이미지의 왜곡 문제",
    approach:
      "시각적/텍스트 기반 멀티모달 가이던스 + 누적 손 마스크로 디퓨전 과정 개선, 손 중심 캡션 데이터셋 구축",
    result:
      "기존 디퓨전 모델 대비 손 생성 품질 향상",
    techStack: ["Stable Diffusion", "LoRA", "ViT", "DDIM"],
  },
  {
    title: "AI 기반 불법의료기관 예측 모델 (건강보험공단 협업)",
    period: "2020.06 - 2021.01",
    org: "전남대학교 · BMIL",
    problem:
      "불법개설 병원 조기 적발을 위한 기존 통계적 접근방식의 한계",
    approach:
      "100만건+ 빅데이터 전처리 및 신경망 기반 감지시스템 개발",
    result:
      "기존 통계적 접근방식 대비 예측 정확도 향상, AI 모델 프로토타입 구축",
    techStack: ["Python", "Neural Networks", "SAS"],
  },
];
