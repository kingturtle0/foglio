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
    default: "영재 — 바이오인포매틱스 개발자",
    template: "%s — 영재",
  },
  description: "바이오인포매틱스, 과학 소프트웨어, 운영 워크플로 프로젝트를 소개합니다.",
  openGraph: {
    title: "영재 — 바이오인포매틱스 개발자",
    description: "바이오인포매틱스, 과학 소프트웨어, 운영 워크플로 프로젝트를 소개합니다.",
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
