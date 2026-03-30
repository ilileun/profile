export interface Award {
  title: string;
  grade: string;
  org: string;
  date: string;
  description: string;
}

export const awards: Award[] = [
  {
    title: "지역사회문제해결 아이디어 해커톤",
    grade: "금상",
    org: "광주전남지역혁신플랫폼",
    date: "2021.05",
    description:
      "QR코드 활용 버스 승하차 알림앱 구현을 통한 지역 대중교통 활성화",
  },
  {
    title: "포스트코로나 AI 챌린지",
    grade: "입상",
    org: "KT & NIA",
    date: "2020.05",
    description: "QR코드를 활용한 출입 등록 시스템 제안",
  },
  {
    title: "우수 졸업자 학술상",
    grade: "학술상",
    org: "전남대학교",
    date: "2021.06",
    description: "Summa Cum Laude (GPA 4.32 / 4.5)",
  },
];
