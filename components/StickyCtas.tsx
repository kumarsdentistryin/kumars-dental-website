'use client';

import { usePathname } from "next/navigation";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";

/** Page-specific WhatsApp prefill messages for the sticky mobile bar */
function getWhatsappText(pathname: string): string {
  if (pathname.includes("children-dentistry")) {
    return "Hi, I'd like to book a kids dental appointment";
  }
  if (pathname.includes("root-canal-treatment")) {
    return "Hi, I have tooth pain and need an RCT consultation";
  }
  if (pathname.includes("invisible-aligners") || pathname.includes("itero")) {
    return "Hi, I'd like to book a 3D iTero Scan and Invisalign consultation.";
  }
  if (pathname.includes("dental-implants")) {
    return "Hi, I'd like to enquire about dental implants at Kumar's Dental.";
  }
  return "Hi, I'd like to book an appointment at Kumar's Dental Care.";
}

function pushDataLayer(eventName: string, pathname: string) {
  if (typeof window !== "undefined") {
    (window as typeof window & { dataLayer: unknown[] }).dataLayer =
      (window as typeof window & { dataLayer: unknown[] }).dataLayer || [];
    (window as typeof window & { dataLayer: unknown[] }).dataLayer.push({
      event: eventName,
      page_path: pathname,
    });
  }
}

export default function StickyCtas() {
  const pathname = usePathname();
  const waText = getWhatsappText(pathname);
  const whatsappUrl =
    "https://wa.me/918197280019?text=" + encodeURIComponent(waText);

  function handleCall() {
    trackPhoneClick();
    pushDataLayer("click_call", pathname);
  }

  function handleWhatsApp() {
    trackWhatsAppClick();
    pushDataLayer("click_whatsapp", pathname);
  }

  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed bottom-0 inset-x-0 z-50 h-14 md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 divide-x divide-gray-200 h-full">
        <a
          href="tel:+918197280019"
          onClick={handleCall}
          className="flex items-center justify-center gap-2 px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600"
          aria-label="Call Kumar's Dental at +91 81972 80019"
        >
          <svg className="w-4 h-4 text-blue-600 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>Call</span>
        </a>
        <a
          href={whatsappUrl}
          onClick={handleWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-600"
          aria-label="WhatsApp Kumar's Dental Care"
        >
          <svg className="w-4 h-4 text-emerald-600 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
