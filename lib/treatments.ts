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
    metaTitle: "Microscopic Root Canal Bangalore | Painless Single-Sitting RCT | Dr. Prem Kumar",
    metaDescription:
      "Specialist microscopic endodontics & root canal treatment in Bangalore (Yelahanka New Town) by Dr. Prem Kumar R (KSDC 47094 A). Single-sitting RCT under 25x magnification. Call +91 81972 80019.",
    keywords: [
      "microscopic endodontics dentistry bangalore",
      "microscopic root canal bangalore",
      "root canal treatment Bangalore",
      "microscopic root canal Yelahanka",
      "same day root canal near me",
      "painless root canal Bangalore",
      "root canal on crowned tooth",
      "calcified root canal treatment",
      "pulp chamber root canal",
      "root canal cost Bangalore",
      "root canal specialist Bangalore",
      "dentist for root canal near me",
      "tooth decay under crown root canal",
      "tooth pain relief Yelahanka",
      "endodontist near me",
      "single sitting root canal Bangalore",
      "root canal dentist in yelahanka",
      "microscopic root canal bangalore cost",
      "painless rct singanayakanahalli",
      "endodontist attur main road yelahanka",
      "emergency root canal north bangalore",
      "painless root canal doddaballapur road",
      "microscopic endodontics specialist bangalore",
    ],
    heroSubtitle:
      "Magnification-guided microscopic endodontics at our Attur / Yelahanka New Town clinic—precision canal care with Dr. Prem Kumar R (MDS, KSDC 47094 A).",
    overview:
      "Root canal treatment removes infected or inflamed pulp from inside a tooth, then cleans and seals the canal system so the natural tooth can be retained. At Kumar's Microscopic Dental Care on Attur Main Road, Yelahanka New Town, Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry; formerly Associate Professor at Ramaiah) performs many RCTs under microscopic magnification to improve visualisation of fine canals, calcified anatomy, and cracks.",
    whoNeedsIt: [
      "Patients with deep decay reaching the pulp chamber",
      "Teeth with irreversible pulpitis, acute abscess, or lingering sensitivity",
      "Cracked or fractured teeth with pulp involvement",
      "Failed or incomplete prior root canals needing microscopic retreatment",
      "Teeth with decay developing under existing crowns or large fillings",
    ],
    symptoms: [
      "Spontaneous, throbbing, or lingering tooth pain",
      "Sharp pain on biting or extreme temperature sensitivity",
      "Swelling of gum or face near a tooth",
      "Discoloured tooth after trauma",
      "Pimple-like drainage on the gum (fistula)",
    ],
    causes: [
      "Deep dental caries reaching the nerve",
      "Dental trauma or hairline root fracture",
      "Large, deteriorating prior restorations",
      "Bacterial leakage under old crowns and fillings",
      "Cracks allowing bacterial ingress into the pulp chamber",
    ],
    benefits: [
      "Preserves the natural tooth whenever clinically feasible",
      "Relieves infection-related pain safely and quickly",
      "Microscopic magnification detects hidden, extra, or calcified canals",
      "Often completed in a single or few comfortable visits",
    ],
    risks: [
      "Instrument separation or canal ledge (minimized with microscopic protocol)",
      "Post-operative sensitivity for a few days",
      "Need for protective dental crown after RCT on posterior teeth",
      "Rare need for surgical endodontics if root tip healing is delayed",
    ],
    process: [
      "Clinical exam, 3D digital imaging, and vitality pulp testing",
      "Painless local anaesthesia and rubber-dam isolation",
      "Microscopic access, cleaning, and biomechanical shaping under magnification",
      "Laser/ultrasonic disinfection and hermetic obturation (sealing) of canals",
      "Definitive core build-up and custom crown planning",
    ],
    recovery:
      "Mild tenderness for 1–3 days is normal. Soft diet, prescribed medicines if given, and avoiding biting hard foods until final crown placement. Contact us promptly if severe swelling develops.",
    duration:
      "Typically 45–90 minutes per visit; single-sitting RCT available for suitable non-abscessed cases.",
    costRange: `₹4,000 – ₹12,000+ per tooth depending on tooth type (anterior vs molar) and complexity.${costNote}`,
    successRate:
      "When canals are thoroughly disinfected under magnification and promptly sealed with a quality crown, tooth retention rates exceed 95% in clinical literature.",
    faqs: [
      {
        question: "Is microscopic RCT better than conventional root canal?",
        answer:
          "Yes. High-power magnification (up to 25x) and co-axial illumination allow Dr. Prem Kumar R to locate extra canals, narrow calcified roots, and micro-cracks that are completely invisible to the naked eye.",
      },
      {
        question: "Can a root canal be done on a tooth that already has a crown?",
        answer:
          "Yes. We can access the pulp chamber directly through a precision window in the crown or remove the old crown if there is recurrent decay underneath, treat the root canal, and place a fresh crown.",
      },
      {
        question: "Is root canal treatment painful?",
        answer:
          "No. Modern computerized local anesthesia ensures the entire procedure is comfortable and pain-free. Most patients report immediate relief from their throbbing toothache.",
      },
      {
        question: "Is root canal safe during pregnancy?",
        answer:
          "Yes. Emergency dental care and root canal treatments are safe during pregnancy, especially during the second trimester, using pregnancy-safe local anesthetics and protective lead aprons.",
      },
      {
        question: "Will I need a crown after a root canal?",
        answer:
          "For premolars and molars (back teeth), a dental crown is strongly recommended to protect the brittle tooth structure from biting fractures. Dr. RV Roshini, MDS Prosthodontist, designs precision zirconia or ceramic crowns.",
      },
    ],
    relatedSlugs: ["microscopic-dentistry", "crowns", "emergency-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/RCT.webp",
    category: "Endodontics",
    lastUpdated: "2026-08-30",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Dental Implants",
    metaTitle: "Dental Implants Bangalore | Implant Cost & Crowns | Dr. RV Roshini",
    metaDescription:
      "Permanent dental implants in Bangalore (Yelahanka New Town) led by prosthodontist Dr. RV Roshini. Single tooth, multiple teeth, All-on-4 implants & custom zirconia crowns. Book consultation.",
    keywords: [
      "dental implants Bangalore",
      "affordable dental implants near me",
      "low cost dental implants Bangalore",
      "implantologist Yelahanka",
      "tooth implant near me",
      "dental implants cost Bangalore",
      "dental implants cost near me",
      "single tooth implant Bangalore",
      "all on 4 dental implants Bangalore",
      "prosthodontist near me",
      "snap on dentures near me",
      "implant crown Bangalore",
    ],
    heroSubtitle:
      "Titanium implant fixtures restored with crowns or bridges for a lifetime tooth replacement option.",
    overview:
      "Dental implants replace missing tooth roots with biocompatible titanium or ceramic fixtures that fuse securely into the jawbone to support crowns, bridges, or fixed full-arch teeth. At Kumar's Microscopic Dental Care in Yelahanka, implant planning and prosthetic restorations are led by Dr. RV Roshini, MDS Prosthodontist & Implant Specialist.",
    whoNeedsIt: [
      "Adults missing one, multiple, or all natural teeth",
      "Patients unhappy with loose or uncomfortable removable dentures",
      "Those who want permanent fixed teeth without shaving down adjacent healthy teeth",
      "Patients with good or reconstructible jawbone volume",
    ],
    symptoms: [
      "Missing tooth creating difficulty chewing or speech problems",
      "Drifting and tilting of neighboring teeth into gaps",
      "Jawbone loss and facial sagging from long-term missing teeth",
      "Ill-fitting dentures slipping during conversation or meals",
    ],
    causes: [
      "Tooth loss from severe decay, gum disease, or trauma",
      "Failed previous bridges or fractured roots",
      "Congenitally missing teeth",
    ],
    benefits: [
      "Looks, feels, and functions exactly like natural teeth",
      "Preserves adjacent healthy teeth without cutting them down",
      "Prevents bone shrinkage and maintains natural facial structure",
      "Prosthetic crowns and bridges customized by an MDS Prosthodontist",
    ],
    risks: [
      "Mild surgical swelling or bruising during the first 48 hours",
      "Implant integration failure (rare in healthy non-smokers with good oral hygiene)",
      "Need for bone grafting or sinus lift if bone height is reduced",
    ],
    process: [
      "Comprehensive consultation, 3D CBCT digital scan, and bone density evaluation",
      "Computer-guided implant placement under local anesthesia",
      "Healing period (osseointegration) of 8 to 12 weeks for secure bone bonding",
      "Digital scanning and custom abutment placement",
      "Final cementation or screw-retained ceramic/zirconia crown by Dr. RV Roshini",
    ],
    recovery:
      "Soft diet for 3–5 days; maintain gentle oral hygiene around the surgical site. Most patients return to work the next day.",
    duration:
      "Surgical placement takes 30–60 minutes; complete restoration timeline is typically 2–4 months depending on healing speed.",
    costRange: `₹25,000 – ₹55,000+ per implant depending on system (Osstem, Nobel, Straumann) and custom crown selection.${costNote}`,
    successRate:
      "Modern dental implants boast over 98% long-term clinical success when maintained with routine dental check-ups and daily brushing.",
    faqs: [
      {
        question: "How much do dental implants cost in Bangalore?",
        answer:
          "In Bangalore, single dental implants typically range from ₹25,000 to ₹55,000+ depending on the implant brand (e.g. Osstem, Nobel Biocare), bone grafting requirements, and whether a metal-ceramic or premium zirconia crown is chosen.",
      },
      {
        question: "Is getting a dental implant painful?",
        answer:
          "The implant procedure is performed under gentle local anesthesia and is virtually painless. Most patients describe it as easier and less uncomfortable than a standard tooth extraction.",
      },
      {
        question: "Who designs my implant teeth at Kumar's Dental?",
        answer:
          "Dr. RV Roshini, MDS Prosthodontist & Implant Specialist, personally designs and fits your custom abutment and crown for optimal bite alignment and lifelike aesthetics.",
      },
      {
        question: "Can dental implants replace all my missing teeth?",
        answer:
          "Yes. With All-on-4 or All-on-6 implant protocols, we can restore an entire upper or lower jaw of missing teeth with fixed, permanent teeth.",
      },
    ],
    relatedSlugs: ["crowns", "bridges", "dentures", "smile-designing"],
    leadDoctor: "roshini",
    image: "/website-images/implantsfin.webp",
    category: "Implantology",
    lastUpdated: "2026-08-30",
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
    metaTitle: "Invisalign & Invisible Aligners Bangalore | Clear Aligners Cost | Kumar's Dental",
    metaDescription:
      "Discreet invisible aligners and Invisalign treatment in Bangalore (Yelahanka). Customized clear teeth aligners, digital 3D scans & flexible EMI options. Call +91 81972 80019.",
    keywords: [
      "invisible aligners Bangalore",
      "invisalign price Bangalore",
      "invisalign dentist near me",
      "clear aligners cost Bangalore",
      "clear correct aligners",
      "invisalign teeth straightening",
      "orthodontist near me",
      "dentist for braces near me",
      "invisible line for teeth",
      "invisalign aligners Yelahanka",
      "invisalign monthly cost",
      "invisalign retainers",
      "invisalign clear aligners singanayakanahalli",
      "itero 3d teeth scan yelahanka",
      "clear aligner clinic doddaballapur road",
      "invisible braces cost bangalore",
      "clear aligners judicial layout yelahanka",
    ],
    heroSubtitle:
      "Advanced Invisalign® & clear aligners with iTero® 3D intraoral optical scanning—digital preview of your planned smile without messy impressions.",
    overview:
      "Invisible aligners (including Invisalign® and specialized clear aligner systems) straighten crooked, crowded, or gapped teeth comfortably and discreetly without metal wires. At Kumar's Microscopic Dental Care in Yelahanka, treatment starts with the state-of-the-art iTero® 3D Intraoral Scanner—capturing 6,000 optical frames per second so you can see a digital preview of your planned smile on screen immediately before beginning.",
    whoNeedsIt: [
      "Adults and teens wanting discreet, unnoticeable teeth straightening",
      "Mild to severe teeth crowding, overlapping, or gaps between teeth",
      "Patients wanting freedom to eat whatever they like and brush easily",
      "Professionals and working adults seeking aesthetic orthodontic alignment",
      "Patients who dislike traditional messy impression trays and pastes",
    ],
    symptoms: [
      "Crowded or overlapping front teeth",
      "Gaps and spaces between teeth",
      "Mild overbite, underbite, or crossbite concerns",
      "Relapse after previous teenage metal braces",
    ],
    causes: [
      "Genetic jaw-to-tooth size mismatch",
      "Premature loss of baby teeth leading to drifting",
      "Tongue thrusting or thumb-sucking habits in childhood",
      "Not wearing retainers after earlier orthodontic treatment",
    ],
    benefits: [
      "High-precision iTero® 3D Optical Scan—zero messy impression paste, zero gag reflex",
      "Instant Smile Outcome Simulator—view your predicted new smile on the iTero screen in minutes",
      "Virtually invisible when worn—no metal brackets or wires",
      "100% removable for meals, brushing, and special occasions",
      "Predictable computerized alignment planned by specialists",
    ],
    risks: [
      "Requires discipline to wear for 20–22 hours daily",
      "Temporary mild tightness during the first 48 hours with each new tray",
      "Must wear retainers after treatment to preserve alignment",
    ],
    process: [
      "Digital 3D Intraoral Scan with iTero® scanner (quick, comfortable, and radiation-free)",
      "Instant Smile Outcome Simulation—see your before & predicted after smile on screen",
      "Custom Invisalign® / Clear Aligner trays fabricated with medical-grade SmartTrack material",
      "Wear your clear trays 20–22 hours daily, switching trays every 1–2 weeks",
      "Periodic virtual / in-clinic checkups followed by custom Vivera retainers",
    ],
    recovery:
      "Zero downtime. Mild tightness for 24–48 hours when switching to a new tray is normal. No tissue cuts or dietary recovery needed.",
    duration:
      "Typically 6–18 months depending on case complexity; mild spacing cases can take as little as 4–6 months.",
    costRange: `₹60,000 – ₹2,50,000+ based on case complexity, system choice (Invisalign vs custom lab systems), and duration.${costNote}`,
    successRate:
      "Over 98% patient satisfaction with high predictability guided by iTero 3D digital planning.",
    faqs: [
      {
        question: "What is the iTero 3D Scanner at Kumar's Dental?",
        answer:
          "The iTero 3D intraoral scanner is cutting-edge optical technology that captures a complete high-definition 3D digital model of your teeth in under 5 minutes. It completely eliminates uncomfortable impression pastes and generates an instant simulation of what your teeth will look like after Invisalign treatment.",
      },
      {
        question: "How much does Invisalign and clear aligners cost in Bangalore?",
        answer:
          "Clear aligner treatment in Bangalore generally costs between ₹60,000 and ₹2,50,000 depending on the degree of misalignment, treatment duration, and system selected (Invisalign vs premium certified clear aligners). Flexible monthly 0% EMI plans are available.",
      },
      {
        question: "Are clear aligners as effective as traditional metal braces?",
        answer:
          "Yes, for mild, moderate, and complex orthodontic misalignment, clear aligners planned with 3D digital scanners achieve identical or superior results with unmatched aesthetics and zero food restrictions.",
      },
      {
        question: "How many hours a day must I wear invisible aligners?",
        answer:
          "Aligners should be worn for 20 to 22 hours every day, removing them only when eating, drinking hot/colored beverages, and brushing.",
      },
    ],
    relatedSlugs: ["metal-braces", "ceramic-braces", "smile-designing", "cosmetic-dentistry"],
    leadDoctor: "roshini",
    image: "/website-images/itero-invisalign-banner.jpg",
    category: "Orthodontics",
    lastUpdated: "2026-10-23",
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
    metaTitle: "Pediatric Dentist Bangalore | Kids Dental Clinic Yelahanka | Dr. Prem Kumar R",
    metaDescription:
      "Specialist pediatric dentist in Bangalore (Attur / Yelahanka New Town) — Dr. Prem Kumar R (MDS Pediatric Dentistry, KSDC 47094 A). Gentle, painless child cavity fillings, pulpectomy & special needs dental care. Call +91 81972 80019.",
    keywords: [
      "pediatric dentist near me",
      "kids dentist Bangalore",
      "pediatric dentist Yelahanka",
      "pediatric dentist Yelahanka New Town",
      "kids dentist Jakkur",
      "pediatric dentist Sahakar Nagar",
      "childrens dental near me",
      "pediatric dental clinic Bangalore",
      "affordable pediatric dentist near me",
      "pediatric dentist for autism near me",
      "special needs pediatric dentist near me",
      "sedation pediatric dentistry near me",
      "cavity filling near me",
      "dentist childrens near me",
      "Dr Prem Kumar pediatric dentist",
      "child tooth extraction",
      "pulpectomy for kids",
      "holistic pediatric dentist near me",
      "kids dentist in singanayakanahalli bangalore",
      "kids dentist singanayakanahalli",
      "pediatric dentist godrej avenues",
      "pediatric dentist in yelahanka",
      "kids dentist doddaballapur road",
      "pediatric dentist bangalore",
      "child dental clinic yelahanka new town",
      "painless root canal for kids bangalore",
    ],
    heroSubtitle:
      "Specialist pediatric dental care in Bangalore & Yelahanka New Town—led by Dr. Prem Kumar R (MDS Pediatric Dentistry, KSDC 47094 A).",
    overview:
      "Pediatric dentistry focuses on the complete oral health and psychological comfort of children from their first baby tooth through adolescence. Dr. Prem Kumar R, MDS Pediatric & Preventive Dentist (formerly Associate Professor at Ramaiah Dental College), practices at Kumar's Microscopic Dental Care on Attur Main Road, Yelahanka New Town—delivering trusted child dentistry, painless fillings, pulpectomy root care, space maintainers, and sensory-friendly care for children with special needs across Bangalore.",
    whoNeedsIt: [
      "Infants for first-year milestone dental check-ups",
      "Toddlers, kids, and school-age children with cavities, toothaches, or nursing decay",
      "Children with fear, dental anxiety, or sensory sensitivity (including autism)",
      "Teens needing early orthodontic intervention and eruption guidance",
    ],
    symptoms: [
      "Toothache, sensitivity, or crying during meals in a child",
      "Visible brown, black, or chalky white spots on milk teeth",
      "Swelling near gums or foul breath in kids",
      "Habits like thumb sucking, mouth breathing, or tongue thrusting",
      "Chipped or knocked-out baby or permanent teeth from playtime falls",
    ],
    causes: [
      "Frequent exposure to sugary snacks, juice bottles, or night nursing",
      "Inadequate brushing technique on developing primary teeth",
      "Deep enamel grooves trapping food particles",
      "Sports accidents or playground falls causing dental trauma",
    ],
    benefits: [
      "Painless, positive dental experiences that prevent adult dental phobia",
      "Preserves baby teeth to ensure correct adult tooth alignment and jaw development",
      "Fluoride treatments and pit-and-fissure sealants that prevent 80% of childhood cavities",
      "Specialist care from a former Associate Professor in Pediatric Dentistry",
    ],
    risks: [
      "Leaving baby tooth decay untreated can lead to severe pain, facial abscess, and damage to underlying adult teeth",
      "Early loss of milk teeth without space maintainers leads to crowded adult teeth",
    ],
    process: [
      "Child-friendly 'Tell-Show-Do' introduction to build trust and calm anxiety",
      "Gentle examination, dietary counseling, and digital low-radiation X-rays if needed",
      "Preventive fluoride varnish application and dental sealant coatings",
      "Painless cavity restorations using tooth-colored biocompatible materials",
      "Customized recall and oral hygiene coaching for parents",
    ],
    recovery:
      "Children resume normal eating and play almost immediately. Soft foods recommended for a few hours if local numbing gel was used.",
    duration:
      "Preventive check-ups take 20–30 minutes; restorative visits are kept brief and comfortable (30–45 minutes).",
    costRange: `₹800 – ₹8,000+ depending on preventive sealants, fillings, or pediatric root pulpectomy.${costNote}`,
    successRate:
      "Exceptional preventive success when paired with positive parental home brushing routines and 6-month check-ups.",
    faqs: [
      {
        question: "Who is the specialist pediatric dentist at Kumar's Dental?",
        answer:
          "Dr. Prem Kumar R, MDS (Pediatric & Preventive Dentistry), formerly Associate Professor at Ramaiah Dental College, personally oversees all children's dental care, preventive sealants, and pediatric treatments.",
      },
      {
        question: "Who provides specialist kids dentistry for Singanayakanahalli and Yelahanka, Bangalore?",
        answer:
          "Dr. Prem Kumar R, MDS (Pediatric & Preventive Dentistry, formerly Associate Professor at M.S. Ramaiah Dental College), leads pediatric dental care at Kumar's Microscopic Dental Care on Attur Main Road, Yelahanka New Town. Located just 7–10 minutes from Singanayakanahalli, Godrej Avenues, and Doddaballapur Road, Dr. Prem Kumar R provides university-level pediatric dentistry, painless pulpectomy, and positive behavioral management for infants, toddlers, and children.",
      },
      {
        question: "Do you treat children with autism, ADHD, or special needs?",
        answer:
          "Yes. Dr. Prem Kumar R is deeply experienced in compassionate, sensory-friendly pediatric dentistry for children with autism spectrum disorder, ADHD, and special healthcare needs, using quiet pacing, desensitization, and individualized care.",
      },
      {
        question: "When should a child have their very first dental visit?",
        answer:
          "The Indian and International Pediatric Dental Associations recommend a child's first visit by their 1st birthday, or within 6 months of their first milk tooth erupting.",
      },
      {
        question: "Why should baby teeth be treated if they eventually fall out?",
        answer:
          "Primary (baby) teeth are vital for proper chewing, speech development, and holding space for permanent adult teeth. Untreated infections can spread to the permanent tooth bud underneath and cause chronic pain.",
      },
      {
        question: "What is a painless cavity filling for children?",
        answer:
          "We use gentle, non-invasive techniques, flavored topical numbing gels, and tooth-colored composite or glass ionomer fillings that release cavity-protecting fluoride into the tooth.",
      },
      {
        question: "Where is the clinic located relative to Singanayakanahalli & Godrej Avenues?",
        answer:
          "Our clinic is at No.12, 1st Floor, Attur Main Road, Yelahanka New Town (Bangalore 560064)—only 4.2 km from Singanayakanahalli and Godrej Avenues. Direct parking is available.",
      },
    ],
    relatedSlugs: ["teeth-cleaning", "root-canal-treatment", "emergency-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/pedsfin.webp",
    category: "Pediatric Dentistry",
    lastUpdated: "2026-08-30",
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
    metaTitle: "Teeth Cleaning & Polishing Bangalore | Walk-In Dental Cleaning | Yelahanka",
    metaDescription:
      "Professional ultrasonic teeth cleaning, scaling & polishing in Bangalore (Yelahanka). Remove stubborn tartar, stains, bad breath & bleeding gums. Same-day appointments available.",
    keywords: [
      "teeth cleaning Bangalore",
      "scaling Yelahanka",
      "dental cleaning near me",
      "walk in teeth cleaning near me",
      "teeth bleaching near me",
      "professional teeth whitening near me",
      "tooth sensitivity treatment",
      "tartar removal Bangalore",
      "dentist for fillings near me",
      "bad breath treatment Bangalore",
      "deep dental cleaning cost",
    ],
    heroSubtitle:
      "Ultrasonic tartar removal and polishing to protect gums, prevent cavities, and brighten your natural smile.",
    overview:
      "Professional teeth cleaning (ultrasonic scaling and polishing) removes calcified tartar (calculus), plaque biofilm, and surface stains from tea, coffee, and tobacco that regular toothbrushing cannot reach. It is the cornerstone of lifelong oral health for children and adults at Kumar's Microscopic Dental Care in Yelahanka, Bangalore.",
    whoNeedsIt: [
      "Anyone with visible yellowish-brown tartar deposits or bleeding gums when brushing",
      "Individuals experiencing chronic bad breath (halitosis) or gum tenderness",
      "Patients due for their 6-monthly routine preventive hygiene check-up",
      "Pre-treatment preparation prior to getting braces, crowns, whitening, or dental implants",
    ],
    symptoms: [
      "Gums bleeding easily during brushing or flossing",
      "Persistent bad breath despite brushing",
      "Rough or yellowish buildup along the gumline",
      "Red, puffy, or tender gums",
    ],
    causes: [
      "Plaque bacteria mineralizing into hard tartar",
      "Crowded teeth creating tight spots difficult to floss",
      "Dietary tannins from tea, coffee, or smoking",
      "Dry mouth accelerating plaque buildup",
    ],
    benefits: [
      "Halts gingivitis and prevents irreversible bone loss and loose teeth (periodontitis)",
      "Leaves teeth smooth, sparkling, and breath noticeably fresher",
      "Allows microscopic early screening for cavities before they turn painful",
    ],
    risks: [
      "Mild, temporary sensitivity to cold drinks for 24–48 hours",
      "Slight gum bleeding during deep tartar cleaning (settles quickly)",
    ],
    process: [
      "Gentle examination of gum pockets and plaque distribution",
      "Painless ultrasonic scaling to vibrate away hard tartar without scraping enamel",
      "Gentle subgingival cleaning if inflamed pockets are present",
      "Rotary paste polishing to remove micro-stains and smooth tooth surfaces",
      "Application of protective fluoride or desensitizing varnish",
    ],
    recovery:
      "No downtime. Mild sensitivity subsides within 1–2 days. Use a soft-bristled brush and lukewarm water.",
    duration: "Usually 30–45 minutes for a full-mouth thorough cleaning session.",
    costRange: `₹800 – ₹3,500 for routine preventive scaling and polishing.${costNote}`,
    successRate:
      "Over 98% of patients see complete resolution of gum bleeding within 7–10 days of professional scaling when accompanied by daily brushing and flossing.",
    faqs: [
      {
        question: "Does teeth cleaning damage or weaken tooth enamel?",
        answer:
          "No. Modern ultrasonic scaling uses ultra-fine water vibrations to lift off tartar without scratching or removing your natural tooth enamel.",
      },
      {
        question: "How often should I get my teeth professionally cleaned?",
        answer:
          "For most adults and children, once every 6 months is ideal. If you have active gum inflammation or diabetes, a 3–4 month maintenance schedule may be recommended.",
      },
      {
        question: "Is teeth cleaning painful?",
        answer:
          "Routine cleaning is very comfortable. If you have extremely sensitive teeth or inflamed gums, our dentists apply a gentle topical numbing gel for a completely pain-free experience.",
      },
    ],
    relatedSlugs: ["children-dentistry", "laser-dentistry", "cosmetic-dentistry"],
    leadDoctor: "prem",
    image: "/website-images/routinefin.jpeg",
    category: "Preventive",
    lastUpdated: "2026-08-30",
  },
  {
    slug: "crowns",
    name: "Dental Crowns",
    shortName: "Dental Crowns",
    metaTitle: "Dental Crowns Bangalore | Zirconia & Ceramic Caps | Dr. RV Roshini",
    metaDescription:
      "Premium zirconia & ceramic dental crowns in Bangalore (Yelahanka). Led by prosthodontist Dr. RV Roshini. 3D digital iTero optical scanning for flawless margins & bite accuracy.",
    keywords: [
      "dental crowns Bangalore",
      "tooth crown Yelahanka",
      "crown dentist Bangalore",
      "zirconia crown Bangalore",
      "porcelain crown cost Bangalore",
      "crown after root canal",
      "tooth cap price Bangalore",
      "digital impression crown Bangalore",
      "iTero crown scan Bangalore",
      "loose crown on root canal tooth",
      "tooth decay under crown with root canal",
      "zirconia crowns yelahanka new town",
      "ceramic tooth cap singanayakanahalli",
      "prosthodontist for crowns bangalore",
      "cad cam digital crowns doddaballapur road",
      "front tooth ceramic crown cost bangalore",
    ],
    heroSubtitle:
      "Precision-milled zirconia and ceramic caps planned with iTero® 3D optical scanning—restoring structural strength under Dr. RV Roshini (MDS Prosthodontist).",
    overview:
      "A dental crown (tooth cap) encases a heavily decayed, cracked, or root-canal-treated tooth to protect it from biting fractures while restoring normal chewing and lifelike aesthetics. At Kumar's Microscopic Dental Care in Yelahanka, crowns are digitally scanned using our advanced iTero® 3D Intraoral Scanner—ensuring flawless microscopic margin fit without messy impression pastes—and planned by Dr. RV Roshini, MDS Prosthodontist & Crown Specialist.",
    whoNeedsIt: [
      "Teeth that have undergone root canal treatment to prevent fractures",
      "Heavily decayed teeth with inadequate remaining natural structure for a simple filling",
      "Cracked, worn down, or fractured teeth needing structural reinforcement",
      "Implant abutments needing final aesthetic tooth replacement",
    ],
    symptoms: [
      "Pain or sensitivity when chewing on a large filling or broken tooth",
      "Visible black margins or discoloration around old metal crowns",
      "Loose or dislodged crown on a previously treated root canal tooth",
    ],
    causes: [
      "Extensive cavity destruction",
      "Biting trauma on brittle non-vital teeth",
      "Severe nocturnal teeth grinding (bruxism)",
      "Recurrent decay developing at old crown margins",
    ],
    benefits: [
      "Protects brittle root-canal-treated teeth for decades",
      "Custom shade-matched to blend invisibly with your natural smile",
      "Crafted using premium biocompatible Zirconia, E.max lithium disilicate, or PFM",
      "Designed and cemented under prosthodontic bite-alignment protocols",
    ],
    risks: [
      "Minimal tooth reshaping required to accommodate crown thickness",
      "Temporary sensitivity around the gumline during the first 48 hours",
    ],
    process: [
      "Digital radiographs and bite assessment by Dr. RV Roshini",
      "Precision tooth preparation under magnification and digital intraoral 3D scan",
      "Fitting of a comfortable, natural-looking temporary crown",
      "Precision CAD/CAM lab milling of monolithic Zirconia or ceramic crown",
      "Try-in, bite balance check, and permanent resin cementation",
    ],
    recovery:
      "Patients eat normally right after permanent cementation. Avoid chewing hard bones or ice directly on new crowns.",
    duration: "Usually completed in 2 visits over 3 to 7 days.",
    costRange: `₹5,000 – ₹22,000+ per crown depending on material (Metal-Ceramic vs Multilayer Zirconia vs E.max).${costNote}`,
    successRate:
      "Properly fitted Zirconia crowns designed by an MDS prosthodontist boast 95%+ durability over 15+ years with good oral hygiene.",
    faqs: [
      {
        question: "Which dental crown material is recommended: Zirconia or PFM?",
        answer:
          "Zirconia is widely recommended today because it is metal-free, exceptionally strong, and mimics the translucency and shade of natural teeth without developing dark gumlines over time.",
      },
      {
        question: "Why is a crown necessary after a root canal?",
        answer:
          "After a root canal, the tooth loses its blood supply and becomes brittle like dry wood. Biting forces on molars can easily split an uncapped tooth down to the root, requiring an extraction. A crown acts like a protective helmet.",
      },
      {
        question: "What should I do if my crown feels loose or falls off?",
        answer:
          "Keep the crown safe, avoid chewing on that side, and contact our Yelahanka clinic immediately. Dr. RV Roshini will inspect for underlying decay, clean the abutment, and re-cement or replace the crown promptly.",
      },
    ],
    relatedSlugs: ["bridges", "dental-implants", "root-canal-treatment", "smile-designing"],
    leadDoctor: "roshini",
    image: "/website-images/FMRfin.webp",
    category: "Prosthodontics",
    lastUpdated: "2026-08-30",
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
    image: "/website-images/FMRfin.webp",
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
    metaTitle: "Cosmetic Dentistry Bangalore | Teeth Whitening & Smile Makeover | Dr. RV Roshini",
    metaDescription:
      "Transform your smile with cosmetic dentistry in Bangalore (Yelahanka). Laser teeth whitening, aesthetic composite bonding, porcelain veneers & smile design by Dr. RV Roshini.",
    keywords: [
      "cosmetic dentistry Bangalore",
      "smile makeover Yelahanka",
      "aesthetic cosmetic dentist near me",
      "professional teeth whitening near me",
      "laser teeth whitening near me",
      "dental bonding near me",
      "teeth bleaching near me",
      "snap on veneers near me",
      "cosmetic dentist near me",
      "tooth bleaching Bangalore",
      "gap closing dentist Bangalore",
    ],
    heroSubtitle:
      "Transformative aesthetic dental care grounded in biological health, balanced bite principles, and lifelike beauty.",
    overview:
      "Cosmetic dentistry enhances the shape, alignment, brightness, and overall harmony of your smile using in-clinic laser teeth whitening, direct composite bonding, custom porcelain veneers, and all-ceramic crowns. At Kumar's Microscopic Dental Care in Yelahanka, all cosmetic smile transformations are customized by Dr. RV Roshini, MDS Prosthodontist & Aesthetic Specialist.",
    whoNeedsIt: [
      "Individuals wanting a noticeably brighter, whiter smile for weddings, photos, or career milestones",
      "Patients with chipped, worn, uneven, or stained front teeth",
      "Those with unsightly gaps between front teeth (diastema) seeking quick closure",
      "Adults seeking replacement of old, discolored, or mismatched composite fillings",
    ],
    symptoms: [
      "Stubborn yellow or dark stains that resist regular brushing",
      "Chipped or jagged enamel edges on front teeth",
      "Uneven tooth lengths creating an unbalanced smile line",
      "Feeling hesitant or self-conscious to smile openly",
    ],
    causes: [
      "Deep enamel discoloration from tea, coffee, smoking, or natural aging",
      "Minor accidental chipping or enamel attrition",
      "Mild orthodontic spacing or tooth size discrepancies",
    ],
    benefits: [
      "Dramatic boost in personal confidence and smile aesthetics",
      "Conservative options ranging from 1-hour laser whitening to porcelain veneers",
      "Designed and executed with prosthodontic precision for natural harmony",
    ],
    risks: [
      "Mild, transient sensitivity following in-clinic whitening (resolves within 24h)",
      "Periodic touch-up maintenance needed for lifestyle-stained teeth",
    ],
    process: [
      "Comprehensive aesthetic evaluation and shade analysis",
      "Digital smile planning and discussion of conservative vs ceramic pathways",
      "In-office laser whitening session or composite bonding sculpting",
      "High-gloss polishing and protective fluoride desensitizing application",
    ],
    recovery: "Zero downtime. Avoid deeply pigmented foods (turmeric, red wine, coffee) for 48 hours.",
    duration: "Laser whitening takes 45–60 minutes; composite bonding is completed in a single visit.",
    costRange: `₹3,000 – ₹1,50,000+ spanning express whitening to full smile rehabilitation.${costNote}`,
    successRate:
      "High patient satisfaction; teeth typically brighten by 4 to 8 shades in a single clinical whitening session.",
    faqs: [
      {
        question: "How long do professional teeth whitening results last?",
        answer:
          "Professional in-clinic laser teeth whitening typically lasts 1 to 3 years depending on dietary habits (coffee, tea, smoking) and daily oral hygiene. Occasional maintenance touch-ups keep teeth bright.",
      },
      {
        question: "What is the difference between dental bonding and porcelain veneers?",
        answer:
          "Dental bonding uses tooth-colored composite resin sculpted directly onto teeth in a single visit with minimal to no enamel removal. Porcelain veneers are custom ultra-thin ceramic shells made in a dental lab that provide superior stain resistance and longevity.",
      },
      {
        question: "Is laser teeth whitening safe for tooth enamel?",
        answer:
          "Yes. Under professional dental supervision, certified bleaching gels safely break down deep organic stains within the enamel structure without softening or eroding the tooth mineral.",
      },
    ],
    relatedSlugs: ["smile-designing", "dental-veneers", "teeth-cleaning", "crowns"],
    leadDoctor: "roshini",
    image: "/website-images/whitening.jpeg",
    category: "Cosmetic",
    lastUpdated: "2026-08-30",
  },
  {
    slug: "dental-veneers",
    name: "Dental Veneers",
    shortName: "Dental Veneers",
    metaTitle: "Dental Veneers Bangalore | Porcelain & Composite Veneers | Dr. RV Roshini",
    metaDescription:
      "Custom porcelain & ceramic dental veneers in Bangalore (Yelahanka). Fix chipped, stained, or gapped front teeth with prosthodontist Dr. RV Roshini. Book consultation.",
    keywords: [
      "dental veneers Bangalore",
      "porcelain veneers near me",
      "composite veneers near me",
      "snap on veneers near me",
      "affordable veneers near me",
      "dental bonding near me",
      "veneer cost Bangalore",
      "ceramic veneers Yelahanka",
      "porcelain veneers cost near me",
    ],
    heroSubtitle:
      "Ultra-thin custom ceramic shells bonded to front teeth to create a perfectly aligned, bright, natural smile.",
    overview:
      "Dental veneers are paper-thin, custom-crafted shells of medical-grade porcelain or ceramic bonded to the front surface of teeth to correct deep discoloration, chips, gaps, or minor misalignment. At Kumar's Microscopic Dental Care in Yelahanka, veneers are designed and applied by Dr. RV Roshini, MDS Prosthodontist.",
    whoNeedsIt: [
      "Patients with deep intrinsic tetracycline or fluorosis stains that whitening cannot fix",
      "Chipped, worn, or cracked front teeth needing durable aesthetic restoration",
      "Uneven tooth proportions or gaps between front teeth",
      "Individuals wanting a celebrity-standard, symmetrical smile transformation",
    ],
    symptoms: [
      "Severe discoloration unresponsive to chemical bleaching",
      "Noticeable chips on front smile teeth",
      "Gaps or slightly turned front teeth",
    ],
    causes: [
      "Developmental enamel defects or fluorosis",
      "Wear from aging or trauma",
      "Residual aesthetic spacing",
    ],
    benefits: [
      "Incredible natural optical translucency that mimics real dental enamel",
      "Highly stain-resistant surface that never discolors from tea or coffee",
      "Conserves natural tooth structure compared to full crowns",
      "Designed within an individual facial esthetics framework",
    ],
    risks: [
      "Requires minimal (0.3mm–0.5mm) micro-preparation of front enamel",
      "Cannot chew on extremely hard items like bottle caps or ice cubes",
    ],
    process: [
      "Smile design analysis, photography, and digital 3D aesthetic preview",
      "Micro-conservative enamel preparation and digital optical scanning",
      "Placement of temporary aesthetic veneers",
      "CAD/CAM fabrication of ultra-thin E.max or porcelain veneers",
      "Precision adhesive bonding under rubber-dam isolation by Dr. RV Roshini",
    ],
    recovery: "Patients can smile and eat normally immediately. Mild sensitivity lasts 1–2 days.",
    duration: "Typically completed in 2 visits over 5 to 7 days.",
    costRange: `₹8,000 – ₹25,000+ per tooth depending on composite vs premium pressed E.max ceramic.${costNote}`,
    successRate:
      "Porcelain veneers achieve a 95%+ 10-year success rate when properly bonded and maintained with routine check-ups.",
    faqs: [
      {
        question: "How much do porcelain veneers cost in Bangalore?",
        answer:
          "In Bangalore, porcelain and E.max ceramic veneers typically range from ₹10,000 to ₹25,000 per tooth. Direct composite veneers range from ₹3,500 to ₹8,000 per tooth. Consultations include a detailed aesthetic preview.",
      },
      {
        question: "What is the difference between snap on veneers and permanent porcelain veneers?",
        answer:
          "Snap-on veneers are temporary removable plastic covers that clip over teeth and can trap food particles and bacteria. Permanent porcelain veneers are custom-bonded medical-grade ceramic restorations that provide durable chewing function, natural translucency, and long-term gum health.",
      },
      {
        question: "Do veneers look fake or unnaturally white?",
        answer:
          "Not when crafted by a specialist prosthodontist. Dr. RV Roshini customizes the shade, translucency, and surface texture of each veneer to harmonize with your facial complexion and neighboring teeth for an effortlessly natural look.",
      },
    ],
    relatedSlugs: ["smile-designing", "crowns", "cosmetic-dentistry"],
    leadDoctor: "roshini",
    image: "/website-images/smile-makeover.jpg",
    category: "Cosmetic / Prosthodontics",
    lastUpdated: "2026-08-30",
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    shortName: "Emergency Dentistry",
    metaTitle: "Emergency Dentist Bangalore | Same-Day Tooth Pain Relief & Extractions | Yelahanka",
    metaDescription:
      "Immediate dental emergency care in Bangalore (Yelahanka New Town). Severe toothache, knocked-out teeth, swelling & extractions. Open Mon–Sun. Call +91 81972 80019 for priority slots.",
    keywords: [
      "emergency dentist Yelahanka",
      "emergency dentist near me",
      "dental clinic near me open today",
      "weekend dentist near me",
      "24hr dentist near me",
      "emergency extraction near me",
      "tooth pain Bangalore",
      "dental emergency near me",
      "knocked out tooth emergency",
      "same day dentist Bangalore",
      "walk in dentist Bangalore",
    ],
    heroSubtitle:
      "Immediate care for acute tooth pain, facial swelling, broken restorations, and dental trauma—open Monday to Sunday.",
    overview:
      "Emergency dentistry provides urgent relief for severe toothaches, acute pulp infections, knocked-out (avulsed) teeth, fractured crowns, facial swelling, and post-extraction bleeding. At Kumar's Microscopic Dental Care in Yelahanka New Town, emergency appointments are prioritized to eliminate pain and save natural teeth. Pediatric dental injuries are promptly managed by Dr. Prem Kumar R.",
    whoNeedsIt: [
      "Patients suffering from unbearable, throbbing toothaches keeping them awake at night",
      "Children and adults with knocked-out, fractured, or displaced teeth from sports or falls",
      "Rapidly developing gum or facial swelling indicating an acute abscess",
      "Sudden loss of a crown, bridge, or large filling leaving sharp edges exposed",
    ],
    symptoms: [
      "Severe, unmanageable dental pain",
      "Visible facial swelling, gum boil, or fever associated with toothache",
      "Bleeding in mouth that does not stop after trauma or extraction",
      "Completely knocked-out tooth or broken jaw bone sensitivity",
    ],
    causes: [
      "Acute pulpitis or apical abscess",
      "Sports accidents, vehicular falls, or blunt trauma to mouth",
      "Sudden catastrophic fracture of an uncapped root-canal tooth",
      "Severe pericoronitis (wisdom tooth infection)",
    ],
    benefits: [
      "Rapid pain elimination with gentle local anesthesia and emergency pulp therapy",
      "Time-sensitive protocols that can replant and save knocked-out teeth within 60 minutes",
      "Clear, calm treatment plan to permanently resolve the underlying infection",
    ],
    risks: [
      "Delaying emergency care can cause dental infections to spread into deep neck spaces (airway risk)",
      "A knocked-out tooth loses viability if not replanted or kept in milk within 1–2 hours",
    ],
    process: [
      "Priority triage—call +91 81972 80019 or walk in for urgent assessment",
      "Rapid digital radiography to pinpoint the source of pain or root fracture",
      "Immediate painless anesthesia and emergency intervention (drainage, emergency pulpotomy, trauma splinting, or gentle extraction)",
      "Prescription of necessary anti-inflammatory and antibacterial medications",
      "Scheduled follow-up for permanent definitive restoration",
    ],
    recovery:
      "Rapid relief within hours. Follow prescribed medications and maintain gentle warm salt-water rinses.",
    duration: "Emergency visits typically take 30–60 minutes for complete pain relief.",
    costRange: `₹1,000 – ₹8,000+ for emergency pain relief and stabilization.${costNote}`,
    successRate:
      "Knocked-out permanent teeth have an 85%+ survival rate when brought in milk and replanted within the first hour of trauma.",
    faqs: [
      {
        question: "What should I do if a permanent tooth is completely knocked out?",
        answer:
          "Pick the tooth up by the white crown only (DO NOT touch the root). Rinse gently in cold water for 10 seconds if dirty (do not scrub). Place the tooth in a cup of cold milk or the patient's own saliva, and rush to Kumar's Dental in Yelahanka immediately within 30–60 minutes.",
      },
      {
        question: "Is your dental clinic open on weekends for emergencies?",
        answer:
          "Yes! We are open Monday through Saturday from 10:00 AM to 9:00 PM, and on Sundays from 10:00 AM to 6:00 PM. Call +91 81972 80019 for urgent slot allocation.",
      },
      {
        question: "Can emergency tooth extractions be done on the same day?",
        answer:
          "Yes. If a tooth is hopelessly fractured or causing severe acute infection that cannot be saved, gentle same-day emergency extraction is performed under full local anesthesia for immediate relief.",
      },
    ],
    relatedSlugs: ["root-canal-treatment", "children-dentistry", "wisdom-tooth-removal"],
    leadDoctor: "prem",
    image: "/website-images/dentists-treat-patients-teeth.jpg",
    category: "Emergency",
    lastUpdated: "2026-08-30",
  },
  {
    slug: "itero-3d-scanner",
    name: "iTero® 3D Intraoral Digital Scanning",
    shortName: "iTero® 3D Scanner",
    metaTitle: "iTero 3D Dental Scanner Bangalore | Digital Teeth Scan Yelahanka | Kumar's Dental",
    metaDescription:
      "Advanced iTero® 3D intraoral digital optical scanning in Bangalore (Yelahanka New Town). No messy impressions. Instant chairside digital preview of your planned smile for Invisalign & crowns. Call +91 81972 80019.",
    keywords: [
      "itero 3d scanner bangalore",
      "digital dental scan bangalore",
      "intraoral scanner yelahanka",
      "3d teeth scanner near me",
      "invisalign 3d scan cost",
      "digital impression dentist bangalore",
      "itero element scanner clinic",
      "digital smile preview scan bangalore",
      "comfortable impression-free dental scan",
      "digital dentistry yelahanka new town",
      "itero scanner singanayakanahalli",
      "3d dental scan doddaballapur road",
      "digital teeth scanning judicial layout",
      "3d intraoral dental scanner bangalore",
    ],
    heroSubtitle:
      "Radiation-free 3D optical scanning capturing 6,000 frames/sec—chairside digital preview of your planned smile in under 5 minutes with comfortable, impression-free scanning.",
    overview:
      "The iTero® Intraoral Scanner is a revolutionary digital optical imaging system that replaces traditional, messy putty impression trays with a fast, comfortable, high-definition digital wand. At Kumar's Microscopic Dental Care in Yelahanka New Town, our iTero® system creates an exact 3D digital model of your teeth and gums in minutes. Paired with the chairside Outcome Simulator, you can see a high-precision digital preview of your planned smile before deciding on Invisalign® or clear aligner treatment.",
    whoNeedsIt: [
      "Patients planning Invisalign® or clear aligners wanting to preview their planned smile chairside",
      "Patients needing custom zirconia crowns, bridges, or veneers with sub-millimeter margin accuracy",
      "Anyone who prefers comfortable, impression-free scanning without traditional dental trays",
      "Patients tracking wear, teeth grinding, or gum recession with time-lapse 3D comparison technology",
    ],
    symptoms: [
      "Crooked, crowded, or spaced teeth being evaluated for orthodontic alignment",
      "Dislike of traditional alginate impression trays and breathing discomfort",
      "Need for custom dental restorations requiring precision-fit margins",
      "Desire to see a visual preview of planned smile aesthetics before starting treatment",
    ],
    causes: [
      "Advancements in computer-aided design and computer-aided manufacturing (CAD/CAM) in dentistry",
      "Clinical demand for digital workflows from optical scan directly to aligner fabrication",
      "Patient preference for clean, high-tech, comfortable clinical diagnostics",
    ],
    benefits: [
      "Comfortable, impression-free scanning: Completely eliminates messy impression pastes, trays, and throat discomfort",
      "Digital Preview of Your Planned Smile: Watch your teeth digitally align on the iTero screen in real time",
      "Sub-Millimeter Digital Precision: Captures 6,000 optical frames per second for ultra-accurate aligner and crown fit",
      "Fast & Radiation-Free: Complete full-mouth digital scan completed in under 5 minutes with optical light",
      "Direct CAD/CAM Integration: Digital files transmit directly to orthodontic and prosthetic labs",
    ],
    risks: [
      "Requires keeping mouth gently open for 3–5 minutes during the optical wand sweep",
      "Extremely rare cases of severe jaw trismus may require brief pauses during scanning",
    ],
    process: [
      "Clinical oral exam and preparation of teeth surfaces",
      "Gentle optical wand sweep across upper, lower teeth, and bite registration (under 5 minutes)",
      "High-definition 3D colour model generation on the chairside iTero touchscreen",
      "Outcome Simulator launch: view your current smile vs. your planned smile side-by-side",
      "Collaborative treatment planning and digital export to orthodontic or prosthetic lab",
    ],
    recovery:
      "Zero recovery time. Completely non-invasive, comfortable, and painless.",
    duration: "Full dual-arch 3D digital scan and digital preview takes only 15–20 minutes.",
    costRange: `Included in comprehensive clear aligner and smile makeover treatment plans; diagnostic 3D scans from ₹1,500 – ₹3,000.${costNote}`,
    successRate:
      "99.4% first-time digital impression acceptance rate with virtually zero lab remakes compared to traditional silicone impressions.",
    faqs: [
      {
        question: "Does the iTero 3D scanner emit radiation?",
        answer:
          "No. The iTero 3D scanner uses safe, optical light and laser confocal imaging technology. It emits zero ionizing radiation, making it completely safe for pregnant women, teenagers, and children.",
      },
      {
        question: "How does the digital smile preview work?",
        answer:
          "Once the scanner captures your teeth, built-in intelligent algorithms calculate planned tooth movements and display a 3D simulated rendering of your straightened teeth and corrected bite right in front of you.",
      },
      {
        question: "Is the 3D scan really better than traditional impression paste?",
        answer:
          "Yes, significantly! Traditional impressions can warp, tear, or cause discomfort. The iTero digital scan eliminates distortion, fits crowns and aligners with high accuracy, and reduces turnaround time by transmitting files digitally.",
      },
      {
        question: "Who performs the 3D scan at Kumar's Dental in Yelahanka?",
        answer:
          "Our specialists—Dr. Prem Kumar R (MDS) and Dr. RV Roshini (MDS Prosthodontist)—personally supervise digital intraoral scans and review the digital preview of your planned smile with you chairside.",
      },
    ],
    relatedSlugs: ["invisible-aligners", "crowns", "smile-designing", "root-canal-treatment"],
    leadDoctor: "roshini",
    image: "/website-images/itero-invisalign-banner.webp",
    category: "Digital Technology",
    lastUpdated: "2026-10-23",
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
