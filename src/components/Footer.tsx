"use client";

import { profile } from "@/payload/profile";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-6">
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} {profile.name} ({profile.nameEn}).
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
