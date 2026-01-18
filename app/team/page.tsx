import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Our Team | Expert Dentists",
  description: "Meet our team of experienced dental specialists",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Dental Experts</h1>
          <p className="text-xl opacity-95">
            Highly qualified specialists with years of experience
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Doctor 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100">
              <Image
                src="/website-images/dr-prem-kumar.jpg"
                alt="Dr. Prem Kumar - Pediatric Dentist"
                width={500}
                height={600}
                className="w-full h-80 object-contain bg-gray-50"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-red-600 mb-2">
                  Dr. Prem Kumar R
                </h2>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  MDS Pediatric & Preventive Dentist
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Qualifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>BDS</strong> from RGUHS (Rajiv Gandhi University of Health Sciences)</li>
                    <li>✓ <strong>MDS</strong> in Pediatric & Preventive Dentistry from Ramaiah Dental College</li>
                    <li>✓ Certification in <strong>Advanced Endodontics</strong> (Root Canal Treatment)</li>
                    <li>✓ Certification in <strong>Microscopic Dentistry</strong> (25x magnification)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Pediatric Dentistry</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Microscopic RCT</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Preventive Care</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Behavior Guidance</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Focus Areas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🎯 Pediatric dental care for kids (age 2-18 years)</li>
                    <li>🔬 Microscopic root canal treatment with 99% success rate</li>
                    <li>😊 Behavior guidance for anxious patients</li>
                    <li>🦷 Preventive dentistry and oral hygiene education</li>
                    <li>💨 Minimal anxiety, maximum comfort approach</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-800">
                    <strong>Experience:</strong> Over 6+ years of specialized experience in pediatric dentistry and advanced endodontics. Known for making kids comfortable and delivering exceptional results.
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100">
              <Image
                src="/website-images/dr-roshini.jpg"
                alt="Dr. RV Roshini - Implantologist"
                width={500}
                height={600}
                className="w-full h-80 object-contain bg-gray-50"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-red-600 mb-2">
                  Dr. RV Roshini
                </h2>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  MDS Prosthodontist & Implant Specialist
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Qualifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>BDS</strong> from RGUHS (Rajiv Gandhi University of Health Sciences)</li>
                    <li>✓ <strong>MDS</strong> in Prosthodontics and Implantology from Ramaiah Dental College</li>
                    <li>✓ Certification in <strong>Dental Implant Surgery</strong> (Advanced)</li>
                    <li>✓ Certification in <strong>Smile Design</strong> and Esthetic Dentistry</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Dental Implants</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Smile Design</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Prosthetics</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Full Mouth Rehabilitation</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Focus Areas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>⭐ Dental implant placement and restoration</li>
                    <li>😁 Smile makeover and design</li>
                    <li>🦷 Fixed and removable prosthetics</li>
                    <li>👄 Maxillofacial prosthetics</li>
                    <li>💼 Complex full-mouth rehabilitation cases</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-800">
                    <strong>Experience:</strong> Specialist in implant dentistry and smile design. Over 6+ years of expertise in creating beautiful, functional smiles and handling complex prosthetic cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Our Team is Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-4xl mb-4">🎓</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Highly Qualified</h3>
              <p className="text-gray-700">MDS specialists with advanced certifications in their fields</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow border-l-4 border-red-600">
              <p className="text-4xl mb-4">⏰</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Experienced</h3>
              <p className="text-gray-700">6+ years of hands-on experience in specialized dentistry</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-4xl mb-4">🔬</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Advanced Technology</h3>
              <p className="text-gray-700">Use microscopic dentistry for precision and superior outcomes</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-4xl mb-4">😊</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Patient-Centric</h3>
              <p className="text-gray-700">Compassionate care focused on patient comfort and results</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-4xl mb-4">🎯</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Specialized Care</h3>
              <p className="text-gray-700">Each doctor specializes for optimal results in their field</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-4xl mb-4">🏆</p>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-700">Consistent high success rates and satisfied patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Expert Dental Care</h2>
          <p className="text-xl mb-8">Book your appointment with our team today</p>
          <Link
            href="/appointments"
            className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition text-lg inline-block"
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
            <p className="text-gray-400 text-sm">Advanced dental care with expert specialists</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
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
