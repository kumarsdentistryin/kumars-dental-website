import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Dental Appointment | Kumar's Microscopic Dental Care Yelahanka",
  description:
    "Book with Kumar's Dental in Yelahanka. Pediatric & microscopic RCT with Dr. Prem Kumar R; crowns, bridges & implants with Dr. RV Roshini. Call +91 81972 80019.",
  alternates: { canonical: `${SITE_URL}/appointments` },
  openGraph: {
    title: "Book Dental Appointment | Kumar's Dental Yelahanka",
    description:
      "Schedule pediatric, RCT, crowns, or implant care. WhatsApp confirmation during clinic hours.",
    url: `${SITE_URL}/appointments`,
  },
};

export default function AppointmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
