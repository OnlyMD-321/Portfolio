"use client";

// @flow strict
import Link from "next/link";
import Image from "next/image";
import { locales, useLocale } from "@/app/context/locale-context";



function Navbar() {
  const { locale, setLocale, t } = useLocale();

  const localeLabel = {
    fr: "FR",
    en: "EN",
    ar: "AR",
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/">
            <Image
              src="/png/logo.png"
              width={220}
              height={140}
              alt="Logo"
            />
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("nav.about")}</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("nav.experience")}</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("nav.skills")}</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("nav.education")}</div></Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li> */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("nav.projects")}</div></Link>
          </li>
          <li className="px-3 py-2">
            <div className="flex items-center gap-2 rounded-full border border-[#2d3455] bg-[#0d1224] p-1">
              {locales.map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => setLocale(lng)}
                  className={`rounded-full px-2 py-1 text-xs transition-colors duration-200 ${locale === lng ? "bg-pink-600 text-white" : "text-gray-300 hover:bg-[#1a1f36]"}`}
                >
                  {localeLabel[lng]}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;