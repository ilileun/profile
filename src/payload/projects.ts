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
    title: "문서 기하 왜곡 보정 (Document Dewarping)",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "카메라 촬영 문서의 기하학적 왜곡으로 OCR 정확도 저하",
    approach:
      "7개 후보 모델 정량 비교 후 3개 선정, Fine-tuning 및 Blender 합성 데이터 파이프라인 설계",
    result:
      "DIR300 벤치마크 AADD: MS-SSIM 0.52, PSNR 15.92. Docker + FastAPI 추론 API 개발",
    techStack: ["PyTorch", "Blender", "Docker", "FastAPI"],
  },
  {
    title: "문서 방향 인식 (Document Orientation)",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "스캔/촬영 문서가 다양한 방향(0°/90°/180°/270°)으로 입력되어 후속 처리 오류",
    approach:
      "PP-LCNet 분류 모델 Fine-tuning, 10만장 학습 데이터셋 구축, 후처리 로직 설계",
    result:
      "94.03% → 99.59% 정확도 달성 (conf>0.9 구간 100%), 추론 64ms",
    techStack: ["PyTorch", "FastAPI", "Docker"],
  },
  {
    title: "리딩오더 (Reading Order)",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "복잡한 레이아웃의 문서에서 텍스트 읽기 순서를 올바르게 파악해야 OCR 후처리 품질 확보 가능",
    approach:
      "문서 레이아웃 분석 기반 리딩오더 모델 개발",
    result:
      "진행 중",
    techStack: ["PyTorch", "Document AI"],
  },
  // KT 미디어본부 기술지원
  {
    title: "비디오 메타데이터 추출 모델 고도화",
    period: "2025.01 - 2025.12",
    org: "KT 미디어본부 기술지원",
    problem:
      "드라마 등 장편 비디오에서 씬 메타데이터를 수동 생성하는 비용이 과도함",
    approach:
      "9.3만 건 데이터셋 구축, 4종 학습 아키텍처 비교 실험(8×A100 분산 학습), 비동기 서빙 최적화",
    result:
      "Baseline 대비 +10~20pt 성능 향상, 추론 속도 4× 개선, 1,000건 연속 처리 실패율 0%",
    techStack: ["PyTorch", "LoRA", "vLLM", "Docker", "FastAPI"],
  },
  {
    title: "씬 타이틀 추출 시스템",
    period: "2025.01 - 2025.12",
    org: "KT 미디어본부 기술지원",
    problem:
      "비디오 씬별 타이틀을 수작업으로 생성하는 데 시간과 비용 과다",
    approach:
      "vLLM 기반 LLM 서빙, 프롬프트 엔지니어링으로 씬 타이틀 자동 생성 및 영→한 번역",
    result:
      "씬당 0.3초 처리, 번역 실패율 5% → 0%",
    techStack: ["vLLM", "LLM", "Prompt Engineering"],
  },
  // KAIST 석사 연구
  {
    title: "BECS: 빅데이터 엣지 클라우드 서비스 연구 (IITP 국책과제)",
    period: "2024.07 - 2024.12",
    org: "KAIST · BECS 연구센터",
    problem:
      "엣지 클라우드 환경에서 대규모 데이터의 실시간 수집·분석·서비스 기술 필요",
    approach:
      "빅데이터 엣지 클라우드 서비스 플랫폼 연구 참여, Spatial Scene Graph 연구 성과 발표",
    result:
      "Scene Graph Generation 연구를 BECS 과제 내에서 발표 및 검증",
    techStack: ["Edge Cloud", "Big Data", "Scene Graph"],
  },
  {
    title: "Spatial Scene Graph Generation Using Large Multimodal Models",
    period: "2024 - 2025",
    org: "KAIST · BECS · 1st Author",
    problem:
      "GPT-4, LLaVA 등 기존 LMM이 좌우 구분, 객체 카운팅 등 기본적 공간 추론에 한계",
    approach:
      "Blender 기반 50K 공간 관계 데이터셋 자동 생성, LoRA 기반 Vicuna-13B Fine-tuning, Multi-Agent Pipeline 설계",
    result:
      "GPT-4o 대비 Accuracy +35%, Precision +7%. 로봇 매니퓰레이션 태스크 적용 검증",
    techStack: ["LoRA", "Vicuna-13B", "Blender", "CLIP", "Multi-Agent"],
  },
  {
    title: "비정형 다중 삽입구 자동 이/적재 (SEMES 기업과제)",
    period: "2023.05 - 2024.08",
    org: "KAIST",
    problem:
      "비정형 다중 삽입구 이적재 작업 자동화를 위한 비전 기반 6-DoF 포즈 인식 필요",
    approach:
      "템플릿 이미지 생성 모듈, 3D Point Cloud 평면 감지, 특징점 우선 탐색 기반 매칭 가속화",
    result:
      "시뮬레이션(Gazebo) 및 실세계 실험 성공률 100%",
    techStack: ["ROS2", "Gazebo", "UR5e", "3D Point Cloud"],
  },
  {
    title: "정밀 3차원 컨셉그래프 생성 (과기부 국책과제)",
    period: "2024.04 - 2027.12",
    org: "KAIST",
    problem:
      "자율행동체의 복합작업 자율 수행을 위한 환경변화 인식 기술 필요",
    approach:
      "YOLO-World + SAM Segmentation, TSDF Voxel Map, Open-vocab zero-shot 엣지 생성",
    result:
      "RoboCasa 기반 주방 시뮬레이션 환경 구축 및 Stretch Robot 연동",
    techStack: ["YOLO-World", "SAM", "TSDF", "LLM", "RoboCasa"],
  },
  {
    title: "MGHanD: Multi-modal Guidance for Hand Diffusion",
    period: "2024 - 2025",
    org: "KAIST · Co-author",
    problem:
      "텍스트-이미지 디퓨전 모델에서 생성되는 손 이미지의 왜곡 문제",
    approach:
      "시각적/텍스트 멀티모달 가이던스 + 누적 손 마스크로 디퓨전 과정 개선",
    result:
      "기존 디퓨전 모델 대비 손 생성 품질 향상",
    techStack: ["Stable Diffusion", "LoRA", "ViT", "DDIM"],
  },
  // POSCO
  {
    title: "제조현장 생산/물류 Simulation 투자 타당성 검증",
    period: "2022.03 - 2022.08",
    org: "POSCO · Smart Factory 기획그룹",
    problem:
      "크레인(OHC) 추가 도입 투자(20억)의 타당성을 객관적으로 검증할 방법 필요",
    approach:
      "ProModel 기반 가상 공장 구현. 야드 적치 능력, 4대 크레인 작업개소, 연마기·수냉챔버 등 10가지 장설비 특성 모델링. 5가지 시나리오 Case 분석",
    result:
      "98% 정확도의 가상 공장 구현, 크레인 가동률 및 최적 작업영역 제시로 투자 검증 완료",
    techStack: ["ProModel", "Simulation", "Manufacturing"],
  },
  {
    title: "사내 AI 기술 블로그 기획 및 운영",
    period: "2022.01 - 2022.06",
    org: "POSCO · Smart Factory 기획그룹",
    problem:
      "AI 전문가 간 소통 부재 및 모델 개발 기여도 평가 어려움",
    approach:
      "국내외 IT 기업 기술 블로그 벤치마킹 후 사내 AI 블로그 기획. 직원 VoC 기반 카테고리 설계, 매뉴얼 제작, 뉴칼라 인증 프로세스 연계",
    result:
      "파일럿 3개월: 109명 가입 (목표 50명 대비 2배), 22건 게시. 뉴칼라 레벨 인증 프로세스에 블로그 기재 의무화",
    techStack: ["Planning", "Community", "AI Blog"],
  },
  // 전남대 학부 연구
  {
    title: "AI 기반 불법의료기관 예측 모델 (건강보험공단 협업)",
    period: "2020.06 - 2021.01",
    org: "전남대학교 · BMIL",
    problem:
      "불법개설 병원 조기 적발을 위한 기존 통계적 접근방식의 한계",
    approach:
      "100만건+ 빅데이터 전처리 및 신경망 기반 감지시스템 개발",
    result:
      "기존 통계적 접근 대비 예측 정확도 향상, AI 모델 프로토타입 구축",
    techStack: ["Python", "Neural Networks", "SAS"],
  },
];
