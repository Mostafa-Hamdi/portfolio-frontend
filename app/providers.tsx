"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "./i18n/translations";

type Theme = "dark" | "light";

interface AppContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: Translations;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProviders({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Lang;
}) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // Read persisted theme after mount so the first client render
    // still matches the server-rendered default (avoids hydration mismatch).
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme === "dark" || storedTheme === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeState(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: translations[lang],
      theme,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    }),
    [lang, theme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProviders");
  return ctx;
}
