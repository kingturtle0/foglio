"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(
    (onStoreChange) => {
      window.addEventListener("portfolio-theme-change", onStoreChange);
      return () => window.removeEventListener("portfolio-theme-change", onStoreChange);
    },
    () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"),
    () => "light",
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  const nextThemeLabel = theme === "light" ? "다크" : "라이트";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`${nextThemeLabel} 테마로 전환`}
      title={`${nextThemeLabel} 테마로 전환`}
    >
      <span aria-hidden="true" className="theme-toggle__mark">
        {theme === "light" ? "◐" : "◑"}
      </span>
      <span className="theme-toggle__text">{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
