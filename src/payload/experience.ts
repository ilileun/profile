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
    company: "KT · 기술혁신부문 GenAI LAB",
    role: "AI Researcher",
    period: "2025.03 - 현재",
    description: "비디오 AI 및 문서 AI 기술 연구개발",
    highlights: [
      "[Document AI] 문서 기하 왜곡 보정(Dewarping) 모델 선정·학습·API 개발 — 7개 후보 모델 비교 평가, UVDoc/AADD Fine-tuning, Blender 합성 데이터셋 파이프라인 설계",
      "[Document AI] 문서 방향 인식 모델 개발 — PP-LCNet 기반 94.03% → 99.59% 정확도 달성, 10만장+ 학습 데이터 구축, 추론 64ms",
      "[Video AI] Narrative Video 요약 모델 고도화 — InternVideo2.5 기반 4종 아키텍처 설계, 8×A100 분산 학습, Baseline 대비 +10~20pt 성능 향상",
      "[Video AI] Docker + 비동기 FastAPI 서빙, 추론 속도 4× 개선, 안정성 실패율 0%",
      "[Video AI] vLLM + Gemma 기반 씬 타이틀 추천 (씬당 0.3초), 영→한 번역 실패율 5% → 0%",
      "Narrative Video 학습/평가 데이터 활용방안 관련 특허 출원 문서 작성",
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
      "한국어 기반 대형 음성/언어 모델 활용 실용성 입증",
    ],
    techStack: ["Whisper", "Ko-LLM", "UniVTG", "CLIP", "Python"],
  },
  {
    company: "POSCO · 생산기술전략실 Smart Factory 기획그룹",
    role: "사원",
    period: "2021.06 - 2023.01",
    description: "전사 Smart Factory 전략 수립 및 기획",
    highlights: [
      "Smart Factory 전략 수립 및 기획 업무 지원",
      "MLOps 솔루션 도입 검토 및 과제 관리시스템 연계",
      "AI 전문인력 On/Off-Line 커뮤니티 운영",
      "ProModel 기반 생산/물류 Simulation 투자 타당성 검증",
      "해외 철강사 Smart 기술교류회 주관 및 벤치마킹 대응",
    ],
    techStack: ["SAS", "ProModel", "Python", "SQL"],
  },
];
