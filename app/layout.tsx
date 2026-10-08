import type { Metadata, Viewport } from "next";
import { Fraunces, Oswald } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default:
      "The 90s Club Taproom and Kitchen | Kerala food & craft beer, Electronic City",
    template: "%s",
  },
  description:
    "Kerala food and Flying Fox craft beer on a rooftop in Electronic City. Open daily noon to midnight at Millennium Plaza, Hebbagodi.",
  applicationName: "The 90s Club",
  authors: [{ name: "The 90s Club" }],
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0A3D8F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream pb-20 text-charcoal lg:pb-0">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-mustard focus:px-4 focus:py-2 focus:font-semibold focus:text-charcoal"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileCta />
        <JsonLd />
      </body>
    </html>
  );
}
