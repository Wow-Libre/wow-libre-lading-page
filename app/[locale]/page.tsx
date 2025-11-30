"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  const { t, locale } = useI18n();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Enhanced animated background effects - Apple style */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-[#F97316]/8 rounded-full blur-[120px] transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x / 15}px`,
            top: `${mousePosition.y / 15}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5AC8FA]/6 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#F97316]/6 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/3 rounded-full blur-[80px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Enhanced grid pattern overlay - Apple style */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Animated orbs - Apple style */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#F97316]/40 rounded-full animate-ping [animation-delay:0s]" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-[#5AC8FA]/40 rounded-full animate-ping [animation-delay:1s]" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping [animation-delay:2s]" />
      </div>

      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center w-full">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/20 backdrop-blur-md mb-10 hover:bg-white/10 transition-all duration-300 group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-200 text-sm font-medium">
              {t("hero.badge")}
            </span>
          </div>

          {/* Enhanced Main Heading with animation - Apple style */}
          <h1 className="text-7xl md:text-9xl font-extrabold mb-8 text-white leading-tight tracking-tight font-folkard">
            <span className="block animate-fade-in">{t("hero.title")}</span>
            <span className="block text-[#F97316]">{t("hero.subtitle")}</span>
          </h1>

          <p className="text-3xl md:text-4xl text-gray-300 mb-6 font-light tracking-wide">
            {t("hero.description")}
          </p>

          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
            {t("hero.text", {
              game: t("hero.game"),
              framework: t("hero.framework"),
            })}
          </p>

          {/* Enhanced CTA Buttons - Apple style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="#pricing"
              className="group relative px-6 py-3 bg-[#F97316] text-white rounded-lg font-medium text-base overflow-hidden transition-all duration-300 hover:bg-[#EA580C] hover:scale-105 inline-block"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("hero.cta.demo")}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
            <a
              href={`/${locale}/docs`}
              className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium text-base hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm inline-block"
            >
              {t("hero.cta.docs")}
            </a>
          </div>

          {/* Professional Integrations Section */}
          <div className="mt-24 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                {t("monitoring.title")}
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t("monitoring.subtitle")}
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t("monitoring.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Datadog Card */}
              <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#632CA6]/20 rounded-lg flex items-center justify-center border border-[#632CA6]/30">
                    <Image
                      src="https://imgix.datadoghq.com//img/about/presskit/DDlogo.jpg?dpr=2&auto=format"
                      alt="Datadog"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("monitoring.datadog.title")}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t("monitoring.datadog.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* New Relic Card */}
              <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#008C99]/20 rounded-lg flex items-center justify-center border border-[#008C99]/30 overflow-hidden">
                    <Image
                      src="https://play-lh.googleusercontent.com/yQj5aOQgDxKi1TuitOfVm4jyMDDbQdN6mLg_b2zZqscWBKxCvMk7atGiZBuQgKprZZY"
                      alt="New Relic"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("monitoring.newrelic.title")}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t("monitoring.newrelic.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: t("monitoring.features.metrics"),
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  borderColor: "border-blue-500/30",
                  textColor: "text-blue-400",
                },
                {
                  label: t("monitoring.features.alerts"),
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  ),
                  gradient: "from-amber-500/20 to-orange-500/20",
                  borderColor: "border-amber-500/30",
                  textColor: "text-amber-400",
                },
                {
                  label: t("monitoring.features.tracing"),
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  ),
                  gradient: "from-purple-500/20 to-pink-500/20",
                  borderColor: "border-purple-500/30",
                  textColor: "text-purple-400",
                },
                {
                  label: t("monitoring.features.dashboards"),
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                  gradient: "from-green-500/20 to-emerald-500/20",
                  borderColor: "border-green-500/30",
                  textColor: "text-green-400",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${
                    feature.gradient
                  } backdrop-blur-md border ${
                    feature.borderColor
                  } rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg hover:shadow-${
                    feature.textColor.split("-")[1]
                  }-500/20 transition-all duration-300 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className={`relative z-10 flex flex-col items-center gap-3`}
                  >
                    <div
                      className={`${feature.textColor} p-3 rounded-lg bg-black/20 backdrop-blur-sm border ${feature.borderColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div className="text-sm text-gray-300 font-semibold leading-tight">
                      {feature.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section
        id="features"
        className="relative z-10 max-w-7xl mx-auto px-6 py-32"
      >
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-6">
            <span className="text-[#F97316] text-sm font-semibold">
              CARACTERÍSTICAS
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Potencia tu Servidor
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas para gestionar tu servidor de forma
            profesional y eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "Rendimiento Óptimo",
              description:
                "Arquitectura optimizada para manejar miles de usuarios simultáneos sin problemas de rendimiento. Caché inteligente y consultas optimizadas.",
              gradient: "from-yellow-400 to-orange-500",
            },
            {
              icon: "🔒",
              title: "Seguridad Avanzada",
              description:
                "Sistema de autenticación robusto con JWT, encriptación de datos y protección contra ataques. Cumplimiento con estándares de seguridad.",
              gradient: "from-red-400 to-pink-500",
            },
            {
              icon: "📊",
              title: "Dashboard Intuitivo",
              description:
                "Panel de control moderno y fácil de usar para gestionar todos los aspectos de tu servidor. Métricas en tiempo real y visualizaciones interactivas.",
              gradient: "from-blue-400 to-cyan-500",
            },
            {
              icon: "🎮",
              title: "Integración Completa",
              description:
                "Conecta perfectamente con TrinityCore y otros sistemas de servidor WoW. API RESTful para integraciones personalizadas.",
              gradient: "from-purple-400 to-indigo-500",
            },
            {
              icon: "🚀",
              title: "API RESTful",
              description:
                "API completa y documentada para integraciones personalizadas y automatizaciones. Webhooks y eventos en tiempo real.",
              gradient: "from-green-400 to-emerald-500",
            },
            {
              icon: "💾",
              title: "Base de Datos Optimizada",
              description:
                "Gestión eficiente de datos con soporte para MySQL/MariaDB. Consultas optimizadas, índices inteligentes y respaldos automáticos.",
              gradient: "from-cyan-400 to-blue-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-6xl mb-6 inline-block p-4 rounded-2xl bg-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TechnologySection />

      <PricingSection />

      <CTASection />

      <Footer />
    </div>
  );
}
