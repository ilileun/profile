"use client";

import { projects } from "@/payload/projects";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="projects" subtitle="프로젝트" />
      <div className="space-y-8">
        {projects.map((project, i) => (
          <div key={project.title}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-base font-semibold">
                {project.title}
              </h3>
              <span
                className="text-xs text-gray-400 shrink-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {project.period}
              </span>
            </div>

            <p className="text-xs text-theme mb-2">{project.org}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {project.description}
            </p>

            <ul className="space-y-1 mb-3">
              {project.highlights.map((h, hi) => (
                <li
                  key={hi}
                  className="text-[13px] leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-400"
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {i < projects.length - 1 && (
              <div className="mt-6 h-px bg-gray-100 dark:bg-gray-800" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
