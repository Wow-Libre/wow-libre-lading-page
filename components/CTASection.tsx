"use client";

import { useI18n } from "@/lib/i18n";

export default function CTASection() {
  const { t } = useI18n();

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
      <div className="relative bg-linear-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-16 text-center overflow-hidden border border-white/10">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3)_0%,transparent_70%)]" />
        </div>
        {/* Accent gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F97316]/20 blur-3xl rounded-full" />

        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.link/yrvybr"
              className="px-10 py-5 bg-[#F97316] text-white rounded-xl font-semibold text-lg hover:bg-[#EA580C] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F97316]/20 inline-block text-center"
            >
              {t("cta.primary")}
            </a>
            <a
              href="#pricing"
              className="px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 inline-block text-center"
            >
              {t("cta.secondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
