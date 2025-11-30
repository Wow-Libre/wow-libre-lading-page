"use client";

import { useI18n } from "@/lib/i18n";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "es" | "en") => {
    setLocale(newLocale);
    // Actualizar la URL sin recargar
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale("es")}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 ${
          locale === "es"
            ? "bg-[#F97316] text-white"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 ${
          locale === "en"
            ? "bg-[#F97316] text-white"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        EN
      </button>
    </div>
  );
}
