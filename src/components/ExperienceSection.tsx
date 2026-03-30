"use client";

import { motion } from "framer-motion";
import { experiences } from "@/payload/experience";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="experience" subtitle="경력" />

      <div className="relative ml-4">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-theme via-theme/40 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative pl-8"
            >
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-theme border-2 border-white dark:border-[#1c1c1d]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-theme font-medium">
                    {exp.role}
                    <span className="text-gray-400 font-normal ml-2">
                      · {exp.duration} · {exp.location}
                    </span>
                  </p>
                </div>
                <span
                  className="text-sm text-gray-400 shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
