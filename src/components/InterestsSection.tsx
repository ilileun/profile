"use client";

import SectionHeading from "./SectionHeading";

const interests = [
  {
    title: "Document Image Vector Chunking",
    description: "문서 이미지를 벡터로 변환하여 효율적으로 청킹하는 기술",
  },
  {
    title: "Multimodal RAG",
    description: "텍스트 + 이미지 + 테이블 통합 검색 증강 생성",
  },
  {
    title: "AI Agent",
    description: "문서 처리 파이프라인 자동화를 위한 에이전트 시스템",
  },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="interests" subtitle="현재 관심 분야" />
      <div className="grid md:grid-cols-3 gap-4">
        {interests.map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50"
          >
            <h3 className="text-sm font-semibold text-theme mb-1">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
