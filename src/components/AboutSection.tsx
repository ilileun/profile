"use client";

import SectionHeading from "./SectionHeading";

const news = [
  { date: "2026.01", text: "Document AI 프로젝트 착수 — 문서 왜곡 보정(Dewarping), 방향 인식(Orientation)" },
  { date: "2025.03", text: "KT 기술혁신부문 GenAI기술팀 선임 연구원 입사" },
  { date: "2025.03", text: "arXiv 논문 공개 — Spatial Scene Graph Generation Using Large Multimodal Models" },
  { date: "2025.02", text: "KAIST 전산학부 석사 졸업" },
  { date: "2024.08", text: "Intelligent Service Robotics 논문 출판 (LLM + Robots Survey)" },
  { date: "2024.07", text: "KT Vision AI연구담당 Research Intern" },
];

export default function AboutSection() {
  return (
    <section className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="news" />
      <table className="w-full text-sm">
        <tbody>
          {news.map((item, i) => (
            <tr
              key={i}
              className="border-b border-gray-50 dark:border-gray-800 last:border-0"
            >
              <td
                className="py-2 pr-4 text-theme font-semibold whitespace-nowrap align-top"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {item.date}
              </td>
              <td className="py-2">{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
