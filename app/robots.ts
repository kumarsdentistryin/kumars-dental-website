import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'Claude-Bot', 'PerplexityBot', 'CCBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://kumarsdentistry.in/sitemap.xml',
  };
}
