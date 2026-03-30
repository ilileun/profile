"use client";

import { publications } from "@/payload/publications";
import SectionHeading from "./SectionHeading";

export default function PublicationsSection() {
  return (
    <section id="publications" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="publications" subtitle="논문" />
      <ol className="space-y-6 list-none">
        {publications.map((pub, i) => (
          <li key={pub.title}>
            <div className="flex gap-3">
              <span className="text-sm text-muted font-mono mt-0.5 shrink-0">
                [{i + 1}]
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-text leading-snug mb-1">
                  &ldquo;{pub.title}&rdquo;
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-sm text-muted italic">{pub.venue}</span>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                      pub.status === "Published"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {pub.status}
                  </span>
                  <span className="px-2 py-0.5 text-xs rounded-md bg-theme/5 text-theme border border-theme/15">
                    {pub.role}
                  </span>
                  {pub.citations && (
                    <span className="text-xs text-muted">
                      Cited by {pub.citations}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted">{pub.description}</p>
              </div>
            </div>
            {i < publications.length - 1 && (
              <div className="mt-5 h-px bg-divider ml-8" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
