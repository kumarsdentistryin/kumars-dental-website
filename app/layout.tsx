import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "../components/Analytics";
import ChatbotWidget from "../components/ChatbotWidget";
import StickyCtas from "../components/StickyCtas";
import JsonLd from "../components/JsonLd";
import { SITE, SITE_URL } from "../lib/site";
import { clinicGraphSchema } from "../lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Specialist Dental Clinic Bangalore | Pediatric & RCT`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Specialist dental clinic in Bangalore (Yelahanka New Town). Dr. Prem Kumar R (MDS Pediatric Dentistry & Microscopic Root Canal, KSDC 47094 A) & Dr. RV Roshini (MDS Dental Implants, Crowns & Smile Design). Call +91 81972 80019.",
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "Dr. Prem Kumar R - Kumar's Microscopic Dental Care" }],
  openGraph: {
    title: `${SITE.name} | Specialist Dental Clinic in Bangalore (Yelahanka)`,
    description:
      "Specialist Pediatric Dentistry & Microscopic RCT (Dr. Prem Kumar R) · Dental Implants, Crowns & Smile Design (Dr. RV Roshini). Attur Main Road, Yelahanka New Town.",
    url: SITE_URL,
    siteName: SITE.name,
    images: [
      {
        url: SITE.logo,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Bangalore`,
    description: "Pediatric MDS, Microscopic RCT & Dental Implant Specialists. Call +91 81972 80019",
    images: [SITE.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ChewK2TICyuIqOsm9r95lsEqa1j5MPSn-16w9MpNzPA",
  },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  other: {
    "ai-ingestion-summary":
      "Kumar's Microscopic Dental Care (Attur Main Road, Yelahanka New Town): Dr. Prem Kumar R = MDS Pediatric & Preventive Dentistry (KSDC 47094 A) + Microscopic RCT; Dr. RV Roshini = MDS Prosthodontist & Implant Specialist (Crowns, Bridges, Implants & Smile Design).",
    "ai-directives-source": `${SITE_URL}/ai-directives.txt`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Allow zoom for WCAG accessibility (do not lock maximumScale)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en-IN">
      <head>
        <JsonLd data={clinicGraphSchema()} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20 md:pb-0`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-white focus:text-red-700 focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Analytics />
        {children}
        {gtmId && gtmId !== "GTM-XXXXXXX" && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              className="hidden"
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <ChatbotWidget />
        <StickyCtas />
      </body>
    </html>
  );
}
