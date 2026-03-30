"use client";

import SectionHeading from "./SectionHeading";

const news = [
  { date: "2026.01", text: "KT GenAI LAB Document AI 프로젝트 착수 (Dewarping, Orientation)" },
  { date: "2025.03", text: "KT 기술혁신부문 GenAI LAB AI Researcher 입사" },
  { date: "2025.03", text: "IROS 2025 논문 투고 — Spatial Scene Graph Generation" },
  { date: "2025.02", text: "KAIST 전산학부 석사 졸업" },
  { date: "2024.07", text: "KT Vision AI연구담당 Research Intern" },
];

export default function AboutSection() {
  return (
    <section className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="news" />
      <table className="news-table w-full text-sm">
        <tbody>
          {news.map((item, i) => (
            <tr key={i} className="border-b border-divider last:border-0">
              <td className="py-2 pr-4 text-theme font-semibold whitespace-nowrap">
                {item.date}
              </td>
              <td className="py-2 text-text">{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
