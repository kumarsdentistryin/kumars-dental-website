import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ContactActions, ContactPhones } from "@/components/ContactConversionCtAs";
import { SITE, SITE_URL } from "@/lib/site";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Contact | Kumar's Microscopic Dental Care Yelahanka",
  description:
    "Contact Kumar's Dental in Yelahanka: phones, hours Mon–Sat 10 AM–9 PM / Sun 10 AM–6 PM, address, WhatsApp booking.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <SiteShell>
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-95">
            Appointments, emergencies, and directions to our Yelahanka New Town clinic.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={crumbs} />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Address</h2>
                <p className="text-gray-700">{SITE.address.street}</p>
                <p className="text-gray-700">
                  {SITE.address.locality}, {SITE.address.city} - {SITE.address.postalCode}
                </p>
              </div>
              <ContactPhones />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Email</h2>
                <a className="text-red-700 hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Clinic Hours</h2>
                {SITE.hours.display.map((h) => (
                  <p key={h.days} className="text-gray-700">
                    {h.days}: {h.hours}
                  </p>
                ))}
              </div>
              <ContactActions />
            </div>

            <div className="bg-white rounded-lg shadow border border-gray-100 p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Areas we serve</h3>
              <ul className="space-y-1 text-sm text-gray-700 mb-6">
                {locations.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/locations/${l.slug}`} className="text-red-700 hover:underline">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency?</h3>
              <p className="text-sm text-gray-700 mb-3">
                Call us immediately for dental pain. See{" "}
                <Link href="/treatments/emergency-dentistry" className="text-red-700 underline">
                  emergency dentistry
                </Link>
                .
              </p>
              <p className="text-sm text-gray-600">Payments: UPI, cards, cash</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
