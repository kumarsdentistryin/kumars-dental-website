'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    // Google Tag Manager
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (gtmId) {
      const w = window;
      const d = document;
      const s = 'script';
      const l = 'dataLayer';
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + gtmId + dl;
      if (f.parentNode) {
        f.parentNode.insertBefore(j, f);
      }
    }

    // Google Analytics 4
    const gaId = process.env.NEXT_PUBLIC_GA4_ID;
    if (gaId) {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', gaId);

      // Load GA4 script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
