import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Independent developer working across product interfaces, automation, backend systems, and infrastructure.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
