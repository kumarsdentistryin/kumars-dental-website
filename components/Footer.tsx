'use client';

import Link from "next/link";
import { SITE, whatsappBookingUrl } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { locations } from "@/lib/locations";
import { doctors } from "@/lib/doctors";
import {
  trackAppointmentClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/gtag";

export default function Footer() {
  const featuredTreatments = treatments.filter((t) =>
    [
      "children-dentistry",
      "root-canal-treatment",
      "crowns",
      "dental-implants",
      "bridges",
      "microscopic-dentistry",
      "smile-designing",
      "emergency-dentistry",
    ].includes(t.slug)
  );

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-28 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <h2 className="font-bold text-lg mb-3">{SITE.name}</h2>
          <p className="text-gray-400 text-sm mb-4">{SITE.tagline}</p>
          <p className="text-gray-400 text-sm mb-2">{SITE.address.full}</p>
          <p className="text-gray-400 text-sm">
            <a
              className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              href={`tel:${SITE.phones.primaryTel}`}
              onClick={() => trackPhoneClick()}
            >
              {SITE.phones.primary}
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            <a
              className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              href={`tel:${SITE.phones.secondaryTel}`}
              onClick={() => trackPhoneClick()}
            >
              {SITE.phones.secondary}
            </a>
          </p>
          <p className="text-gray-500 text-xs mt-4">
            Google rating {SITE.rating.display} ({SITE.rating.count}+ reviews)
          </p>
          <p className="text-gray-500 text-xs mt-1">Payments: UPI, cards, cash</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Treatments</h3>
          <ul className="space-y-1.5 text-gray-400 text-sm">
            {featuredTreatments.map((t) => (
              <li key={t.slug}>
                <Link href={`/treatments/${t.slug}`} className="hover:text-white">
                  {t.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="hover:text-white font-medium text-gray-300">
                All services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Areas We Serve</h3>
          <ul className="space-y-1.5 text-gray-400 text-sm columns-2 gap-4">
            {locations.map((l) => (
              <li key={l.slug} className="break-inside-avoid">
                <Link href={`/locations/${l.slug}`} className="hover:text-white">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="font-bold mb-3 mt-6">Doctors</h3>
          <ul className="space-y-1.5 text-gray-400 text-sm">
            {doctors.map((d) => (
              <li key={d.slug}>
                <Link href={d.path} className="hover:text-white">
                  {d.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/team" className="hover:text-white">
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Patients</h3>
          <ul className="space-y-1.5 text-gray-400 text-sm">
            <li>
              <Link
                href="/appointments"
                className="hover:text-white"
                onClick={() => trackAppointmentClick()}
              >
                Book Appointment
              </Link>
            </li>
            <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
            <li><Link href="/patient-resources" className="hover:text-white">Patient Resources</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/search" className="hover:text-white">Search</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
          </ul>
          <div className="mt-6 space-y-2">
            <a
              href={whatsappBookingUrl()}
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => trackWhatsAppClick()}
            >
              WhatsApp Booking
            </a>
            <p className="text-gray-500 text-xs">{SITE.hours.weekdays}</p>
            <p className="text-gray-500 text-xs">{SITE.hours.sunday}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm max-w-7xl mx-auto">
        <p className="mb-2">
          Authority focus:{" "}
          <Link href="/doctors/dr-prem-kumar" className="text-gray-300 hover:text-white">
            Dr. Prem Kumar R — Pediatric Dentistry & Microscopic RCT
          </Link>
          {" · "}
          <Link href="/doctors/dr-rv-roshini" className="text-gray-300 hover:text-white">
            Dr. RV Roshini — Crowns, Bridges, Implants & Smile Design
          </Link>
        </p>
        <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-600">Built with ❤️ by D Pradeep Kumar (AuraDigital Services &amp; Solutions) &middot; 9148868413</p>
      </div>
    </footer>
  );
}
