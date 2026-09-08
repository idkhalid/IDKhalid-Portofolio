import type { Metadata } from "next";
import { getSiteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Idham Khalid, an independent developer working across web products, automation, backend applications, and Linux infrastructure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Idham Khalid",
    description:
      "About Idham Khalid, an independent developer working across web products, automation, backend applications, and Linux infrastructure.",
    url: getSiteUrl("/about"),
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
