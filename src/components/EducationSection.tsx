"use client";

import { education } from "@/payload/education";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="education" subtitle="학력" />
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <h3 className="text-base font-semibold text-text">{edu.school}</h3>
              <p className="text-sm text-theme">{edu.major}</p>
              {edu.description && (
                <p className="text-sm text-muted mt-0.5">{edu.description}</p>
              )}
              {edu.gpa && (
                <p
                  className="text-xs text-muted mt-0.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  GPA: {edu.gpa}
                </p>
              )}
            </div>
            <span
              className="text-sm text-muted shrink-0"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
