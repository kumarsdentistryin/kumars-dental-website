export type BlogCategory =
  | "Dental Tips"
  | "Oral Hygiene"
  | "Children Dentistry"
  | "Implants"
  | "Braces"
  | "RCT"
  | "Cosmetic Dentistry"
  | "Microscopic Dentistry";

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  datePublished: string;
  dateModified?: string;
  readMinutes: number;
  authorName: string;
  reviewerName: string;
  image?: string;
  keywords: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pediatric-dental-care-guide-yelahanka",
    title: "Pediatric Dental Care Guide for Yelahanka Parents",
    excerpt:
      "How to choose a kids dentist in Yelahanka—and why Dr. Prem Kumar R leads pediatric dentistry at Kumar's Microscopic Dental Care.",
    category: "Children Dentistry",
    datePublished: "2026-01-10",
    dateModified: "2026-07-01",
    readMinutes: 8,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. Prem Kumar R",
    image: "/website-images/pedsfin.jpeg",
    keywords: [
      "pediatric dentist Yelahanka",
      "kids dentist Bangalore",
      "children dental care",
    ],
    sections: [
      {
        heading: "Finding a pediatric dentist in Yelahanka",
        paragraphs: [
          "Parents searching for a pediatric dentist in Yelahanka want more than a friendly chair—they need an MDS-trained clinician comfortable with behaviour guidance, prevention, and age-appropriate restorative care.",
          "At Kumar's Microscopic Dental Care on Attur Main Road, Yelahanka New Town, Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry; formerly Associate Professor at Ramaiah) is the primary kids dentist for Attur and Yelahanka—serving nearby North Bangalore corridors and broader Bangalore pediatric queries.",
        ],
      },
      {
        heading: "Why specialist pediatric care matters",
        bullets: [
          "Primary teeth guide eruption paths of permanent successors",
          "Early decay can progress quickly in children",
          "Anxiety patterns formed early influence lifelong dental attendance",
          "Trauma from sports and falls needs time-sensitive protocols",
        ],
      },
      {
        heading: "What to expect at a kids’ visit",
        paragraphs: [
          "Visits typically include a gentle exam, hygiene coaching for parents, and risk-based fluoride or sealant discussion. Radiographs are taken only when clinically justified.",
          "Dr. Prem Kumar R introduces instruments step-by-step so children feel informed rather than surprised.",
        ],
      },
      {
        heading: "When to book sooner",
        bullets: [
          "Night-time bottle habits with visible white or brown spots",
          "Tooth pain, swelling, or facial trauma",
          "Bleeding gums or persistent bad breath",
          "First tooth eruption or by the first birthday—whichever comes first guidance for many pediatric guidelines",
        ],
      },
    ],
  },
  {
    slug: "microscopic-root-canal-treatment-bangalore",
    title: "Microscopic Root Canal Treatment in Bangalore: What Patients Should Know",
    excerpt:
      "How magnification-assisted RCT works and how Dr. Prem Kumar R approaches precision endodontics in Yelahanka.",
    category: "RCT",
    datePublished: "2026-01-10",
    dateModified: "2026-07-01",
    readMinutes: 7,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. Prem Kumar R",
    image: "/website-images/RCT.png",
    keywords: [
      "microscopic root canal Bangalore",
      "RCT Yelahanka",
      "endodontist near Yelahanka",
    ],
    sections: [
      {
        heading: "Why magnification changes RCT visualisation",
        paragraphs: [
          "Root canal treatment aims to remove infected pulp tissue, disinfect canals, and seal the space so the natural tooth can be retained. Anatomy is often complex—fine canals and cracks are easier to evaluate under a dental operating microscope.",
          "Dr. Prem Kumar R brings microscopic dentistry training into endodontic care at our Yelahanka clinic, reinforcing precision over guesswork.",
        ],
      },
      {
        heading: "Who typically needs RCT",
        bullets: [
          "Deep decay reaching the pulp",
          "Lingering thermal pain or spontaneous toothache",
          "Abscess or gum pimple near a tooth",
          "Trauma exposing or injuring pulp tissue",
        ],
      },
      {
        heading: "Aftercare and crowns",
        paragraphs: [
          "Mild tenderness for a few days is common. Many posterior teeth benefit from a protective crown after RCT. Crowns at our clinic are planned with prosthodontist Dr. RV Roshini when coverage is indicated.",
          "Outcomes depend on anatomy, infection severity, and timely final restoration—individual guarantees are never appropriate in ethical dental communication.",
        ],
      },
    ],
  },
  {
    slug: "dental-braces-aligners-bangalore",
    title: "Dental Braces and Aligners in Bangalore: Choosing the Right Path",
    excerpt:
      "Metal braces, ceramic braces, or clear aligners—how our Yelahanka team helps you choose after examination.",
    category: "Braces",
    datePublished: "2026-01-10",
    dateModified: "2026-07-01",
    readMinutes: 6,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. Prem Kumar R",
    image: "/website-images/braces1.webp",
    keywords: ["braces Bangalore", "aligners Yelahanka", "orthodontics"],
    sections: [
      {
        heading: "Fixed braces vs clear aligners",
        paragraphs: [
          "Metal and ceramic braces deliver continuous force and suit many comprehensive bite corrections. Clear aligners appeal to adults who will wear trays 20–22 hours daily and whose movements fit aligner biomechanics.",
          "Neither option is universally superior—examination decides.",
        ],
      },
      {
        heading: "Children and teens",
        paragraphs: [
          "Growing patients benefit from early pediatric assessment with Dr. Prem Kumar R to spot habits, eruption issues, and timing for interceptive care before full braces.",
        ],
        bullets: [
          "Crowding with oral hygiene difficulty",
          "Protruding teeth at trauma risk",
          "Thumb sucking persisting into school age",
        ],
      },
      {
        heading: "Retention is not optional",
        paragraphs: [
          "After active movement, retainers protect results. Relapse risk rises when retainers are skipped—plan for long-term wear from day one.",
        ],
      },
    ],
  },
  {
    slug: "dr-prem-kumar-pediatric-dentist-bangalore",
    title: "Dr. Prem Kumar R: Pediatric Dentistry Authority in Bangalore",
    excerpt:
      "Credentials, clinical focus, and how families across Yelahanka and North Bangalore access specialist kids’ dental care.",
    category: "Children Dentistry",
    datePublished: "2026-03-15",
    dateModified: "2026-07-01",
    readMinutes: 5,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. Prem Kumar R",
    image: "/website-images/dr-prem-kumar.jpg",
    keywords: [
      "Dr Prem Kumar pediatric dentist Bangalore",
      "best kids dentist Yelahanka",
    ],
    sections: [
      {
        heading: "Who is Dr. Prem Kumar R?",
        paragraphs: [
          "Dr. Prem Kumar R is an MDS Pediatric & Preventive Dentist at Kumar's Microscopic Dental Care, No.12, 1st Floor, Attur Main Road, Yelahanka New Town. He is the primary kids dentist for Attur Layout and Yelahanka New Town, with corridor reach across North Bangalore and Bangalore-wide pediatric + microscopic RCT authority.",
          "He served as Associate Professor at Ramaiah. Qualifications include BDS (RGUHS), MDS Pediatric & Preventive Dentistry (Ramaiah Dental College), plus certifications in advanced endodontics and microscopic dentistry.",
        ],
      },
      {
        heading: "What parents can expect",
        bullets: [
          "Behaviour guidance for anxious children",
          "Prevention-first plans (hygiene, diet, sealants/fluoride as indicated)",
          "Age-appropriate restorative and pulp care",
          "Microscope-assisted endodontics when permanent or suitable teeth need RCT",
        ],
      },
      {
        heading: "Serving North Bangalore families",
        paragraphs: [
          "Clinic home base: Attur Main Road, Yelahanka New Town. Patients also visit from Vidyaranyapura, Sahakar Nagar, Jakkur, Thanisandra, Hebbal, RT Nagar, and New BEL Road. Appointments: +91 81972 80019.",
        ],
      },
    ],
  },
  {
    slug: "dr-rv-roshini-crowns-specialist-bangalore",
    title: "Dr. RV Roshini: Crowns, Bridges & Smile Design in Bangalore",
    excerpt:
      "Why prosthodontist Dr. RV Roshini leads crown and bridge care at Kumar's Dental—Bangalore entity focus for prosthetic excellence.",
    category: "Cosmetic Dentistry",
    datePublished: "2026-03-20",
    dateModified: "2026-07-01",
    readMinutes: 5,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. RV Roshini",
    image: "/website-images/dr-roshini.jpg",
    keywords: [
      "Dr RV Roshini crowns Bangalore",
      "prosthodontist Yelahanka",
      "dental crowns specialist",
    ],
    sections: [
      {
        heading: "Prosthodontics-led crown care",
        paragraphs: [
          "Dental crowns fail early when bite, margins, and material choice are rushed. Dr. RV Roshini, MDS Prosthodontist & Implant Specialist, leads crowns, bridges, dentures, implants, and smile design for patients who want prosthetic planning—not guesswork.",
          "She is our Bangalore authority entity for crowns and related prosthetic dentistry at the Yelahanka clinic.",
        ],
      },
      {
        heading: "Common crown indications",
        bullets: [
          "After root canal treatment on back teeth",
          "Large fractures or failing big fillings",
          "Implant-supported single crowns",
          "Esthetic rebuilds within smile design plans",
        ],
      },
      {
        heading: "Materials discussion, not pressure",
        paragraphs: [
          "Zirconia, metal-ceramic, and other ceramics each have trade-offs. Indicative Bangalore cost ranges appear on our crowns treatment page; final fees follow examination.",
        ],
      },
    ],
  },
  {
    slug: "kids-first-dental-visit-bangalore",
    title: "Your Child’s First Dental Visit in Bangalore: A Calm Checklist",
    excerpt:
      "Practical prep tips for parents before seeing pediatric dentist Dr. Prem Kumar R in Yelahanka.",
    category: "Children Dentistry",
    datePublished: "2026-04-05",
    dateModified: "2026-07-01",
    readMinutes: 4,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. Prem Kumar R",
    image: "/website-images/pedsfin.jpeg",
    keywords: ["first dental visit kids Bangalore", "pediatric dentist tips"],
    sections: [
      {
        heading: "Before you arrive",
        bullets: [
          "Use positive language—avoid ‘hurt’ or ‘needle’ stories",
          "Share medical and allergy history honestly",
          "Bring a comfort item for younger children",
          "Arrive a few minutes early to settle in",
        ],
      },
      {
        heading: "During the visit",
        paragraphs: [
          "Dr. Prem Kumar R typically starts with conversation and a seated ‘ride’ introduction before instruments. Parents remain partners—coaching without hovering anxiety helps.",
        ],
      },
      {
        heading: "Afterward",
        paragraphs: [
          "Celebrate cooperation. Book recall based on cavity risk. If treatment is needed, we phase work to match your child’s pace.",
        ],
      },
    ],
  },
  {
    slug: "zirconia-crowns-vs-metal-ceramic-bangalore",
    title: "Zirconia Crowns vs Metal-Ceramic: A Bangalore Patient Guide",
    excerpt:
      "Prosthodontist Dr. RV Roshini explains practical differences—strength, aesthetics, and when each crown type fits.",
    category: "Cosmetic Dentistry",
    datePublished: "2026-04-18",
    dateModified: "2026-07-01",
    readMinutes: 6,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. RV Roshini",
    image: "/website-images/FMRfin.jpeg",
    keywords: ["zirconia crowns Bangalore", "PFM crown Yelahanka"],
    sections: [
      {
        heading: "Start with the tooth, not the trend",
        paragraphs: [
          "Social media often crowns zirconia as ‘best’ universally. Clinically, Dr. RV Roshini matches material to bite force, aesthetic zone, opposing dentition, and remaining tooth structure.",
        ],
      },
      {
        heading: "Quick comparison",
        bullets: [
          "Zirconia: strong, good aesthetics, popular for many posterior and anterior cases",
          "Metal-ceramic (PFM): proven workhorse; metal substructure with ceramic layering",
          "Either can fail if margins leak or grinding is unmanaged",
        ],
      },
      {
        heading: "After cementation",
        paragraphs: [
          "Floss carefully around margins, attend recalls, and consider a night guard if you grind. Crown longevity is a partnership—not a product sticker.",
        ],
      },
    ],
  },
  {
    slug: "oral-hygiene-routine-bangalore-families",
    title: "Oral Hygiene Routine for Bangalore Families",
    excerpt:
      "Simple daily habits that reduce cavities—tips aligned with preventive guidance at Kumar's Dental.",
    category: "Oral Hygiene",
    datePublished: "2026-05-02",
    dateModified: "2026-07-01",
    readMinutes: 4,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. Prem Kumar R",
    image: "/website-images/routinefin.jpeg",
    keywords: ["oral hygiene Bangalore", "how to brush teeth kids"],
    sections: [
      {
        heading: "The non-negotiables",
        bullets: [
          "Twice-daily fluoride toothpaste brushing (pea-size for young children—follow age guidance)",
          "Interdental cleaning once daily for adults and older kids",
          "Water after sugary snacks; limit grazing",
          "Professional cleaning on a risk-based recall",
        ],
      },
      {
        heading: "Kids need coaching longer than you think",
        paragraphs: [
          "Supervise brushing until fine motor control is reliable—often until about age 7–8. Dr. Prem Kumar R reinforces techniques during pediatric visits.",
        ],
      },
    ],
  },
  {
    slug: "dental-implants-recovery-tips-yelahanka",
    title: "Dental Implant Recovery Tips from Our Yelahanka Prosthodontist",
    excerpt:
      "Practical aftercare following implant placement—guidance reviewed by Dr. RV Roshini.",
    category: "Implants",
    datePublished: "2026-05-20",
    dateModified: "2026-07-01",
    readMinutes: 5,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. RV Roshini",
    image: "/website-images/implantsfin.jpeg",
    keywords: ["dental implant recovery Bangalore", "implant aftercare Yelahanka"],
    sections: [
      {
        heading: "First 72 hours",
        bullets: [
          "Soft foods; avoid hot liquids if advised",
          "No smoking—impairs healing",
          "Cold compress cycles for swelling as directed",
          "Take prescribed medicines on schedule",
        ],
      },
      {
        heading: "Until the crown is placed",
        paragraphs: [
          "Osseointegration takes time. Do not chew heavily on the surgical site. Attend reviews. Final crowns and bridges are designed by Dr. RV Roshini once healing allows.",
        ],
      },
    ],
  },
  {
    slug: "microscopic-dentistry-why-magnification-matters",
    title: "Why Microscopic Magnification Matters in Modern Dentistry",
    excerpt:
      "Educational overview of dental microscopes—and how Dr. Prem Kumar R applies them in Yelahanka.",
    category: "Microscopic Dentistry",
    datePublished: "2026-06-08",
    dateModified: "2026-07-01",
    readMinutes: 5,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. Prem Kumar R",
    image: "/website-images/rct-under-microscope.jpg",
    keywords: ["microscopic dentistry Bangalore", "dental microscope"],
    sections: [
      {
        heading: "Seeing more to treat better",
        paragraphs: [
          "Human eyes alone miss details that magnification reveals—fine cracks, accessory canals, and finishing margins. Microscopes do not replace skill; they extend vision.",
          "Dr. Prem Kumar R uses microscopic protocols especially in endodontics at Kumar's Microscopic Dental Care.",
        ],
      },
      {
        heading: "Patient questions we welcome",
        bullets: [
          "Will every filling use the microscope? Not always—case selection matters.",
          "Does magnification guarantee success? No. Biology and restoration quality still decide.",
          "Is treatment longer? Sometimes meticulous care takes more chair time—and that can be worthwhile.",
        ],
      },
    ],
  },
  {
    slug: "dental-tips-before-wedding-smile-bangalore",
    title: "Dental Tips Before a Wedding Smile Makeover in Bangalore",
    excerpt:
      "Timeline advice for whitening, veneers, and crowns—coordinated with Dr. RV Roshini’s smile design approach.",
    category: "Dental Tips",
    datePublished: "2026-06-22",
    dateModified: "2026-07-01",
    readMinutes: 5,
    authorName: "Kumar's Dental Editorial",
    reviewerName: "Dr. RV Roshini",
    image: "/website-images/smile-makeover.jpg",
    keywords: ["wedding smile Bangalore", "smile design tips"],
    sections: [
      {
        heading: "Start earlier than Instagram suggests",
        paragraphs: [
          "Ceramic veneers and crowns need examination, gum health checks, labs, and try-ins. Rushing invites regret. Book a smile consult with Dr. RV Roshini weeks to months ahead depending on scope.",
        ],
      },
      {
        heading: "Sequence that usually works",
        bullets: [
          "Treat cavities and gum inflammation first",
          "Whitening before shade-sensitive ceramics when appropriate",
          "Mock-up approval before irreversible prep",
          "Plan a night guard if stress clenching is expected",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
