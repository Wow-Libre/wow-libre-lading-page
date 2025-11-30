"use client";

import { useI18n } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  const { t, locale } = useI18n();
  const dateLocale = locale === "es" ? "es-ES" : "en-US";

  const browserLinks = {
    chrome: "https://support.google.com/chrome/answer/95647",
    firefox:
      "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias",
    safari: "https://support.apple.com/es-es/guide/safari/sfri11471/mac",
    edge: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navigation />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-folkard">
            {t("legal.cookies.title")}
          </h1>

          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg text-gray-400">
              {t("legal.cookies.lastUpdated")}:{" "}
              {new Date().toLocaleDateString(dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.cookies.sections.what.title")}
              </h2>
              <p>{t("legal.cookies.sections.what.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.cookies.sections.types.title")}
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {t("legal.cookies.sections.types.essential.title")}
                  </h3>
                  <p>{t("legal.cookies.sections.types.essential.content")}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {t("legal.cookies.sections.types.performance.title")}
                  </h3>
                  <p>{t("legal.cookies.sections.types.performance.content")}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {t("legal.cookies.sections.types.functionality.title")}
                  </h3>
                  <p>
                    {t("legal.cookies.sections.types.functionality.content")}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {t("legal.cookies.sections.types.analytics.title")}
                  </h3>
                  <p>{t("legal.cookies.sections.types.analytics.content")}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.cookies.sections.thirdParty.title")}
              </h2>
              <p>{t("legal.cookies.sections.thirdParty.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[
                  "legal.cookies.sections.thirdParty.items.0",
                  "legal.cookies.sections.thirdParty.items.1",
                  "legal.cookies.sections.thirdParty.items.2",
                ].map((key, index) => (
                  <li key={index}>{t(key)}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.cookies.sections.management.title")}
              </h2>
              <p>{t("legal.cookies.sections.management.content")}</p>
              <p className="mt-4">
                {t("legal.cookies.sections.management.moreInfo")}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <a
                    href={browserLinks.chrome}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F97316] hover:underline"
                  >
                    {t("legal.cookies.sections.management.browsers.chrome")}
                  </a>
                </li>
                <li>
                  <a
                    href={browserLinks.firefox}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F97316] hover:underline"
                  >
                    {t("legal.cookies.sections.management.browsers.firefox")}
                  </a>
                </li>
                <li>
                  <a
                    href={browserLinks.safari}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F97316] hover:underline"
                  >
                    {t("legal.cookies.sections.management.browsers.safari")}
                  </a>
                </li>
                <li>
                  <a
                    href={browserLinks.edge}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F97316] hover:underline"
                  >
                    {t("legal.cookies.sections.management.browsers.edge")}
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.cookies.sections.table.title")}
              </h2>
              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="border border-white/20 p-3 text-left">
                        {t("legal.cookies.sections.table.headers.name")}
                      </th>
                      <th className="border border-white/20 p-3 text-left">
                        {t("legal.cookies.sections.table.headers.purpose")}
                      </th>
                      <th className="border border-white/20 p-3 text-left">
                        {t("legal.cookies.sections.table.headers.duration")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-white/20 p-3">
                        {t("legal.cookies.sections.table.rows.locale.name")}
                      </td>
                      <td className="border border-white/20 p-3">
                        {t("legal.cookies.sections.table.rows.locale.purpose")}
                      </td>
                      <td className="border border-white/20 p-3">
                        {t("legal.cookies.sections.table.rows.locale.duration")}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-white/20 p-3">
                        {t("legal.cookies.sections.table.rows.session.name")}
                      </td>
                      <td className="border border-white/20 p-3">
                        {t("legal.cookies.sections.table.rows.session.purpose")}
                      </td>
                      <td className="border border-white/20 p-3">
                        {t(
                          "legal.cookies.sections.table.rows.session.duration"
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.cookies.sections.changes.title")}
              </h2>
              <p>{t("legal.cookies.sections.changes.content")}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                {t("legal.cookies.sections.contact.title")}
              </h2>
              <p>{t("legal.cookies.sections.contact.content")}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
