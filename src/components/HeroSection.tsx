"use client";

import { motion } from "framer-motion";
import { profile } from "@/payload/profile";
import { FiMail } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

const basePath = process.env.NODE_ENV === "production" ? "/profile" : "";

export default function HeroSection() {
  return (
    <section className="max-w-[800px] mx-auto px-6 pt-16 pb-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 mx-auto md:mx-0"
        >
          <img
            src={`${basePath}/profile.jpg`}
            alt={profile.name}
            width={144}
            height={144}
            className="w-36 h-36 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
          />
        </motion.div>

        {/* Right: Info */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-1"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-4"
          >
            {profile.nameEn}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base text-theme font-medium mb-5"
          >
            {profile.title}
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border-l-[3px] border-theme/40 pl-4 mb-6"
          >
            <p className="text-[14px] text-gray-500 dark:text-gray-400 italic leading-relaxed">
              &ldquo;{profile.quote.text}&rdquo;
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              — {profile.quote.author}
            </p>
          </motion.blockquote>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-2 mb-5"
          >
            {profile.introduction.map((text, i) => (
              <p key={i} className="text-[15px] leading-relaxed">
                {text}
              </p>
            ))}
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              Interests
            </span>
            {profile.interests.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-theme/5 text-theme border border-theme/15 font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-1.5 hover:text-theme transition-colors"
            >
              <FiMail size={14} className="text-theme" />
              {profile.contact.email}
            </a>
            {profile.contact.scholar && (
              <a
                href={profile.contact.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-theme transition-colors"
              >
                <SiGooglescholar size={14} className="text-theme" />
                Google Scholar
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
