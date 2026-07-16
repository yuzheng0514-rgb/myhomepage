"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.dataset.theme = shouldUseDark ? "dark" : "light";
    setDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      <span aria-hidden="true">{dark ? "☀" : "◐"}</span>
    </button>
  );
}
