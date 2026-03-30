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
    title: "문서 기하 왜곡 보정 (Document Dewarping)",
    period: "2026.01 - 현재",
    org: "KT GenAI LAB",
    problem:
      "카메라로 촬영한 문서는 기하학적 왜곡이 발생해 OCR 정확도가 크게 저하됨",
    approach:
      "7개 후보 모델을 정량 비교 후 3개 선정, Fine-tuning 및 Blender 기반 합성 데이터 파이프라인 설계",
    result:
      "DIR300 벤치마크 기준 AADD: MS-SSIM 0.52, PSNR 15.92 달성. Docker + FastAPI 추론 API 개발 완료",
    techStack: ["PyTorch", "Blender", "Docker", "FastAPI"],
  },
  {
    title: "문서 방향 인식 (Document Orientation)",
    period: "2026.01 - 현재",
    org: "KT GenAI LAB",
    problem:
      "스캔/촬영된 문서가 다양한 방향(0°/90°/180°/270°)으로 입력되어 후속 처리에 오류 발생",
    approach:
      "PP-LCNet 분류 모델 Fine-tuning, 10만장 학습 데이터셋 구축(증강 포함), 후처리 로직 추가",
    result:
      "Base 94.03% → v3 99.59% 정확도 달성 (conf>0.9 구간 100%), 추론 64ms, 메모리 500MB 이하",
    techStack: ["PyTorch", "FastAPI", "Docker"],
  },
  {
    title: "Narrative Video 요약 모델 고도화",
    period: "2025.03 - 2026.02",
    org: "KT GenAI LAB",
    problem:
      "드라마 등 장편 비디오에서 씬 메타데이터를 수동 생성하는 비용이 과도함",
    approach:
      "9.3만 건 데이터셋 구축, 4종 학습 아키텍처 비교 실험(8×A100 분산 학습), 비동기 서빙 최적화",
    result:
      "Baseline 대비 +10~20pt 성능 향상, 추론 속도 4× 개선, 1,000건 연속 처리 실패율 0%",
    techStack: ["PyTorch", "LoRA", "vLLM", "Docker", "FastAPI"],
  },
  {
    title: "Spatial Scene Graph Generation (석사 연구)",
    period: "2024 - 2025",
    org: "KAIST · RIRO Lab",
    problem:
      "기존 VLM은 좌우 구분, 객체 카운팅 등 기본적 공간 추론에 한계가 있음",
    approach:
      "Blender로 50K 공간 관계 데이터셋 자동 생성, LoRA 기반 LMM Fine-tuning, Multi-Agent 파이프라인 설계",
    result:
      "GPT-4o 대비 Accuracy +35%, Precision +7% 달성. 로봇 매니퓰레이션 태스크에 적용 검증",
    techStack: ["PyTorch", "LoRA", "Blender", "Multi-Agent"],
  },
];
