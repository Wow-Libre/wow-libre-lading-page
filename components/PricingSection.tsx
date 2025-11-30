"use client";

import { useI18n } from "@/lib/i18n";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";

const messages = { es: esMessages, en: enMessages };

export default function PricingSection() {
  const { t, locale } = useI18n();
  const currentMessages = messages[locale as "es" | "en"];

  const plans = [
    {
      name: t("pricing.plans.starter.name"),
      price: t("pricing.plans.starter.price"),
      description: t("pricing.plans.starter.description"),
      features: currentMessages.pricing.plans.starter.features as string[],
      color: "text-white",
      popular: false,
      paymentLink: "https://checkout.bold.co/payment/LNK_WLVHB005BJ",
    },
    {
      name: t("pricing.plans.professional.name"),
      price: t("pricing.plans.professional.price"),
      description: t("pricing.plans.professional.description"),
      features: currentMessages.pricing.plans.professional.features as string[],
      color: "text-[#F97316]",
      popular: true,
      paymentLink: "https://checkout.bold.co/payment/LNK_544NSIL6YJ",
    },
    {
      name: t("pricing.plans.enterprise.name"),
      price: t("pricing.plans.enterprise.price"),
      description: t("pricing.plans.enterprise.description"),
      features: currentMessages.pricing.plans.enterprise.features as string[],
      color: "text-white",
      popular: false,
      paymentLink: "https://discord.gg/FwUkZxc5",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative z-10 max-w-7xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-6">
          <span className="text-[#F97316] text-sm font-semibold">
            {t("pricing.badge")}
          </span>
        </div>
        <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
          {t("pricing.title")}
        </h2>
        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
          {t("pricing.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white/5 backdrop-blur-md border rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "border-[#F97316]/50 scale-105"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F97316] rounded-full text-white text-sm font-semibold">
                {t("pricing.plans.popular")}
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="text-4xl font-extrabold mb-2">
                <span className={plan.color}>{plan.price}</span>
              </div>
              <p className="text-gray-400">{plan.description}</p>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={plan.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center block ${
                plan.popular
                  ? "bg-[#F97316] text-white hover:bg-[#EA580C]"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {t("pricing.plans.cta")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
