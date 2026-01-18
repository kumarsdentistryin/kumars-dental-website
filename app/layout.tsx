import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "../components/Analytics";
import ChatbotWidget from "../components/ChatbotWidget";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kumarsdental.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kumar's Microscopic Dental Care | Best Dental Clinic Yelahanka, Bangalore",
  description: "Best dental clinic near me in Yelahanka. Microscopic RCT, dental implants, pediatric dentistry, braces. Top rated dentist Dr. Prem Kumar. Call +91 81972 80019",
  metadataBase: new URL(siteUrl),
  keywords: "best dental near me, dentist near me, pediatric dentist near me, microscopic root canal, dental implants Yelahanka, kids dentist near me, best teeth doctor near me, recommended dental clinic near me, top rated dental clinic, dental braces Bangalore, orthodontist Yelahanka, cheap and best dental clinic, good dentist near me, children dental care",
  authors: [{ name: "Dr. Prem Kumar - Kumar's Microscopic Dental Care" }],
  openGraph: {
    title: "Kumar's Microscopic Dental Care | Best Dental Clinic Yelahanka",
    description: "Best dental near me - Microscopic RCT, pediatric dentistry, implants, braces in Yelahanka, Bangalore",
    url: siteUrl,
    siteName: "Kumar's Microscopic Dental Care",
    images: [
      {
        url: "/website-images/kd-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kumar's Microscopic Dental Care - Best Dentist in Yelahanka, Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar's Microscopic Dental Care | Best Dentist Yelahanka",
    description: "Best dental clinic near me - Microscopic RCT, pediatric care, implants, braces. Call +91 81972 80019",
    images: ["/website-images/kd-logo.jpg"],
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Kumar's Microscopic Dental Care",
  "description": "Best dental clinic in Yelahanka offering microscopic root canal treatment, pediatric dentistry, dental implants, braces, and comprehensive oral care.",
  "url": "https://kumarsdental.com",
  "telephone": "+91-81972-80019",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.12, 1st Floor, Attur Main Road",
    "addressLocality": "Yelahanka New Town",
    "addressRegion": "Karnataka",
    "postalCode": "560064",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.1007",
    "longitude": "77.5963",
  },
  "openingHours": [
    "Mo-Sa 09:00-20:00",
    "Su 10:00-18:00",
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "UPI", "PhonePe", "Google Pay"],
  "currenciesAccepted": "INR",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "250",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dental Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Microscopic Root Canal Treatment",
          "description": "Advanced painless RCT with microscope technology"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pediatric Dentistry",
          "description": "Gentle dental care for children"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dental Implants",
          "description": "Permanent tooth replacement solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Orthodontics (Braces & Aligners)",
          "description": "Teeth straightening with braces and clear aligners"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dentistSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}`}
            height="0"
            width="0"
            className="hidden"
          />
        </noscript>
        <ChatbotWidget />
      </body>
    </html>
  );
}
