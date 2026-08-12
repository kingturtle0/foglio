import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
    default: "Youngjae — Bioinformatics Developer",
    template: "%s — Youngjae",
  },
  description:
    "Bioinformatics, scientific software, and production workflow projects.",
  openGraph: {
    title: "Youngjae — Bioinformatics Developer",
    description:
      "Bioinformatics, scientific software, and production workflow projects.",
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
