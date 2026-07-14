'use client';

import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    const gaId = GA_MEASUREMENT_ID;
    if (gaId) {
      window.dataLayer = window.dataLayer || [];
      if (!window.gtag) {
        window.gtag = function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        };
      }
      window.gtag('js', new Date());
      window.gtag('config', gaId, { anonymize_ip: true });

      if (!document.querySelector(`script[src*="gtag/js?id=${gaId}"]`)) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);
      }
    }

    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (gtmId && gtmId !== 'GTM-XXXXXXX') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      if (!document.querySelector(`script[src*="gtm.js?id=${gtmId}"]`)) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
        document.head.appendChild(script);
      }
    }

    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (clarityId) {
      const w = window as Window & { clarity?: (...args: unknown[]) => void };
      if (!w.clarity) {
        const clarity = (...args: unknown[]) => {
          (clarity as unknown as { q?: unknown[] }).q = (
            clarity as unknown as { q?: unknown[] }
          ).q || [];
          ((clarity as unknown as { q: unknown[] }).q).push(args);
        };
        w.clarity = clarity;
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.clarity.ms/tag/${clarityId}`;
        document.head.appendChild(script);
      }
    }
  }, []);

  return null;
}
