"use client";

import { useState } from "react";

const navItems = [
  { label: "about", href: "#" },
  { label: "publications", href: "#publications" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "cv", href: "#education" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-divider">
      <div className="max-w-[800px] mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-base font-bold text-text hover:text-theme transition-colors"
        >
          ~/{" "}
          <span className="text-theme">jieun</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-theme transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-muted hover:text-text"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M5 5l10 10M5 15L15 5" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-divider bg-white px-6 py-3 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted hover:text-theme"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
