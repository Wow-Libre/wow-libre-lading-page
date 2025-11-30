"use client";

import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const { t, locale } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center group-hover:bg-[#EA580C] transition-all duration-300 overflow-hidden">
            <Image
              src="/lobo.png"
              alt="SkollForge Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <span className="text-white text-xl font-semibold block">
              SkollForge
            </span>
            <span className="text-gray-500 text-xs">CMS Professional</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={`/${locale}#features`}
            className="text-gray-400 hover:text-white transition-all duration-300 relative group"
          >
            {t("nav.features")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href={`/${locale}#tech`}
            className="text-gray-400 hover:text-white transition-all duration-300 relative group"
          >
            {t("nav.tech")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href={`/${locale}#pricing`}
            className="text-gray-400 hover:text-white transition-all duration-300 relative group"
          >
            {t("nav.pricing")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href={`/${locale}#contact`}
            className="text-gray-400 hover:text-white transition-all duration-300 relative group"
          >
            {t("nav.contact")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.link/yrvybr"
            className="px-6 py-2.5 bg-[#F97316] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#EA580C] hover:scale-105"
          >
            {t("nav.start")}
          </a>
        </div>
      </div>
    </nav>
  );
}
