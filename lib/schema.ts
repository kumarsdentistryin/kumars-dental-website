import { SITE, SITE_URL } from "./site";
import { doctors, type Doctor, doctorAbsoluteUrl } from "./doctors";
import type { Treatment } from "./treatments";
import { locations, type LocationPage } from "./locations";
import type { BlogPost } from "./blog/posts";

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE.logo}`,
    image: `${SITE_URL}${SITE.logo}`,
    telephone: SITE.phones.primaryTel,
    email: SITE.email,
    priceRange: SITE.priceRange,
    paymentAccepted: SITE.paymentAccepted.join(", "),
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(SITE.rating.value),
      reviewCount: String(SITE.rating.count),
      bestRating: "5",
      worstRating: "1",
    },
    // Local SEO priority: Attur + Yelahanka New Town first, then corridors, then city
    areaServed: [
      { "@type": "Place" as const, name: "Attur Layout" },
      { "@type": "Place" as const, name: "Attur Main Road" },
      { "@type": "Place" as const, name: "Yelahanka New Town" },
      ...locations
        .filter(
          (loc) =>
            loc.slug !== "attur" &&
            loc.slug !== "yelahanka"
        )
        .map((loc) => ({
          "@type": "Place" as const,
          name: loc.name,
        })),
      { "@type": "Place" as const, name: "Yelahanka" },
      { "@type": "City" as const, name: "Bangalore" },
    ],
    medicalSpecialty: ["Dentistry", "Pediatric Dentistry", "Prosthodontics"],
    knowsAbout: [
      "Pediatric Dentist Attur Yelahanka New Town",
      "Kids Dentist Attur Layout",
      "Pediatric Dentistry Bangalore",
      "Microscopic Root Canal Treatment",
      "Dental Crowns Bangalore",
      "Dental Implants",
      "Smile Design",
      "Microscopic Dentistry",
    ],
    employee: doctors.map((d) => ({
      "@type": "Physician",
      "@id": `${doctorAbsoluteUrl(d)}#person`,
      name: d.name,
      url: doctorAbsoluteUrl(d),
    })),
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function personSchema(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${doctorAbsoluteUrl(doctor)}#person`,
    name: doctor.name,
    url: doctorAbsoluteUrl(doctor),
    image: `${SITE_URL}${doctor.image}`,
    jobTitle: doctor.credentials,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    alumniOf: doctor.alumniOf.map((name) => ({
      "@type": "CollegeOrUniversity",
      name,
    })),
    knowsAbout: doctor.knowsAbout,
    description: doctor.authorityStatement,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
  };
}

export function physicianSchema(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${doctorAbsoluteUrl(doctor)}#physician`,
    name: doctor.name,
    url: doctorAbsoluteUrl(doctor),
    image: `${SITE_URL}${doctor.image}`,
    medicalSpecialty: doctor.specializations,
    knowsAbout: doctor.knowsAbout,
    description: doctor.authorityStatement,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    alumniOf: doctor.alumniOf.map((name) => ({
      "@type": "CollegeOrUniversity",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    telephone: SITE.phones.primaryTel,
  };
}

export function medicalProcedureSchema(treatment: Treatment, doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.overview,
    url: `${SITE_URL}/treatments/${treatment.slug}`,
    procedureType: treatment.category,
    howPerformed: treatment.process.join(" "),
    preparation: treatment.whoNeedsIt.join("; "),
    followup: treatment.recovery,
    performer: {
      "@type": "Physician",
      name: doctor.name,
      url: doctorAbsoluteUrl(doctor),
    },
  };
}

export function locationDentistSchema(location: LocationPage) {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    name: `${SITE.name} — Serving ${location.name}`,
    url: `${SITE_URL}/locations/${location.slug}`,
    telephone: SITE.phones.primaryTel,
    image: `${SITE_URL}${SITE.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    // Clinic home-base always listed; page locality first for that landing page
    areaServed:
      location.slug === "attur" || location.slug === "yelahanka"
        ? [
            { "@type": "Place", name: "Attur Layout" },
            { "@type": "Place", name: "Attur Main Road" },
            { "@type": "Place", name: "Yelahanka New Town" },
            { "@type": "Place", name: location.name },
            { "@type": "City", name: "Bangalore" },
          ]
        : [
            { "@type": "Place", name: location.name },
            { "@type": "Place", name: "Attur Main Road" },
            { "@type": "Place", name: "Yelahanka New Town" },
            { "@type": "City", name: "Bangalore" },
          ],
    openingHoursSpecification: organizationSchema().openingHoursSpecification,
    aggregateRating: organizationSchema().aggregateRating,
    knowsAbout: [
      "Pediatric Dentistry Bangalore",
      "Dental Crowns Bangalore",
      "Microscopic Root Canal Treatment",
    ],
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    ...(post.reviewerName
      ? { reviewer: { "@type": "Person", name: post.reviewerName } }
      : {}),
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${SITE.logo}`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}${SITE.logo}`,
  };
}

export function jsonLdScript(data: object | object[]) {
  const payload = Array.isArray(data) ? data : [data];
  return JSON.stringify(payload.length === 1 ? payload[0] : payload);
}
