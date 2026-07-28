import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search?", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Claude-Web",
          "ClaudeBot",
          "Anthropic-AI",
          "PerplexityBot",
          "CCBot",
          "Google-Extended",
          "Applebot-Extended",
          "Bytespider",
        ],
        allow: "/",
      },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/ai-sitemap.xml`],
    host: SITE_URL,
  };
}
