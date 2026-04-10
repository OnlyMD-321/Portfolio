"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ui } from "@/app/i18n/translations";

const SUPPORTED_LOCALES = ["fr", "en", "ar"];
const RTL_LOCALES = new Set(["ar"]);

const LocaleContext = createContext({
  locale: "fr",
  setLocale: () => {},
  t: (key) => key,
  dir: "ltr",
  isRTL: false,
});

function getInitialLocale() {
  if (typeof window === "undefined") return "fr";
  try {
    const stored = window.localStorage.getItem("portfolio_locale");
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
  } catch (_) {
    // Ignore storage access issues and fallback to FR.
  }
  return "fr";
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  useEffect(() => {
    const dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    try {
      window.localStorage.setItem("portfolio_locale", locale);
    } catch (_) {
      // Ignore storage write issues.
    }
  }, [locale]);

  const value = useMemo(() => {
    const dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";
    return {
      locale,
      setLocale,
      dir,
      isRTL: dir === "rtl",
      t: (key) => ui[key]?.[locale] || ui[key]?.fr || key,
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>
      <div dir={value.dir}>{children}</div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export const locales = SUPPORTED_LOCALES;
