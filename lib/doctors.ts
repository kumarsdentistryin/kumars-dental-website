import { SITE_URL } from "./site";

export type DoctorId = "prem" | "roshini";

export type Doctor = {
  id: DoctorId;
  slug: string;
  name: string;
  shortName: string;
  credentials: string;
  image: string;
  path: string;
  experienceYears: number;
  kdcRegistration?: string;
  council?: string;
  qualifications: string[];
  specializations: string[];
  focusAreas: string[];
  knowsAbout: string[];
  /** Educational org names for schema.org alumniOf (accurate affiliations only). */
  alumniOf: string[];
  authorityStatement: string;
  bio: string[];
  medicalReviewerLine: string;
};

export const doctors: Doctor[] = [
  {
    id: "prem",
    slug: "dr-prem-kumar",
    name: "Dr. Prem Kumar R",
    shortName: "Dr. Prem Kumar",
    credentials: "MDS Pediatric & Preventive Dentist",
    image: "/website-images/dr-prem-kumar.webp",
    path: "/doctors/dr-prem-kumar",
    experienceYears: 6,
    kdcRegistration: "47094 A",
    council: "Karnataka State Dental Council (KSDC / NDC)",
    qualifications: [
      "BDS from RGUHS (Rajiv Gandhi University of Health Sciences) - July 2018",
      "MDS in Paedodontics and Preventive Dentistry from M S Ramaiah University of Applied Sciences, Bangalore - July 2023",
      "Registered Dentist under Part A of Dentists Act 1948 (KSDC Regn No. 47094 A)",
      "Formerly Associate Professor at Ramaiah",
      "Certification in Advanced Endodontics (Root Canal Treatment)",
      "Certification in Microscopic Dentistry (25x magnification)",
    ],
    specializations: [
      "Pediatric Dentistry",
      "Microscopic RCT",
      "Microscopic Dentistry",
      "Preventive Care",
      "Behavior Guidance",
    ],
    focusAreas: [
      "Pediatric dental care for children and teens at the Attur / Yelahanka New Town clinic",
      "Microscopic root canal treatment with magnification-guided precision",
      "Behavior guidance for anxious young patients",
      "Preventive dentistry and oral hygiene education",
      "Comfort-focused, low-anxiety clinical approach",
    ],
    knowsAbout: [
      "Pediatric Dentist Attur Yelahanka New Town",
      "Kids Dentist Attur Layout",
      "Pediatric Dentistry Yelahanka New Town",
      "Children's Dentistry Attur Main Road",
      "Pediatric Dentistry Bangalore",
      "Microscopic Root Canal Treatment",
      "Microscopic Dentistry",
      "Preventive Pediatric Dentistry",
      "Behavior Guidance in Pediatric Dentistry",
    ],
    alumniOf: ["RGUHS (Rajiv Gandhi University of Health Sciences)", "Ramaiah Dental College"],
    authorityStatement:
      "MDS Pediatric & Preventive Dentistry (KSDC Reg. 47094 A). Practising microscope-assisted root canal treatment and child-friendly dentistry at Kumar's Microscopic Dental Care, Attur Main Road, Yelahanka New Town. Formerly Associate Professor at Ramaiah University of Applied Sciences.",
    bio: [
      "Dr. Prem Kumar R is an MDS Pediatric & Preventive Dentist practicing at Kumar's Microscopic Dental Care, No.12, 1st Floor, Attur Main Road, Yelahanka New Town—the clinic home base for families in Attur Layout and Yelahanka seeking a trusted kids dentist.",
      "He served as Associate Professor at Ramaiah and trained at Ramaiah Dental College (MDS Pediatric & Preventive Dentistry). His clinical focus pairs gentle children's dentistry with magnification-assisted microscopic endodontics for precise root canal care.",
      "Families from Attur, Yelahanka New Town, Vidyaranyapura, Sahakar Nagar, Jakkur, Thanisandra, Hebbal, RT Nagar, and across Bengaluru visit Kumar's Microscopic Dental Care on Attur Main Road for specialized pediatric care and microscope-assisted root canal treatments.",
    ],
    medicalReviewerLine:
      "Medically reviewed by Dr. Prem Kumar R, MDS (Pediatric & Preventive Dentistry).",
  },
  {
    id: "roshini",
    slug: "dr-rv-roshini",
    name: "Dr. RV Roshini",
    shortName: "Dr. RV Roshini",
    credentials: "MDS Prosthodontist & Implant Specialist",
    image: "/website-images/dr-roshini.webp",
    path: "/doctors/dr-rv-roshini",
    experienceYears: 6,
    qualifications: [
      "BDS from RGUHS (Rajiv Gandhi University of Health Sciences)",
      "MDS in Prosthodontics and Implantology from Ramaiah Dental College",
      "Certification in Dental Implant Surgery (Advanced)",
      "Certification in Smile Design and Esthetic Dentistry",
    ],
    specializations: [
      "Dental Crowns",
      "Bridges",
      "Dental Implants",
      "Smile Design",
      "Prosthodontics",
    ],
    focusAreas: [
      "Dental crowns and bridges for function and aesthetics",
      "Dental implant placement and prosthetic restoration",
      "Smile design and esthetic rehabilitation",
      "Dentures and removable prosthetics",
      "Complex full-mouth rehabilitation planning",
    ],
    knowsAbout: [
      "Dental Crowns Bangalore",
      "Dental Crowns Yelahanka New Town",
      "Dental Bridges",
      "Prosthodontics",
      "Dental Implants Yelahanka",
      "Smile Design Bangalore",
      "Full Mouth Rehabilitation",
      "Dental Veneers",
    ],
    alumniOf: ["RGUHS (Rajiv Gandhi University of Health Sciences)", "Ramaiah Dental College"],
    authorityStatement:
      "MDS Prosthodontist (KSDC Reg. 33149 A). Specializing in monolithic zirconia crowns, fixed dental bridges, dental implants, and smile design at Kumar's Microscopic Dental Care, Attur Main Road, Yelahanka New Town.",
    bio: [
      "Dr. RV Roshini is an MDS Prosthodontist & Implant Specialist focused on crowns, bridges, implants, and smile design for patients across North Bangalore—practicing at the Attur Main Road / Yelahanka New Town clinic.",
      "She plans restorative and esthetic cases with attention to bite, longevity, and natural appearance.",
      "Patients seeking crown and bridge work, implant-supported restorations, or smile makeovers in the Yelahanka corridor consult her for structured prosthetic care.",
    ],
    medicalReviewerLine:
      "Medically reviewed by Dr. RV Roshini, MDS (Prosthodontics & Implantology).",
  },
];

export function getDoctor(id: DoctorId): Doctor {
  const doctor = doctors.find((d) => d.id === id);
  if (!doctor) throw new Error(`Unknown doctor: ${id}`);
  return doctor;
}

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export function doctorAbsoluteUrl(doctor: Doctor) {
  return `${SITE_URL}${doctor.path}`;
}
