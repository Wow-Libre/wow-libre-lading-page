"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function FeaturesPage() {
  const { t, locale } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<
    Record<string, number>
  >({});

  const features = [
    {
      key: "banners",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_9a01a0d2481644c680f28dbd50cf2d48~mv2.gif",
        "https://static.wixstatic.com/media/5dd8a0_9e4a6c10163d4795a8e4d6048266fcaa~mv2.gif",
      ],
    },
    {
      key: "admin",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_52a61c25f6c445e1ad07124e802d70d5~mv2.png",
        "https://static.wixstatic.com/media/5dd8a0_dd5f3251114c4d7c8510cdd8986374e6~mv2.png",
      ],
      reverse: true,
    },
    {
      key: "payments",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_0bb576882dc04db19c7951afe86be3d3~mv2.png",
        "https://static.wixstatic.com/media/5dd8a0_78ab48b0e0c64ceab82729af4b6f445f~mv2.png",
      ],
    },
    {
      key: "emails",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_625df8790e4b4fe486624ad211a761fe~mv2.avif",
      ],
      reverse: true,
    },
    {
      key: "monitoring",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_ff76a78461074a97977fe4546a473793~mv2.avif",
      ],
    },
    {
      key: "vip",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_3ef1a4aa9ac44e6c85480190ba1e8dc7~mv2.png",
      ],
      reverse: true,
    },
    {
      key: "security",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_1ee15af429844604bb5c2a58045d88b3~mv2.webp",
      ],
    },
    {
      key: "multi-realms",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_592ee0e3bdfe46818640417831cfabad~mv2.png",
      ],
      reverse: true,
    },
    {
      key: "multi-languages",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_da48796e88344b97a7a9b5cb79b72017~mv2.png",
      ],
    },
    {
      key: "store",
      images: [
        "https://static.wixstatic.com/media/5dd8a0_141845e36352463b9b3e8d010f7d9e6f~mv2.png",
        "https://static.wixstatic.com/media/5dd8a0_c37f3d78105a4430a51079cba00ccb2d~mv2.png",
      ],
      reverse: true,
    },
  ];

  const getCurrentImageIndex = (featureKey: string) => {
    return currentImageIndex[featureKey] || 0;
  };

  const setImageIndex = (featureKey: string, index: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [featureKey]: index,
    }));
  };

  const nextImage = (featureKey: string, totalImages: number) => {
    setImageIndex(
      featureKey,
      (getCurrentImageIndex(featureKey) + 1) % totalImages
    );
  };

  const prevImage = (featureKey: string, totalImages: number) => {
    setImageIndex(
      featureKey,
      (getCurrentImageIndex(featureKey) - 1 + totalImages) % totalImages
    );
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-6">
            <span className="text-[#F97316] text-sm font-semibold">
              {t("features.badge")}
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-folkard">
            {t("featuresPage.title")}
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            {t("featuresPage.subtitle")}
          </p>
        </div>
      </section>

      {/* Features Sections */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32 space-y-32">
        {features.map((feature, index) => (
          <div
            key={feature.key}
            className={`flex flex-col ${
              feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12`}
          >
            {/* Image/Video Section */}
            <div className="flex-1 w-full">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-gray-900 to-black group">
                {feature.images && feature.images.length > 0 ? (
                  <>
                    {/* Main Image */}
                    <div
                      className="relative w-full h-full cursor-zoom-in"
                      onClick={() =>
                        setSelectedImage(
                          feature.images[getCurrentImageIndex(feature.key)]
                        )
                      }
                    >
                      <Image
                        src={feature.images[getCurrentImageIndex(feature.key)]}
                        alt={t(`featuresPage.sections.${feature.key}.imageAlt`)}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-linear-to-br from-[#F97316]/20 to-[#5AC8FA]/20">
                                <div class="text-center p-8">
                                  <svg class="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                  <p class="text-gray-400 text-lg">Imagen o video</p>
                                  <p class="text-gray-500 text-sm mt-2">Agrega tu contenido aquí</p>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Arrows (if more than 1 image) */}
                    {feature.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(feature.key, feature.images.length);
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                        >
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
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(feature.key, feature.images.length);
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                        >
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
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {feature.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {feature.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setImageIndex(feature.key, idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              getCurrentImageIndex(feature.key) === idx
                                ? "bg-[#F97316] w-8"
                                : "bg-white/30 hover:bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Image Counter */}
                    {feature.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm z-10">
                        {getCurrentImageIndex(feature.key) + 1} /{" "}
                        {feature.images.length}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#F97316]/20 to-[#5AC8FA]/20">
                    <div className="text-center p-8">
                      <svg
                        className="w-24 h-24 mx-auto mb-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gray-400 text-lg">Imagen o video</p>
                      <p className="text-gray-500 text-sm mt-2">
                        Agrega tu contenido aquí
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 w-full">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F97316] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {t(`featuresPage.sections.${feature.key}.title`)}
                  </h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t(`featuresPage.sections.${feature.key}.description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="bg-linear-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-16 text-center overflow-hidden border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("featuresPage.cta.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("featuresPage.cta.subtitle")}
          </p>
          <a
            href={`/${locale}#pricing`}
            className="inline-block px-10 py-5 bg-[#F97316] text-white rounded-xl font-semibold text-lg hover:bg-[#EA580C] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F97316]/20"
          >
            {t("featuresPage.cta.button")}
          </a>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-full max-w-6xl">
              <Image
                src={selectedImage}
                alt="Imagen ampliada"
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
