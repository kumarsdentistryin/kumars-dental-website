"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID &&
  process.env.NEXT_PUBLIC_GTM_ID !== "GTM-XXXXXXX"
    ? process.env.NEXT_PUBLIC_GTM_ID
    : "";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

/**
 * Loads GA4 (gtag) and optional GTM / Clarity.
 * Adds sitewide delegated listeners for tel: (click_call) and wa.me (click_whatsapp).
 */
export default function Analytics() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        const w = window as any;
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "click_call" });
      } else if (
        href.includes("wa.me") ||
        href.includes("whatsapp.com") ||
        href.includes("api.whatsapp.com")
      ) {
        const w = window as any;
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "click_whatsapp" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            id="ga4-gtag-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
              gtag('config', 'AW-6975350563');
            `}
          </Script>
        </>
      ) : null}

      {GTM_ID ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      ) : null}

      {CLARITY_ID ? (
        <Script id="clarity-init" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      ) : null}
    </>
  );
}
