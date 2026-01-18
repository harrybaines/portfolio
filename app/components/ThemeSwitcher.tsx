"use client";

import { useEffect, useState } from "react";
import { Palette } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("default");
  const [showToast, setShowToast] = useState(false);

  const themes = [
    { id: "default", name: "Blue", class: "" },
    { id: "teal", name: "Teal", class: "teal-theme" },
    { id: "purple", name: "Purple", class: "purple-theme" },
  ];

  useEffect(() => {
    const handleDoubleClick = (e: MouseEvent) => {
      if (e.detail === 3) {
        // Triple click
        document.getElementById("theme-switcher-btn")?.classList.remove("opacity-0");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    };
    window.addEventListener("click", handleDoubleClick);
    return () => window.removeEventListener("click", handleDoubleClick);
  }, []);

  const switchTheme = () => {
    const currentIndex = themes.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    setTheme(nextTheme.id);
    document.documentElement.className = nextTheme.class;
  };

  return (
    <>
      <button
        id="theme-switcher-btn"
        onClick={switchTheme}
        className="fixed bottom-8 right-8 p-4 glass-card rounded-full shadow-lg opacity-0 hover:opacity-100 transition-all hover:scale-110"
        aria-label="Switch theme"
      >
        <Palette size={20} />
      </button>

      {showToast && (
        <div className="fixed top-24 right-8 glass-card p-4 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-4">
          <p className="text-sm font-mono">✨ Theme switcher unlocked!</p>
        </div>
      )}
    </>
  );
}
