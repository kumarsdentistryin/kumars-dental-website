import { SITE, SITE_URL } from "./site";
import { doctors, type Doctor, doctorAbsoluteUrl } from "./doctors";
import type { Treatment } from "./treatments";
import { locations, type LocationPage } from "./locations";
import type { BlogPost } from "./blog/posts";

export type BreadcrumbItem = { name: string; path: string };

export function clinicGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalClinic"],
        "@id": "https://kumarsdentistry.in/#clinic",
        name: "Kumar's Microscopic Dental Care",
        url: "https://kumarsdentistry.in/",
        logo: "https://kumarsdentistry.in/TO_FILL_logo.png",
        image: "https://kumarsdentistry.in/TO_FILL_clinic-exterior.jpg",
        telephone: "+918197280019",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+918197280019",
            contactType: "appointments",
          },
          {
            "@type": "ContactPoint",
            telephone: "+918088266714",
            contactType: "customer service",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "No.12, 1st Floor, Attur Main Road",
          addressLocality: "Yelahanka New Town",
          addressRegion: "Karnataka",
          postalCode: "560064",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.1016255,
          longitude: 77.5669958,
        },
        hasMap: "https://maps.app.goo.gl/UyHu7aUWt7zMUQHa8",
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
        areaServed: [
          { "@type": "Place", name: "Yelahanka" },
          { "@type": "Place", name: "Yelahanka New Town" },
          { "@type": "Place", name: "Attur" },
          { "@type": "Place", name: "Jakkur" },
          { "@type": "Place", name: "Thanisandra" },
          { "@type": "Place", name: "Hebbal" },
          { "@type": "Place", name: "Sahakara Nagar" },
          { "@type": "Place", name: "Kogilu" },
          { "@type": "Place", name: "Vidyaranyapura" },
          { "@type": "Place", name: "RT Nagar" },
        ],
        medicalSpecialty: ["Dentistry", "Pediatric", "Endodontics"],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Microscope-assisted root canal treatment",
            url: "https://kumarsdentistry.in/treatments/microscopic-dentistry",
          },
          {
            "@type": "MedicalProcedure",
            name: "Pediatric dentistry",
            url: "https://kumarsdentistry.in/treatments/children-dentistry",
          },
          {
            "@type": "MedicalProcedure",
            name: "Clear aligners / Invisalign",
            url: "https://kumarsdentistry.in/treatments/invisible-aligners",
          },
          {
            "@type": "MedicalProcedure",
            name: "iTero 3D intraoral scan",
            url: "https://kumarsdentistry.in/treatments/itero-3d-scanner",
          },
        ],
        paymentAccepted: "UPI, Credit Card, Debit Card, Cash",
        currenciesAccepted: "INR",
        employee: [
          { "@id": "https://drpremkumar.in/#doctor" },
          { "@id": "https://kumarsdentistry.in/doctors/dr-rv-roshini#doctor" },
        ],
        sameAs: [
          "https://maps.app.goo.gl/UyHu7aUWt7zMUQHa8",
          "https://drpremkumar.in/",
          "TO_FILL_practo_clinic_url",
          "TO_FILL_justdial_url",
          "TO_FILL_lybrate_url",
          "TO_FILL_instagram",
          "TO_FILL_facebook",
        ],
      },
      {
        "@type": "Physician",
        "@id": "https://drpremkumar.in/#doctor",
        name: "Dr. Prem Kumar R",
        url: "https://kumarsdentistry.in/doctors/dr-prem-kumar",
        sameAs: ["https://drpremkumar.in/"],
        worksFor: { "@id": "https://kumarsdentistry.in/#clinic" },
      },
      {
        "@type": "WebSite",
        "@id": "https://kumarsdentistry.in/#website",
        url: "https://kumarsdentistry.in/",
        publisher: { "@id": "https://kumarsdentistry.in/#clinic" },
      },
    ],
  };
}

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
  return clinicGraphSchema();
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    publisher: { "@id": `${SITE_URL}/#clinic` },
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
    worksFor: { "@id": `${SITE_URL}/#clinic` },
    alumniOf: doctor.alumniOf.map((name) => ({
      "@type": "CollegeOrUniversity",
      name,
    })),
    ...(doctor.kdcRegistration
      ? {
          identifier: {
            "@type": "PropertyValue",
            name: "Dental Council Registration Number",
            value: doctor.kdcRegistration,
            description: doctor.council || "Karnataka State Dental Council",
          },
        }
      : {}),
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
    worksFor: { "@id": `${SITE_URL}/#clinic` },
    ...(doctor.kdcRegistration
      ? {
          identifier: {
            "@type": "PropertyValue",
            name: "State Dental Council Registration (Part A)",
            value: doctor.kdcRegistration,
            description: doctor.council || "Karnataka State Dental Council",
          },
        }
      : {}),
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
    howPerformed: treatment.process
      .map((step, i) => `${i + 1}. ${step}`)
      .join("\n"),
    preparation: treatment.whoNeedsIt.join("; "),
    followup: treatment.recovery,
    provider: {
      "@id": "https://kumarsdentistry.in/#clinic",
    },
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
    "@type": "WebPage",
    name: `Dentist near ${location.name}, Bengaluru | Pediatric & Microscopic Dental Care | Kumar's Dental`,
    url: `${SITE_URL}/locations/${location.slug}`,
    about: { "@id": "https://kumarsdentistry.in/#clinic" },
    spatialCoverage: {
      "@type": "Place",
      name: `${location.name}, Bengaluru`,
    },
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
