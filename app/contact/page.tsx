import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Contact | Kumar's Microscopic Dental Care",
  description: "Contact Kumar's Microscopic Dental Care in Yelahanka for appointments, directions, and clinic hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-95">We’re here to help with appointments, emergencies, and questions.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Address</h2>
              <p className="text-gray-700">No.12, 1st Floor, Attur Main Road</p>
              <p className="text-gray-700">Yelahanka New Town, Bengaluru - 560064</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
              <p className="text-gray-700 flex flex-col gap-1">
                <a className="text-red-600 hover:underline" href="tel:+918197280019">+91 81972 80019</a>
                <a className="text-red-600 hover:underline" href="tel:+918088266714">+91 80882 66714</a>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Email</h2>
              <p className="text-gray-700">
                <a className="text-red-600 hover:underline" href="mailto:kumarsdentistry.in@gmail.com">kumarsdentistry.in@gmail.com</a>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Clinic Hours</h2>
              <p className="text-gray-700">Mon - Sat: 10:00 AM – 9:00 PM</p>
              <p className="text-gray-700">Sunday: 10:00 AM – 6:00 PM</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/appointments" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition">
                Book Appointment
              </Link>
              <a href="tel:+918197280019" className="border-2 border-red-600 text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition">
                Call Clinic
              </a>
              <a href="https://maps.google.com/?q=Kumar's+Microscopic+Dental+Care+Attur+Layout" className="text-red-600 font-semibold hover:text-blue-700">
                Open in Google Maps →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-100 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/appointments" className="text-red-600 hover:text-blue-700">Book an Appointment</Link></li>
              <li><Link href="/services" className="text-red-600 hover:text-blue-700">View Services</Link></li>
              <li><Link href="/team" className="text-red-600 hover:text-blue-700">Our Doctors</Link></li>
              <li><Link href="/about" className="text-red-600 hover:text-blue-700">About Clinic</Link></li>
            </ul>
            <div className="mt-6 text-sm text-gray-700">
              <p className="font-semibold text-gray-900 mb-2">Emergency?</p>
              <p>Call us immediately. We prioritize pain relief and urgent dental needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
