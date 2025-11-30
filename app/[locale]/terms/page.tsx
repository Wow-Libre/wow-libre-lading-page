"use client";

import { useI18n } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  const { t, locale } = useI18n();
  const dateLocale = locale === "es" ? "es-ES" : "en-US";

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navigation />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-folkard">
            {t("legal.terms.title")}
          </h1>

          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg text-gray-400">
              {t("legal.terms.lastUpdated")}:{" "}
              {new Date().toLocaleDateString(dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.acceptance.title")}
              </h2>
              <p>{t("legal.terms.sections.acceptance.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.description.title")}
              </h2>
              <p>{t("legal.terms.sections.description.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.usage.title")}
              </h2>
              <p>{t("legal.terms.sections.usage.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[
                  "legal.terms.sections.usage.items.0",
                  "legal.terms.sections.usage.items.1",
                  "legal.terms.sections.usage.items.2",
                  "legal.terms.sections.usage.items.3",
                  "legal.terms.sections.usage.items.4",
                ].map((key, index) => (
                  <li key={index}>{t(key)}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.payments.title")}
              </h2>
              <p>{t("legal.terms.sections.payments.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.cancellation.title")}
              </h2>
              <p>{t("legal.terms.sections.cancellation.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.liability.title")}
              </h2>
              <p>{t("legal.terms.sections.liability.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.intellectual.title")}
              </h2>
              <p>{t("legal.terms.sections.intellectual.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.modifications.title")}
              </h2>
              <p>{t("legal.terms.sections.modifications.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.terms.sections.contact.title")}
              </h2>
              <p>{t("legal.terms.sections.contact.content")}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
