"use client";

import { experiences } from "@/payload/experience";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="experience" subtitle="경력" />
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <div>
                <h3 className="text-base font-semibold">
                  {exp.company}
                  <span className="text-gray-400 font-normal text-sm ml-2">
                    {exp.role}
                  </span>
                </h3>
              </div>
              <span
                className="text-sm text-gray-400 shrink-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {exp.period}
              </span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {exp.description}
            </p>

            {exp.highlights.length > 0 && (
              <ul className="space-y-1">
                {exp.highlights.map((h, hi) => (
                  <li
                    key={hi}
                    className="text-[14px] leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-400"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {i < experiences.length - 1 && (
              <div className="mt-6 h-px bg-gray-100 dark:bg-gray-800" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
