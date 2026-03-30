"use client";

import { experiences } from "@/payload/experience";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="experience" subtitle="경력" />
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-text">
                  {exp.company}
                </h3>
                <p className="text-theme text-sm font-medium">{exp.role}</p>
              </div>
              <span
                className="text-sm text-muted shrink-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {exp.period}
              </span>
            </div>

            <p className="text-sm text-muted mb-3">{exp.description}</p>

            <ul className="space-y-1.5 mb-4">
              {exp.highlights.map((h, hi) => (
                <li
                  key={hi}
                  className="text-[14px] text-text leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted"
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded bg-theme/5 text-theme border border-theme/15"
                >
                  {tech}
                </span>
              ))}
            </div>

            {i < experiences.length - 1 && (
              <div className="mt-8 h-px bg-divider" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
