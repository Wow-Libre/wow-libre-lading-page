"use client";

import { useI18n } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPage() {
  const { t, locale } = useI18n();
  const dateLocale = locale === "es" ? "es-ES" : "en-US";

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navigation />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-folkard">
            {t("legal.privacy.title")}
          </h1>

          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg text-gray-400">
              {t("legal.privacy.lastUpdated")}:{" "}
              {new Date().toLocaleDateString(dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.information.title")}
              </h2>
              <p>{t("legal.privacy.sections.information.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[
                  "legal.privacy.sections.information.items.0",
                  "legal.privacy.sections.information.items.1",
                  "legal.privacy.sections.information.items.2",
                  "legal.privacy.sections.information.items.3",
                ].map((key, index) => (
                  <li key={index}>{t(key)}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.usage.title")}
              </h2>
              <p>{t("legal.privacy.sections.usage.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[
                  "legal.privacy.sections.usage.items.0",
                  "legal.privacy.sections.usage.items.1",
                  "legal.privacy.sections.usage.items.2",
                  "legal.privacy.sections.usage.items.3",
                  "legal.privacy.sections.usage.items.4",
                  "legal.privacy.sections.usage.items.5",
                ].map((key, index) => (
                  <li key={index}>{t(key)}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.sharing.title")}
              </h2>
              <p>{t("legal.privacy.sections.sharing.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[
                  "legal.privacy.sections.sharing.items.0",
                  "legal.privacy.sections.sharing.items.1",
                  "legal.privacy.sections.sharing.items.2",
                ].map((key, index) => (
                  <li key={index}>{t(key)}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.security.title")}
              </h2>
              <p>{t("legal.privacy.sections.security.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.retention.title")}
              </h2>
              <p>{t("legal.privacy.sections.retention.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.rights.title")}
              </h2>
              <p>{t("legal.privacy.sections.rights.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[
                  "legal.privacy.sections.rights.items.0",
                  "legal.privacy.sections.rights.items.1",
                  "legal.privacy.sections.rights.items.2",
                  "legal.privacy.sections.rights.items.3",
                  "legal.privacy.sections.rights.items.4",
                  "legal.privacy.sections.rights.items.5",
                ].map((key, index) => (
                  <li key={index}>{t(key)}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.cookies.title")}
              </h2>
              <p>
                {t("legal.privacy.sections.cookies.content")}{" "}
                <Link
                  href={`/${locale}/cookies`}
                  className="text-[#F97316] hover:underline"
                >
                  {t("legal.privacy.sections.cookies.link")}
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.changes.title")}
              </h2>
              <p>{t("legal.privacy.sections.changes.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.privacy.sections.contact.title")}
              </h2>
              <p>{t("legal.privacy.sections.contact.content")}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
