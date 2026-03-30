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
      "실세계에서 촬영된 문서는 구겨짐, 휘어짐 등 기하학적 왜곡이 빈번하나, 기존에는 별도 보정 없이 OCR을 수행하여 왜곡 문서에서의 인식 성능이 크게 저하되고 있었음",
    approach:
      "7개 후보 모델을 DIR300 벤치마크에서 정량 비교 후 최적 모델 선정·Fine-tuning. 학습 데이터 부족은 Blender 합성 데이터 파이프라인으로 해결",
    result:
      "MS-SSIM 0.52, PSNR 15.92 달성. 합성 데이터 파이프라인으로 학습 데이터 확보 체계 구축",
    techStack: ["PyTorch", "Blender", "Docker"],
  },
  {
    title: "문서 방향 인식 (Document Orientation)",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "파이프라인에 회전된 상태로 들어오는 문서가 그대로 OCR에 입력되면 글자를 아예 인식하지 못하는 문제가 반복 발생",
    approach:
      "경량 분류 모델 2종 비교 후 PP-LCNet 선정, 10만장 학습 데이터 구축·Fine-tuning. 여백이 많은 이미지에서 오분류가 남아 있어 conf 0.9 미만인 건 가장자리를 crop하여 재추론하는 후처리를 설계",
    result:
      "베이스라인 대비 99.59%(+5.56%p). 배치 추론으로 64ms → 30ms 이내(약 2배 개선)",
    techStack: ["PyTorch", "PaddlePaddle"],
  },
  {
    title: "Reading Order (읽기 순서 정렬)",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "기존 Greedy 방식은 단일 칼럼 문서에서는 무난하지만, 뉴스·논문 등 다단(multi-column) 레이아웃에서는 읽기 순서가 뒤섞여 RAG 청킹 시 문맥이 깨지는 문제가 발생",
    approach:
      "Greedy 실패 패턴 분석 결과 다단 칼럼 경계 미인식이 핵심 원인임을 파악. (1) 스캔라인 기반 칼럼 경계 자동 감지, (2) 전폭 요소에 의한 y-밴드 분할, (3) 칼럼 내부 Greedy 정렬을 결합한 Adaptive Hybrid 알고리즘 설계",
    result:
      "OmniDocBench 71.5% 정확도, edit distance 0.0965. Greedy(68.6%) 대비 +2.9%p 개선",
    techStack: ["Python", "Algorithm Design", "OmniDocBench"],
  },
  // KT 미디어본부 기술지원
  {
    title: "Narrative Video 요약 모델 고도화",
    period: "2025.01 - 2025.12",
    org: "KT 미디어본부 기술지원",
    problem:
      "드라마 등 장편 비디오에서 씬 단위 메타데이터(장르, 분위기, 행동 등)를 자동 생성하는 방법 자체가 없었음. 수작업 라벨링은 비용과 시간이 과다하여 대규모 적용이 불가능",
    approach:
      "씬 분리 후 Gemini를 활용한 메타데이터 자동 생성 + 수작업 라벨링을 병행하여 GT 데이터셋 구축(AI-Hub 8.1만 + K-Drama 1.2만). VLM 기반 End-to-End 메타 추출을 목표로 프롬프트를 설계하고, InternVideo2.5에 대해 4종 SFT 전략(Full/Encoder Freeze/LLM Freeze/LoRA)을 8×A100 분산 환경에서 비교 실험",
    result:
      "Baseline 대비 +10~20pt 성능 향상. 프롬프트만으로는 한계가 있던 메타 추출을 SFT로 해결하여 End-to-End 자동 생성 파이프라인 구축",
    techStack: ["PyTorch", "LoRA", "vLLM", "Docker"],
  },
  {
    title: "의미론적 씬 타이틀 추천 시스템",
    period: "2025.01 - 2025.12",
    org: "KT 미디어본부 기술지원",
    problem:
      "기존 씬 타이틀은 비주얼 정보만으로 생성되어 대사의 맥락이나 감정이 반영되지 않음. 씬의 의미를 담은 타이틀을 자동 생성하는 방법이 부재",
    approach:
      "비주얼 메타데이터(장르, 분위기, 행동)와 STT 기반 대사 정보를 결합하여 씬의 의미를 반영하는 타이틀 추천 시스템 설계. LLM 기반 프롬프트 엔지니어링으로 두 모달리티를 통합 질의",
    result:
      "대사+비주얼 결합으로 씬 맥락을 반영한 타이틀 자동 생성. 씬당 0.3초 처리",
    techStack: ["vLLM", "Prompt Engineering"],
  },
  // KT 인턴
  {
    title: "대사 기반 하이라이트 탐지 및 숏폼 자동 생성",
    period: "2024.07 - 2024.08",
    org: "KT 인턴",
    problem:
      "사용자가 비디오를 검색하려 해도 어떤 장면이 있는지, 무엇을 검색해야 하는지 알 수 없음. 핵심 장면을 먼저 추천해주면 탐색 비용을 줄일 수 있다는 아이디어에서 출발",
    approach:
      "STT로 대사를 텍스트화한 뒤 LLM Two-Stage 요약 — (1) 대사별 중요도 스코어링, (2) 고중요도 구간 클러스터링 기반 하이라이트 질의문 생성. 질의문으로 비디오 내 하이라이트 구간 자동 탐지",
    result:
      "STT 유사도 0.89, 하이라이트 IoU 0.52~0.75",
    techStack: ["Whisper", "LLM", "UniVTG"],
  },
  // KAIST 석사 연구
  {
    title: "Spatial Scene Graph Generation (BECS · IITP 국책과제)",
    period: "2024.07 - 2025.02",
    org: "KAIST · BECS 연구센터 · 1st Author",
    problem:
      "엣지 클라우드 환경에서 로봇이 공간을 이해하려면 실시간 장면 그래프가 필요하나, 기존 멀티모달 모델은 기본적 공간 관계 추론에서 성능 저조",
    approach:
      "BECS(빅데이터 엣지 클라우드 서비스) 과제 내에서 엣지 환경 적용을 목표로 연구 수행. Blender 기반 50K 공간 관계 데이터셋 자동 생성, LoRA로 LMM 공간 추론 강화, Node Generator + Edge Generator 분리한 Multi-Agent 파이프라인 설계",
    result:
      "GPT-4o 대비 Accuracy +5%, Precision +3%. 로봇 워크스페이스에서 적용 검증. BECS 과제 내 연구 성과 발표",
    techStack: ["LoRA", "Blender", "CLIP", "Multi-Agent", "Edge Cloud"],
  },
  {
    title: "비정형 다중 삽입구 자동 이/적재 (SEMES 기업과제)",
    period: "2023.05 - 2024.08",
    org: "KAIST",
    problem:
      "반도체 장비 조립 시 비정형 삽입구가 많아 수동 작업에 의존하고 있었으나, 미세한 각도 오차에도 삽입이 불가능하여 불량과 공정 지연이 빈번하게 발생",
    approach:
      "카메라 한 장으로 정확한 6-DoF 포즈를 실시간 추정하기 위해, 다각도 템플릿 자동 생성 모듈 + 3D Point Cloud 평면 감지 + 특징점 우선 탐색 기반 매칭 가속화를 결합",
    result:
      "시뮬레이션(Gazebo) 및 실세계 실험 모두 성공률 100%",
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
  // POSCO
  {
    title: "제조현장 크레인(OHC) 투자 타당성 Simulation 검증",
    period: "2022.03 - 2022.08",
    org: "POSCO · Smart Factory 기획그룹",
    problem:
      "크레인 추가 도입(20억 규모)을 검토 중이었으나, 실제 도입 전에 효과를 검증할 방법이 없어 투자 의사결정에 정량적 근거가 부족",
    approach:
      "ProModel로 실제 공장을 가상 재현. 10종 장설비 특성 모델링, 5가지 운영 시나리오별 크레인 가동률·병목 구간 시뮬레이션",
    result:
      "98% 정확도의 가상 공장 구현. 최적 배치안 도출로 투자 의사결정 근거 제공",
    techStack: ["ProModel", "Simulation"],
  },
  {
    title: "사내 AI 기술 블로그 기획 및 운영",
    period: "2022.01 - 2022.06",
    org: "POSCO · Smart Factory 기획그룹",
    problem:
      "AI 모델을 개발하는 전문가들이 사내에 다수 있었지만 서로의 작업을 공유할 채널이 없었음. 뉴칼라 인증(사내 IT역량 레벨) 심사에서 모델 개발 기여도를 평가할 기준도 모호한 상태",
    approach:
      "카카오, 네이버, 우아한형제들 등 기술 블로그를 벤치마킹하고, 사내 AI 전문가 VoC를 직접 수집하여 카테고리·운영 방식 설계. 뉴칼라 레벨3·4 인증에 블로그 기술 게시물 등록을 필수화하도록 인증 프로세스 개선까지 제안",
    result:
      "파일럿 3개월 109명 가입(목표 50명 대비 2배). 기획성을 인정받아 블로그 게시가 뉴칼라 인증 필수 요건으로 정식 반영",
    techStack: ["Planning", "Community"],
  },
  // 전남대 학부 연구
  {
    title: "AI 기반 불법의료기관(사무장 병원) 예측 모델 (건강보험공단 협업)",
    period: "2020.06 - 2021.01",
    org: "전남대학교 · BMIL",
    problem:
      "사무장 병원 적발은 기존에 통계적 규칙 기반으로 이루어져 새로운 패턴의 불법 기관을 탐지하기 어려웠음",
    approach:
      "대규모 청구 데이터를 전처리하여 학습 파이프라인 구축. Attention 기법을 도입한 신경망 모델을 설계하여 의심 패턴을 자동 포착",
    result:
      "기존 통계 접근 대비 예측 성능 향상. AI 기반 사무장 병원 감지 시스템 프로토타입 구축",
    techStack: ["Python", "Neural Networks", "Attention"],
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
