"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/locale-context";

export function SiteFooter() {
  const { locale, t } = useLocale();
  const currentMonth = new Date().toLocaleDateString(
    locale === "id" ? "id-ID" : "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={24}
              height={24}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium mb-1">{siteConfig.name}</p>
              <p className="text-sm text-muted">{siteConfig.role}</p>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-muted mb-1 flex items-center justify-end md:justify-end gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {siteConfig.currentStatus[locale as "en" | "id"]}
            </p>
            <p className="text-sm text-muted">
              {t.footer.updated} {currentMonth}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-line/50">
          <p className="font-mono text-[11px] text-muted/60">
            {t.footer.designed}
          </p>
        </div>
      </div>
    </footer>
  );
}
