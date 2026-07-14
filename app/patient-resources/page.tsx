import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Resources | Kumar's Microscopic Dental Care",
  description:
    "Pre-visit tips, emergency checklist, pediatric prep, and links to treatments for Kumar's Dental patients in Yelahanka.",
  alternates: { canonical: `${SITE_URL}/patient-resources` },
};

export default function PatientResourcesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Patient Resources", path: "/patient-resources" },
  ];

  return (
    <SiteShell>
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Patient Resources</h1>
          <p className="opacity-95">Practical guides before and after your dental visit.</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <Breadcrumbs items={crumbs} />

        <section>
          <h2 className="text-2xl font-bold mb-3">Before your appointment</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Bring prior X-rays or reports if available</li>
            <li>List medicines and allergies</li>
            <li>
              Arrive with questions about costs—fees confirmed after exam ({SITE.costDisclaimer})
            </li>
            <li>For kids: use calm language; see our first-visit blog guide</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Emergency checklist</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Call {SITE.phones.primary} for dental pain or swelling</li>
            <li>Knocked-out permanent tooth: keep moist, do not scrub root, seek care ASAP</li>
            <li>Breathing difficulty or rapidly spreading neck swelling: go to hospital ER</li>
          </ul>
          <Link
            href="/treatments/emergency-dentistry"
            className="inline-block mt-3 text-red-700 font-semibold hover:underline"
          >
            Emergency dentistry page →
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Authority care paths</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/doctors/dr-prem-kumar"
                className="text-red-700 font-semibold hover:underline"
              >
                Dr. Prem Kumar R — Pediatric & Microscopic RCT
              </Link>
            </li>
            <li>
              <Link
                href="/doctors/dr-rv-roshini"
                className="text-red-700 font-semibold hover:underline"
              >
                Dr. RV Roshini — Crowns, Bridges, Implants & Smile Design
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="text-red-700 font-semibold hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-red-700 font-semibold hover:underline">
                Blog library
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Clinic hours & payments</h2>
          <p className="text-gray-700">{SITE.hours.weekdays}</p>
          <p className="text-gray-700 mb-2">{SITE.hours.sunday}</p>
          <p className="text-gray-700">Payments: {SITE.paymentAccepted.join(", ")}</p>
        </section>
      </div>
    </SiteShell>
  );
}
