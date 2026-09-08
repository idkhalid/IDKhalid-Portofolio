import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  getSiteUrl,
  isIndexableEnvironment,
  siteConfig,
} from "@/data/site";
import { LocaleProvider } from "@/i18n/locale-context";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: getSiteUrl() },
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.subheadline.en,
  keywords: [
    "web developer",
    "automation",
    "infrastructure",
    "independent developer",
    "Bekasi",
    "Indonesia",
    "Python",
    "Go",
    "Laravel",
    "Next.js",
    "Linux",
    "Cloudflare",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.subheadline.en,
    siteName: siteConfig.name,
    url: getSiteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.subheadline.en,
  },
  robots: {
    index: isIndexableEnvironment,
    follow: isIndexableEnvironment,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": `${siteConfig.url}#person`,
                name: siteConfig.name,
                url: siteConfig.url,
                jobTitle: siteConfig.role,
                sameAs: [siteConfig.contact.github, siteConfig.contact.facebook],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bekasi",
                  addressCountry: "ID",
                },
                knowsAbout: [
                  "Web Development",
                  "Automation",
                  "Backend Development",
                  "Infrastructure",
                  "Python",
                  "Go",
                  "Laravel",
                  "Next.js",
                  "Linux",
                  "Cloudflare",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteConfig.name,
                url: siteConfig.url,
                publisher: { "@id": `${siteConfig.url}#person` },
              },
            ]),
          }}
        />
      </head>
      <body className="font-sans">
        <LocaleProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
