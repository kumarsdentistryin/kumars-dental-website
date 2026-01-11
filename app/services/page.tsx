import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Dental Services | Kumar's Dental Care",
  description: "RCT, implants, pediatric dentistry, braces, whitening, and more with microscopic precision",
};

export default function ServicesPage() {
  const services = [
    {
      name: "Microscopic Root Canal (RCT)",
      image: "/website-images/RCT.png",
      description: "Precise root canal treatment using 25x magnification for better outcomes and faster healing",
      features: ["Advanced microscopic technique", "Minimal pain", "99% success rate", "Same-day completion possible"]
    },
    {
      name: "Dental Implants",
      image: "/website-images/implantsfin.jpeg",
      description: "Permanent replacement for missing teeth with aesthetic and functional results",
      features: ["Titanium implants", "Latest technology", "Natural appearance", "Lifespan 20+ years"]
    },
    {
      name: "Pediatric Dentistry",
      image: "/website-images/pedsfin.jpeg",
      description: "Gentle, child-friendly dental care for kids with behavior guidance and painless procedures",
      features: ["Kid-friendly environment", "Painless treatment", "Fluoride application", "Oral hygiene education"]
    },
    {
      name: "Preventive Care & Cleaning",
      image: "/website-images/routinefin.jpeg",
      description: "Regular checkups and professional cleaning to maintain healthy teeth and prevent disease",
      features: ["6-monthly checkups", "Tartar removal", "Plaque control", "Gum disease prevention"]
    },
    {
      name: "Braces & Aligners",
      image: "/website-images/braces1.webp",
      description: "Orthodontic solutions to straighten teeth and improve your smile",
      features: ["Metal braces", "Ceramic braces", "Clear aligners", "Fast treatment options"]
    },
    {
      name: "Teeth Whitening",
      image: "/website-images/whitening.jpeg",
      description: "Professional teeth whitening for a bright, confident smile",
      features: ["In-office whitening", "Safe & effective", "Results in 1 hour", "Lasts 6-12 months"]
    },
    {
      name: "Dental Fillings",
      image: "/website-images/fillingsfin.jpeg",
      description: "Tooth-colored fillings to restore decayed teeth",
      features: ["Composite resin", "Color matched", "Durable", "Long-lasting"]
    },
    {
      name: "Crowns & Bridges",
      image: "/website-images/FMRfin.jpeg",
      description: "Restore missing or damaged teeth with natural-looking crowns and bridges",
      features: ["Ceramic crowns", "Porcelain bridges", "Natural appearance", "Strong & durable"]
    },
    {
      name: "Dentures & Removable Prosthetics",
      image: "/website-images/denturefin.jpeg",
      description: "Complete and partial dentures for multiple missing teeth",
      features: ["Custom fit", "Natural appearance", "Easy maintenance", "Affordable option"]
    },
    {
      name: "Gum Therapy",
      image: "/website-images/gumfin.jpeg",
      description: "Treatment for gum disease and recession",
      features: ["Scaling & root planing", "Graft procedures", "Gum disease prevention", "Bleeding gums"]
    },
    {
      name: "Tooth Extraction",
      image: "/website-images/extfin.jpeg",
      description: "Comfortable and safe tooth extraction when necessary",
      features: ["Painless extraction", "Wisdom teeth removal", "Post-care support", "Minimal recovery"]
    },
    {
      name: "Smile Makeover",
      image: "/website-images/smile-makeover.jpg",
      description: "Complete smile transformation with multiple cosmetic procedures",
      features: ["Personalized design", "Multiple procedures", "Professional consultation", "Beautiful results"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-95">
            Comprehensive dental care with advanced technology and expert doctors
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-100">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/appointments"
                    className="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl mb-3">🔬</p>
              <h3 className="font-bold text-lg mb-2">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">Microscopic dentistry for precision and accuracy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl mb-3">😊</p>
              <h3 className="font-bold text-lg mb-2">Painless Treatment</h3>
              <p className="text-gray-600 text-sm">Comfortable experience with latest anesthesia</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl mb-3">⏱️</p>
              <h3 className="font-bold text-lg mb-2">Quick Results</h3>
              <p className="text-gray-600 text-sm">Efficient procedures with minimal time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl mb-3">💰</p>
              <h3 className="font-bold text-lg mb-2">Affordable Pricing</h3>
              <p className="text-gray-600 text-sm">Transparent costs with payment options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Specific Service?</h2>
          <p className="text-xl mb-8">Book an appointment with our expert doctors today</p>
          <Link
            href="/appointments"
            className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg inline-block"
          >
            📅 Schedule Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-3">Kumar's Dental</h4>
            <p className="text-gray-400 text-sm">Advanced dental care with microscopic precision</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <p className="text-gray-400 text-sm">📞 +91 81972 80019</p>
            <p className="text-gray-400 text-sm">📍 No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore - 560064</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Hours</h4>
            <p className="text-gray-400 text-sm">Mon-Sat: 10 AM - 9 PM</p>
            <p className="text-gray-400 text-sm">Sun: 10 AM - 6 PM</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Kumar's Dental Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
