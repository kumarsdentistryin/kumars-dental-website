import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | Kumar's Microscopic Dental Care",
  description:
    "Terms of use for kumarsdentistry.in — educational content, appointments, and liability limits.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Terms", path: "/terms" },
  ];

  return (
    <SiteShell>
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Terms of Use</h1>
          <p className="opacity-90">Last updated: 1 July 2026</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-12 prose-like space-y-6 text-gray-700">
        <Breadcrumbs items={crumbs} />
        <p>
          By using {SITE.url}, you agree to these terms. The website provides general dental
          education and clinic information for {SITE.name}, {SITE.address.full}.
        </p>
        <h2 className="text-xl font-bold text-gray-900">Not medical advice</h2>
        <p>
          Content—including treatment descriptions, cost ranges, and blog articles—is educational
          and does not create a doctor–patient relationship. Diagnosis and treatment require
          in-person clinical examination.
        </p>
        <h2 className="text-xl font-bold text-gray-900">Appointments & communications</h2>
        <p>
          Online and WhatsApp booking requests are requests only until confirmed by the clinic.
          Emergency medical situations may require hospital care before or instead of dental
          clinic attendance.
        </p>
        <h2 className="text-xl font-bold text-gray-900">Accuracy of fees & ratings</h2>
        <p>
          Cost figures are Bangalore-indicative ranges. The displayed aggregate rating of{" "}
          {SITE.rating.display} ({SITE.rating.count}+ reviews) is presented consistently; live
          third-party platforms may differ over time.
        </p>
        <h2 className="text-xl font-bold text-gray-900">Intellectual property</h2>
        <p>
          Site text, branding, and selected media are owned by the clinic or licensed. Do not
          republish commercially without permission.
        </p>
        <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        <p>
          Questions:{" "}
          <a className="text-red-700 hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>{" "}
          or see our{" "}
          <Link href="/privacy" className="text-red-700 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </SiteShell>
  );
}
