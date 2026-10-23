'use client';

import Link from "next/link";
import { SITE, whatsappBookingUrl } from "@/lib/site";
import { trackPhoneClick, trackWhatsAppClick, trackAppointmentClick } from "@/lib/gtag";

export default function StickyCtas() {
  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur safe-area-pb">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          <a
            href={`tel:${SITE.phones.primaryTel}`}
            onClick={() => trackPhoneClick()}
            className="flex flex-col items-center justify-center py-3 text-sm font-semibold text-gray-900 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600"
            aria-label={`Call ${SITE.phones.primary}`}
          >
            Call
          </a>
          <a
            href={whatsappBookingUrl()}
            onClick={() => trackWhatsAppClick()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 text-sm font-semibold text-green-700 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-600"
            aria-label="WhatsApp the clinic"
          >
            WhatsApp
          </a>
          <Link
            href="/appointments"
            onClick={() => trackAppointmentClick()}
            className="flex flex-col items-center justify-center py-3 text-sm font-semibold text-red-700 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600"
            aria-label="Book appointment"
          >
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
