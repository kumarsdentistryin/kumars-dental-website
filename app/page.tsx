import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Kumar's Microscopic Dental Care | Best Dental Clinic Yelahanka, Bangalore",
  description: "Expert dental care with microscopic technology, pediatric dentistry, implants, RCT & more. Serving Yelahanka & Attur Layout. Call +91 81972 80019",
  keywords: ["dentist Yelahanka", "pediatric dentist", "RCT specialist", "dental implants", "microscopic dentistry"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced Dental Care with Microscopic Precision
            </h1>
            <p className="text-xl mb-4 opacity-95">
              Root canals, implants, pediatric care, and more using the latest dental technology
            </p>
            <p className="text-lg mb-8 opacity-90 flex items-center gap-2">
              📍 No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore - 560064
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointments"
                className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-center text-lg"
              >
                📅 Book Now
              </Link>
              <a
                href="tel:+918197280019"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition text-center text-lg"
              >
                ☎️ +91 81972 80019
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/website-images/Frame_6945__1_.webp"
              alt="Modern dental clinic with microscopic technology"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image
                src="/website-images/RCT.png"
                alt="Root Canal Treatment under microscope"
                width={300}
                height={200}
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                Microscopic RCT
              </h3>
              <p className="text-gray-700 mb-4">
                Advanced root canal treatment with 25x magnification for precision and success
              </p>
              <Link href="/services" className="text-blue-600 font-bold hover:text-red-700">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image
                src="/website-images/implantsfin.jpeg"
                alt="Dental implants procedure"
                width={300}
                height={200}
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                Dental Implants
              </h3>
              <p className="text-gray-700 mb-4">
                State-of-the-art implant placement for permanent tooth replacement
              </p>
              <Link href="/services" className="text-blue-600 font-bold hover:text-red-700">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image
                src="/website-images/pedsfin.jpeg"
                alt="Pediatric dentistry"
                width={300}
                height={200}
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                Pediatric Dentistry
              </h3>
              <p className="text-gray-700 mb-4">
                Gentle, child-friendly dental care for kids with specialized expertise
              </p>
              <Link href="/services" className="text-blue-600 font-bold hover:text-red-700">
                Learn More →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose Kumar's Dental Care?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-lg border-2 border-blue-200">
              <p className="text-4xl mb-4">🔬</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Microscopic Technology</h3>
              <p className="text-gray-700">25x magnification for precision and better outcomes</p>
            </div>
            <div className="p-8 bg-green-50 rounded-lg border-2 border-green-200">
              <p className="text-4xl mb-4">👨‍⚕️</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Doctors</h3>
              <p className="text-gray-700">MDS specialists with 6+ years of experience</p>
            </div>
            <div className="p-8 bg-purple-50 rounded-lg border-2 border-purple-200">
              <p className="text-4xl mb-4">👨‍👩‍👧‍👦</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Family Care</h3>
              <p className="text-gray-700">Services for kids, adults, and seniors</p>
            </div>
            <div className="p-8 bg-yellow-50 rounded-lg border-2 border-yellow-200">
              <p className="text-4xl mb-4">💰</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Affordable Pricing</h3>
              <p className="text-gray-700">Transparent costs with payment plans available</p>
            </div>
            <div className="p-8 bg-pink-50 rounded-lg border-2 border-pink-200">
              <p className="text-4xl mb-4">😊</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Painless Care</h3>
              <p className="text-gray-700">Advanced techniques for comfortable experience</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-lg border-2 border-indigo-200">
              <p className="text-4xl mb-4">⏰</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quick Appointments</h3>
              <p className="text-gray-700">Fast booking and confirmation via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Meet Our Experts
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Doctor 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <Image
                src="/website-images/dr-prem-kumar.jpg"
                alt="Dr. Prem Kumar - Pediatric Dentist"
                width={400}
                height={500}
                className="w-full h-80 object-contain bg-gray-50"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Dr. Prem Kumar R
                </h3>
                <p className="text-gray-700 font-semibold mb-3">
                  MDS Pediatric & Preventive Dentist
                </p>
                <p className="text-gray-600 mb-4">
                  Specialist in pediatric dentistry, microscopic root canals, and behavior guidance for anxious patients.
                </p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>✓ BDS (RGUHS)</p>
                  <p>✓ MDS Pediatric & Preventive Dentistry</p>
                  <p>✓ Microscopic Dentistry Certification</p>
                  <p>✓ 6+ Years Experience</p>
                </div>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <Image
                src="/website-images/dr-roshini.jpg"
                alt="Dr. RV Roshini - Implantologist"
                width={400}
                height={500}
                className="w-full h-80 object-contain bg-gray-50"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Dr. Rachapudi Venkata Roshini
                </h3>
                <p className="text-gray-700 font-semibold mb-3">
                  MDS Prosthodontist & Implantologist
                </p>
                <p className="text-gray-600 mb-4">
                  Expert in dental implants, smile design, and comprehensive prosthetic solutions.
                </p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>✓ BDS (Ramaiah)</p>
                  <p>✓ MDS Prosthodontics</p>
                  <p>✓ Implant Specialist</p>
                  <p>✓ Smile Design Expert</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/team"
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition text-lg"
            >
              Meet Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What Parents & Patients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
              <p className="text-yellow-400 text-2xl mb-4">★★★★★</p>
              <p className="text-gray-700 mb-4 italic">
                &quot;Dr. Prem is amazing! My son loves going there now. Very professional and caring.&quot;
              </p>
              <p className="font-bold text-gray-900">Priya Sharma</p>
              <p className="text-gray-600 text-sm">Parent, Yelahanka</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
              <p className="text-yellow-400 text-2xl mb-4">★★★★★</p>
              <p className="text-gray-700 mb-4 italic">
                &quot;Best RCT experience! Painless procedure with the microscope. Highly recommend.&quot;
              </p>
              <p className="font-bold text-gray-900">Rajesh Kumar</p>
              <p className="text-gray-600 text-sm">Satisfied Patient</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
              <p className="text-yellow-400 text-2xl mb-4">★★★★★</p>
              <p className="text-gray-700 mb-4 italic">
                &quot;Dr. Roshini's implant work is exceptional. Beautiful smile now!&quot;
              </p>
              <p className="font-bold text-gray-900">Anjali Desai</p>
              <p className="text-gray-600 text-sm">Implant Patient</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
              <p className="text-yellow-400 text-2xl mb-4">★★★★★</p>
              <p className="text-gray-700 mb-4 italic">
                &quot;Best kids dentist near me in Yelahanka! My 5-year-old daughter was scared, but Dr. Prem made her feel so comfortable. Now she actually looks forward to dental visits!&quot;
              </p>
              <p className="font-bold text-gray-900">Sneha Reddy</p>
              <p className="text-gray-600 text-sm">Mother of 2, Attur Layout</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
              <p className="text-yellow-400 text-2xl mb-4">★★★★★</p>
              <p className="text-gray-700 mb-4 italic">
                &quot;Found the best pediatric dentist in Bangalore! Very gentle with children. My 3-year-old had cavity filling done painlessly. Child-friendly environment. Highly recommended!&quot;
              </p>
              <p className="font-bold text-gray-900">Arun Patel</p>
              <p className="text-gray-600 text-sm">Parent, Yelahanka New Town</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
              <p className="text-yellow-400 text-2xl mb-4">★★★★★</p>
              <p className="text-gray-700 mb-4 italic">
                &quot;Excellent pediatric dental care! Patient with nervous children. Clean clinic, professional staff. My twins love visiting Dr. Prem. Best dentist for kids in Yelahanka!&quot;
              </p>
              <p className="font-bold text-gray-900">Kavita Menon</p>
              <p className="text-gray-600 text-sm">Mother, Kogilu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Dental Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Schedule your appointment today and experience world-class dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg"
            >
              📅 Book Appointment
            </Link>
            <a
              href="tel:+918197280019"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition text-lg"
            >
              ☎️ Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h4 className="text-lg font-bold mb-4">Kumar's Dental Care</h4>
              <p className="text-gray-400 text-sm">
                Expert dental care with microscopic precision in Yelahanka, Bangalore.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/team" className="hover:text-white transition">Our Team</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>📍 No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore - 560064</p>
                <p>📞 +91 81972 80019</p>
                <p>📧 kumarsdentistry.in@gmail.com</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-bold mb-4">Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Mon-Sat: 10 AM - 9 PM</p>
                <p>Sunday: 10 AM - 6 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Kumar's Microscopic Dental Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
