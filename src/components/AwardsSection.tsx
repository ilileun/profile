"use client";

import { motion } from "framer-motion";
import { awards } from "@/payload/awards";
import { certificates, languages } from "@/payload/education";
import { FiAward, FiBookOpen, FiGlobe } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 px-6 bg-surface-light/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Awards & Certifications" subtitle="수상 및 자격" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
              <FiAward className="text-yellow-400" /> 수상
            </h3>
            <div className="space-y-3">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="bg-surface/60 backdrop-blur-sm rounded-xl p-4 border border-white/5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-medium">
                      {award.grade}
                    </span>
                    <span className="text-xs text-slate-500">{award.date}</span>
                  </div>
                  <h4 className="text-sm text-white font-medium">
                    {award.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{award.org}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
              <FiBookOpen className="text-accent" /> 자격증
            </h3>
            <div className="space-y-3">
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  className="bg-surface/60 backdrop-blur-sm rounded-xl p-4 border border-white/5"
                >
                  <h4 className="text-sm text-white font-medium">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {cert.issuer} | {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
              <FiGlobe className="text-primary-light" /> 어학
            </h3>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="bg-surface/60 backdrop-blur-sm rounded-xl p-4 border border-white/5"
                >
                  <h4 className="text-sm text-white font-medium">
                    {lang.name}
                  </h4>
                  <p className="text-xs text-slate-500">{lang.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
