"use client";

import { motion } from "framer-motion";
import { profile } from "@/payload/profile";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About Me" subtitle="저를 소개합니다" />
        <div className="space-y-6">
          {profile.introduction.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-lg text-slate-300 leading-relaxed pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
