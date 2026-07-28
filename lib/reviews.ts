export type ReviewItem = {
  author: string;
  rating: number;
  date: string;
  body: string;
  category: "pediatric" | "prosthetic" | "general";
};

export const patientReviews: ReviewItem[] = [
  {
    author: "Anoop R.",
    rating: 5,
    date: "2026-05-15",
    body: "Dr. Prem was incredible with my 5-year-old. My son was so anxious about his first cleaning, but Dr. Prem's gentle explanation of every tool made him feel completely safe. Best kids dentist in Yelahanka!",
    category: "pediatric",
  },
  {
    author: "Sunitha M.",
    rating: 5,
    date: "2026-06-02",
    body: "Highly recommend Dr. Roshini for dental crowns. She explained the difference between zirconia and metal-ceramic clearly. The fit is perfect, and I had zero discomfort.",
    category: "prosthetic",
  },
  {
    author: "Karan S.",
    rating: 5,
    date: "2026-06-20",
    body: "Dr. Prem Kumar performed a microscopic root canal for me. The technology they use is amazing, and I felt nothing during the procedure. He is extremely professional.",
    category: "general",
  },
  {
    author: "Priya K.",
    rating: 5,
    date: "2026-07-01",
    body: "We take both our daughters to Dr. Prem. He is patient, friendly, and excellent at pediatric dentistry. The clinic on Attur Main Road is clean and modern.",
    category: "pediatric",
  },
  {
    author: "Venkatesh Prasad",
    rating: 5,
    date: "2026-07-05",
    body: "Excellent implant treatment by Dr. Roshini. She is very skilled and walked me through the entire recovery process. Very happy with my new tooth.",
    category: "prosthetic",
  },
  {
    author: "Meera J.",
    rating: 5,
    date: "2026-07-10",
    body: "Best children's dentist in Attur Layout. Dr. Prem Kumar makes dental visits fun for kids. The staff is polite and booking via WhatsApp was seamless.",
    category: "pediatric",
  },
];
