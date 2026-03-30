"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const interests = [
  {
    title: "Document Image Vector Chunking",
    description: "문서 이미지를 벡터로 변환하여 효율적으로 청킹하는 기술",
    icon: "📄",
  },
  {
    title: "Multimodal RAG",
    description: "텍스트 + 이미지 + 테이블 통합 검색 증강 생성",
    icon: "🔍",
  },
  {
    title: "AI Agent",
    description: "문서 처리 파이프라인 자동화를 위한 에이전트 시스템",
    icon: "🤖",
  },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Interests" subtitle="현재 관심 분야" />
        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-surface-light/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
