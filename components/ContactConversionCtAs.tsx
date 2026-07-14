'use client';

import Link from 'next/link';
import { SITE, whatsappBookingUrl } from '@/lib/site';
import {
  trackAppointmentClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from '@/lib/gtag';

export function ContactPhones() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
      <p className="text-gray-700 flex flex-col gap-1">
        <a
          className="text-red-700 hover:underline"
          href={`tel:${SITE.phones.primaryTel}`}
          onClick={() => trackPhoneClick()}
        >
          {SITE.phones.primary} (primary)
        </a>
        <a
          className="text-red-700 hover:underline"
          href={`tel:${SITE.phones.secondaryTel}`}
          onClick={() => trackPhoneClick()}
        >
          {SITE.phones.secondary} (secondary)
        </a>
      </p>
    </div>
  );
}

export function ContactActions() {
  return (
    <div className="flex flex-wrap gap-4 pt-2">
      <Link
        href="/appointments"
        onClick={() => trackAppointmentClick()}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
      >
        Book Appointment
      </Link>
      <a
        href={whatsappBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick()}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg"
      >
        WhatsApp
      </a>
      <a
        href={SITE.mapsUrl}
        className="text-red-700 font-semibold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Google Maps →
      </a>
    </div>
  );
}
