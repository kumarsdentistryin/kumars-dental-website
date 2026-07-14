import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dental FAQs | Kumar's Microscopic Dental Care Yelahanka",
  description:
    "Answers on pediatric dentistry, crowns, microscopic RCT, appointments, and clinic hours in Yelahanka, Bangalore.",
  alternates: { canonical: `${SITE_URL}/faqs` },
};

const faqs = [
  {
    question: "Who is the pediatric dentist at Kumar's Dental?",
    answer:
      "Dr. Prem Kumar R, MDS Pediatric & Preventive Dentist (formerly Associate Professor at Ramaiah), leads children's dentistry and microscopic RCT at our Attur Main Road / Yelahanka New Town clinic—primary kids dentist for Attur & Yelahanka, with Bangalore pediatric authority for wider city queries.",
  },
  {
    question: "Who plans dental crowns and bridges?",
    answer:
      "Dr. RV Roshini, MDS Prosthodontist & Implant Specialist, leads crowns, bridges, dentures, implants, and smile design—our Bangalore crowns authority.",
  },
  {
    question: "What are your clinic hours?",
    answer: "Monday–Saturday 10:00 AM–9:00 PM; Sunday 10:00 AM–6:00 PM.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Use the appointments form (WhatsApp confirmation), call +91 81972 80019, or message WhatsApp 918197280019.",
  },
  {
    question: "Where are you located?",
    answer:
      "No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore 560064.",
  },
  {
    question: "Do you treat dental emergencies?",
    answer:
      "Yes—call for prioritised slots when available. Airway emergencies belong in hospital ER first. See our Emergency Dentistry page for guidance.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Cash, UPI, credit/debit cards, PhonePe, and Google Pay. We do not claim cashless insurance settlement on this site.",
  },
  {
    question: "Is the Google rating authentic?",
    answer:
      "We display a 4.9/5 aggregate with 250+ reviews consistently across the site. Always verify current Google Business figures when deciding.",
  },
];

export default function FaqsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
          <p className="opacity-95">Quick answers for patients across Yelahanka and North Bangalore.</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="border border-gray-200 rounded-lg p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-10">
          Still unsure?{" "}
          <Link href="/contact" className="text-red-700 font-semibold hover:underline">
            Contact us
          </Link>{" "}
          or{" "}
          <Link href="/appointments" className="text-red-700 font-semibold hover:underline">
            book an appointment
          </Link>
          .
        </p>
      </div>
    </SiteShell>
  );
}
