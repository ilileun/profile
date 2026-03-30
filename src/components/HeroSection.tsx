"use client";

import { profile } from "@/payload/profile";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

export default function HeroSection() {
  const contacts = [
    profile.contact.email && {
      icon: FiMail,
      href: `mailto:${profile.contact.email}`,
      label: profile.contact.email,
    },
    profile.contact.phone && {
      icon: FiPhone,
      href: `tel:${profile.contact.phone}`,
      label: profile.contact.phone,
    },
    profile.contact.github && {
      icon: FiGithub,
      href: profile.contact.github,
      label: "GitHub",
    },
    profile.contact.linkedin && {
      icon: FiLinkedin,
      href: profile.contact.linkedin,
      label: "LinkedIn",
    },
  ].filter(Boolean) as { icon: typeof FiMail; href: string; label: string }[];

  return (
    <section className="max-w-[800px] mx-auto px-6 pt-16 pb-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Avatar */}
        <div className="shrink-0 mx-auto md:mx-0">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-theme/20 to-theme-dark/20 flex items-center justify-center border-2 border-divider">
            <span className="text-5xl font-bold text-theme">
              {profile.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-1">
            {profile.name}
          </h1>
          <p className="text-lg text-muted mb-4">{profile.nameEn}</p>

          <p className="text-base text-theme font-medium mb-4">
            {profile.title}
          </p>

          {/* Contact in monospace */}
          <div
            className="space-y-1 mb-6 text-sm text-text-light"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {contacts.map(({ icon: Icon, href, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={14} className="text-theme" />
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="hover:text-theme transition-colors"
                >
                  {label}
                </a>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="space-y-3 text-[15px] leading-relaxed text-text">
            {profile.introduction.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
