"use client";

import { siteConfig, t as getT, tArray } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/i18n/locale-context";

export default function AboutPage() {
  const { locale, t } = useLocale();
  const howIWorkList = tArray(siteConfig.howIWork, locale);

  return (
    <main className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          {/* Header */}
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-8">
              {t.about.heading} / {siteConfig.year}
            </p>
          </Reveal>

          {/* Bio */}
          <Reveal delay={60}>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
                {t.about.greeting}
              </h2>
              {getT(siteConfig.about.extended, locale)
                .split("\n\n")
                .map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg md:text-xl leading-relaxed mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200 group"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t.about.viewResume}
                </a>
              </div>
            </div>
          </Reveal>

          <hr className="mb-16" />

          {/* How I Work */}
          <Reveal delay={120}>
            <div className="mb-16">
              <h2 className="text-2xl font-medium tracking-tight mb-8">
                {t.about.howIWork}
              </h2>
              <ol className="space-y-4">
                {howIWorkList.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-muted mt-1 shrink-0 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <hr className="mb-16" />

          {/* Experience */}
          <Reveal delay={150}>
            <div className="mb-16">
              <h2 className="text-2xl font-medium tracking-tight mb-8">
                {t.about.experience}
              </h2>
              <div className="space-y-8">
                {siteConfig.experience[locale as "en" | "id"].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <div className="w-48 shrink-0">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-1">
                        {item.duration}
                      </span>
                      <span className="text-sm font-medium">{item.role}</span>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-2 list-none">
                        {item.description.map((desc, j) => (
                          <li key={j} className="text-base leading-relaxed text-ink/80 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-muted">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <hr className="mb-16" />

          {/* Services */}
          <Reveal delay={180}>
            <div className="mb-16">
              <h2 className="text-2xl font-medium tracking-tight mb-8">
                {t.about.services}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {siteConfig.services[locale as "en" | "id"].map((service, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-base font-medium">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <hr className="mb-16" />

          {/* Tech Stack */}
          <Reveal delay={210}>
            <div className="mb-16">
              <h2 className="text-2xl font-medium tracking-tight mb-8">
                {t.about.techStack}
              </h2>
              <p className="text-base leading-relaxed text-ink/80 mb-10">
                {getT(siteConfig.techStackIntro, locale)}
              </p>
              
              <div className="space-y-10">
                {siteConfig.techStack[locale as "en" | "id"].map((category, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-medium mb-3">{category.category}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {category.technologies.map((tech, j) => (
                        <span key={j} className="px-2.5 py-1 text-xs font-mono bg-line/30 text-ink/80 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          
          <hr className="mb-16" />

          {/* Principles */}
          <Reveal delay={240}>
            <div className="mb-16">
              <h2 className="text-2xl font-medium tracking-tight mb-8">
                {t.about.principles}
              </h2>
              <div className="space-y-6">
                {siteConfig.principles[locale as "en" | "id"].map((principle, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-muted mt-1 shrink-0 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="text-base font-medium block mb-1">{principle.title}</span>
                      <span className="text-base leading-relaxed text-muted">{principle.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </main>
  );
}
