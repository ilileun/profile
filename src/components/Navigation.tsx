"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const basePath = process.env.NODE_ENV === "production" ? "/profile" : "";

const navItems = [
  { label: "about", href: "#" },
  { label: "publications", href: "#publications" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "awards", href: "#awards" },
  { label: "cv", href: `${basePath}/cv` },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#1c1c1d]/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-[800px] mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-base font-bold hover:text-theme transition-colors"
        >
          Jieun Choi
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-theme transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
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
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1c1c1d] px-6 py-3 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-500 hover:text-theme"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
