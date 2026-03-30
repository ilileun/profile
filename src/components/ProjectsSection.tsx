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
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-base font-semibold">
                {project.title}
                <span className="text-xs text-theme font-medium ml-2">
                  {project.org}
                </span>
              </h3>
              <span
                className="text-xs text-gray-400 shrink-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {project.period}
              </span>
            </div>

            <div className="space-y-1.5 text-[14px] leading-relaxed">
              <p>
                <span className="text-theme font-medium text-xs mr-1.5">Problem</span>
                {project.problem}
              </p>
              <p>
                <span className="text-theme font-medium text-xs mr-1.5">Approach</span>
                {project.approach}
              </p>
              <p>
                <span className="text-theme font-medium text-xs mr-1.5">Result</span>
                {project.result}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-3">
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
