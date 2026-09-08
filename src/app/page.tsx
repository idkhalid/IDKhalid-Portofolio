"use client";

import Link from "next/link";

import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectFeature } from "@/components/project-feature";
import { ProjectIndex } from "@/components/project-index";
import { Capabilities } from "@/components/capabilities";
import { NotesIndex } from "@/components/notes-index";
import { AboutPreview } from "@/components/about-preview";
import { ContactSection } from "@/components/contact-section";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/locale-context";

const FEATURED_COUNT = 3;

export default function Home() {
  const { t } = useLocale();

  return (
    <main>
      {/* Hero */}
      <Hero />

      <hr className="mx-6 md:mx-10 lg:mx-16 max-w-[1440px] xl:mx-auto" />

      {/* Selected Work */}
      <section className="py-20 md:py-28" aria-labelledby="selected-work">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionHeading
            number="01"
            title={t.sections.selectedWork}
            subtitle={t.sections.selectedWorkSub}
            id="selected-work"
          />

          {/* Featured projects — full editorial layout */}
          {projects.slice(0, FEATURED_COUNT).map((project, i) => (
            <ProjectFeature
              key={project.slug}
              project={project}
              reversed={i % 2 !== 0}
            />
          ))}

          {/* Remaining projects — compact index */}
          {projects.length > FEATURED_COUNT && (
            <div className="mt-8">
              <Reveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted mb-4">
                  {t.project.moreWork}
                </p>
              </Reveal>
              <ProjectIndex projects={projects.slice(FEATURED_COUNT)} />
            </div>
          )}

          {/* View all link */}
          <Reveal>
            <div className="mt-12 pt-8 border-t border-line">
              <Link
                href="/work"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200 group"
              >
                {t.project.allSelectedWork}{" "}
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-6 md:mx-10 lg:mx-16 max-w-[1440px] xl:mx-auto" />

      {/* Capabilities */}
      <section className="py-20 md:py-28" aria-labelledby="capabilities">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionHeading
            number="02"
            title={t.sections.capabilities}
            id="capabilities"
          />
          <Capabilities />
          <Reveal delay={240}>
            <p className="font-mono text-xs text-muted mt-8">
              Python · Go · PHP · Laravel · Next.js · Playwright · Linux ·
              Ubuntu · Cloudflare · systemd · iptables · MySQL · Docker
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="mx-6 md:mx-10 lg:mx-16 max-w-[1440px] xl:mx-auto" />

      {/* Working Notes */}
      <section className="py-20 md:py-28" aria-labelledby="working-notes">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionHeading
            number="03"
            title={t.sections.workingNotes}
            subtitle={t.sections.workingNotesSub}
            id="working-notes"
          />
          <NotesIndex limit={3} />
        </div>
      </section>

      <hr className="mx-6 md:mx-10 lg:mx-16 max-w-[1440px] xl:mx-auto" />

      {/* About */}
      <section className="py-20 md:py-28" aria-labelledby="about-preview">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionHeading number="04" title={t.sections.about} id="about-preview" />
          <AboutPreview />
        </div>
      </section>

      <hr className="mx-6 md:mx-10 lg:mx-16 max-w-[1440px] xl:mx-auto" />

      {/* Contact */}
      <section
        id="contact"
        className="py-20 md:py-28"
        aria-labelledby="contact-section"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionHeading number="05" title={t.sections.contact} id="contact-section" />
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
