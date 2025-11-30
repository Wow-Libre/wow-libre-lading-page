"use client";

import { useI18n } from "@/lib/i18n";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";

const messages = {
  es: esMessages,
  en: enMessages,
};

export default function TechnologySection() {
  const { t, locale } = useI18n();

  const technologies =
    (messages[locale].tech.technologies as Array<{
      name: string;
      version: string;
    }>) || [];

  // Color pattern for technologies
  const colors = [
    "text-[#F97316]",
    "text-white",
    "text-[#5AC8FA]",
    "text-[#F97316]",
    "text-white",
    "text-[#5AC8FA]",
    "text-[#F97316]",
    "text-white",
  ];

  return (
    <section id="tech" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-16 backdrop-blur-md">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#5AC8FA]/10 border border-[#5AC8FA]/20 mb-6">
            <span className="text-[#5AC8FA] text-sm font-semibold">
              {t("tech.badge")}
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
            {t("tech.title")}
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            {t("tech.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <div
                className={`text-3xl font-bold mb-3 ${
                  colors[index % colors.length]
                }`}
              >
                {tech.name}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {tech.version}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
