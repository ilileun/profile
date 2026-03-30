export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    company: "KT · 기술혁신부문 GenAI기술팀",
    role: "선임 연구원 (Document/Media AI 개발)",
    period: "2025.03 - 현재",
    description: "Document AI 및 Media AI 모델 연구개발 · 서비스 내재화",
    highlights: [
      "[2년차 · Document AI] 문서 기하 왜곡 보정(Dewarping) — 7개 후보 모델 비교 평가, UVDoc/AADD Fine-tuning, DIR300 벤치마크 평가, Blender 합성 데이터셋 파이프라인 설계 (목표 10K), Docker + FastAPI + MinIO 추론 API 개발",
      "[2년차 · Document AI] 문서 방향 인식(Orientation) — PP-LCNet 기반 94.03% → 99.59% 정확도 달성, 10만장+ 학습 데이터 구축, 추론 64ms/500MB 이하, FastAPI API 개발",
      "[1년차 · Media AI] Narrative Video 요약 모델 고도화 — AI-Hub 8.1만 + K-Drama 1.2만 개 데이터셋 구축 및 정제, InternVideo2.5 기반 4종 학습 아키텍처 설계, 8×A100 분산 학습, Baseline 대비 +10~20pt 성능 향상",
      "[1년차 · Media AI] 모델 서빙 및 운영 — Docker + 비동기 FastAPI 기반 API화, 배치 처리 및 인코더 최적화로 추론 속도 4× 개선, 안정성 테스트 1,000개 연속 처리 실패율 0%",
      "[1년차 · Media AI] vLLM + Gemma 기반 씬 타이틀 추천 시스템 (씬당 0.3초), 영→한 번역 실패율 5% → 0%",
      "특허 출원 문서 작성 (Narrative Video 학습/평가 데이터 활용방안)",
    ],
    techStack: [
      "InternVideo2.5", "LoRA", "vLLM", "Gemma", "Slurm", "8×A100",
      "UVDoc", "PP-LCNet", "PaddlePaddle", "Blender",
      "Docker", "FastAPI", "MinIO", "PyTorch",
    ],
  },
  {
    company: "KT · Vision AI연구담당 미디어AI개발 Project",
    role: "Research Intern",
    period: "2024.07 - 2024.08",
    description: "대사 기반 하이라이트 탐지 및 숏폼(Short-Form) 자동 생성",
    highlights: [
      "Whisper-Large STT → Ko-LLM Two-Stage 요약 → UniVTG 하이라이트 탐지 파이프라인 설계",
      "Two-Stage Highlight Query Generation 방식 제안 — 대사별 중요도 스코어링 + 클러스터링 기반 질의문 자동 생성",
      "대본 대비 STT 유사도 0.89, 하이라이트 탐지 IoU 0.52~0.75 달성",
    ],
    techStack: ["Whisper", "Ko-LLM", "UniVTG", "CLIP", "Python"],
  },
  {
    company: "KAIST 전산학부",
    role: "석사 과정 (Robust Intelligence and Robotics Lab)",
    period: "2023.02 - 2025.02",
    description:
      "지도교수: 박대형 | 대형 멀티모달 모델 기반 공간 추론 및 장면 그래프 생성 연구",
    highlights: [
      "Spatial Scene Graph Generation — Blender 기반 50K 데이터셋 구축, LoRA 기반 Vicuna-13B 공간 추론 강화, GPT-4o 대비 Accuracy +35%",
      "비정형 다중 삽입구 자동 이/적재 (SEMES 기업과제) — 3D Point Cloud 기반 6-DoF 포즈 추정, Gazebo + 실세계 실험 성공률 100%",
      "정밀 3차원 컨셉그래프 생성 (과기부 국책과제) — YOLO-World + SAM, TSDF Voxel Map, Open-vocab 엣지 생성",
    ],
    techStack: [
      "LoRA", "Vicuna-13B", "LLaVA", "CLIP", "Blender",
      "ROS2", "Gazebo", "YOLO-World", "SAM", "MuJoCo",
    ],
  },
  {
    company: "POSCO · 생산기술전략실 Smart Factory 기획그룹",
    role: "사원 (포항 본사)",
    period: "2021.06 - 2023.01",
    description: "전사 Smart Factory 전략 수립 및 기획",
    highlights: [
      "MLOps 솔루션 도입 검토 및 과제 관리시스템 연계",
      "AI 전문인력 On/Off-Line 커뮤니티 운영",
      "ProModel 기반 생산/물류 Simulation 투자 타당성 검증",
      "해외 철강사 Smart 기술교류회 주관 및 벤치마킹 대응",
    ],
    techStack: ["SAS", "ProModel", "Python", "SQL"],
  },
  {
    company: "POSCO · 스틸브릿지",
    role: "인턴",
    period: "2021.01 - 2021.06",
    description: "Smart Factory 관련 인턴십",
    highlights: [
      "Smart Factory 전략 수립 및 기획 업무 지원",
    ],
    techStack: ["Python", "SQL"],
  },
  {
    company: "전남대학교 · BMIL (유선용 교수님 연구실)",
    role: "학부 연구생",
    period: "2020.03 - 2021.02",
    description: "바이오메디컬 지능연구실 학부 연구생",
    highlights: [
      "학부 졸업 연구 수행",
    ],
    techStack: ["Python", "PyTorch"],
  },
];
