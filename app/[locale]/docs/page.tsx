"use client";

import { useI18n } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DocsPage() {
  const { t, locale } = useI18n();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navigation />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-folkard">
            {t("docs.title")}
          </h1>
          <p className="text-xl text-gray-400 mb-12">{t("docs.subtitle")}</p>

          <div className="text-gray-300 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("docs.sections.introduction.title")}
              </h2>
              <p className="text-lg">
                {t("docs.sections.introduction.content")}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("docs.sections.gettingStarted.title")}
              </h2>
              <p className="text-lg mb-4">
                {t("docs.sections.gettingStarted.content")}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[
                  "docs.sections.gettingStarted.steps.0",
                  "docs.sections.gettingStarted.steps.1",
                  "docs.sections.gettingStarted.steps.2",
                  "docs.sections.gettingStarted.steps.3",
                  "docs.sections.gettingStarted.steps.4",
                ].map((key, index) => (
                  <li key={index} className="text-lg">
                    {t(key)}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("docs.sections.features.title")}
              </h2>
              <p className="text-lg mb-4">
                {t("docs.sections.features.content")}
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4 mb-8">
                {[
                  "docs.sections.features.items.0",
                  "docs.sections.features.items.1",
                  "docs.sections.features.items.2",
                  "docs.sections.features.items.3",
                  "docs.sections.features.items.4",
                  "docs.sections.features.items.5",
                  "docs.sections.features.items.6",
                ].map((key, index) => (
                  <li key={index} className="text-lg leading-relaxed">
                    {t(key)}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl">
                <p className="text-xl font-semibold text-white mb-4 text-center">
                  {t("docs.sections.features.cta.title")}
                </p>
                <div className="flex justify-center">
                  <a
                    href={`/${locale}/features`}
                    className="px-8 py-3 bg-[#F97316] text-white rounded-lg font-semibold text-lg hover:bg-[#EA580C] transition-all duration-300 hover:scale-105 inline-block"
                  >
                    {t("docs.sections.features.cta.button")}
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("docs.sections.api.title")}
              </h2>
              <p className="text-lg">{t("docs.sections.api.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("docs.sections.support.title")}
              </h2>
              <p className="text-lg mb-4">
                {t("docs.sections.support.content")}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li className="text-lg">
                  {t("docs.sections.support.plans.starter")}
                </li>
                <li className="text-lg">
                  {t("docs.sections.support.plans.professional")}
                </li>
                <li className="text-lg">
                  {t("docs.sections.support.plans.enterprise")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("docs.sections.contact.title")}
              </h2>
              <p className="text-lg">{t("docs.sections.contact.content")}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
