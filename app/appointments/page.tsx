'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AppointmentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `🦷 *New Appointment Request*%0A%0A` +
      `👤 Name: ${formData.name}%0A` +
      `📞 Phone: ${formData.phone}%0A` +
      `📅 Date: ${formData.date}%0A` +
      `⏰ Time: ${formData.time}%0A` +
      `🔹 Service: ${formData.service}`;

    const whatsappNumber = '+918197280019';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block text-sm text-gray-600 hover:text-red-600 mb-3">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            📅 Book Your Appointment
          </h1>
          <p className="text-sm text-gray-600">
            Quick booking - we confirm via WhatsApp within 2 hours
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                  placeholder="9876543210"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Time *</label>
                <select
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
              <label className="block text-xs font-bold text-gray-700 mb-1">Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 bg-white"
              >
                <option value="">Select service</option>
                <option value="Root Canal (RCT)">Root Canal (Microscopic)</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Pediatric Dentistry">Pediatric Care</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Braces">Braces/Aligners</option>
                <option value="Consultation">General Consultation</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition text-sm"
            >
              {loading ? 'Sending...' : '✓ Send to Doctor via WhatsApp'}
            </button>
          </form>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white p-5 rounded-xl shadow-lg">
              <h3 className="font-bold mb-3 text-lg">📍 Visit Us</h3>
              <p className="text-sm mb-2"><strong>No.12, 1st Floor</strong></p>
              <p className="text-sm mb-2">Attur Main Road, Yelahanka New Town</p>
              <p className="text-sm mb-3">Bangalore - 560064</p>
              <a
                href="https://maps.google.com/?q=Kumar's+Microscopic+Dental+Care+Attur+Layout+Yelahanka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-red-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-100"
              >
                📍 Get Directions
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg border-2 border-red-100">
              <h3 className="font-bold text-gray-900 mb-3">⏰ Clinic Hours</h3>
              <p className="text-sm text-gray-700 mb-1"><strong>Mon-Sat:</strong> 10 AM - 9 PM</p>
              <p className="text-sm text-gray-700 mb-3"><strong>Sunday:</strong> 10 AM - 6 PM</p>
              <a
                href="tel:+918197280019"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg text-sm"
              >
                📞 Call +91 81972 80019
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
