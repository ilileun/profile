"use client";

import { awards } from "@/payload/awards";
import { certificates, languages } from "@/payload/education";
import SectionHeading from "./SectionHeading";

export default function AwardsSection() {
  return (
    <section id="awards" className="max-w-[800px] mx-auto px-6 py-10">
      <SectionHeading
        title="awards & certifications"
        subtitle="수상 및 자격"
      />

      {/* Awards */}
      <h3 className="text-sm font-semibold text-theme uppercase tracking-wider mb-4">
        Awards
      </h3>
      <table className="w-full text-sm mb-8">
        <tbody>
          {awards.map((award, i) => (
            <tr
              key={i}
              className="border-b border-gray-50 dark:border-gray-800 last:border-0"
            >
              <td
                className="py-2.5 pr-4 text-gray-400 whitespace-nowrap align-top"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {award.date}
              </td>
              <td className="py-2.5">
                <span className="font-medium">{award.title}</span>
                <span className="mx-1.5 text-gray-300 dark:text-gray-600">
                  ·
                </span>
                <span className="text-theme text-xs font-medium">
                  {award.grade}
                </span>
                <br />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {award.org} — {award.description}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Certificates & Languages */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-theme uppercase tracking-wider mb-4">
            Certifications
          </h3>
          <div className="space-y-2">
            {certificates.map((cert, i) => (
              <div key={i} className="text-sm">
                <span className="font-medium">{cert.name}</span>
                <br />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {cert.issuer} · {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-theme uppercase tracking-wider mb-4">
            Languages
          </h3>
          <div className="space-y-2">
            {languages.map((lang, i) => (
              <div key={i} className="text-sm">
                <span className="font-medium">{lang.name}</span>
                <br />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {lang.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
