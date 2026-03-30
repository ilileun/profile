"use client";

import { motion } from "framer-motion";
import { skills } from "@/payload/skills";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-light/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills" subtitle="기술 스택" />
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="bg-surface/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">
                        {["", "Basic", "Junior", "Mid", "Senior", "Expert"][skill.level]}
                      </span>
                    </div>
                    <div className="h-2 bg-surface-lighter rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 20}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
