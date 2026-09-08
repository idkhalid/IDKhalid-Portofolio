"use client";

import { SectionHeading } from "@/components/section-heading";
import { NotesIndex } from "@/components/notes-index";
import { useLocale } from "@/i18n/locale-context";

export default function NotesPage() {
  const { t } = useLocale();

  return (
    <main className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <SectionHeading
          number="—"
          title={t.sections.workingNotes}
          subtitle={t.sections.workingNotesSub}
          headingLevel={1}
        />
        <div className="max-w-3xl">
          <NotesIndex />
        </div>
      </div>
    </main>
  );
}
