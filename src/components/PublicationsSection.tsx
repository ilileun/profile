"use client";

import { motion } from "framer-motion";
import { publications } from "@/payload/publications";
import { FiFileText } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Publications" subtitle="논문" />
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-light/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <FiFileText className="text-primary-light" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold leading-snug mb-1">
                    &ldquo;{pub.title}&rdquo;
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm text-accent">{pub.venue}</span>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        pub.status === "Published"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      }`}
                    >
                      {pub.status}
                    </span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20">
                      {pub.role}
                    </span>
                    {pub.citations && (
                      <span className="text-xs text-slate-500">
                        Citations: {pub.citations}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400">{pub.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
