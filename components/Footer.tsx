"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";

export default function Footer() {
  const { locale, t } = useI18n();

  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/lobo.png"
                  alt="SkollForge Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-white text-xl font-bold block">
                  SkollForge
                </span>
                <span className="text-gray-400 text-xs">CMS Professional</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Producto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors duration-300"
                >
                  Características
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors duration-300"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Recursos</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Portal de Clientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Foro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Tutoriales
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Soporte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 SkollForge CMS. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <Link
              href={`/${locale}/terms`}
              className="hover:text-white transition-colors duration-300"
            >
              Términos
            </Link>
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-white transition-colors duration-300"
            >
              Privacidad
            </Link>
            <Link
              href={`/${locale}/cookies`}
              className="hover:text-white transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
