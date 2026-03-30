"use client";

import { profile } from "@/payload/profile";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1c1c1d] dark:bg-gray-100 text-gray-400 dark:text-gray-600">
      <div className="max-w-[800px] mx-auto px-6 py-8 text-center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} {profile.name} ({profile.nameEn}).
          Powered by Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
