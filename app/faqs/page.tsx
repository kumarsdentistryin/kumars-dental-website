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
    "Direct answers on pediatric dentistry, microscopic root canal, clear aligners, dental crowns, and appointments at our Yelahanka New Town clinic.",
  alternates: { canonical: `${SITE_URL}/faqs` },
};

const faqGroups = [
  {
    category: "Microscopic Root Canal Treatment",
    questions: [
      {
        question: "Can a root canal be completed in a single visit?",
        answer:
          "Yes, most uncomplicated root canal treatments can be completed in a single 60 to 90-minute visit under an operating microscope. Single-visit completion is suitable when there is no acute spreading swelling or active purulent drainage.",
      },
      {
        question: "How does a dental operating microscope improve root canal treatment?",
        answer:
          "A dental operating microscope provides up to 25× optical magnification and shadowless coaxial illumination directly down root canals. This enables the clinician to detect hidden extra canals, negotiate calcifications, and preserve maximum natural tooth structure.",
      },
      {
        question: "Is a root canal painful?",
        answer:
          "No, root canal procedures are performed under effective local anesthesia, ensuring the patient experiences minimal to no discomfort. The treatment eliminates the throbbing toothache caused by infected or inflamed dental pulp.",
      },
      {
        question: "Is a dental crown necessary after a root canal?",
        answer:
          "Yes, placing a dental crown is strongly recommended for back teeth following root canal treatment to prevent structural fractures. Root-treated teeth become more brittle, and a crown provides vital coronal sealing against reinfection.",
      },
    ],
  },
  {
    category: "Pediatric Dentistry",
    questions: [
      {
        question: "When should a child have their first dental visit?",
        answer:
          "Children should have their first dental examination by their first birthday or upon the eruption of their first primary tooth. Early visits establish preventive oral hygiene habits and allow the dentist to check infant jaw development.",
      },
      {
        question: "Who provides pediatric dental care at Kumar's Dental?",
        answer:
          "Dr. Prem Kumar R, MDS in Pediatric & Preventive Dentistry (KSDC Reg. No. 47094 A), leads children's dentistry at our clinic. He uses patient, non-pharmacological behavior guidance techniques to keep appointments comfortable and fear-free.",
      },
      {
        question: "What is a pulpectomy in children's dentistry?",
        answer:
          "A pulpectomy is a root canal procedure for primary (baby) teeth that cleans infected pulp tissue and fills the canals with a resorbable paste. It preserves the baby tooth as a natural space maintainer until the permanent tooth erupts.",
      },
      {
        question: "What should parents do if a child knocks out a permanent tooth?",
        answer:
          "Find the knocked-out tooth, handle it only by the crown, store it in cold milk, and call our clinic immediately at +91 81972 80019 within 30 to 60 minutes. Immediate professional reimplantation offers the best chance of saving the tooth.",
      },
    ],
  },
  {
    category: "Clear Aligners & Digital Orthodontics",
    questions: [
      {
        question: "How do clear aligners compare to traditional braces?",
        answer:
          "Clear aligners are removable, transparent trays that align teeth discreetly without metal wires or brackets. They must be worn 20 to 22 hours daily and allow normal eating and effortless brushing.",
      },
      {
        question: "What is an iTero 3D intraoral scan?",
        answer:
          "An iTero scan is a radiation-free digital 3D optical scan of your teeth that completely replaces gooey impression trays. It generates an accurate digital model within minutes and can preview anticipated tooth movements on screen.",
      },
    ],
  },
  {
    category: "Dental Implants & Crowns",
    questions: [
      {
        question: "Who plans dental crowns, bridges, and implants at the clinic?",
        answer:
          "Dr. RV Roshini, MDS Prosthodontist & Implant Specialist, plans and leads crown, bridge, and implant-supported restorative treatments. She specializes in monolithic zirconia, ceramic smile design, and bite rehabilitation.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "Dental implants are designed to function for decades when maintained with good oral hygiene and periodic professional checkups. Implants integrate directly into jawbone to provide stable support for crowns or bridges.",
      },
    ],
  },
  {
    category: "Appointments, Logistics & Clinic Hours",
    questions: [
      {
        question: "What are your clinic operating hours?",
        answer:
          "Kumar's Microscopic Dental Care is open Monday through Saturday from 10:00 AM to 9:00 PM, and on Sunday from 10:00 AM to 6:00 PM. Prior appointment booking is advised.",
      },
      {
        question: "Where is the clinic located in Bengaluru?",
        answer:
          "The clinic is located at No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bengaluru, Karnataka 560064. Landmarks include the Attur Main Road commercial corridor near Yelahanka New Town.",
      },
      {
        question: "How can I book an appointment?",
        answer:
          "You can submit a booking request online at kumarsdentistry.in/appointments, reach our front desk via phone at +91 81972 80019, or message us on WhatsApp.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept UPI, debit cards, credit cards, net banking, and cash payments. Itemized receipts and treatment summaries are provided for insurance claim reimbursement.",
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((g) => g.questions);

export default function FaqsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(allFaqs)]} />
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-blue-200 mb-2 font-semibold">
            Patient Questions &amp; Direct Answers
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90 max-w-2xl leading-relaxed">
            Direct clinical answers on root canal procedures, pediatric dental visits, clear aligners, crowns, and clinic logistics in Yelahanka New Town.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={crumbs} />

        <div className="space-y-12 mt-6">
          {faqGroups.map((group) => (
            <section key={group.category} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-2.5">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.questions.map((faq) => (
                  <details
                    key={faq.question}
                    className="border border-slate-200 rounded-xl p-5 bg-white shadow-xs open:bg-blue-50/20 transition-colors"
                  >
                    <summary className="font-semibold text-slate-900 cursor-pointer text-base sm:text-lg">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-slate-900">Have a specific clinical question?</p>
            <p className="text-sm text-slate-600">Contact our clinical front desk or schedule a consultation with our specialists.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm font-semibold hover:border-slate-400"
            >
              Contact Us
            </Link>
            <Link
              href="/appointments"
              className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 shadow-xs"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
