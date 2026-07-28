/** Clinic constants — single source of truth for contact, hours, geo, trust signals */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kumarsdentistry.in";

export const SITE = {
  name: "Kumar's Microscopic Dental Care",
  shortName: "Kumar's Dental",
  tagline: "Precision • Compassion • Trust",
  url: SITE_URL,
  email: "kumarsdentistry.in@gmail.com",
  phones: {
    primary: "+91 81972 80019",
    primaryTel: "+918197280019",
    secondary: "+91 80882 66714",
    secondaryTel: "+918088266714",
  },
  whatsapp: {
    number: "918197280019",
    url: "https://wa.me/918197280019",
    bookingMessage: encodeURIComponent(
      "Hi Kumar's Dental, I'd like to book an appointment."
    ),
  },
  address: {
    street: "No.12, 1st Floor, Attur Main Road",
    locality: "Yelahanka New Town",
    city: "Bangalore",
    region: "Karnataka",
    postalCode: "560064",
    country: "IN",
    full: "No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore 560064",
  },
  geo: {
    latitude: 13.1016255,
    longitude: 77.5669958,
  },
  hours: {
    weekdays: "Mon–Sat: 10:00 AM – 9:00 PM",
    sunday: "Sun: 10:00 AM – 6:00 PM",
    schema: ["Mo-Sa 10:00-21:00", "Su 10:00-18:00"] as string[],
    display: [
      { days: "Monday – Saturday", hours: "10:00 AM – 9:00 PM" },
      { days: "Sunday", hours: "10:00 AM – 6:00 PM" },
    ],
  },
  mapsUrl: "https://maps.app.goo.gl/UyHu7aUWt7zMUQHa8",
  rating: {
    value: 4.9,
    count: 250,
    display: "4.9/5",
  },
  paymentAccepted: ["Cash", "UPI", "Credit Card", "Debit Card", "PhonePe", "Google Pay"],
  priceRange: "₹₹",
  logo: "/website-images/kd-logo.jpg",
  defaultOgImage: "/website-images/kd-logo.jpg",
  costDisclaimer:
    "Indicative Bangalore ranges for planning only. Final fees confirmed after clinical examination.",
} as const;

export function whatsappBookingUrl(message?: string) {
  const text = message
    ? encodeURIComponent(message)
    : SITE.whatsapp.bookingMessage;
  return `${SITE.whatsapp.url}?text=${text}`;
}
