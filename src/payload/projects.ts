export interface Project {
  title: string;
  period: string;
  org: string;
  description: string;
  highlights: string[];
  techStack: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "문서 기하 왜곡 보정 (Document Dewarping)",
    period: "2026.01 - 현재",
    org: "KT GenAI LAB",
    description:
      "카메라 촬영 문서의 기하학적 왜곡을 보정하여 OCR 정확도를 높이기 위한 기술 개발",
    highlights: [
      "7개 모델 비교 실험 후 최종 3개 선정 (UVDoc, PaperEdge, Document-Dewarping-with-Control-Points)",
      "UVDoc, AADD Fine-tuning 및 DIR300 벤치마크 평가 (AADD: MS-SSIM 0.5211, PSNR 15.92)",
      "Blender 기반 합성 데이터셋 파이프라인 설계 (목표 10K)",
      "Docker + FastAPI + MinIO 기반 추론 API 개발",
    ],
    techStack: ["UVDoc", "AADD", "Blender", "Docker", "FastAPI", "MinIO", "PyTorch"],
  },
  {
    title: "문서 방향 인식 (Document Orientation)",
    period: "2026.01 - 현재",
    org: "KT GenAI LAB",
    description: "문서 이미지의 방향(0°/90°/180°/270°)을 자동 판별",
    highlights: [
      "PP-LCNet vs EfficientNetV2 비교 → PP-LCNet 선정",
      "102,456장 학습 / 1,724장 평가 데이터셋 구축",
      "v3 Fine-tuning + 후처리: 99.59% 정확도 (conf>0.9 구간 100%)",
      "추론 속도 평균 64ms, 메모리 500MB 이하",
    ],
    techStack: ["PP-LCNet", "PaddlePaddle", "FastAPI", "Docker", "Python"],
  },
  {
    title: "Narrative Video 요약 모델 고도화",
    period: "2025.03 - 2026.02",
    org: "KT GenAI LAB",
    description:
      "K-Drama 등 비디오 콘텐츠의 씬 메타데이터 자동 추출 모델 고도화 및 서비스 내재화",
    highlights: [
      "AI-Hub 8.1만 + K-Drama 1.2만 개 데이터셋 구축",
      "InternVideo2.5 기반 4종 아키텍처 설계, 8×A100 분산 학습",
      "Baseline 대비 +10~20pt, TwelveLabs 대비 +2~8pt 성능 향상",
      "Docker + FastAPI 서빙, 추론 속도 4× 개선, 안정성 실패율 0%",
      "특허 출원 문서 작성 완료",
    ],
    techStack: [
      "InternVideo2.5", "LoRA", "Slurm", "8×A100", "vLLM", "Gemma", "Docker", "FastAPI",
    ],
  },
  {
    title: "대사 기반 하이라이트 탐지 및 숏폼 자동 생성",
    period: "2024.07 - 2024.08",
    org: "KT 인턴",
    description:
      "드라마 영상에서 대사 기반으로 하이라이트 자동 탐지 및 숏폼 비디오 생성",
    highlights: [
      "Whisper STT → Ko-LLM Two-Stage 요약 → UniVTG 파이프라인",
      "STT 유사도 0.89, 하이라이트 IoU 0.52~0.75",
      "Two-Stage Summarization으로 텍스트 정보 손실 최소화",
    ],
    techStack: ["Whisper", "Ko-LLM", "UniVTG", "CLIP", "Python"],
  },
  {
    title: "Spatial Scene Graph Generation Using Large Multimodal Models",
    period: "2024 - 2025",
    org: "KAIST (1st Author, IROS 2025 Submitted)",
    description:
      "대형 멀티모달 모델의 공간적 추론 능력 향상을 위한 데이터셋 및 검증 방법론 제안",
    highlights: [
      "Blender 기반 50K 장면 그래프 데이터셋 (1,032 객체, 395 가구, 8종 공간 관계)",
      "LoRA 기반 Vicuna-13B 공간 추론 능력 강화",
      "Multi-Agent Pipeline: Node Generator → Edge Generator",
      "GPT-4o 대비 Accuracy +35%, Precision +7% 달성",
    ],
    techStack: [
      "LoRA", "Vicuna-13B", "Blender", "CLIP ViT-L", "Multi-Agent", "Scene Graph",
    ],
  },
  {
    title: "비정형 다중 삽입구 자동 이/적재",
    period: "2023.05 - 2024.08",
    org: "KAIST · SEMES 기업과제",
    description: "비전 기반 6-DoF 포즈 추정 기술 개발",
    highlights: [
      "3D Point Cloud 기반 평면 감지, 템플릿 매칭 가속화",
      "시뮬레이션(Gazebo) + 실세계 실험 성공률 100%",
    ],
    techStack: [
      "ROS2", "Gazebo", "UR5e", "3D Point Cloud", "Template Matching", "6-DoF Pose Estimation",
    ],
  },
  {
    title: "정밀 3차원 컨셉그래프 생성 및 부엌 시뮬레이션",
    period: "2024.04 - 2027.12",
    org: "KAIST · 과기부 국책과제",
    description:
      "자율행동체의 복합작업 자율 수행을 위한 환경변화 인식 기술 개발",
    highlights: [
      "YOLO-World + SAM Instance Segmentation (5Hz)",
      "TSDF Voxel Map (2cm³, 30Hz)",
      "Open-vocab zero-shot 엣지 생성 (LLM/LMM, 3~4Hz)",
      "RoboCasa 기반 주방 시뮬레이션 환경 제작",
    ],
    techStack: [
      "YOLO-World", "SAM", "TSDF", "LLM", "LMM", "RoboCasa", "Stretch Robot",
    ],
  },
];
