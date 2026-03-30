"use client";

import { motion } from "framer-motion";
import { experiences } from "@/payload/experience";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="경력 사항" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0
                  ? "md:pr-12 ml-8 md:ml-0"
                  : "md:pl-12 ml-8 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 w-3 h-3 rounded-full bg-primary glow -left-[1.9rem] md:left-auto ${
                  i % 2 === 0 ? "md:-right-[0.4rem]" : "md:-left-[0.4rem]"
                }`}
              />

              <div className="bg-surface-light/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                <span className="text-xs text-accent font-medium tracking-wider uppercase">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{exp.company}</h3>
                <p className="text-primary-light text-sm mb-3">{exp.role}</p>
                <p className="text-slate-400 text-sm mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="text-sm text-slate-300 flex gap-2">
                      <span className="text-primary mt-1 shrink-0">&#9656;</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
