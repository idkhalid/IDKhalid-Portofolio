"use client";

import Link from "next/link";
import { siteConfig, t as getT } from "@/data/site";
import { Reveal } from "./reveal";
import { useLocale } from "@/i18n/locale-context";

export function AboutPreview() {
  const { locale, t } = useLocale();

  return (
    <div className="max-w-2xl">
      <Reveal>
        <blockquote className="text-lg md:text-xl leading-relaxed text-ink/90 mb-6">
          {getT(siteConfig.about.short, locale)}
        </blockquote>
      </Reveal>
      <Reveal delay={80}>
        <p className="text-base text-muted leading-relaxed mb-8">
          {getT(siteConfig.about.secondary, locale)}
        </p>
      </Reveal>
      <Reveal delay={140}>
        <Link
          href="/about"
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200 group"
        >
          {t.about.howIWork}{" "}
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Reveal>
    </div>
  );
}
