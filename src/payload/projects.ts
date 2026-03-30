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
  // 메리츠화재 · KT 공동연구
  {
    title: "Document Dewarping (문서 왜곡 보정)",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "카메라 촬영 문서의 기하학적 왜곡으로 OCR 성능 저하. 기존에는 보정 없이 OCR 수행",
    approach:
      "7개 후보 모델을 DIR300 벤치마크에서 정량 비교 후 최적 모델 선정·Fine-tuning. 학습 데이터 부족은 Blender 합성 데이터 파이프라인으로 해결",
    result:
      "MS-SSIM 0.52, PSNR 15.92 달성. 합성 데이터 파이프라인으로 학습 데이터 확보 체계 구축",
    techStack: ["PyTorch", "Blender", "Docker"],
  },
  {
    title: "Document Orientation (문서 방향 인식)",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "문서가 0°/90°/180°/270° 다양한 방향으로 입력되어 후속 OCR 및 레이아웃 분석 실패",
    approach:
      "경량 분류 모델 2종 비교 후 PP-LCNet 선정. 10만장 학습 데이터 구축, Fine-tuning, edge-crop 기반 재추론 후처리 설계",
    result:
      "94.03% → 99.59% 정확도. 고신뢰도 구간 100%. 추론 64ms",
    techStack: ["PyTorch", "PaddlePaddle"],
  },
  {
    title: "Reading Order (리딩오더) — Adaptive Hybrid 알고리즘",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "레이아웃 분석 모델은 텍스트 블록 위치만 출력하며, 읽기 순서는 미제공. Greedy 정렬로는 다단 레이아웃에서 순서 오류 발생",
    approach:
      "실패 패턴 분석 후 (1) 스캔라인 기반 칼럼 경계 감지, (2) 전폭 요소에 의한 y-밴드 분할, (3) 칼럼 내부 Greedy 정렬을 결합한 Adaptive Hybrid 알고리즘 설계",
    result:
      "OmniDocBench 71.5% 정확도, edit distance 0.0965. Greedy(68.6%) 대비 +2.9%p 개선",
    techStack: ["Python", "Algorithm Design", "OmniDocBench"],
  },
  // KT 미디어본부 기술지원
  {
    title: "비디오 메타데이터 추출 모델 고도화",
    period: "2025.01 - 2025.12",
    org: "KT 미디어본부 기술지원",
    problem:
      "장편 비디오의 씬 단위 메타데이터를 수동 생성하는 데 비용 과다, 품질 불일관",
    approach:
      "9.3만건 학습 데이터 구축. VLM 기반 4종 Fine-tuning 전략을 8×A100 분산 학습 환경에서 비교 실험",
    result:
      "Baseline 대비 +10~20pt 성능 향상. 추론 속도 4× 개선. 1,000건 연속 처리 실패율 0%. 특허 출원",
    techStack: ["PyTorch", "LoRA", "vLLM", "Docker"],
  },
  {
    title: "씬 타이틀 추출 시스템",
    period: "2025.01 - 2025.12",
    org: "KT 미디어본부 기술지원",
    problem:
      "씬별 타이틀 수작업 생성에 비용·시간 과다",
    approach:
      "LLM 기반 메타데이터 + STT 대사 결합 자동 생성. 번역 시 JSON 깨짐은 항목별 개별 질의로 해결",
    result:
      "씬당 0.3초 처리. 번역 실패율 5% → 0%",
    techStack: ["vLLM", "Prompt Engineering"],
  },
  // KT 인턴
  {
    title: "대사 기반 하이라이트 탐지 및 숏폼 자동 생성",
    period: "2024.07 - 2024.08",
    org: "KT 인턴",
    problem:
      "시각 정보만으로는 드라마 하이라이트 추출에 한계. 대사 맥락 이해가 필요",
    approach:
      "STT로 대사 텍스트화 후 LLM Two-Stage 요약 — (1) 대사별 중요도 스코어링, (2) 고중요도 구간 클러스터링 기반 하이라이트 질의문 생성 및 탐지",
    result:
      "STT 유사도 0.89, 하이라이트 IoU 0.52~0.75",
    techStack: ["Whisper", "LLM", "UniVTG"],
  },
  // KAIST 석사 연구
  {
    title: "BECS: 빅데이터 엣지 클라우드 서비스 연구 (IITP 국책과제)",
    period: "2024.07 - 2024.12",
    org: "KAIST · BECS 연구센터",
    problem:
      "엣지 클라우드 환경에서 대규모 데이터의 실시간 수집·분석·서비스 기술 필요",
    approach:
      "빅데이터 엣지 클라우드 서비스 플랫폼 연구 참여. Scene Graph 연구 성과 발표",
    result:
      "Scene Graph Generation 연구를 BECS 과제 내에서 발표 및 검증",
    techStack: ["Edge Cloud", "Big Data", "Scene Graph"],
  },
  {
    title: "Spatial Scene Graph Generation Using Large Multimodal Models",
    period: "2024 - 2025",
    org: "KAIST · BECS · 1st Author",
    problem:
      "기존 멀티모달 모델이 좌우/위아래 등 기본적 공간 관계 추론에서 성능 저조. 로봇 적용에는 정확한 공간 이해 필수",
    approach:
      "Blender 기반 50K 공간 관계 데이터셋 자동 생성. LoRA로 LMM 공간 추론 강화. Node Generator + Edge Generator 분리한 Multi-Agent 파이프라인 설계",
    result:
      "GPT-4o 대비 Accuracy +35%, Precision +7%. 로봇 워크스페이스에서 적용 검증",
    techStack: ["LoRA", "Blender", "CLIP", "Multi-Agent"],
  },
  {
    title: "비정형 다중 삽입구 자동 이/적재 (SEMES 기업과제)",
    period: "2023.05 - 2024.08",
    org: "KAIST",
    problem:
      "반도체 장비 비정형 삽입구에서 카메라 한 장으로 6-DoF 위치·자세를 실시간 추정해야 함",
    approach:
      "다각도 템플릿 자동 생성 모듈, 3D Point Cloud 평면 감지, 특징점 우선 탐색 기반 매칭 가속화",
    result:
      "시뮬레이션 및 실세계 실험 성공률 100%",
    techStack: ["ROS2", "Gazebo", "UR5e", "3D Point Cloud"],
  },
  {
    title: "정밀 3차원 컨셉그래프 생성 (과기부 국책과제)",
    period: "2024.04 - 2027.12",
    org: "KAIST",
    problem:
      "자율행동체가 환경 변화를 실시간 인식하려면 장면을 그래프 구조로 표현·업데이트해야 함",
    approach:
      "Instance Segmentation(5Hz) → TSDF Voxel Map(30Hz) → Open-vocab 엣지 생성 파이프라인 설계. 주방 시뮬레이션 환경 구축",
    result:
      "Tabletop 환경에서 실시간 3D 컨셉그래프 생성·업데이트 시연",
    techStack: ["YOLO-World", "SAM", "TSDF", "LLM", "RoboCasa"],
  },
  {
    title: "MGHanD: Multi-modal Guidance for Hand Diffusion",
    period: "2024 - 2025",
    org: "KAIST · Co-author",
    problem:
      "디퓨전 모델 생성 이미지에서 손 왜곡(손가락 개수 오류, 관절 꼬임) 빈발",
    approach:
      "시각적 가이던스(손 구조 판별기) + 텍스트 가이던스(LoRA)를 동시 적용. 누적 손 마스크로 손 영역 생성 품질 집중 개선",
    result:
      "기존 디퓨전 모델 대비 손 생성 품질 유의미 향상. arXiv 공개 (Mar. 2025)",
    techStack: ["Stable Diffusion", "LoRA", "ViT"],
  },
  // POSCO
  {
    title: "제조현장 크레인(OHC) 투자 타당성 Simulation 검증",
    period: "2022.03 - 2022.08",
    org: "POSCO · Smart Factory 기획그룹",
    problem:
      "크레인 추가 도입(20억)의 효과를 사전에 검증할 방법 부재. 정량적 근거 부족",
    approach:
      "ProModel로 가상 공장 재현. 10종 장설비 특성 모델링, 5가지 시나리오별 가동률·병목 시뮬레이션",
    result:
      "98% 정확도의 가상 공장 구현. 최적 배치안 도출로 투자 의사결정 근거 제공",
    techStack: ["ProModel", "Simulation"],
  },
  {
    title: "사내 AI 기술 블로그 기획 및 운영",
    period: "2022.01 - 2022.06",
    org: "POSCO · Smart Factory 기획그룹",
    problem:
      "AI 전문인력 간 소통 채널 부재. 모델 개발 기여도 평가 기준 불명확",
    approach:
      "국내외 IT기업 벤치마킹 후 사내 블로그 기획. VoC 기반 카테고리 설계, 뉴칼라 인증에 블로그 게시 의무화 제안",
    result:
      "3개월 109명 가입(목표 대비 2배), 22건 게시",
    techStack: ["Planning", "Community"],
  },
  // 전남대 학부 연구
  {
    title: "AI 기반 불법의료기관 예측 모델 (건강보험공단 협업)",
    period: "2020.06 - 2021.01",
    org: "전남대학교 · BMIL",
    problem:
      "불법 개설 병원 적발을 위한 기존 통계 규칙 기반 방식의 낮은 탐지율",
    approach:
      "대규모 청구 데이터 전처리 후 학습 파이프라인 구축. 기존 모델 한계를 정량 분석하고 신경망 기반 감지 모델 설계",
    result:
      "기존 통계 접근 대비 예측 성능 향상. AI 감지 시스템 프로토타입 구축",
    techStack: ["Python", "Neural Networks"],
  },
  {
    title: "대사증후군 위험인자 분석",
    period: "2020.03 - 2020.12",
    org: "전남대학교 · BMIL",
    problem:
      "대사증후군 영향 요인의 체계적 파악 및 예방 정책 근거 자료 필요",
    approach:
      "국민건강영양조사 15,065명 대상, 64개 요인 범주화 후 카이제곱 검정 및 다중 로지스틱 회귀분석",
    result:
      "유의미한 주요 위험인자 도출. SAS 기반 분석 파이프라인 구축",
    techStack: ["SAS", "Statistics"],
  },
];
