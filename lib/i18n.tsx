"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";

type Messages = typeof esMessages;

type Locale = "es" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const messages: Record<Locale, Messages> = {
  es: esMessages,
  en: enMessages,
};

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const value = path.split(".").reduce((current: unknown, key: string) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  return typeof value === "string" ? value : path;
}

export function I18nProvider({
  children,
  initialLocale = "es",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const prevInitialLocaleRef = useRef(initialLocale);

  // Sincronizar con initialLocale cuando cambia (desde la URL)
  // Usar queueMicrotask para evitar render síncrono
  useEffect(() => {
    if (prevInitialLocaleRef.current !== initialLocale) {
      prevInitialLocaleRef.current = initialLocale;
      queueMicrotask(() => {
        setLocaleState(initialLocale);
      });
    }
  }, [initialLocale]);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (key: string, params?: Record<string, string>): string => {
    let value = getNestedValue(messages[locale], key);

    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        value = value.replace(`{${paramKey}}`, paramValue);
      });
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
