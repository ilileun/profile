import type { Metadata } from "next";
import { profile } from "@/payload/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | AI Researcher`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | AI Researcher`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Noto Sans KR', 'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
