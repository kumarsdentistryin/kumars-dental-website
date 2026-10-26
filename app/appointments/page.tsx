'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  const [submitted, setSubmitted] = useState(false);

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

    // Push appointment_submit event to dataLayer before opening WhatsApp
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'appointment_submit',
        service: formData.service,
      });
    }

    const message =
      `*New Appointment Request*%0A%0A` +
      `Name: ${encodeURIComponent(formData.name)}%0A` +
      `Phone: ${encodeURIComponent(formData.phone)}%0A` +
      `Date: ${encodeURIComponent(formData.date)}%0A` +
      `Time: ${encodeURIComponent(formData.time)}%0A` +
      `Service: ${encodeURIComponent(formData.service)}`;

    window.open(`https://wa.me/918197280019?text=${message}`, '_blank');
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white">
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
              {submitted ? (
                <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100 flex flex-col justify-center text-center">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Appointment Request Sent</h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    Thank you, we&apos;ll confirm your appointment shortly. For anything urgent, call{" "}
                    <a
                      href="tel:+918197280019"
                      onClick={() => trackPhoneClick()}
                      className="font-bold text-blue-600 hover:underline"
                    >
                      +91 81972 80019
                    </a>
                    .
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="tel:+918197280019"
                      onClick={() => trackPhoneClick()}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition"
                    >
                      Call +91 81972 80019
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          date: '',
                          time: '',
                          service: '',
                          company: '',
                        });
                      }}
                      className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg text-sm transition cursor-pointer"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              ) : (
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
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 cursor-pointer"
                  >
                    {loading ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                  </button>
                </form>
              )}

              <div className="space-y-4">
                <div className="bg-linear-to-br from-slate-800 to-blue-900 text-white p-5 rounded-xl shadow-lg">
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
                    <strong>Mon–Sat:</strong> 10:00 AM – 9:00 PM
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Sunday:</strong> 10:00 AM – 6:00 PM
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
    </div>
  );
}
