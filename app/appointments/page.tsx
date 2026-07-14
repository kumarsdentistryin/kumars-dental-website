'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCtas from '@/components/StickyCtas';
import { SITE, whatsappBookingUrl } from '@/lib/site';
import { trackFormSubmission, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtag';

export default function AppointmentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    company: '', // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [spamBlocked, setSpamBlocked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company.trim() !== '') {
      setSpamBlocked(true);
      return;
    }
    setLoading(true);
    trackFormSubmission('appointment_whatsapp');
    trackWhatsAppClick();

    const message =
      `*New Appointment Request*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Date: ${formData.date}%0A` +
      `Time: ${formData.time}%0A` +
      `Service: ${formData.service}`;

    window.open(`https://wa.me/${SITE.whatsapp.number}?text=${message}`, '_blank');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <main id="main-content" className="flex items-center justify-center p-4 py-12">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-6">
            <Link href="/" className="inline-block text-sm text-gray-600 hover:text-red-600 mb-3">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Book Your Appointment</h1>
            <p className="text-sm text-gray-600">
              Quick booking — we confirm via WhatsApp during clinic hours
            </p>
          </div>

          {spamBlocked ? (
            <p className="text-center text-gray-600" role="status">
              Request received.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg relative">
                {/* Honeypot — hidden from users */}
                <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 bg-white"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="date" className="block text-xs font-bold text-gray-700 mb-1">
                      Date *
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-xs font-bold text-gray-700 mb-1">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 bg-white"
                    >
                      <option value="">Select time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="03:00 PM">3:00 PM</option>
                      <option value="04:00 PM">4:00 PM</option>
                      <option value="05:00 PM">5:00 PM</option>
                      <option value="06:00 PM">6:00 PM</option>
                      <option value="07:00 PM">7:00 PM</option>
                      <option value="08:00 PM">8:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="service" className="block text-xs font-bold text-gray-700 mb-1">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 bg-white"
                  >
                    <option value="">Select service</option>
                    <option value="Pediatric Dentistry">Pediatric Dentistry (Dr. Prem)</option>
                    <option value="Root Canal (RCT)">Microscopic RCT (Dr. Prem)</option>
                    <option value="Dental Crowns">Crowns (Dr. Roshini)</option>
                    <option value="Dental Implants">Dental Implants (Dr. Roshini)</option>
                    <option value="Smile Design">Smile Design</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Braces">Braces/Aligners</option>
                    <option value="Emergency">Emergency / Pain</option>
                    <option value="Consultation">General Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
                >
                  {loading ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                </button>
              </form>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white p-5 rounded-xl shadow-lg">
                  <h2 className="font-bold mb-3 text-lg">Visit Us</h2>
                  <p className="text-sm mb-1">{SITE.address.street}</p>
                  <p className="text-sm mb-1">
                    {SITE.address.locality}, {SITE.address.city} - {SITE.address.postalCode}
                  </p>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-white text-red-600 px-4 py-2 rounded-lg text-xs font-bold"
                  >
                    Get Directions
                  </a>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-lg border-2 border-red-100">
                  <h2 className="font-bold text-gray-900 mb-3">Clinic Hours</h2>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Mon–Sat:</strong> 10 AM – 9 PM
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Sunday:</strong> 10 AM – 6 PM
                  </p>
                  <a
                    href={`tel:${SITE.phones.primaryTel}`}
                    onClick={() => trackPhoneClick()}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg text-sm"
                  >
                    Call {SITE.phones.primary}
                  </a>
                  <a
                    href={whatsappBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick()}
                    className="inline-block ml-2 border border-green-600 text-green-700 font-bold px-4 py-2 rounded-lg text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <StickyCtas />
    </div>
  );
}
