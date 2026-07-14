import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Search | Kumar's Microscopic Dental Care",
  description: "Search treatments, doctors, locations, and blog articles.",
  alternates: { canonical: `${SITE_URL}/search` },
  robots: { index: true, follow: true },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
