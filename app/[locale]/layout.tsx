"use client";

import { I18nProvider } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const [locale, setLocale] = useState<"es" | "en">("es");

  useEffect(() => {
    const getLocale = async () => {
      const resolvedParams = params instanceof Promise ? await params : params;
      const urlLocale = resolvedParams.locale as "es" | "en";
      // La URL es la fuente de verdad, no localStorage
      setLocale(urlLocale || "es");
      // Sincronizar localStorage con la URL
      if (urlLocale) {
        localStorage.setItem("locale", urlLocale);
      }
    };
    getLocale();
  }, [params]);

  // Usar key para forzar re-render cuando cambia el locale
  return (
    <I18nProvider initialLocale={locale} key={locale}>
      {children}
    </I18nProvider>
  );
}
