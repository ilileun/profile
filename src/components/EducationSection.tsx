"use client";

import { motion } from "framer-motion";
import { education } from "@/payload/education";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" subtitle="학력" />
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-light/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <p className="text-primary-light text-sm">{edu.major}</p>
                  {edu.description && (
                    <p className="text-slate-400 text-sm mt-1">
                      {edu.description}
                    </p>
                  )}
                  {edu.gpa && (
                    <p className="text-slate-500 text-sm mt-1">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <span className="text-xs text-accent font-medium tracking-wider shrink-0">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
