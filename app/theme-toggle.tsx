"use client";

import { Moon, SunDim } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "wk-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }

    return "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-3 rounded-full border border-slate-300/80 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition hover:border-sky-500/60 hover:bg-white dark:border-white/12 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-sky-400/60 dark:hover:bg-slate-900"
      aria-label="Toggle theme"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs text-white dark:bg-sky-400 dark:text-slate-950"
      >
        {theme === "dark" ? <SunDim /> : <Moon />}
      </span>
      <span>{theme === "dark" ? "Light theme" : "Dark theme"}</span>
    </button>
  );
}
