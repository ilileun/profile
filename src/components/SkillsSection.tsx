"use client";

import { skills } from "@/payload/skills";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="skills" subtitle="기술 스택" />
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-theme uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 text-sm rounded bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                >
                  {skill.name}
                  {skill.level >= 5 && (
                    <span className="ml-1 text-theme text-xs">&#9679;</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
