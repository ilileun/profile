"use client";

import { motion } from "framer-motion";
import { projects } from "@/payload/projects";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    label: "메리츠화재 · KT 공동연구",
    color: "border-pink-300 dark:border-pink-700",
    bg: "bg-pink-50/50 dark:bg-pink-950/20",
    dot: "bg-pink-400",
    filter: (p: typeof projects[number]) => p.org.includes("메리츠"),
  },
  {
    label: "KT 미디어본부 기술지원",
    color: "border-orange-300 dark:border-orange-700",
    bg: "bg-orange-50/50 dark:bg-orange-950/20",
    dot: "bg-orange-400",
    filter: (p: typeof projects[number]) => p.org.includes("미디어본부"),
  },
  {
    label: "KT Vision AI 인턴",
    color: "border-amber-300 dark:border-amber-700",
    bg: "bg-amber-50/50 dark:bg-amber-950/20",
    dot: "bg-amber-400",
    filter: (p: typeof projects[number]) => p.org.includes("KT 인턴"),
  },
  {
    label: "KAIST 석사 연구",
    color: "border-blue-300 dark:border-blue-700",
    bg: "bg-blue-50/50 dark:bg-blue-950/20",
    dot: "bg-blue-400",
    filter: (p: typeof projects[number]) => p.org.includes("KAIST"),
  },
  {
    label: "POSCO Smart Factory",
    color: "border-slate-300 dark:border-slate-600",
    bg: "bg-slate-50/50 dark:bg-slate-950/20",
    dot: "bg-slate-400",
    filter: (p: typeof projects[number]) => p.org.includes("POSCO"),
  },
  {
    label: "전남대 학부 연구",
    color: "border-emerald-300 dark:border-emerald-700",
    bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
    dot: "bg-emerald-400",
    filter: (p: typeof projects[number]) => p.org.includes("전남대"),
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="projects" subtitle="프로젝트" />

      <div className="space-y-12">
        {groups.map((group) => {
          const items = projects.filter(group.filter);
          if (items.length === 0) return null;
          return (
            <div key={group.label}>
              {/* Group header */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-3 h-3 rounded-full ${group.dot}`} />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {group.label}
                </h3>
              </div>

              <div className="space-y-4">
                {items.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className={`rounded-xl border ${group.color} ${group.bg} p-5`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                      <h4 className="text-[15px] font-semibold">
                        {project.title}
                      </h4>
                      <span
                        className="text-xs text-gray-400 shrink-0"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {project.period}
                      </span>
                    </div>

                    <div className="space-y-2 text-[14px] leading-relaxed">
                      <p>
                        <span className="inline-block text-theme font-semibold text-xs mr-1.5 bg-theme/10 px-1.5 py-0.5 rounded">
                          Problem
                        </span>
                        {project.problem}
                      </p>
                      <p>
                        <span className="inline-block text-theme font-semibold text-xs mr-1.5 bg-theme/10 px-1.5 py-0.5 rounded">
                          Approach
                        </span>
                        {project.approach}
                      </p>
                      <p>
                        <span className="inline-block text-theme font-semibold text-xs mr-1.5 bg-theme/10 px-1.5 py-0.5 rounded">
                          Result
                        </span>
                        {project.result}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded bg-white/60 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
