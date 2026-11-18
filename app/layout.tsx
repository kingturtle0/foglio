import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { siteProfile } from "@/content/site";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
    } catch (_) {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export const metadata: Metadata = {
  title: {
    default: `${siteProfile.name} — ${siteProfile.positioning}`,
    template: "%s — 영재",
  },
  description: siteProfile.description,
  openGraph: {
    title: `${siteProfile.name} — ${siteProfile.positioning}`,
    description: siteProfile.description,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-theme="light" suppressHydrationWarning>
      <body className={pretendard.variable}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
