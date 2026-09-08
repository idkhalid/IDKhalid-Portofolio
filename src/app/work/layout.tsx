import type { Metadata } from "next";
import { getSiteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected web development, automation, backend, and infrastructure projects by Idham Khalid.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Idham Khalid",
    description:
      "Selected web development, automation, backend, and infrastructure projects by Idham Khalid.",
    url: getSiteUrl("/work"),
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
