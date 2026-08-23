"use client";

import Link from "next/link";
import { siteConfig, t as getT } from "@/data/site";
import { Reveal } from "./reveal";
import { useLocale } from "@/i18n/locale-context";

export function Hero() {
  const { locale, t } = useLocale();

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Meta line */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8 md:mb-10">
            {siteConfig.name} / {siteConfig.role} / {siteConfig.location} —{" "}
            {siteConfig.timezone}
          </p>
        </Reveal>

        {/* Main headline */}
        <Reveal delay={80}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] max-w-4xl mb-8 whitespace-pre-line">
            {t.hero.headline}
          </h1>
        </Reveal>

        {/* Supporting copy */}
        <Reveal delay={160}>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10 md:mb-14">
            {getT(siteConfig.subheadline, locale)}
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={220}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 md:mb-20">
            <Link
              href="/work"
              className="inline-flex items-center text-base font-medium text-ink hover:text-accent transition-colors duration-200 group"
            >
              {t.hero.viewWork}{" "}
              <span className="ml-2 transition-transform duration-200 group-hover:translate-y-0.5">
                ↘
              </span>
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center text-base font-medium text-ink hover:text-accent transition-colors duration-200 group"
            >
              {t.hero.startProject}{" "}
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>

        {/* Status bar */}
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 pt-8 border-t border-line">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-1">
                {t.hero.currently}
              </span>
              <span className="text-sm">
                {getT(siteConfig.currentStatus, locale)}
              </span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-1">
                {t.hero.stack}
              </span>
              <span className="text-sm">{siteConfig.stack.join(" / ")}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
