"use client";

import { publications } from "@/payload/publications";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const basePath = process.env.NODE_ENV === "production" ? "/profile" : "";

function highlightAuthor(authors: string) {
  return authors.replace(
    /Jieun Choi/g,
    '<span class="font-semibold underline decoration-theme/40">Jieun Choi</span>'
  );
}

export default function PublicationsSection() {
  return (
    <section id="publications" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading title="publications" subtitle="논문" />
      <ol className="space-y-8 list-none">
        {publications.map((pub, i) => (
          <li key={pub.title}>
            <div className="flex gap-4">
              {/* Thumbnail */}
              {pub.thumbnail && (
                <div className="shrink-0 hidden sm:block">
                  <div className="w-28 h-28 rounded-lg border border-gray-100 dark:border-gray-700 bg-white overflow-hidden flex items-center justify-center">
                    <img
                      src={`${basePath}${pub.thumbnail}`}
                      alt={pub.title}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>
              )}

              <div className="flex-1">
                <div className="flex gap-2 items-start">
                  <span
                    className="text-sm text-gray-400 mt-0.5 shrink-0"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    [{i + 1}]
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-snug mb-1">
                      &ldquo;{pub.title}&rdquo;
                    </h3>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400 mb-1.5"
                      dangerouslySetInnerHTML={{
                        __html: highlightAuthor(pub.authors),
                      }}
                    />
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm text-gray-500 italic">
                        {pub.venue}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                          pub.status === "Published"
                            ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                            : pub.status === "Preprint"
                              ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
                              : "bg-gray-50 text-gray-600 border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                        }`}
                      >
                        {pub.status}
                      </span>
                      <span className="px-2 py-0.5 text-xs rounded-md bg-theme/5 text-theme border border-theme/15">
                        {pub.role}
                      </span>
                      {pub.citations && (
                        <span className="text-xs text-gray-400">
                          Cited by {pub.citations}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md bg-theme/5 text-theme border border-theme/20 hover:bg-theme/10 transition-colors"
                        >
                          <FiExternalLink size={12} /> Link
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={`${basePath}${pub.pdf}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
                        >
                          <FiFileText size={12} /> PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {i < publications.length - 1 && (
              <div className="mt-6 h-px bg-gray-100 dark:bg-gray-800" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
