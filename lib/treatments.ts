import type { DoctorId } from "./doctors";

export type FaqItem = { question: string; answer: string };

export type Treatment = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroSubtitle: string;
  overview: string;
  whoNeedsIt: string[];
  symptoms: string[];
  causes: string[];
  benefits: string[];
  risks: string[];
  process: string[];
  recovery: string;
  duration: string;
  costRange: string;
  successRate: string;
  faqs: FaqItem[];
  relatedSlugs: string[];
  leadDoctor: DoctorId;
  image: string;
  category: string;
  lastUpdated: string;
};

const costNote =
  " Indicative Bangalore ranges; confirm at consultation.";

export const treatments: Treatment[] = [
  {
    slug: "root-canal-treatment",
    name: "Microscopic Root Canal Treatment",
    shortName: "Root Canal Treatment",
    metaTitle: "Microscopic Root Canal Attur Yelahanka | Dr. Prem Kumar R",
    metaDescription:
      "Microscopic RCT on Attur Main Road, Yelahanka New Town by Dr. Prem Kumar R—magnification-guided endodontics. Book Kumar's Dental Care.",
    keywords: [
      "microscopic root canal Yelahanka New Town",
      "microscopic RCT Attur",
      "microscopic root canal Bangalore",
      "RCT Yelahanka",
      "root canal specialist Bangalore",
    ],
    heroSubtitle:
      "Magnification-guided endodontics at our Attur / Yelahanka New Town clinic—precision canal care with Dr. Prem Kumar R.",
    overview:
      "Root canal treatment removes infected or inflamed pulp from inside a tooth, then cleans and seals the canal system so the natural tooth can be retained. At Kumar's Microscopic Dental Care on Attur Main Road, Yelahanka New Town, Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry; formerly Associate Professor at Ramaiah) performs many RCTs under microscopic magnification to improve visualisation of fine canals and cracks.",
    whoNeedsIt: [
      "Patients with deep decay reaching the pulp",
      "Teeth with irreversible pulpitis or abscess",
      "Cracked teeth with pulp involvement",
      "Failed or incomplete prior root canal needing retreatment assessment",
    ],
    symptoms: [
      "Spontaneous or lingering tooth pain",
      "Pain on biting or temperature sensitivity",
      "Swelling of gum or face near a tooth",
      "Discoloured tooth after trauma",
      "Pimple-like drainage on the gum",
    ],
    causes: [
      "Deep dental caries",
      "Trauma or fracture",
      "Large prior restorations",
      "Bacterial leakage under old fillings",
      "Cracks allowing bacterial ingress",
    ],
    benefits: [
      "Preserves the natural tooth whenever clinically feasible",
      "Relieves infection-related pain after appropriate care",
      "Microscopic visualisation can aid detection of missed anatomy",
      "Often completed in one or few visits depending on complexity",
    ],
    risks: [
      "Instrument separation or canal ledge (uncommon with careful technique)",
      "Post-operative sensitivity for a few days",
      "Need for crown after RCT on many posterior teeth",
      "Rare need for surgical endodontics if healing is incomplete",
    ],
    process: [
      "Clinical exam, pulp testing, and radiographs as needed",
      "Local anaesthesia and rubber-dam isolation when indicated",
      "Access, cleaning, shaping under magnification when microscopic protocol is used",
      "Disinfection and obturation (sealing) of canals",
      "Temporary or definitive restoration; crown planning if required",
    ],
    recovery:
      "Mild tenderness for 1–3 days is common. Soft diet, prescribed medicines if given, and avoiding biting hard foods on the treated tooth until restored. Seek care if severe swelling or fever develops.",
    duration:
      "Typically 45–120 minutes per visit; complex or multi-rooted teeth may need more than one appointment.",
    costRange: `₹4,000 – ₹12,000+ per tooth depending on tooth type and complexity.${costNote}`,
    successRate:
      "When canals are thoroughly cleaned and sealed and the tooth is properly restored, contemporaneous clinical literature reports high rates of tooth retention; individual outcomes vary with anatomy, infection severity, and follow-up care. We avoid guaranteeing percentages for any single case.",
    faqs: [
      {
        question: "Is microscopic RCT different from conventional RCT?",
        answer:
          "The goals are the same—remove infection and seal canals. Magnification can help the clinician see fine canals and details more clearly. Suitability is decided after examination by Dr. Prem Kumar R.",
      },
      {
        question: "Will I need a crown after root canal?",
        answer:
          "Many back teeth benefit from a crown to protect against fracture. Front teeth sometimes need only a bonded restoration. Dr. Prem or our prosthodontist Dr. RV Roshini will advise based on remaining tooth structure.",
      },
      {
        question: "Is root canal painful?",
        answer:
          "With modern local anaesthesia, the procedure is generally comfortable. Some post-treatment soreness can occur and usually settles with advised care.",
      },
    ],
    relatedSlugs: ["microscopic-dentistry", "crowns", "emergency-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/RCT.png",
    category: "Endodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Dental Implants",
    metaTitle: "Dental Implants Bangalore | Dr. RV Roshini | Yelahanka",
    metaDescription:
      "Dental implant placement and restoration in Yelahanka led by prosthodontist Dr. RV Roshini. Replace missing teeth with lasting solutions.",
    keywords: [
      "dental implants Bangalore",
      "implantologist Yelahanka",
      "tooth implant near me",
    ],
    heroSubtitle:
      "Titanium implant fixtures restored with crowns or bridges for a stable tooth replacement option.",
    overview:
      "Dental implants replace missing tooth roots with biocompatible fixtures that support crowns, bridges, or dentures. At Kumar's Dental, implant planning and prosthetic restoration are led by Dr. RV Roshini, MDS Prosthodontist & Implant Specialist.",
    whoNeedsIt: [
      "Adults missing one or more teeth",
      "Patients unhappy with removable partial dentures",
      "Cases needing implant-supported bridges after multiple losses",
      "Suitable bone volume after clinical and radiographic assessment",
    ],
    symptoms: [
      "Missing tooth or teeth",
      "Difficulty chewing on one side",
      "Ill-fitting or unstable denture",
      "Desire for a fixed replacement without preparing adjacent teeth",
    ],
    causes: [
      "Tooth loss from decay or gum disease",
      "Trauma",
      "Failed long-standing restorations",
      "Congenital absence in select cases",
    ],
    benefits: [
      "Does not rely on grinding healthy neighbouring teeth (unlike some bridges)",
      "Supports chewing function and facial profile when planned well",
      "Can replace single teeth or anchor larger prostheses",
      "Prosthetic designs customised by a prosthodontist",
    ],
    risks: [
      "Surgical swelling, bruising, or temporary numbness (rare lasting sensory change)",
      "Implant failure to integrate (influenced by smoking, uncontrolled diabetes, hygiene)",
      "Need for bone grafting in some sites before or with implant placement",
      "Peri-implant inflammation if hygiene and recall are neglected",
    ],
    process: [
      "Consultation, medical history, imaging (OPG/CBCT when indicated)",
      "Treatment plan: single implant, multiple, or implant-supported prosthesis",
      "Surgical placement under local anaesthesia",
      "Healing/osseointegration period as advised",
      "Abutment and crown/bridge fabrication by Dr. RV Roshini's prosthetic protocol",
    ],
    recovery:
      "Soft diet for several days; avoid smoking; maintain gentle hygiene around the site. Sutures (if placed) removed as scheduled. Full chewing on the implant starts only after restoration is completed.",
    duration:
      "Surgical visit often 45–90 minutes per implant site; overall timeline from placement to final crown commonly 3–6 months depending on healing and grafting needs.",
    costRange: `₹25,000 – ₹60,000+ per implant including prosthetic components varies by system and case complexity.${costNote}`,
    successRate:
      "Published implant survival rates are generally high in healthy non-smokers with good bone and hygiene; individual prognosis is assessed case by case. We do not promise lifetime success without maintenance.",
    faqs: [
      {
        question: "Who plans my implant crown in your clinic?",
        answer:
          "Dr. RV Roshini leads implant and prosthetic planning, including crowns and bridges on implants, as Bangalore-focused crown and prosthodontic care authority at our Yelahanka clinic.",
      },
      {
        question: "How long do implants last?",
        answer:
          "With good oral hygiene, healthy tissues, and regular recalls, many implants serve for many years. Longevity depends on bite forces, gum health, and maintenance—not a guarantee of permanence.",
      },
      {
        question: "Is everyone a candidate?",
        answer:
          "Not always. Bone volume, medical conditions, and smoking history are reviewed before recommending implants. Alternatives like bridges or dentures may be proposed.",
      },
    ],
    relatedSlugs: ["crowns", "bridges", "dentures", "smile-designing"],
    leadDoctor: "roshini",
    image: "/website-images/implantsfin.jpeg",
    category: "Implantology",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "smile-designing",
    name: "Smile Designing",
    shortName: "Smile Design",
    metaTitle: "Smile Designing Bangalore | Dr. RV Roshini | Kumar's Dental",
    metaDescription:
      "Smile design and esthetic planning in Yelahanka by Dr. RV Roshini—crowns, veneers, and prosthetic harmony for a confident smile.",
    keywords: [
      "smile designing Bangalore",
      "smile makeover Yelahanka",
      "cosmetic smile design",
    ],
    heroSubtitle:
      "Prosthodontic smile planning that balances aesthetics, bite, and durable restorations.",
    overview:
      "Smile designing is a structured plan to improve tooth colour, shape, alignment appearance, and lip–tooth display using restorative and cosmetic options. Dr. RV Roshini leads smile design cases involving crowns, veneers, and prosthetic rebuilds at Kumar's Microscopic Dental Care.",
    whoNeedsIt: [
      "Patients unhappy with tooth shape, colour, or uneven edges",
      "Worn or fractured front teeth needing rebuild",
      "Smile gaps or proportions after orthodontic or restorative history",
      "Those seeking coordinated crowns/veneers rather than piecemeal fixes",
    ],
    symptoms: [
      "Self-consciousness about smile appearance",
      "Chipped, uneven, or stained front teeth",
      "Old discoloured crowns or fillings showing at the smile line",
      "Bite wear flattening front teeth",
    ],
    causes: [
      "Developmental enamel defects",
      "Trauma and wear",
      "Age-related changes",
      "Prior dentistry that no longer matches adjacent teeth",
    ],
    benefits: [
      "Plan-first approach reduces mismatched one-tooth fixes",
      "Combines prosthetic expertise with clinical photography/mock-up when useful",
      "Options scaled to budget and tooth structure conservation",
      "Led by a prosthodontist with crown and smile-design focus",
    ],
    risks: [
      "Tooth preparation irreversible for veneers/crowns",
      "Sensitivity after preparation",
      "Colour mismatch if maintenance or bonding protocols are ignored",
      "Need for night guard if grinding is severe",
    ],
    process: [
      "Consultation and smile goals discussion",
      "Photos, shade assessment, bite evaluation",
      "Mock-up or digital preview when indicated",
      "Agreement on veneers, crowns, whitening adjuncts, or aligners referral pathway",
      "Preparation, temporaries, try-in, and cementation",
    ],
    recovery:
      "Temporary restorations may feel bulky for a few days. Avoid hard sticky foods until finals are cemented. Mild sensitivity is common and usually temporary.",
    duration:
      "Planning visit 30–60 minutes; restorative phase often 2–4 visits depending on number of teeth.",
    costRange: `₹15,000 – ₹1,50,000+ depending on number of teeth and materials (composite vs ceramic).${costNote}`,
    successRate:
      "Satisfying esthetic outcomes depend on realistic goals, gum health, and material choice. Ceramic work maintained with good hygiene typically ages more predictably than neglected bonding.",
    faqs: [
      {
        question: "Who leads smile design at Kumar's Dental?",
        answer:
          "Dr. RV Roshini, MDS Prosthodontist, leads crowns, bridges, veneers, and smile design planning—positioned as our Bangalore authority for prosthetic and crown-driven smile work.",
      },
      {
        question: "Do I always need veneers for smile design?",
        answer:
          "No. Whitening, bonding, orthodontics, or selective crowns may be more appropriate. We recommend the least invasive option that meets a stable functional plan.",
      },
    ],
    relatedSlugs: ["dental-veneers", "crowns", "cosmetic-dentistry", "dental-implants"],
    leadDoctor: "roshini",
    image: "/website-images/smile-makeover.jpg",
    category: "Cosmetic / Prosthodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "invisible-aligners",
    name: "Invisible Aligners",
    shortName: "Invisible Aligners",
    metaTitle: "Invisible Aligners Bangalore | Clear Aligners Yelahanka",
    metaDescription:
      "Clear aligner orthodontics in Yelahanka for discreet teeth straightening. Assessment at Kumar's Microscopic Dental Care.",
    keywords: [
      "invisible aligners Bangalore",
      "clear aligners Yelahanka",
      "Invisalign alternative Bangalore",
    ],
    heroSubtitle:
      "Removable clear trays that gradually move teeth when worn as prescribed.",
    overview:
      "Invisible aligners are a series of custom clear trays used to correct mild-to-moderate crowding, spacing, and some bite issues. Suitability is confirmed after clinical exam and records at our Yelahanka clinic.",
    whoNeedsIt: [
      "Adults and teens wanting discreet orthodontics",
      "Mild to moderate crowding or spacing",
      "Patients committed to 20–22 hours/day wear",
      "Cases within aligner biomechanical limits (assessed clinically)",
    ],
    symptoms: [
      "Crowded or overlapping teeth",
      "Gaps between teeth",
      "Mild bite concerns affecting smile",
      "Discomfort with visible metal braces lifestyle",
    ],
    causes: [
      "Genetic tooth–jaw size mismatch",
      "Early tooth loss shifting neighbours",
      "Habits or growth patterns",
      "Relapse after prior orthodontics",
    ],
    benefits: [
      "Nearly invisible appearance",
      "Removable for eating and brushing",
      "Fewer sharp wire adjustments than fixed braces",
      "Digital planning before starting when records allow",
    ],
    risks: [
      "Poor compliance slows or blocks results",
      "Not ideal for all complex skeletal bites",
      "Temporary speech changes early on",
      "Need for retainers lifelong to limit relapse",
    ],
    process: [
      "Orthodontic assessment and records (scans/photos/X-rays as needed)",
      "Digital plan and consent",
      "Tray delivery with wear instructions",
      "Periodic progress checks and refinement trays if required",
      "Retention phase after active movement",
    ],
    recovery:
      "Mild pressure for 1–2 days with each new tray is expected. Soft diet optional during soreness. Maintain excellent hygiene around attachments if placed.",
    duration:
      "Often 6–18 months depending on complexity and compliance; retainers continue indefinitely.",
    costRange: `₹60,000 – ₹2,50,000+ based on case complexity and brand/protocol.${costNote}`,
    successRate:
      "Outcomes track closely with hours of wear and case selection. Complex bites may need braces or combination approaches.",
    faqs: [
      {
        question: "Are aligners better than braces?",
        answer:
          "Neither is universally better. Aligners suit many mild–moderate cases with high compliance; braces remain preferred for some complex movements. We advise after examination.",
      },
      {
        question: "Can children use aligners?",
        answer:
          "Some teens are candidates; younger children more often need interceptive care with Dr. Prem Kumar R's pediatric guidance first.",
      },
    ],
    relatedSlugs: ["metal-braces", "ceramic-braces", "cosmetic-dentistry"],
    leadDoctor: "roshini",
    image: "/website-images/braces1.webp",
    category: "Orthodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "metal-braces",
    name: "Metal Braces",
    shortName: "Metal Braces",
    metaTitle: "Metal Braces Bangalore | Orthodontics Yelahanka",
    metaDescription:
      "Metal braces for reliable teeth straightening in Yelahanka. Orthodontic assessment at Kumar's Microscopic Dental Care.",
    keywords: ["metal braces Bangalore", "braces Yelahanka", "orthodontist near Yelahanka"],
    heroSubtitle:
      "Fixed stainless-steel brackets and wires for predictable orthodontic tooth movement.",
    overview:
      "Metal braces remain a highly effective option for correcting crowding, spacing, and many bite problems across ages. Our clinic provides assessment, referral coordination where needed, and integrated hygiene support—including pediatric guidance with Dr. Prem Kumar R for younger patients.",
    whoNeedsIt: [
      "Children, teens, and adults needing comprehensive orthodontics",
      "Moderate to complex crowding or bite correction",
      "Patients who may not comply with removable aligners",
    ],
    symptoms: [
      "Crooked or overlapping teeth",
      "Protruding teeth",
      "Bite that feels uneven or causes cheek biting",
      "Difficulty cleaning crowded contacts",
    ],
    causes: [
      "Heredity",
      "Thumb sucking or tongue thrust in childhood",
      "Early tooth loss",
      "Jaw growth discrepancies",
    ],
    benefits: [
      "Broad range of tooth movements possible",
      "Do not rely on patient tray wear hours",
      "Well-established long-term track record",
      "Often cost-effective versus premium aligner packages",
    ],
    risks: [
      "White spots if hygiene is poor",
      "Soft-tissue ulcers from brackets (manageable with wax)",
      "Root resorption (monitored radiographically when indicated)",
      "Relapse without retainers",
    ],
    process: [
      "Records and treatment plan",
      "Bonding of brackets",
      "Periodic wire changes/adjustments",
      "Debonding and retainer delivery",
      "Retention visits",
    ],
    recovery:
      "Soreness 2–4 days after adjustments is common. Soft foods help. Maintain meticulous brushing and interdental cleaning.",
    duration: "Typically 12–30 months depending on case difficulty and growth.",
    costRange: `₹25,000 – ₹70,000+ for standard metal braces courses.${costNote}`,
    successRate:
      "Highly predictable when patients attend adjustments and protect retainers afterward. Growth and compliance influence timelines.",
    faqs: [
      {
        question: "At what age should kids see a dentist about braces?",
        answer:
          "An early pediatric dental visit with Dr. Prem Kumar R helps spot habit and eruption issues; formal braces timing is individualised, often around adolescence.",
      },
      {
        question: "Do metal braces hurt permanently?",
        answer:
          "No. Pressure after wire changes fades in a few days. Persistent severe pain should be reviewed promptly.",
      },
    ],
    relatedSlugs: ["ceramic-braces", "invisible-aligners", "children-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/braces1.webp",
    category: "Orthodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "ceramic-braces",
    name: "Ceramic Braces",
    shortName: "Ceramic Braces",
    metaTitle: "Ceramic Braces Bangalore | Tooth-Coloured Braces Yelahanka",
    metaDescription:
      "Tooth-coloured ceramic braces in Yelahanka for a subtler fixed orthodontic option. Assess at Kumar's Dental.",
    keywords: ["ceramic braces Bangalore", "tooth coloured braces Yelahanka"],
    heroSubtitle:
      "Fixed braces with ceramic brackets that blend better with natural tooth shade.",
    overview:
      "Ceramic braces work like metal braces but use tooth-coloured or clear brackets for a less noticeable look while still providing fixed orthodontic control.",
    whoNeedsIt: [
      "Image-conscious teens and adults wanting fixed braces aesthetics",
      "Cases suited to fixed appliances rather than aligners",
    ],
    symptoms: [
      "Crowding or spacing needing braces",
      "Preference to avoid metallic smile appearance",
    ],
    causes: [
      "Same developmental and growth factors as other malocclusions",
    ],
    benefits: [
      "More discreet than metal brackets",
      "Fixed—less dependent on removable-tray discipline",
      "Effective for many comprehensive cases",
    ],
    risks: [
      "Brackets can be more brittle than metal",
      "Some ties may stain with diet (tea, turmeric, coffee)",
      "Slightly higher cost than basic metal in many clinics",
      "Hygiene demands remain critical",
    ],
    process: [
      "Orthodontic records and consent",
      "Bonding ceramic brackets",
      "Scheduled adjustments",
      "Debond and retainers",
    ],
    recovery:
      "Similar to metal braces: short-lived pressure after visits; soft diet as needed; excellent oral hygiene.",
    duration: "Often similar to metal braces—commonly 12–30 months.",
    costRange: `₹40,000 – ₹90,000+ depending on system and case.${costNote}`,
    successRate:
      "Comparable tooth movement capability to metal braces for many cases when protocols are followed; material care differs.",
    faqs: [
      {
        question: "Do ceramic braces stain teeth?",
        answer:
          "Brackets themselves are resistant, but elastic ties can discolour. Professional colour choice and diet advice help. Tooth enamel stains are separate hygiene issues.",
      },
      {
        question: "Ceramic vs aligners—which is better?",
        answer:
          "Fixed ceramic braces suit patients who need continuous force without relying on tray hours. Aligners suit disciplined wearers with suitable bite patterns. Exam decides.",
      },
    ],
    relatedSlugs: ["metal-braces", "invisible-aligners", "smile-designing"],
    leadDoctor: "roshini",
    image: "/website-images/braces1.webp",
    category: "Orthodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "children-dentistry",
    name: "Children's Dentistry",
    shortName: "Pediatric Dentistry",
    metaTitle:
      "Pediatric Dentist Attur & Yelahanka New Town | Dr. Prem Kumar R",
    metaDescription:
      "Kids dentist on Attur Main Road, Yelahanka New Town—Dr. Prem Kumar R (formerly Associate Professor at Ramaiah). Pediatric dentistry & microscopic expertise. Book +91 81972 80019.",
    keywords: [
      "pediatric dentist Attur",
      "kids dentist Yelahanka New Town",
      "pediatric dentist Bangalore",
      "kids dentist Yelahanka",
      "children dentistry Attur Layout",
      "best pediatric dentist Yelahanka",
    ],
    heroSubtitle:
      "Specialist pediatric care at Attur Main Road, Yelahanka New Town—led by Dr. Prem Kumar R.",
    overview:
      "Pediatric dentistry focuses on the oral health of children from the first tooth through adolescence. Dr. Prem Kumar R, MDS Pediatric & Preventive Dentist (formerly Associate Professor at Ramaiah), practices at Kumar's Microscopic Dental Care on Attur Main Road, Yelahanka New Town—primary kids dentist cover for Attur Layout and Yelahanka, with corridor reach across North Bangalore and Bangalore-wide pediatric authority for families seeking specialist children's care.",
    whoNeedsIt: [
      "Infants for first-year dental visits",
      "Toddlers and school-age children for check-ups and cavity care",
      "Teens needing guidance through eruption and orthodontic readiness",
      "Anxious children needing a specialist behaviour approach",
    ],
    symptoms: [
      "Tooth pain or sensitivity in a child",
      "Night-time bottle habits or visible white/brown spots",
      "Thumb sucking beyond preschool years",
      "Difficulty chewing or bad breath",
      "Injury to baby or young permanent teeth",
    ],
    causes: [
      "Sugary snacks and prolonged bottle/sippy use",
      "Incomplete brushing/flossing",
      "Enamel hypoplasia or developmental issues",
      "Trauma from falls or sports",
    ],
    benefits: [
      "Early prevention reduces emergency visits",
      "Behaviour guidance builds lifelong dental comfort",
      "Age-appropriate treatments (sealants, fluoride, pulp therapy)",
      "Authority care from an MDS pediatric dentist",
    ],
    risks: [
      "Delayed care can allow rapid decay in primary teeth",
      "Untreated infection may affect sleep, school, and developing successors",
      "Some procedures still need local anaesthesia—discussed openly with parents",
    ],
    process: [
      "Friendly introduction and behaviour assessment",
      "Exam, cavity risk discussion, and radiographs only when justified",
      "Preventive plan: hygiene, diet, fluoride/sealants as indicated",
      "Restorative or pulp care with parental consent",
      "Recall interval based on risk",
    ],
    recovery:
      "After fillings or extractions, follow soft-diet and numbing-safety instructions (no biting lips/cheeks). Contact us for prolonged bleeding or fever.",
    duration:
      "Well visits often 20–40 minutes; restorative visits vary with cooperation and treatment scope.",
    costRange: `₹800 – ₹8,000+ depending on preventive vs restorative needs.${costNote}`,
    successRate:
      "Preventive programmes succeed when home care follows clinical advice. Restorative longevity depends on diet, hygiene, and recall attendance.",
    faqs: [
      {
        question: "Who is the pediatric dentist at Kumar's Dental?",
        answer:
          "Dr. Prem Kumar R, MDS Pediatric & Preventive Dentist (formerly Associate Professor at Ramaiah), leads children's dentistry at our Attur Main Road / Yelahanka New Town clinic. He is the primary local kids dentist for Attur and Yelahanka, and Bangalore pediatric + microscopic RCT authority for wider city queries.",
      },
      {
        question: "When should my child first visit the dentist?",
        answer:
          "Ideally by the first birthday or within six months of the first tooth erupting—earlier if pain, injury, or decay signs appear.",
      },
      {
        question: "Do you treat anxious kids?",
        answer:
          "Yes. Behaviour guidance, stepwise introduction, and parent involvement are central to Dr. Prem's approach. Sedation options, if ever considered, are discussed only when medically appropriate.",
      },
    ],
    relatedSlugs: ["teeth-cleaning", "root-canal-treatment", "emergency-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/pedsfin.jpeg",
    category: "Pediatric Dentistry",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    shortName: "Wisdom Tooth Removal",
    metaTitle: "Wisdom Tooth Removal Bangalore | Yelahanka Extraction",
    metaDescription:
      "Wisdom tooth assessment and removal in Yelahanka. Pain relief and surgical extraction planning at Kumar's Microscopic Dental Care.",
    keywords: [
      "wisdom tooth removal Bangalore",
      "wisdom tooth extraction Yelahanka",
    ],
    heroSubtitle:
      "Evaluation and extraction of third molars that are decayed, impacted, or causing recurrent infection.",
    overview:
      "Wisdom teeth (third molars) may need removal when impacted, partially erupted, decayed, or linked to repeated gum infections. We assess with clinical exam and imaging, then plan simple or surgical extraction.",
    whoNeedsIt: [
      "Pain or swelling at the back of the jaw",
      "Food trapping around partially erupted wisdom teeth",
      "Decay in third molars difficult to restore",
      "Orthodontic or prosthetic plans requiring clearance",
    ],
    symptoms: [
      "Localised pain or throbbing at angle of jaw",
      "Swollen, red gum flap (pericoronitis)",
      "Bad taste or difficulty opening mouth",
      "Headache or ear-referred discomfort",
    ],
    causes: [
      "Lack of space for eruption",
      "Angulated/impacted position",
      "Bacterial infection under an operculum",
      "Caries due to inaccessible cleaning",
    ],
    benefits: [
      "Removes source of recurrent infection",
      "Prevents damage to adjacent second molars in select cases",
      "Relieves chronic pericoronitis cycles",
    ],
    risks: [
      "Swelling, bruising, dry socket",
      "Temporary limited mouth opening",
      "Rare nerve sensory change with deep lower impactions (discussed pre-op)",
      "Sinus communication risk with some upper extractions",
    ],
    process: [
      "Exam and radiograph/OPG as needed",
      "Medical history and consent",
      "Local anaesthesia; surgical flap/bone removal if impacted",
      "Tooth sectioning when required; socket care",
      "Post-op instructions and review",
    ],
    recovery:
      "Peak swelling 48–72 hours. Soft diet, no straws/smoking, gentle rinses after 24 hours as advised. Contact clinic for heavy bleeding, fever, or severe pain after day three (possible dry socket).",
    duration:
      "Simple extractions 20–40 minutes; surgical impactions longer. Healing soft tissue 1–2 weeks; bone remodelling continues longer.",
    costRange: `₹3,000 – ₹15,000+ per tooth based on difficulty.${costNote}`,
    successRate:
      "Most patients recover uneventfully with adherence to post-op care. Difficulty grade predicts surgical time and swelling—not a failure rate metric we quote as universal.",
    faqs: [
      {
        question: "Must all wisdom teeth be removed?",
        answer:
          "No. Fully erupted, cleanable, symptom-free third molars may be monitored. Removal is advised when pathology or high-risk position is present.",
      },
      {
        question: "Can kids need wisdom tooth advice?",
        answer:
          "Teens are often assessed for eruption path. Pediatric guidance from Dr. Prem Kumar R helps with earlier crowding and hygiene while planning future third-molar decisions.",
      },
    ],
    relatedSlugs: ["emergency-dentistry", "teeth-cleaning", "laser-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/extfin.jpeg",
    category: "Oral Surgery",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning & Scaling",
    shortName: "Teeth Cleaning",
    metaTitle: "Teeth Cleaning Bangalore | Scaling & Polishing Yelahanka",
    metaDescription:
      "Professional scaling and polishing in Yelahanka. Remove tartar, freshen breath, support gum health at Kumar's Dental.",
    keywords: ["teeth cleaning Bangalore", "scaling Yelahanka", "dental cleaning near me"],
    heroSubtitle:
      "Professional removal of plaque and calculus to support gum health and fresh breath.",
    overview:
      "Professional cleaning (scaling and polishing) removes hardened tartar that home brushing cannot. It is foundational preventive care for adults and children, with pediatric visits guided by Dr. Prem Kumar R when kids need age-appropriate introductions.",
    whoNeedsIt: [
      "Anyone with visible tartar or bleeding gums",
      "Patients due for 6-monthly (or risk-based) hygiene visits",
      "Pre-treatment cleaning before braces, crowns, or implants",
    ],
    symptoms: [
      "Bad breath",
      "Bleeding while brushing",
      "Yellow/brown deposits near gums",
      "Gum puffiness or recession awareness",
    ],
    causes: [
      "Plaque mineralising into calculus",
      "Incomplete interdental cleaning",
      "Dry mouth or crowded teeth trapping debris",
    ],
    benefits: [
      "Reduces gingival inflammation triggers",
      "Improves freshness and stain appearance on enamel surface",
      "Allows clinical screening for cavities and oral lesions",
    ],
    risks: [
      "Temporary sensitivity or gum tenderness",
      "Slight bleeding during removal of inflamed deposits",
      "Spaces may feel larger once swollen gums shrink—often a healing sign",
    ],
    process: [
      "Gum and deposit assessment",
      "Ultrasonic/hand scaling as needed",
      "Polishing and hygiene coaching",
      "Fluoride or desensitising adjuncts when indicated",
    ],
    recovery:
      "Mild sensitivity 1–2 days possible. Resume gentle flossing; use desensitising toothpaste if advised.",
    duration: "Usually 30–60 minutes depending on deposit load.",
    costRange: `₹800 – ₹3,500 for routine scaling/polishing sessions.${costNote}`,
    successRate:
      "Gum bleeding often improves within days to weeks when home care continues. Advanced periodontitis needs deeper therapy beyond a single clean.",
    faqs: [
      {
        question: "How often should I get a cleaning?",
        answer:
          "Many adults do well every 6 months; higher-risk patients may need 3–4 monthly intervals. Your dentist sets recall after examining gums.",
      },
      {
        question: "Is cleaning safe for children?",
        answer:
          "Yes, with age-appropriate technique. Dr. Prem Kumar R introduces pediatric hygiene visits gently for kids in Bangalore families we serve.",
      },
    ],
    relatedSlugs: ["children-dentistry", "laser-dentistry", "cosmetic-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/routinefin.jpeg",
    category: "Preventive",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "crowns",
    name: "Dental Crowns",
    shortName: "Dental Crowns",
    metaTitle: "Dental Crowns Bangalore | Dr. RV Roshini | Best Crown Dentist",
    metaDescription:
      "Dental crowns in Yelahanka led by prosthodontist Dr. RV Roshini—Bangalore authority for crowns, bridges, and prosthetic smiles.",
    keywords: [
      "dental crowns Bangalore",
      "tooth crown Yelahanka",
      "best crown dentist Bangalore",
      "zirconia crown Bangalore",
    ],
    heroSubtitle:
      "Custom caps that restore strength, shape, and appearance of damaged teeth—led by Dr. RV Roshini.",
    overview:
      "A dental crown covers a prepared tooth to restore form, function, and aesthetics after large decay, fracture, or root canal treatment. Dr. RV Roshini, MDS Prosthodontist, is our lead authority for crowns and prosthetic dentistry in Bangalore at Kumar's Microscopic Dental Care, Yelahanka.",
    whoNeedsIt: [
      "Root-canal-treated teeth needing reinforcement",
      "Heavily filled or cracked teeth",
      "Cosmetic reshape of severely worn or discoloured teeth",
      "Implant abutments requiring implant crowns",
    ],
    symptoms: [
      "Large broken filling or fractured cusp",
      "Tooth pain on biting after big restorations",
      "Unesthetic old crown margins",
      "Post-RCT tooth needing coverage",
    ],
    causes: [
      "Extensive caries",
      "Trauma",
      "Weakening after endodontic access",
      "Wear from grinding",
    ],
    benefits: [
      "Protects remaining tooth structure",
      "Improves chewing comfort and smile harmony",
      "Material choices: metal-ceramic, zirconia, e.max-style ceramics as indicated",
      "Planned by a prosthodontist for bite and aesthetics",
    ],
    risks: [
      "Irreversible tooth preparation",
      "Temporary sensitivity",
      "Rare need for root canal if pulp stressed",
      "Chip or porcelain fracture under extreme force",
    ],
    process: [
      "Exam, radiographs, material counselling",
      "Tooth preparation and impressions/scan",
      "High-quality temporary crown",
      "Lab fabrication",
      "Try-in, adjustment, and cementation by Dr. RV Roshini's protocol",
    ],
    recovery:
      "Avoid sticky foods on temporaries. After final cementation, mild bite awareness can occur—return for fine adjustments if needed.",
    duration:
      "Often 2 visits over 5–10 days; same-week workflows possible depending on lab logistics.",
    costRange: `₹5,000 – ₹25,000+ per crown by material and case.${costNote}`,
    successRate:
      "Well-made crowns on sound foundations with good hygiene commonly last many years; grinding, decay at margins, or trauma can shorten lifespan.",
    faqs: [
      {
        question: "Who is the crown specialist at your clinic?",
        answer:
          "Dr. RV Roshini leads crowns, bridges, and prosthodontic rehabilitation and is positioned as Bangalore authority for crown-focused care at our Yelahanka clinic.",
      },
      {
        question: "Zirconia or porcelain-fused-to-metal—which is better?",
        answer:
          "Depends on bite forces, aesthetic zone, and budget. Zirconia offers strength and good aesthetics; PFM remains useful in select situations. We recommend after examination.",
      },
      {
        question: "Do RCT teeth always need crowns?",
        answer:
          "Posterior RCT teeth frequently benefit from crowns to prevent fracture. Anterior teeth are judged by remaining structure—Dr. Prem's endodontic care and Dr. Roshini's prosthetic plan work together.",
      },
    ],
    relatedSlugs: ["bridges", "dental-implants", "root-canal-treatment", "smile-designing"],
    leadDoctor: "roshini",
    image: "/website-images/FMRfin.jpeg",
    category: "Prosthodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "bridges",
    name: "Dental Bridges",
    shortName: "Dental Bridges",
    metaTitle: "Dental Bridges Bangalore | Dr. RV Roshini | Tooth Bridge",
    metaDescription:
      "Fixed dental bridges in Yelahanka by prosthodontist Dr. RV Roshini. Replace missing teeth with crown-supported bridges.",
    keywords: ["dental bridges Bangalore", "tooth bridge Yelahanka", "fixed bridge dentist"],
    heroSubtitle:
      "Fixed prostheses that replace missing teeth by anchoring to adjacent crowns—prosthodontist-led.",
    overview:
      "A dental bridge replaces one or more missing teeth by linking artificial teeth (pontics) to crowns on neighbouring abutments—or to implants. Dr. RV Roshini plans bridge cases for strength, hygiene access, and aesthetics.",
    whoNeedsIt: [
      "Patients missing teeth with strong adjacent abutments",
      "Those preferring fixed options over removable partials",
      "Select cases where implants are deferred",
    ],
    symptoms: [
      "Gap affecting chewing or speech",
      "Drifting of neighbouring teeth into a space",
      "Desire for fixed replacement without surgery",
    ],
    causes: [
      "Extraction sites left unrestored",
      "Failed long-span restorations",
      "Trauma-related loss",
    ],
    benefits: [
      "Fixed chewing surface without daily removal",
      "Restores smile continuity",
      "Can be designed with hygienic embrasures for cleaning",
    ],
    risks: [
      "Requires preparation of abutment teeth",
      "If abutments fail later, bridge may need remake",
      "Food trapping if hygiene is poor under pontics",
    ],
    process: [
      "Space analysis and abutment evaluation",
      "Preparation and records",
      "Temporary bridge",
      "Final bridge try-in and cementation",
      "Hygiene instruction with floss threaders/interdental brushes",
    ],
    recovery:
      "Short adaptation to new bite. Clean under the pontic daily as taught. Report rocking or sweet sensitivity promptly.",
    duration: "Typically 2–3 visits over 1–2 weeks.",
    costRange: `₹12,000 – ₹60,000+ depending on units and materials.${costNote}`,
    successRate:
      "Longevity tracks abutment health and cleaning under the bridge. Regular recalls help detect cement washout or decay early.",
    faqs: [
      {
        question: "Bridge or implant—which should I choose?",
        answer:
          "Implants spare virgin neighbours but need bone and surgery. Bridges avoid surgery but prepare abutments. Dr. RV Roshini explains both prosthodontic paths honestly.",
      },
      {
        question: "Who designs bridges at Kumar's Dental?",
        answer:
          "Dr. RV Roshini, our crowns and bridges authority for Bangalore patients visiting Yelahanka.",
      },
    ],
    relatedSlugs: ["crowns", "dental-implants", "dentures"],
    leadDoctor: "roshini",
    image: "/website-images/FMRfin.jpeg",
    category: "Prosthodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "dentures",
    name: "Dentures",
    shortName: "Dentures",
    metaTitle: "Dentures Bangalore | Complete & Partial Dentures Yelahanka",
    metaDescription:
      "Complete and partial dentures planned by Dr. RV Roshini in Yelahanka. Comfortable prosthetic tooth replacement options.",
    keywords: ["dentures Bangalore", "partial dentures Yelahanka", "false teeth Bangalore"],
    heroSubtitle:
      "Removable complete or partial dentures to restore chewing and smile after multiple tooth loss.",
    overview:
      "Dentures replace several or all teeth in an arch with removable prostheses. As MDS Prosthodontist, Dr. RV Roshini designs partial and complete dentures for retention, speech, and facial support.",
    whoNeedsIt: [
      "Patients missing multiple teeth",
      "Those not candidates for implants presently",
      "Budget-conscious full-arch replacement seekers",
    ],
    symptoms: [
      "Difficulty chewing with remaining teeth",
      "Sunken facial appearance after total tooth loss",
      "Loose old denture",
    ],
    causes: [
      "Advanced decay or periodontal disease",
      "Delayed replacement after extractions",
      "Age-related edentulism",
    ],
    benefits: [
      "Restores basic chewing and aesthetics",
      "Non-surgical option",
      "Can be upgraded later to implant-supported overdentures",
    ],
    risks: [
      "Initial sore spots needing adjustment",
      "Lower complete dentures may feel less stable than uppers",
      "Taste/temperature sensation differs from natural teeth",
    ],
    process: [
      "Primary impressions and jaw relation records",
      "Try-in of wax/teeth setup",
      "Delivery and adjustment visits",
      "Home care and overnight storage guidance",
    ],
    recovery:
      "Expect 2–4 adjustment visits. Soft diet initially; practice speech. Never sleep with unclean dentures.",
    duration: "Often 4–6 visits over 2–4 weeks for conventional complete dentures.",
    costRange: `₹8,000 – ₹50,000+ for partial/complete sets by material.${costNote}`,
    successRate:
      "Comfort improves substantially after skilled adjustments. Ridge anatomy and saliva influence retention—discussed before treatment.",
    faqs: [
      {
        question: "Can dentures look natural?",
        answer:
          "Modern teeth moulds and shade selection help. Dr. RV Roshini focuses on lip support and midline aesthetics during try-in.",
      },
      {
        question: "When should I consider implants under a denture?",
        answer:
          "If stability is inadequate, implant-retained overdentures can help. We assess bone and budget before recommending.",
      },
    ],
    relatedSlugs: ["dental-implants", "bridges", "crowns"],
    leadDoctor: "roshini",
    image: "/website-images/denturefin.jpeg",
    category: "Prosthodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "laser-dentistry",
    name: "Laser Dentistry",
    shortName: "Laser Dentistry",
    metaTitle: "Laser Dentistry Bangalore | Soft Tissue Laser Yelahanka",
    metaDescription:
      "Laser-assisted dental procedures in Yelahanka for select gum and soft-tissue needs at Kumar's Microscopic Dental Care.",
    keywords: ["laser dentistry Bangalore", "dental laser Yelahanka"],
    heroSubtitle:
      "Adjunctive laser protocols for selected soft-tissue procedures with comfort-focused care.",
    overview:
      "Laser dentistry uses focused light energy for certain soft-tissue procedures such as gingival contouring or assisting in managing inflamed tissues. It complements—not replaces—standard drilling and surgical methods when clinically indicated.",
    whoNeedsIt: [
      "Patients needing minor soft-tissue recontouring",
      "Select cases of gum inflammation adjunct care",
      "Those for whom the clinician judges laser appropriate",
    ],
    symptoms: [
      "Uneven gum display",
      "Localised soft-tissue irritation",
      "Need for precise soft-tissue modification before restorative work",
    ],
    causes: [
      "Altered passive eruption aesthetics",
      "Inflammatory gingival conditions",
      "Restorative margins needing clearer access",
    ],
    benefits: [
      "Often reduced bleeding in soft-tissue work",
      "Precision in selected indications",
      "May reduce suture need in minor procedures",
    ],
    risks: [
      "Not suitable for every hard-tissue task",
      "Thermal risk if protocols ignored (clinician-controlled)",
      "Standard post-op care still required",
    ],
    process: [
      "Diagnosis and indication check",
      "Protective measures and consent",
      "Laser application with settings matched to tissue",
      "Post-op hygiene advice",
    ],
    recovery:
      "Mild tenderness possible. Avoid spicy foods briefly if soft tissue treated. Follow rinses as prescribed.",
    duration: "Many soft-tissue laser adjuncts add 10–30 minutes to a visit.",
    costRange: `₹2,000 – ₹15,000+ depending on procedure scope.${costNote}`,
    successRate:
      "Success depends on correct case selection. Lasers are tools—not magic substitutes for good diagnosis.",
    faqs: [
      {
        question: "Does laser mean painless dentistry always?",
        answer:
          "It can improve comfort in some soft-tissue procedures, but anaesthesia is still used when needed. Hard-tissue dentistry often still needs conventional methods.",
      },
    ],
    relatedSlugs: ["teeth-cleaning", "cosmetic-dentistry", "emergency-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/gumfin.jpeg",
    category: "Adjunctive Technology",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "microscopic-dentistry",
    name: "Microscopic Dentistry",
    shortName: "Microscopic Dentistry",
    metaTitle:
      "Microscopic Dentistry Attur & Yelahanka | Dr. Prem Kumar R",
    metaDescription:
      "Microscopic dentistry on Attur Main Road, Yelahanka New Town with Dr. Prem Kumar R—enhanced visualisation for RCT and precision care.",
    keywords: [
      "microscopic dentistry Attur",
      "microscopic dentistry Yelahanka New Town",
      "microscopic dentistry Bangalore",
      "dental microscope Yelahanka",
      "magnification dentistry",
    ],
    heroSubtitle:
      "Dental operating microscope protocols at Attur Main Road, Yelahanka New Town—led by Dr. Prem Kumar R.",
    overview:
      "Microscopic dentistry uses magnification and illumination—often up to high power such as 25x protocols—to improve the clinician's view of fine anatomy. Dr. Prem Kumar R (formerly Associate Professor at Ramaiah; certified in microscopic dentistry) leads microscopic endodontic care at our Attur Main Road / Yelahanka New Town clinic, with expertise recognised across Bangalore for precision-driven treatment.",
    whoNeedsIt: [
      "Patients needing detailed RCT or retreatment assessment",
      "Cracked-tooth evaluation under magnification",
      "Cases where fine canals or margins matter",
    ],
    symptoms: [
      "Complex endodontic symptoms",
      "Unexplained pain needing enhanced inspection",
      "Prior incomplete root canal signs",
    ],
    causes: [
      "Complex canal anatomy",
      "Microfractures",
      "Restorative margins requiring precision",
    ],
    benefits: [
      "Better visualisation of anatomy and cracks",
      "Supports conservative, targeted intervention",
      "Aligns with modern endodontic standards of care",
    ],
    risks: [
      "Longer chair time in some meticulous cases",
      "Magnification aids vision but does not eliminate biological limits",
    ],
    process: [
      "Case selection for microscope use",
      "Isolation and magnification setup",
      "Procedure under enhanced view",
      "Documentation and restorative follow-through",
    ],
    recovery: "Matches the underlying procedure (e.g., RCT recovery norms).",
    duration: "Adds focused time for precision; overall visit length case-dependent.",
    costRange: `Often bundled within microscopic RCT fees; standalone imaging/consult fees vary.${costNote}`,
    successRate:
      "Magnification is an enabling technology that supports quality; outcomes still depend on biology, restoration, and follow-up.",
    faqs: [
      {
        question: "Who provides microscopic dentistry here?",
        answer:
          "Dr. Prem Kumar R, formerly Associate Professor at Ramaiah and certified in microscopic dentistry, leads magnification-guided endodontics at our Attur Main Road / Yelahanka New Town clinic.",
      },
      {
        question: "Is every filling done under a microscope?",
        answer:
          "Not always. We prioritise microscope use where anatomical detail changes decisions—especially root canals.",
      },
    ],
    relatedSlugs: ["root-canal-treatment", "children-dentistry", "emergency-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/rct-under-microscope.jpg",
    category: "Technology / Endodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortName: "Cosmetic Dentistry",
    metaTitle: "Cosmetic Dentistry Bangalore | Smile Aesthetics Yelahanka",
    metaDescription:
      "Cosmetic dentistry in Yelahanka—whitening, bonding, veneers, and smile harmony with Dr. RV Roshini's prosthetic expertise.",
    keywords: ["cosmetic dentistry Bangalore", "smile aesthetics Yelahanka"],
    heroSubtitle:
      "Appearance-focused dental care grounded in healthy gums and stable bite principles.",
    overview:
      "Cosmetic dentistry improves tooth colour, shape, and smile line using whitening, bonding, veneers, and crowns. Esthetic planning involving crowns and veneers is guided by Dr. RV Roshini; children's cosmetic concerns (trauma chips) may involve Dr. Prem Kumar R.",
    whoNeedsIt: [
      "Adults seeking whiter or more even smiles",
      "Patients with chips, gaps, or old mismatched fillings at the smile zone",
    ],
    symptoms: [
      "Stains resistant to brushing",
      "Chipped edges",
      "Uneven lengths or shapes",
      "Self-consciousness in photos",
    ],
    causes: [
      "Diet and ageing stains",
      "Trauma",
      "Developmental irregularities",
      "Old dentistry colour mismatch",
    ],
    benefits: [
      "Boosts confidence with natural-looking results",
      "Range of options from conservative whitening to ceramics",
      "Coordinated with prosthodontic expertise when crowns/veneers needed",
    ],
    risks: [
      "Whitening sensitivity",
      "Over-contouring if bonding is excessive",
      "Irreversible prep for veneers/crowns",
    ],
    process: [
      "Aesthetic and periodontal assessment",
      "Shade and proportion discussion",
      "Phased treatment (bleach → align → restore as needed)",
      "Maintenance advice",
    ],
    recovery: "Usually minimal for whitening/bonding; ceramic pathways follow crown/veneer guidance.",
    duration: "Whitening: 1–2 visits; comprehensive makeovers: multiple visits.",
    costRange: `₹3,000 – ₹1,50,000+ spanning whitening to multi-tooth ceramics.${costNote}`,
    successRate:
      "Stable cosmetics require healthy gums and night-guard use if bruxism present. Maintenance appointments protect results.",
    faqs: [
      {
        question: "Is cosmetic work only vanity?",
        answer:
          "Not always—rebuilding worn or fractured teeth also restores function. We prioritise health before purely elective changes.",
      },
    ],
    relatedSlugs: ["smile-designing", "dental-veneers", "teeth-cleaning", "crowns"],
    leadDoctor: "roshini",
    image: "/website-images/whitening.jpeg",
    category: "Cosmetic",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "dental-veneers",
    name: "Dental Veneers",
    shortName: "Dental Veneers",
    metaTitle: "Dental Veneers Bangalore | Dr. RV Roshini | Porcelain Veneers",
    metaDescription:
      "Porcelain and ceramic veneers in Yelahanka planned by Dr. RV Roshini for smile transformation with prosthetic precision.",
    keywords: ["dental veneers Bangalore", "porcelain veneers Yelahanka"],
    heroSubtitle:
      "Thin ceramic shells bonded to front teeth to refine colour, shape, and minor alignment appearance.",
    overview:
      "Veneers are conservative-to-moderate preparations bonded on visible tooth surfaces for aesthetic change. Dr. RV Roshini plans veneer cases within a smile-design and prosthodontic framework.",
    whoNeedsIt: [
      "Patients with front-tooth stains not responding to bleach",
      "Minor shape or gap concerns",
      "Worn incisal edges needing bonded ceramics",
    ],
    symptoms: [
      "Discoloured anterior teeth",
      "Small chips or uneven smile line",
      "Desire for uniform smile colour/shape",
    ],
    causes: [
      "Enamel defects",
      "Trauma chips",
      "Aesthetic dissatisfaction after orthodontics residual",
    ],
    benefits: [
      "Highly aesthetic ceramic optical properties",
      "Can be more conservative than full crowns in select teeth",
      "Coordinated smile design planning",
    ],
    risks: [
      "Irreversible enamel reduction in most protocols",
      "Chip risk with biting hard objects",
      "Replacement cost when ageing or damage occurs",
    ],
    process: [
      "Smile analysis and mock-up",
      "Minimal preparation and impressions/scan",
      "Temporaries",
      "Bonding under isolation protocols",
      "Occlusion check and night-guard if needed",
    ],
    recovery: "Avoid hard biting on front teeth initially; sensitivity usually brief.",
    duration: "Typically 2–3 visits.",
    costRange: `₹8,000 – ₹25,000+ per tooth by material.${costNote}`,
    successRate:
      "Bonded ceramics perform well with hygienic margins and protective habits; grinding without a guard increases failure risk.",
    faqs: [
      {
        question: "Veneers or crowns?",
        answer:
          "Crowns wrap the tooth entirely and suit heavily damaged teeth. Veneers suit teeth with enough enamel for bonding. Dr. RV Roshini advises after structure review.",
      },
    ],
    relatedSlugs: ["smile-designing", "crowns", "cosmetic-dentistry"],
    leadDoctor: "roshini",
    image: "/website-images/smile-makeover.jpg",
    category: "Cosmetic / Prosthodontics",
    lastUpdated: "2026-07-01",
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    shortName: "Emergency Dentistry",
    metaTitle: "Emergency Dentist Yelahanka | Same-Day Dental Pain Relief",
    metaDescription:
      "Dental emergency care in Yelahanka—tooth pain, trauma, swelling. Call +91 81972 80019. Pediatric emergencies with Dr. Prem Kumar R.",
    keywords: [
      "emergency dentist Yelahanka",
      "tooth pain Bangalore",
      "dental emergency near me",
    ],
    heroSubtitle:
      "Urgent assessment for severe toothache, trauma, swelling, or broken teeth—call us for prioritised slots.",
    overview:
      "Emergency dentistry addresses acute pain, infection, avulsed/fractured teeth, and post-operative complications. We prioritise stabilisation—drainage, pulpectomy initiation, temporary restorations, or trauma first aid. Children's dental injuries are triaged with Dr. Prem Kumar R's pediatric expertise.",
    whoNeedsIt: [
      "Severe toothache or facial swelling",
      "Knocked-out or displaced teeth",
      "Uncontrolled bleeding after extraction",
      "Broken restorations causing sharp pain",
    ],
    symptoms: [
      "Unbearable toothache",
      "Fever with dental swelling",
      "Trauma with mobility or avulsion",
      "Soft-tissue lacerations in the mouth",
    ],
    causes: [
      "Acute pulpitis or abscess",
      "Sports/road trauma",
      "Failed restorations",
      "Pericoronitis around wisdom teeth",
    ],
    benefits: [
      "Faster pain control and infection management",
      "Trauma protocols that can save teeth when timely",
      "Clear next-step planning after the crisis visit",
    ],
    risks: [
      "Emergency visits focus on stabilisation—definitive care may need follow-up",
      "Swelling of floor of mouth/neck needs hospital triage (airway risk)",
    ],
    process: [
      "Phone triage—call primary number for urgency",
      "History, exam, radiographs",
      "Immediate relief: anaesthesia, incision/drainage if indicated, pulpotomy/pulpectomy start, temp fill, or splinting",
      "Medicines and written aftercare",
      "Scheduled definitive treatment",
    ],
    recovery:
      "Follow antibiotic/analgesic instructions only as prescribed. Soft diet; cold compresses for trauma swelling as advised. Return if breathing difficulty, rapidly spreading swelling, or high fever.",
    duration: "Urgent visits often 30–90 minutes depending on complexity.",
    costRange: `₹1,000 – ₹10,000+ for emergency stabilisation; definitive fees separate.${costNote}`,
    successRate:
      "Early attendance improves chances of saving traumatised teeth and controlling infection. Delays worsen outcomes.",
    faqs: [
      {
        question: "What number do I call for a dental emergency?",
        answer:
          "Call +91 81972 80019 (primary) or +91 80882 66714. For airway compromise or severe facial trauma, seek ER services immediately.",
      },
      {
        question: "My child knocked out a tooth—what now?",
        answer:
          "For permanent teeth, keep moist (milk/saliva), avoid scrubbing the root, and reach us ASAP. Dr. Prem Kumar R manages pediatric dental trauma with time-sensitive protocols.",
      },
    ],
    relatedSlugs: ["root-canal-treatment", "children-dentistry", "wisdom-tooth-removal"],
    leadDoctor: "prem",
    image: "/website-images/dentists-treat-patients-teeth.jpg",
    category: "Emergency",
    lastUpdated: "2026-07-01",
  },
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs(): string[] {
  return treatments.map((t) => t.slug);
}

export function getRelatedTreatments(treatment: Treatment): Treatment[] {
  return treatment.relatedSlugs
    .map((slug) => getTreatment(slug))
    .filter((t): t is Treatment => Boolean(t));
}
