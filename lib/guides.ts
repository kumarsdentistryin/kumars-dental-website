export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideComparisonRow = {
  feature: string;
  colA: string;
  colB: string;
};

export type GuideSection = {
  title: string;
  content: string[];
  steps?: string[];
  table?: {
    headerA: string;
    headerB: string;
    rows: GuideComparisonRow[];
  };
};

export type PatientGuide = {
  slug: string;
  title: string; // Question as H1
  metaTitle: string;
  metaDescription: string;
  directAnswer: string; // 40-60 words
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedTreatmentSlug: string;
  relatedTreatmentName: string;
  lastReviewed: string; // YYYY-MM-DD
  summary: string;
};

export const patientGuides: PatientGuide[] = [
  {
    slug: "root-canal-cost-factors-bengaluru",
    title: "What affects the cost of a root canal in Bengaluru?",
    metaTitle: "Root Canal Cost Factors in Bengaluru | Price Guide | Kumar's Dental",
    metaDescription:
      "Understand what affects root canal cost in Bengaluru: tooth type, canal count, microscope use, retreatments, and dental crowns. Clear clinical factors.",
    summary: "Clinical breakdown of tooth complexity, operating microscopes, retreatments, and crowns affecting root canal cost.",
    directAnswer:
      "The cost of a root canal in Bengaluru depends on the tooth type and canal anatomy, the presence of calcification or curvature, the use of operating microscopes, whether it is a primary treatment or retreatment, required 3D CBCT imaging, and the protective crown placed afterwards. Indicative ranges vary after clinical examination.",
    lastReviewed: "2026-10-26",
    relatedTreatmentSlug: "microscopic-dentistry",
    relatedTreatmentName: "Microscope-Assisted Root Canal Treatment",
    sections: [
      {
        title: "1. Tooth Location and Number of Root Canals",
        content: [
          "Anterior front teeth (incisors and canines) typically contain a single, straight root canal. Premolars generally have one or two canals. Molars at the back of the mouth contain three, four, or occasionally five curved, interconnected canals.",
          "Because posterior molars require significantly more clinical time, specialized rotary files, and complex disinfection sequences, treatment fees correlate directly with canal count and anatomical complexity.",
        ],
      },
      {
        title: "2. Microscope-Assisted Precision vs Conventional Endodontics",
        content: [
          "Root canal procedures performed under high-power surgical operating microscopes involve specialized optics, shadowless illumination, and micro-ultrasonic tips. The operating microscope allows endodontists to scout calcified channels, negotiate severe apical curvatures, and preserve maximum sound dentin.",
          "While microscope-assisted treatment reflects investment in advanced clinical infrastructure, it significantly lowers the risk of missed canals, ledging, or treatment failure.",
        ],
      },
      {
        title: "3. Primary Treatment vs Endodontic Retreatment",
        content: [
          "A tooth undergoing root canal therapy for the first time presents virgin canal spaces. In contrast, an endodontic retreatment requires disassembling prior restorations, removing old gutta-percha or separated instruments, negotiating altered pathways, and applying medicaments to eliminate persistent bacterial biofilms.",
          "Retreatments demand extended chairside time and advanced micro-surgical techniques, making them more intricate than primary endodontic procedures.",
        ],
      },
      {
        title: "4. Indicative Cost Factors Summary",
        content: [
          "Every patient receives an itemized treatment estimate following diagnostic digital radiography and clinical vitality testing. Total fees reflect the following clinical variables:",
        ],
        table: {
          headerA: "Clinical Factor",
          headerB: "Impact on Treatment Protocol",
          rows: [
            {
              feature: "Tooth Type",
              colA: "Front Tooth (1 Canal)",
              colB: "Back Molar (3–5 Canals with Complex Curvature)",
            },
            {
              feature: "Visual Aid",
              colA: "Loupes / Standard Illumination",
              colB: "25× Dental Operating Microscope & Micro-Ultrasonics",
            },
            {
              feature: "Procedure Nature",
              colA: "Primary Virgin Canal Treatment",
              colB: "Retreatment of Previously Incomplete Endodontics",
            },
            {
              feature: "Post-Endodontic Crown",
              colA: "Composite Core Build-up Only",
              colB: "Custom Zirconia or Monolithic Ceramic Crown",
            },
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Why do molar root canals cost more than front teeth?",
        answer:
          "Molars have multiple curved, narrow root canals (typically 3 to 4+) located in the back of the mouth, requiring more time, delicate instruments, and extensive irrigation compared to single-canal front teeth.",
      },
      {
        question: "Is a dental crown always required after a root canal?",
        answer:
          "Back teeth (premolars and molars) experience heavy chewing forces and become brittle after pulp removal. A dental crown is strongly advised to prevent vertical root fracture and seal against coronal leakage.",
      },
      {
        question: "Does dental insurance cover root canal treatment in Bengaluru?",
        answer:
          "Most Indian corporate health insurance and dental OPD policies cover therapeutic endodontics and extractions. Our front desk provides necessary documentation and receipts for reimbursement.",
      },
      {
        question: "How much does a root canal cost at Kumar's Dental?",
        answer:
          "Fees vary depending on tooth position, canal count, and whether microscopic retreatment is required. An indicative range is provided after thorough diagnostic examination and digital radiography.",
      },
    ],
  },
  {
    slug: "microscopic-vs-conventional-root-canal",
    title: "How is a microscope-assisted root canal different from a regular one?",
    metaTitle: "Microscopic vs Conventional Root Canal | Comparison | Kumar's Dental",
    metaDescription:
      "Compare microscope-assisted root canal treatment with conventional endodontics: magnification, extra canal detection, retreatment success, and tooth preservation.",
    summary: "Objective side-by-side comparison between microscope-assisted endodontics and conventional root canals.",
    directAnswer:
      "A microscope-assisted root canal utilizes a surgical operating microscope providing up to 25× magnification and shadowless coaxial illumination, compared to unaided vision or 2.5×–3.5× dental loupes in conventional treatment. This enables location of hidden canals, conservative tooth structure removal, and superior precision during complex retreatments.",
    lastReviewed: "2026-10-26",
    relatedTreatmentSlug: "microscopic-dentistry",
    relatedTreatmentName: "Microscope-Assisted Root Canal Treatment",
    sections: [
      {
        title: "Side-by-Side Comparison",
        content: [
          "The dental operating microscope fundamentally changes how root canal anatomy is visualized and treated. Below is a structured comparison between conventional treatment and microscope-assisted endodontics:",
        ],
        table: {
          headerA: "Conventional Root Canal",
          headerB: "Microscope-Assisted Root Canal",
          rows: [
            {
              feature: "Magnification Range",
              colA: "Unaided eye (1×) or dental loupes (2.5×–3.5×)",
              colB: "Continuous magnification steps up to 25× optical power",
            },
            {
              feature: "Illumination",
              colA: "Ambient overhead dental chair lamp",
              colB: "Shadowless coaxial LED light focused down canal axes",
            },
            {
              feature: "Anatomical Detection",
              colA: "Tactile feel; hidden canals like MB2 often unseen",
              colB: "Direct visualization of calcified orifices, fins, and isthmuses",
            },
            {
              feature: "Dentin Preservation",
              colA: "Wider access cavities needed for lighting",
              colB: "Conservative contracted access preserving pericervical dentin",
            },
            {
              feature: "Complication Management",
              colA: "Difficult to bypass separated files or ledges",
              colB: "High-precision micro-ultrasonic retrieval under direct vision",
            },
            {
              feature: "Appointment Duration",
              colA: "Frequently split across multiple dressing sessions",
              colB: "Single-visit completion common in vital or non-swollen cases",
            },
          ],
        },
      },
      {
        title: "Why Finding the 'MB2' Canal Matters",
        content: [
          "In upper molar teeth, the mesiobuccal root frequently contains a second canal, termed the MB2 canal. Studies indicate MB2 is present in over 70% to 90% of maxillary molars. Conventional loupes often fail to detect MB2 because its orifice is microscopic and tucked under dentinal shelves.",
          "Operating microscopes illuminate this canal directly, ensuring all bacterial reservoirs are thoroughly cleaned and disinfected.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a microscopic root canal take longer than a normal one?",
        answer:
          "Often it is faster overall because superior visualization allows the dentist to locate all canal orifices immediately, clean thoroughly, and complete the procedure in a single 60 to 90-minute appointment.",
      },
      {
        question: "Is microscopic root canal treatment painful?",
        answer:
          "No. Treatment is conducted under precise local anesthesia and digital rubber dam isolation. High magnification actually makes the procedure gentler because healthy tissue is not unnecessarily disturbed.",
      },
      {
        question: "Can an operating microscope save a failing previous root canal?",
        answer:
          "Yes. Microscope-assisted retreatment allows the endodontist to inspect inside previously filled canals, remove old sealant material, locate missed canals, and reseal the root system cleanly.",
      },
    ],
  },
  {
    slug: "child-first-dental-visit",
    title: "When should a child first see a dentist?",
    metaTitle: "When Should a Child First See a Dentist? | Pediatric Guide | Kumar's Dental",
    metaDescription:
      "Guidelines on when to schedule your child's first dental appointment, what happens during the visit, and how to prepare without creating fear.",
    summary: "First birthday dental visit milestones, pediatric acclimatization, and parent preparation advice.",
    directAnswer:
      "A child should visit the dentist by the eruption of their first baby tooth or by their first birthday, whichever comes first. This early visit allows the pediatric dentist to check jaw development, discuss infant oral hygiene, assess cavity risks, and build a positive, fear-free foundation for future appointments.",
    lastReviewed: "2026-10-26",
    relatedTreatmentSlug: "children-dentistry",
    relatedTreatmentName: "Pediatric & Preventive Dentistry",
    sections: [
      {
        title: "The 'Age One' Dental Milestone",
        content: [
          "The Indian Dental Association and international pediatric dental academies recommend the first dental visit by age one. At this stage, primary teeth are beginning to emerge, and infant feeding patterns (such as night-time milk bottle or nursing habits) can create early childhood caries risks.",
          "Starting early ensures that a child's earliest association with a dental clinic is gentle and observational, rather than being triggered by a painful emergency.",
        ],
      },
      {
        title: "What Happens During a First Visit?",
        content: [
          "The first visit is gentle, low-stress, and focused on acclimatization. Steps generally include:",
        ],
        steps: [
          "Lap-to-lap examination: The infant sits comfortably on the parent's lap facing the dentist for a quick, reassuring oral check.",
          "Soft tissue and tooth evaluation: Checking for healthy gum tissue, tooth eruption sequence, tongue posture, and frenulum attachments.",
          "Plaque and enamel assessment: Evaluating early enamel mineralization and spotting chalky white-spot lesions before they form cavities.",
          "Diet and feeding discussion: Practical advice on avoiding nursing bottle syndrome, choosing fluoridated toothpaste, and healthy snacking.",
        ],
      },
      {
        title: "How to Prepare Your Child at Home",
        content: [
          "Children take emotional cues from their parents. Avoid using words like 'needle', 'pain', or 'drill'. Instead, describe the visit as counting teeth and shining a bright flashlight to keep teeth strong.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why fix baby teeth if they will fall out anyway?",
        answer:
          "Primary teeth are crucial for chewing, speech development, facial symmetry, and holding physical space for permanent teeth. Neglected baby tooth infections can damage the developing adult tooth underneath.",
      },
      {
        question: "What should I do if my toddler cries during the exam?",
        answer:
          "Crying is a normal, age-appropriate reaction to unfamiliar settings in toddlers. Our pediatric specialist uses calm behavior guidance, and the exam is performed quickly and compassionately.",
      },
      {
        question: "How often should children visit the dentist after the first visit?",
        answer:
          "Routine pediatric dental checkups are recommended every six months to monitor tooth eruption, apply preventive fluoride, and maintain oral hygiene habits.",
      },
    ],
  },
  {
    slug: "clear-aligners-vs-braces",
    title: "Clear aligners vs braces: which suits you?",
    metaTitle: "Clear Aligners vs Braces: Which Suits You? | Kumar's Dental Guide",
    metaDescription:
      "Detailed clinical comparison between clear aligners (Invisalign) and traditional braces: aesthetics, hygiene, wear discipline, and treatment cases.",
    summary: "Clear comparison between clear aligners and traditional braces for teens and adults.",
    directAnswer:
      "Clear aligners use custom, removable transparent trays to gently shift teeth, offering high aesthetics and easy oral hygiene, while traditional braces utilize bonded metal or ceramic brackets with archwires. Aligners suit responsible teens and adults requiring disciplined wear, whereas fixed braces handle complex skeletal discrepancies without requiring patient tray compliance.",
    lastReviewed: "2026-10-26",
    relatedTreatmentSlug: "invisible-aligners",
    relatedTreatmentName: "Clear Aligners & Invisalign",
    sections: [
      {
        title: "Core Clinical Differences",
        content: [
          "Orthodontic treatment aims to align teeth, correct bite discrepancies, and improve oral function. Below is an objective comparison between clear aligners and fixed braces:",
        ],
        table: {
          headerA: "Clear Aligners (Invisalign)",
          headerB: "Traditional Fixed Braces",
          rows: [
            {
              feature: "Visual Aesthetics",
              colA: "Virtually invisible clear polyurethane trays",
              colB: "Visible metal or ceramic brackets and wires",
            },
            {
              feature: "Removability",
              colA: "Removed during meals, brushing, and flossing",
              colB: "Permanently bonded until treatment completion",
            },
            {
              feature: "Dietary Restrictions",
              colA: "No restrictions; eat normally after removing trays",
              colB: "Avoid hard, sticky, or crunchy foods that break brackets",
            },
            {
              feature: "Oral Hygiene Maintenance",
              colA: "Standard brushing and normal flossing",
              colB: "Specialized orthodontic brushes and threaders required",
            },
            {
              feature: "Patient Compliance",
              colA: "Must be worn 20–22 hours daily to achieve progress",
              colB: "Works continuously without patient compliance factor",
            },
            {
              feature: "Emergency Visits",
              colA: "Very low; no loose wires or poking brackets",
              colB: "Occasional emergency visits for broken wires or brackets",
            },
          ],
        },
      },
      {
        title: "The Role of 3D Intraoral Scanning in Aligners",
        content: [
          "Modern clear aligner treatment starts with high-resolution 3D digital impressions (iTero scanner) rather than physical putty impressions. This allows patients to view a 3D digital simulation of anticipated tooth movements before starting.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are clear aligners as effective as traditional braces?",
        answer:
          "For mild to moderate crowding, spacing, and most bite issues, modern clear aligners are equally effective when worn for the recommended 20–22 hours daily.",
      },
      {
        question: "Can teenagers use clear aligners?",
        answer:
          "Yes. Clear aligner systems for teenagers feature compliance indicators and accommodate erupting permanent molars and canines.",
      },
      {
        question: "How long does treatment take with clear aligners?",
        answer:
          "Treatment duration ranges from 6 to 18 months depending on case complexity and patient adherence to daily wear schedules.",
      },
    ],
  },
  {
    slug: "what-is-itero-scan",
    title: "What is an iTero scan and does it replace impressions?",
    metaTitle: "What is an iTero Scan? Does It Replace Dental Impressions? | Kumar's Dental",
    metaDescription:
      "Learn what an iTero 3D intraoral scanner is, how digital impressions eliminate the gag reflex, and how 3D smile simulations work.",
    summary: "Overview of iTero 3D digital scanning, impression-free comfort, and digital smile preview.",
    directAnswer:
      "An iTero scan is a 3D digital intraoral scanner that captures thousands of high-resolution images per second to create an accurate 3D model of your teeth and gums. It completely replaces gooey, uncomfortable alginate impression trays, eliminating the gag reflex and producing instant digital records for crowns, aligners, and smile simulations.",
    lastReviewed: "2026-10-26",
    relatedTreatmentSlug: "itero-3d-scanner",
    relatedTreatmentName: "iTero 3D Digital Scanner",
    sections: [
      {
        title: "How 3D Intraoral Scanning Works",
        content: [
          "Traditional dental impressions rely on metal or plastic trays filled with cold alginate or polyvinyl siloxane putty. Patients must hold the putty in their mouth for several minutes, often triggering gagging and discomfort.",
          "The iTero intraoral scanner uses optical wand technology that glides gently over your teeth, taking over 6,000 optical frames per second to construct a photorealistic, millimeter-accurate 3D render on screen in real time.",
        ],
      },
      {
        title: "Key Advantages of Digital Scanning",
        content: [
          "Impression-free experience: No messy trays or unpleasant taste.",
          "Real-time feedback: Dentist and patient can immediately inspect bite alignment and margins in 3D.",
          "Invisalign Outcome Simulator: Patients can view a simulated before-and-after digital progression of tooth alignment in minutes.",
          "Enhanced crown and bridge fit: Digital CAD/CAM records sent electronically to the laboratory eliminate impression shrinkage or distortion.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does an iTero scan emit radiation?",
        answer:
          "No. The iTero scanner uses optical light and laser sensors, emitting zero ionizing radiation. It is completely safe for children and pregnant women.",
      },
      {
        question: "How long does a full mouth scan take?",
        answer:
          "A comprehensive full-arch intraoral scan typically takes between 3 to 5 minutes.",
      },
      {
        question: "Can an iTero scan be used for pediatric patients?",
        answer:
          "Yes. Children who struggle with gagging during traditional impression trays tolerate digital optical wand scans very comfortably.",
      },
    ],
  },
  {
    slug: "pulpectomy-for-children",
    title: "What is a pulpectomy (baby tooth root canal)?",
    metaTitle: "What is a Pulpectomy? Baby Tooth Root Canal Guide | Kumar's Dental",
    metaDescription:
      "Understand what a pulpectomy is for children: saving infected milk teeth, differences from adult root canals, procedure steps, and pediatric crowns.",
    summary: "Pediatric pulp therapy explainer: saving primary molars to protect permanent tooth spacing.",
    directAnswer:
      "A pulpectomy is a pediatric dental procedure that removes infected pulp tissue from the crown and roots of a primary (baby) tooth. It cleans and disinfects the canal, filling it with a resorbable paste so the baby tooth remains functional, preserves jaw spacing, and allows the underlying adult tooth to erupt properly.",
    lastReviewed: "2026-10-26",
    relatedTreatmentSlug: "children-dentistry",
    relatedTreatmentName: "Pediatric & Preventive Dentistry",
    sections: [
      {
        title: "Why Not Just Extract the Infected Baby Tooth?",
        content: [
          "Parents often wonder why primary teeth are treated rather than extracted. Baby molars must stay in place until ages 10 to 12. If a baby molar is pulled prematurely, adjacent teeth drift into the vacant space, causing severe crowding and impaction of the permanent premolars.",
          "A pulpectomy preserves the child's natural tooth structure, maintains normal chewing, and acts as a natural space maintainer until the permanent tooth is ready to emerge.",
        ],
      },
      {
        title: "How Does a Pulpectomy Differ From an Adult Root Canal?",
        content: [
          "While both treatments eliminate infected dental pulp, a child's pulpectomy uses resorbable paste (such as zinc oxide eugenol or calcium hydroxide with iodoform). As the permanent adult tooth pushes upward, the baby tooth roots and the paste resorb naturally.",
          "In contrast, adult permanent root canals are sealed with permanent, non-resorbable gutta-percha.",
        ],
      },
      {
        title: "Protective Crowns Following Pulpectomy",
        content: [
          "Primary molars treated with a pulpectomy become fragile. A pediatric crown (stainless steel or tooth-colored zirconia) is placed to protect the tooth from fracturing during normal chewing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a pulpectomy painful for a child?",
        answer:
          "No. Local anesthesia numbs the area completely. The procedure relieves the throbbing pain caused by deep pulp infection, providing rapid relief.",
      },
      {
        question: "How long does a pulpectomy take?",
        answer:
          "In most cases, an experienced pediatric dentist completes the pulpectomy and crown placement in 30 to 45 minutes.",
      },
      {
        question: "Will the crown fall off when the baby tooth is shed?",
        answer:
          "Yes. The crown is bonded to the primary tooth and naturally falls out together with the baby tooth when the adult tooth erupts.",
      },
    ],
  },
  {
    slug: "dental-emergency-child",
    title: "What to do if your child knocks out a tooth",
    metaTitle: "Knocked Out Tooth in Child: Emergency Action Steps | Kumar's Dental",
    metaDescription:
      "Time-critical steps if your child knocks out a tooth: handling instructions, storage in milk, baby vs permanent teeth, and calling +91 81972 80019.",
    summary: "Immediate 0-30 minute emergency steps for knocked-out permanent or primary teeth in children.",
    directAnswer:
      "If a permanent tooth is knocked out, find the tooth, hold it only by the crown (never touch the root), gently rinse it in cold milk or saline without scrubbing, and attempt to reinsert it into the socket or store it in milk. Contact Kumar's Microscopic Dental Care immediately at +91 81972 80019 within 30 to 60 minutes for reimplantation.",
    lastReviewed: "2026-10-26",
    relatedTreatmentSlug: "emergency-dentistry",
    relatedTreatmentName: "Emergency Dental Care",
    sections: [
      {
        title: "First Step: Is It a Baby Tooth or a Permanent Tooth?",
        content: [
          "Permanent Tooth: Time-critical emergency. Immediate replantation within 30 to 60 minutes offers the highest probability of saving the tooth.",
          "Baby Tooth: NEVER reinsert a knocked-out baby tooth. Reinserting a primary tooth can severely damage the delicate permanent tooth germ developing right beneath the gum socket.",
        ],
      },
      {
        title: "Immediate Action Protocol for a Permanent Tooth (Minutes 0–30)",
        content: [
          "Follow these critical clinical steps immediately:",
        ],
        steps: [
          "Locate the tooth immediately: Pick it up by the white chewing crown. Do NOT touch the root.",
          "Gentle rinse if dirty: Rinse under cold running water or milk for 5 seconds. Do NOT scrub, scrape, or disinfect with soap or alcohol.",
          "Attempt immediate reinsertion: Gently insert the tooth back into its socket and have your child bite on a clean handkerchief to keep it in place.",
          "If cannot reinsert, keep it moist: Place the tooth in cold milk, Hank's Balanced Salt Solution, or have your child spit saliva into a small cup with the tooth.",
          "Call our emergency clinic line: Call +91 81972 80019 and travel immediately to Kumar's Microscopic Dental Care in Yelahanka New Town.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a knocked-out tooth be stored in plain water?",
        answer:
          "Avoid storing a tooth in plain tap water. Tap water causes the delicate periodontal ligament cells on the root surface to burst (hypotonic cell lysis). Cold milk or saliva is vastly superior.",
      },
      {
        question: "What happens if we reach the clinic after 60 minutes?",
        answer:
          "Reimplantation may still be attempted, but the periodontal ligament cells may have lost viability, necessitating specialized endodontic stabilization and follow-up monitoring.",
      },
    ],
  },
  {
    slug: "how-many-visits-root-canal",
    title: "Can a root canal be done in one visit?",
    metaTitle: "Can a Root Canal Be Done in One Visit? | Kumar's Dental Guide",
    metaDescription:
      "Discover when a root canal can be completed in a single visit versus multiple sessions: clinical criteria, operating microscopes, and recovery.",
    summary: "Single-visit versus multi-visit root canal criteria, microscope precision, and healing.",
    directAnswer:
      "Yes, a root canal can frequently be completed in a single 60 to 90-minute visit when there is no acute swelling, widespread active purulence, or severe anatomical blockage. Using a dental operating microscope and rotary nickel-titanium instrumentation allows thorough mechanical cleaning, disinfection, and hermetic three-dimensional obturation in one session.",
    lastReviewed: "2026-10-26",
    relatedTreatmentSlug: "microscopic-dentistry",
    relatedTreatmentName: "Microscope-Assisted Root Canal Treatment",
    sections: [
      {
        title: "When is Single-Visit Treatment Appropriate?",
        content: [
          "Modern endodontic literature confirms that single-visit root canals have success rates comparable to multi-visit procedures when appropriate criteria are met:",
          "Vital pulp involvement: Teeth with irreversible pulpitis (severe sensitivity or lingering pain) where bacterial infection has not yet passed beyond the root tip.",
          "Absence of active drainage: Canals that can be dried thoroughly with paper points during the session.",
          "Operating microscope availability: Magnification allows complete inspection of all canals without requiring exploratory intermediate dressings.",
        ],
      },
      {
        title: "When is a Multi-Visit Approach Medically Indicated?",
        content: [
          "In cases of acute periapical abscess, active pus weeping through the canal, or severe calcifications requiring long chemical disinfection, an antibacterial intra-canal medicament (such as calcium hydroxide) is placed between appointments to resolve infection safely.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a single-visit root canal more painful than multi-visit?",
        answer:
          "No. Clinical studies demonstrate that post-operative tenderness is comparable or even lower in single-visit cases, as the tooth does not undergo repeated instrumentation and temporary seal replacements.",
      },
      {
        question: "How long does a single-visit root canal take?",
        answer:
          "A single-visit microscopic root canal typically takes between 60 to 90 minutes depending on whether it is a front tooth or a complex molar.",
      },
      {
        question: "Can I get my dental crown on the same day?",
        answer:
          "Digital scanning or impressions for the crown can often be taken immediately after root canal obturation, with the definitive crown placed within a few days.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): PatientGuide | undefined {
  return patientGuides.find((g) => g.slug === slug);
}

export function getGuidesForTreatment(treatmentSlug: string): PatientGuide[] {
  const directMatches = patientGuides.filter(
    (g) => g.relatedTreatmentSlug === treatmentSlug
  );
  if (directMatches.length >= 2) return directMatches.slice(0, 3);
  const others = patientGuides.filter(
    (g) => g.relatedTreatmentSlug !== treatmentSlug
  );
  return [...directMatches, ...others].slice(0, 3);
}

export function getAllGuideSlugs(): string[] {
  return patientGuides.map((g) => g.slug);
}
