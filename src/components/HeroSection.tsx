"use client";

import { profile } from "@/payload/profile";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="max-w-[800px] mx-auto px-6 pt-16 pb-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Avatar */}
        <div className="shrink-0 mx-auto md:mx-0">
          <img
            src={`${process.env.NODE_ENV === "production" ? "/profile" : ""}/profile.jpg`}
            alt={profile.name}
            width={144}
            height={144}
            className="w-36 h-36 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Right: Info */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-1">
            {profile.name}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
            {profile.nameEn}
          </p>

          <p className="text-base text-theme font-medium mb-4">
            {profile.title}
          </p>

          {/* Contact in monospace */}
          <div
            className="space-y-1.5 mb-6 text-sm text-gray-600 dark:text-gray-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <div className="flex items-center gap-2">
              <FiMail size={14} className="text-theme" />
              <a
                href={`mailto:${profile.contact.email}`}
                className="hover:text-theme transition-colors"
              >
                {profile.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone size={14} className="text-theme" />
              <a
                href={`tel:${profile.contact.phone}`}
                className="hover:text-theme transition-colors"
              >
                {profile.contact.phone}
              </a>
            </div>
            {profile.contact.scholar && (
              <div className="flex items-center gap-2">
                <SiGooglescholar size={14} className="text-theme" />
                <a
                  href={profile.contact.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme transition-colors"
                >
                  Google Scholar
                </a>
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="space-y-3 text-[15px] leading-relaxed">
            {profile.introduction.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
