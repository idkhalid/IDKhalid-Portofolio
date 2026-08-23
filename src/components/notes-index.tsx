"use client";

import { useState } from "react";
import { notes, type Note } from "@/data/notes";
import { Reveal } from "./reveal";

interface NotesIndexProps {
  items?: Note[];
  limit?: number;
}

export function NotesIndex({ items, limit }: NotesIndexProps) {
  const displayNotes = items || notes;
  const visibleNotes = limit ? displayNotes.slice(0, limit) : displayNotes;
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <div className="divide-y divide-line">
      {visibleNotes.map((note, i) => (
        <Reveal key={note.slug} delay={i * 60}>
          <button
            type="button"
            className="w-full text-left py-5 md:py-6 group cursor-pointer"
            onClick={() =>
              setExpandedSlug(expandedSlug === note.slug ? null : note.slug)
            }
            aria-expanded={expandedSlug === note.slug}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span className="font-mono text-xs text-muted tracking-wide shrink-0 w-20">
                {note.date}
              </span>
              <span className="text-base group-hover:text-accent transition-colors duration-200">
                {note.title}
              </span>
            </div>
            {expandedSlug === note.slug && (
              <p className="mt-3 sm:ml-26 text-sm text-muted leading-relaxed max-w-xl">
                {note.excerpt}
              </p>
            )}
          </button>
        </Reveal>
      ))}
    </div>
  );
}
