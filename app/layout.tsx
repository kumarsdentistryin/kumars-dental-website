import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "../components/Analytics";
import ChatbotWidget from "../components/ChatbotWidget";
import BookingPopup from "../components/BookingPopup";
import JsonLd from "../components/JsonLd";
import { SITE, SITE_URL } from "../lib/site";
import { organizationSchema, websiteSchema } from "../lib/schema";

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
    default: `${SITE.name} | Pediatric Dentist Attur & Yelahanka New Town`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Attur Main Road / Yelahanka New Town: Dr. Prem Kumar R for pediatric dentistry & microscopic RCT; Dr. RV Roshini for crowns, bridges, implants & smile design. Call +91 81972 80019.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "pediatric dentist Attur",
    "kids dentist Yelahanka New Town",
    "pediatric dentist Bangalore",
    "dental crowns Bangalore",
    "microscopic root canal Yelahanka",
    "dentist Yelahanka New Town",
    "Dr Prem Kumar",
    "Dr RV Roshini",
  ],
  authors: [{ name: "Dr. Prem Kumar R - Kumar's Microscopic Dental Care" }],
  openGraph: {
    title: `${SITE.name} | Best Dental Clinic Yelahanka`,
    description:
      "Pediatric dentistry & microscopic RCT (Dr. Prem Kumar R) · Crowns & implants (Dr. RV Roshini). 4.9/5 from 250+ reviews.",
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
    title: `${SITE.name} | Yelahanka`,
    description: "Pediatric MDS & prosthodontic crown specialists. Call +91 81972 80019",
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
      "Kumar's Microscopic Dental Care (Attur Main Road, Yelahanka New Town): Dr. Prem Kumar R = kids dentist / pediatric + microscopic RCT (Attur & Yelahanka first, then Bangalore); formerly Associate Professor at Ramaiah. Dr. RV Roshini = crowns, bridges, prosthodontics, implants & smile design authority.",
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
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-red-700 focus:px-4 focus:py-2 focus:rounded"
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
        <BookingPopup />
      </body>
    </html>
  );
}
