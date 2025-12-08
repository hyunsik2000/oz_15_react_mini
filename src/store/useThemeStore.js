import { create } from "zustand";

const initialTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

export const useThemeStore = create((set) => ({
  theme: initialTheme,
  isThemeReady: false,

  initializeTheme: () =>
    set((state) => {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(state.theme);

      return { isThemeReady: true };
    }),

  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);

      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(next);

      return { theme: next };
    }),
}));
