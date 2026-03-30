export interface Education {
  school: string;
  major: string;
  period: string;
  description?: string;
  gpa?: string;
  link?: string;
}

export const education: Education[] = [
  {
    school: "KAIST (한국과학기술원)",
    major: "전산학부 석사",
    period: "2023.02 - 2025.02",
    description: "Robust Intelligence and Robotics Laboratory (지도교수: 박대형)",
    gpa: "3.80 / 4.3",
    link: "https://rirolab.kaist.ac.kr",
  },
  {
    school: "전남대학교",
    major: "전기전자컴퓨터공학부 학사",
    period: "2018.03 - 2021.06",
    description: "Summa Cum Laude · BMIL 학부 연구생 (유선용 교수님)",
    gpa: "4.32 / 4.5",
    link: "https://bmil.jnu.ac.kr",
  },
];

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export const certificates: Certificate[] = [
  {
    name: "빅데이터분석기사",
    issuer: "한국데이터산업진흥원",
    date: "2022.09",
  },
  {
    name: "ADsP (데이터분석 준전문가)",
    issuer: "한국데이터산업진흥원",
    date: "2022.03",
  },
];

export interface Language {
  name: string;
  detail: string;
}

export const languages: Language[] = [
  { name: "OPIc 영어", detail: "IH (Intermediate High) · 2025.12" },
];
