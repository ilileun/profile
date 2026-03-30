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
      "카메라로 촬영한 문서는 기하학적 왜곡이 발생하여 후속 OCR 성능이 저하됨. 기존에는 보정 없이 OCR을 수행하고 있었음",
    approach:
      "7개 후보 모델을 동일 벤치마크(DIR300)에서 정량 비교하여 왜곡 유형별 강점을 분석. 가장 범용성 높은 모델을 선정하고 Fine-tuning 수행. 학습 데이터 부족 문제는 Blender 기반 합성 데이터 파이프라인을 설계하여 해결",
    result:
      "Fine-tuning 후 MS-SSIM 0.52, PSNR 15.92 달성. 합성 데이터 파이프라인을 통해 추가 학습 데이터 확보 체계 구축",
    techStack: ["PyTorch", "Blender", "Docker"],
  },
  {
    title: "Document Orientation (문서 방향 인식)",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "스캔·촬영된 문서가 0°/90°/180°/270° 다양한 방향으로 입력되며, 이를 사전 보정하지 않으면 후속 OCR 및 레이아웃 분석이 실패함",
    approach:
      "경량 분류 모델 2종(PP-LCNet, EfficientNetV2)을 동일 조건에서 비교. PP-LCNet이 정확도와 추론 속도 모두 우수하여 선정. 10만장 규모 학습 데이터를 구축하고 Fine-tuning 수행. 저신뢰도 예측에 대해서는 edge-crop 기반 재추론 후처리를 설계",
    result:
      "정확도 94.03% → 99.59%로 개선. 고신뢰도 구간(conf > 0.9)에서 100% 정확도 달성. 추론 속도 평균 64ms로 실시간 처리 가능",
    techStack: ["PyTorch", "PaddlePaddle"],
  },
  {
    title: "Reading Order (리딩오더) — Adaptive Hybrid 알고리즘",
    period: "2025.10 - 2026.04",
    org: "메리츠화재 · KT 공동연구",
    problem:
      "문서 레이아웃 분석 모델은 텍스트 블록의 위치(bbox)만 출력하며, 읽기 순서는 제공하지 않음. 단순한 Greedy 정렬로는 다단 레이아웃, 표, 캡션 등이 섞인 문서에서 순서가 뒤섞이는 문제 발생",
    approach:
      "Greedy 알고리즘의 실패 패턴을 분석하여 다단 칼럼 인식 실패와 전폭 요소 처리 미흡이 주 원인임을 파악. (1) 스캔라인 기반 칼럼 경계 자동 감지, (2) 전폭 요소에 의한 y-밴드 자동 분할, (3) 칼럼 내부 Greedy 세부 정렬을 결합한 Adaptive Hybrid 알고리즘을 설계·구현",
    result:
      "OmniDocBench(1,354페이지) 평가에서 71.5% 정확도, edit distance 0.0965 달성. 기존 Greedy(68.6%) 대비 +2.9%p 개선. 다단 레이아웃에서 뚜렷한 성능 차이 확인",
    techStack: ["Python", "Document AI", "Algorithm Design", "OmniDocBench"],
  },
  // KT 미디어본부 기술지원
  {
    title: "비디오 메타데이터 추출 모델 고도화",
    period: "2025.01 - 2025.12",
    org: "KT 미디어본부 기술지원",
    problem:
      "K-Drama 등 장편 비디오에서 씬 단위 메타데이터(장르, 분위기, 등장인물 행동 등)를 수동 생성하는 데 비용이 과도하고 품질이 일관되지 않음",
    approach:
      "공개 데이터셋과 자체 라벨링 데이터를 결합하여 9.3만건 규모의 학습 데이터를 구축. 비디오-언어 모델(VLM)을 베이스로 4종의 Fine-tuning 전략(Full/Encoder Freeze/LLM Freeze/LoRA)을 설계하고 8×A100 분산 학습 환경에서 비교 실험 수행",
    result:
      "Baseline 대비 +10~20pt 성능 향상. 추론 속도 기존 대비 4배 개선. 1,000건 연속 처리 안정성 테스트에서 실패율 0%. 특허 출원 완료",
    techStack: ["PyTorch", "LoRA", "vLLM", "Docker"],
  },
  {
    title: "씬 타이틀 추출 시스템",
    period: "2025.01 - 2025.12",
    org: "KT 미디어본부 기술지원",
    problem:
      "비디오 씬별 타이틀을 수작업으로 생성하는 데 비용과 시간이 과다",
    approach:
      "LLM 기반 씬 메타데이터 + STT 대사 정보를 결합한 자동 타이틀 생성 시스템 구축. 영→한 번역 시 JSON 구조가 깨지는 문제는 항목 단위 개별 질의 방식으로 해결",
    result:
      "씬당 0.3초 처리. 번역 실패율 5% → 0%로 감소",
    techStack: ["vLLM", "LLM", "Prompt Engineering"],
  },
  // KT 인턴
  {
    title: "대사 기반 하이라이트 탐지 및 숏폼 자동 생성",
    period: "2024.07 - 2024.08",
    org: "KT 인턴",
    problem:
      "드라마 영상에서 하이라이트를 자동 추출하려면 시각 정보만으로는 한계가 있음. 극의 전환점이나 감정적 클라이맥스는 대사 맥락을 이해해야 포착 가능",
    approach:
      "음성인식(STT)으로 대사를 텍스트화한 뒤, 한국어 LLM을 활용한 Two-Stage 요약 방식을 설계 — (1) 대사별 중요도 스코어링 + 장면 요약, (2) 고중요도 구간 클러스터링 후 하이라이트 질의문 자동 생성. 생성된 질의문으로 비디오 내 하이라이트 구간을 탐지",
    result:
      "대본 대비 STT 유사도 0.89, 하이라이트 탐지 IoU 0.52~0.75 달성",
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
      "GPT-4, LLaVA 등 기존 멀티모달 모델이 \"왼쪽/오른쪽\", \"위/아래\" 같은 기본적 공간 관계 추론에서 성능이 저조함. 로봇 매니퓰레이션 등 실제 적용에는 정확한 공간 이해가 필수",
    approach:
      "물리 엔진(Blender) 기반으로 50K 규모의 공간 관계 데이터셋을 자동 생성하여 학습 데이터 부족 문제를 해결. LoRA 기반으로 LMM의 공간 추론 능력을 강화하고, Node Generator와 Edge Generator를 분리한 Multi-Agent 파이프라인을 설계하여 객체 인식과 관계 추론을 단계적으로 수행",
    result:
      "GPT-4o 대비 Accuracy +35%, Precision +7% 달성. 로봇 워크스페이스 환경에서 적용 가능성 검증",
    techStack: ["LoRA", "Vicuna-13B", "Blender", "CLIP", "Multi-Agent"],
  },
  {
    title: "비정형 다중 삽입구 자동 이/적재 (SEMES 기업과제)",
    period: "2023.05 - 2024.08",
    org: "KAIST",
    problem:
      "반도체 장비의 비정형 다중 삽입구에서 자동 이/적재를 위해서는 카메라 한 장으로 물체의 정확한 6자유도 위치·자세를 실시간으로 추정해야 함",
    approach:
      "다양한 각도의 템플릿 이미지를 자동 생성하는 모듈을 개발하고, 3D Point Cloud 기반 평면 감지와 특징점 우선 탐색 기반 매칭 가속화 기술을 결합하여 포즈 추정 정확도와 속도를 동시에 개선",
    result:
      "Gazebo 시뮬레이션 및 실세계 실험 모두에서 성공률 100% 달성",
    techStack: ["ROS2", "Gazebo", "UR5e", "3D Point Cloud"],
  },
  {
    title: "정밀 3차원 컨셉그래프 생성 (과기부 국책과제)",
    period: "2024.04 - 2027.12",
    org: "KAIST",
    problem:
      "자율행동체가 환경 변화(물체 추가/삭제 등)를 실시간으로 인식하려면, 장면을 의미 있는 그래프 구조로 표현하고 지속적으로 업데이트해야 함",
    approach:
      "Instance Segmentation(5Hz)으로 객체를 인식하고, TSDF Voxel Map(30Hz)으로 3D 공간을 재구성한 뒤, LLM/LMM을 활용한 Open-vocab 방식으로 객체 간 관계(엣지)를 자동 생성하는 파이프라인 설계. 주방 환경 시뮬레이션도 직접 구축",
    result:
      "Tabletop 환경에서 실시간 3D 컨셉그래프 생성 및 업데이트 시연. RoboCasa 기반 주방 시뮬레이션 환경 구축 완료",
    techStack: ["YOLO-World", "SAM", "TSDF", "LLM", "RoboCasa"],
  },
  {
    title: "MGHanD: Multi-modal Guidance for Hand Diffusion",
    period: "2024 - 2025",
    org: "KAIST · Co-author",
    problem:
      "텍스트-이미지 디퓨전 모델이 생성하는 이미지에서 손 부분의 왜곡(손가락 개수 오류, 관절 꼬임 등)이 빈번하게 발생하여 생성 이미지 품질 저하",
    approach:
      "디퓨전 과정에서 시각적 가이던스(손 구조 판별기)와 텍스트 가이던스(LoRA)를 동시에 적용하고, 누적 손 마스크(Cumulative Hand Mask)를 활용하여 손 영역에 대한 생성 품질을 집중적으로 개선하는 프레임워크를 제안",
    result:
      "기존 디퓨전 모델 대비 손 생성 품질 유의미한 향상. arXiv 공개 (Mar. 2025)",
    techStack: ["Stable Diffusion", "LoRA", "ViT", "DDIM"],
  },
  // POSCO
  {
    title: "제조현장 크레인(OHC) 투자 타당성 Simulation 검증",
    period: "2022.03 - 2022.08",
    org: "POSCO · Smart Factory 기획그룹",
    problem:
      "크레인 추가 도입(20억 규모)의 효과를 사전에 객관적으로 검증할 방법이 없어, 투자 의사결정에 정량적 근거가 부족",
    approach:
      "ProModel을 활용하여 실제 공장을 가상으로 재현. 야드 적치 능력, 4대 크레인 작업영역, 연마기·수냉챔버 등 10종 장설비의 특성을 모델링하고, 5가지 운영 시나리오별 크레인 가동률 및 병목 구간을 시뮬레이션",
    result:
      "98% 정확도의 가상 공장 구현. 시나리오별 크레인 최적 배치안을 도출하여 투자 의사결정 근거 제공",
    techStack: ["ProModel", "Simulation", "Manufacturing"],
  },
  {
    title: "사내 AI 기술 블로그 기획 및 운영",
    period: "2022.01 - 2022.06",
    org: "POSCO · Smart Factory 기획그룹",
    problem:
      "AI 전문인력 간 소통 채널이 부재하고, 뉴칼라 인증 심사 시 모델 개발 기여도를 평가할 기준이 불명확",
    approach:
      "국내외 IT기업 기술 블로그를 벤치마킹하여 사내 AI 블로그를 기획. 직원 VoC 기반으로 카테고리를 설계하고, 뉴칼라 레벨 인증 프로세스에 블로그 게시를 의무화하도록 제도 개선을 제안",
    result:
      "파일럿 3개월 만에 109명 가입 (목표 50명 대비 2배 초과), 22건 AI 모델 관련 게시물 등록",
    techStack: ["Planning", "Community", "AI Blog"],
  },
  // 전남대 학부 연구
  {
    title: "AI 기반 불법의료기관 예측 모델 (건강보험공단 협업)",
    period: "2020.06 - 2021.01",
    org: "전남대학교 · BMIL",
    problem:
      "불법 개설 병원을 조기에 적발하기 위한 기존 방식이 통계적 규칙 기반이라 탐지율이 낮고, 새로운 패턴의 불법 기관에 대응하기 어려움",
    approach:
      "건강보험공단이 보유한 대규모 청구 데이터를 전처리하여 학습용 파이프라인을 구축하고, 기존 통계 지표로 기존 모델의 한계를 정량 분석. 이를 보완하는 신경망 기반 감지 모델을 설계·학습",
    result:
      "기존 통계적 접근 대비 예측 성능 향상. AI 기반 감지 시스템 프로토타입 구축",
    techStack: ["Python", "Neural Networks", "Data Pipeline"],
  },
  {
    title: "대사증후군 위험인자 분석",
    period: "2020.03 - 2020.12",
    org: "전남대학교 · BMIL",
    problem:
      "대사증후군에 영향을 미치는 요인을 체계적으로 파악하여, 예방 정책 수립의 근거 자료를 마련할 필요",
    approach:
      "국민건강영양조사 데이터에서 15,065명을 대상으로 흡연, 식습관, 가족력 등 64개 요인을 생활습관·가족력·의료이력으로 범주화하고, 층화추출 카이제곱 검정 및 다중 로지스틱 회귀분석 수행",
    result:
      "대사증후군 유병률에 유의미한 영향을 미치는 주요 위험인자 도출. SAS 기반 분석 파이프라인 구축",
    techStack: ["SAS", "Statistics", "Logistic Regression"],
  },
];
