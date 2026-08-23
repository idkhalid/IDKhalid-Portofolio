import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short records from systems that had to work.",
};

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
