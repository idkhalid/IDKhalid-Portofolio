import type { Metadata } from "next";
import { getSiteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Working notes on Cloudflare, Linux services, browser automation, and systems that had to work.",
  alternates: { canonical: "/notes" },
  openGraph: {
    title: "Notes — Idham Khalid",
    description:
      "Working notes on Cloudflare, Linux services, browser automation, and systems that had to work.",
    url: getSiteUrl("/notes"),
  },
};

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
