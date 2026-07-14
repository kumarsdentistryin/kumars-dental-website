'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { trackAppointmentClick } from '@/lib/gtag';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/doctors/dr-prem-kumar', label: 'Pediatric Dentist' },
  { href: '/doctors/dr-rv-roshini', label: 'Crowns Specialist' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between" aria-label="Primary">
        <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded">
          <Image
            src="/website-images/kd-logo.jpg"
            alt="Kumar's Microscopic Dental Care logo"
            width={50}
            height={50}
            className="h-12 w-12 object-cover rounded"
          />
          <div className="leading-tight">
            <p className="font-bold text-red-700 text-lg sm:text-xl">Kumar&apos;s Microscopic Dental Care</p>
            <p className="text-xs sm:text-sm text-gray-600">Precision • Compassion • Trust</p>
          </div>
        </Link>

        <ul className="hidden xl:flex gap-4 items-center font-semibold text-gray-700 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-red-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/appointments"
              onClick={() => trackAppointmentClick()}
              className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
            >
              Book Now
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="xl:hidden text-gray-700 font-bold p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="xl:hidden bg-white px-6 py-6 border-t-2 border-gray-200 shadow-lg">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-gray-900 font-semibold text-lg hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/team" className="block text-gray-900 font-semibold" onClick={() => setIsOpen(false)}>
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="block text-gray-900 font-semibold" onClick={() => setIsOpen(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/search" className="block text-gray-900 font-semibold" onClick={() => setIsOpen(false)}>
                Search
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/appointments"
                onClick={() => {
                  trackAppointmentClick();
                  setIsOpen(false);
                }}
                className="block bg-red-600 text-white px-6 py-3 rounded-lg text-center font-bold text-lg hover:bg-red-700"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
