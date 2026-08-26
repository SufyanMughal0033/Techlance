"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative flex h-9 w-[60px] shrink-0 items-center rounded-full border border-border bg-surface px-1 transition-colors duration-300 ease-premium hover:border-ink/30"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-bg shadow-sm transition-transform duration-300 ease-premium ${
          isDark ? "translate-x-[26px]" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={14} strokeWidth={2} className="text-accent" />
        ) : (
          <Sun size={14} strokeWidth={2} className="text-accent" />
        )}
      </span>
    </button>
  );
}
