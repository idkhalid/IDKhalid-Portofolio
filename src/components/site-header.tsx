"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/locale-context";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const navLinks = [
    { href: "/work", label: t.nav.work },
    { href: "/notes", label: t.nav.notes },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-line/50">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Identity */}
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={28}
              height={28}
              className="rounded-full"
              priority
            />
            {/* <span className="font-mono text-sm tracking-wide text-muted">
              {siteConfig.initials} / {siteConfig.year}
            </span> */}
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="text-sm text-muted hover:text-ink transition-colors duration-200"
            >
              {t.nav.contact}
            </a>

            {/* Desktop Language Toggle */}
            <div className="flex items-center gap-2 ml-4 px-3 py-1 rounded-full border border-line bg-surface/50 font-mono text-[11px] tracking-wide">
              <button
                onClick={() => setLocale("en")}
                className={`transition-colors ${
                  locale === "en"
                    ? "text-ink font-semibold"
                    : "text-muted hover:text-ink"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-line">|</span>
              <button
                onClick={() => setLocale("id")}
                className={`transition-colors ${
                  locale === "id"
                    ? "text-ink font-semibold"
                    : "text-muted hover:text-ink"
                }`}
                aria-label="Switch to Indonesian"
              >
                ID
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-px bg-ink transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className="md:hidden py-6 border-t border-line/50"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted hover:text-ink transition-colors duration-200 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contact"
                className="text-base text-muted hover:text-ink transition-colors duration-200 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.contact}
              </a>

              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-line/30 font-mono text-sm tracking-wide">
                <button
                  onClick={() => {
                    setLocale("en");
                    setMenuOpen(false);
                  }}
                  className={`transition-colors ${
                    locale === "en" ? "text-ink font-semibold" : "text-muted"
                  }`}
                >
                  EN
                </button>
                <span className="text-line">|</span>
                <button
                  onClick={() => {
                    setLocale("id");
                    setMenuOpen(false);
                  }}
                  className={`transition-colors ${
                    locale === "id" ? "text-ink font-semibold" : "text-muted"
                  }`}
                >
                  ID
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
