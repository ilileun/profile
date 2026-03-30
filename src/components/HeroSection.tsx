"use client";

import { motion } from "framer-motion";
import { profile } from "@/payload/profile";
import { FiMail, FiPhone } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-dark/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8 inline-block"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 glow">
            <div className="w-full h-full rounded-full bg-surface-light flex items-center justify-center text-4xl font-bold gradient-text">
              {profile.name.charAt(0)}
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-2"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-500 mb-4"
        >
          {profile.nameEn}
        </motion.p>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 mb-2 font-light"
        >
          {profile.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base text-slate-500 mb-10 max-w-2xl mx-auto"
        >
          {profile.tagline}
        </motion.p>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-light/80 border border-white/5 text-slate-400 hover:text-white hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <FiMail size={18} />
            <span className="text-sm">{profile.contact.email}</span>
          </a>
          <a
            href={`tel:${profile.contact.phone}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-light/80 border border-white/5 text-slate-400 hover:text-white hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <FiPhone size={18} />
            <span className="text-sm">{profile.contact.phone}</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-primary-light"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
