import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://scripts.clarity.ms",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https: http:",
      "font-src 'self' data: https://fonts.gstatic.com",
      // GA4 collect uses analytics.google.com (was missing → scripts 200, Realtime stuck at 0)
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://www.google.com https://www.clarity.ms https://*.clarity.ms https://wa.me https://api.whatsapp.com",
      "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://maps.google.com https://www.openstreetmap.org",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
