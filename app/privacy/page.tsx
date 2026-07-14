import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Kumar's Microscopic Dental Care",
  description:
    "How Kumar's Microscopic Dental Care collects and protects personal information for appointments and website visitors.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPolicyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" },
  ];

  return (
    <SiteShell>
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-95">
            Your privacy matters at {SITE.name}
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
          <Breadcrumbs items={crumbs} />
          <p>
            <strong>Last Updated:</strong> 1 July 2026
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          <p>
            {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates a dental clinic at{" "}
            {SITE.address.full}. This Privacy Policy explains how we collect, use, and protect
            personal information when you visit {SITE.url} or use our services.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          <p>When you book an appointment or contact us, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Preferred appointment date and time</li>
            <li>Dental service requirements</li>
            <li>Medical history relevant to dental care (clinical records)</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Scheduling and confirming appointments (including via WhatsApp)</li>
            <li>Providing clinical care and follow-up</li>
            <li>Improving website experience and measuring marketing (GA/GTM/Clarity when enabled)</li>
            <li>Responding to enquiries</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">Sharing</h2>
          <p>
            We do not sell personal data. We may share information with service providers needed
            to operate the clinic or website (e.g., analytics vendors), or when required by law.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
          <p>
            Privacy questions:{" "}
            <a className="text-red-700 hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            or call {SITE.phones.primary}.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
