import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCtas } from "@/components/sticky-ctas";
import { siteIcons, ogImage } from "@/lib/metadata";
import { restaurantJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.home.title,
    template: "%s",
  },
  description: seo.home.description,
  applicationName: "The 90s Club",
  authors: [{ name: "The 90s Club" }],
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true, email: false },
  icons: siteIcons,
  manifest: "/site.webmanifest",
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: siteUrl,
    siteName: "The 90s Club",
    locale: "en_IN",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0907",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyCtas />
        <JsonLd data={restaurantJsonLd()} />
      </body>
    </html>
  );
}
