"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const news = [
  { date: "2025.10", text: "메리츠화재 공동연구과제 착수 — 문서 왜곡 보정, 방향 인식, 리딩오더" },
  { date: "2025.03", text: "KT GenAI기술팀 선임 연구원 입사" },
  { date: "2025.03", text: "MGHanD 논문 arXiv 공개" },
  { date: "2025.02", text: "KAIST 전산학부 석사 졸업" },
  { date: "2025.01", text: "KT 미디어본부 협력과제 시작 — 비디오 메타 추출, 씬 타이틀" },
  { date: "2024.08", text: "LLM + Robots Survey 논문 출판 (Intelligent Service Robotics)" },
  { date: "2024.07", text: "KT Vision AI연구담당 Research Intern" },
  { date: "2023.05", text: "SEMES 기업과제 착수 — 비전 기반 6-DoF 포즈 추정" },
  { date: "2023.02", text: "KAIST 전산학부 석사 입학 (RIRO Lab)" },
  { date: "2021.06", text: "전남대학교 학사 졸업 (Summa Cum Laude)" },
  { date: "2021.01", text: "POSCO 생산기술전략실 입사" },
  { date: "2020.06", text: "건강보험공단 협업 프로젝트 시작 — AI 기반 불법의료기관 예측" },
];

export default function AboutSection() {
  return (
    <section className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="news" />
      <div className="relative ml-4">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-theme via-theme/30 to-transparent" />

        <div className="space-y-0">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="relative pl-8 py-2 border-b border-gray-50 dark:border-gray-800 last:border-0"
            >
              <div className="absolute left-[-3px] top-[14px] w-[6px] h-[6px] rounded-full bg-theme" />
              <div className="flex gap-4 text-sm">
                <span
                  className="text-theme font-semibold whitespace-nowrap shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.date}
                </span>
                <span>{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
