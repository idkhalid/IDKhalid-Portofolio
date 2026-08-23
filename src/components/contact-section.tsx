"use client";

import { siteConfig, isConfigured } from "@/data/site";
import { Reveal } from "./reveal";
import { useLocale } from "@/i18n/locale-context";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  const { t } = useLocale();
  const contacts = siteConfig.contact;
  const configuredContacts = Object.entries(contacts).filter(([, value]) =>
    isConfigured(value)
  );

  return (
    <div>
      <Reveal>
        <p className="text-xl md:text-2xl leading-relaxed max-w-lg mb-8">
          {t.contact.headline}
          <br />
          {t.contact.headlineLine2}
        </p>
      </Reveal>

      <Reveal delay={80}>
        {configuredContacts.length > 0 ? (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
            {configuredContacts.map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200 group"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                <span className="ml-1.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted font-mono mb-8">
            {t.contact.comingSoon}
          </p>
        )}
      </Reveal>

      <Reveal delay={140}>
        <ContactForm />
      </Reveal>
    </div>
  );
}
