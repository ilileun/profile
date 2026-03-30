"use client";

import { motion } from "framer-motion";
import { projects } from "@/payload/projects";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface-light/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Projects" subtitle="프로젝트" />
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-surface/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-light">{project.org}</p>
                </div>
                <span className="text-xs text-accent font-medium tracking-wider shrink-0">
                  {project.period}
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-4">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((h, hi) => (
                  <li key={hi} className="text-sm text-slate-300 flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">&#9656;</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary-light border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
