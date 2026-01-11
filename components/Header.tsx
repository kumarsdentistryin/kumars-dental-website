'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/website-images/kd-logo.jpg"
            alt="Kumar's Dental Logo"
            width={50}
            height={50}
            className="h-12 w-12 object-cover rounded"
            priority
          />
          <div className="leading-tight">
            <p className="font-bold text-red-700 text-xl">Kumar's Microscopic Dental Care</p>
            <p className="text-sm text-gray-600">Precision • Compassion • Trust</p>
          </div>
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 items-center font-semibold text-gray-700">
          <li><Link href="/" className="hover:text-red-600 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-red-600 transition">About</Link></li>
          <li><Link href="/services" className="hover:text-red-600 transition">Services</Link></li>
          <li><Link href="/team" className="hover:text-red-600 transition">Our Team</Link></li>
          <li><Link href="/blog" className="hover:text-red-600 transition">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-red-600 transition">Contact</Link></li>
          <li><Link href="/privacy" className="hover:text-red-600 transition text-sm">Privacy</Link></li>
          <li>
            <Link
              href="/appointments"
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition font-bold"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-6 border-t-2 border-gray-200 shadow-lg">
          <ul className="space-y-4">
            <li><Link href="/" className="block text-gray-900 font-semibold text-lg hover:text-red-600 transition">Home</Link></li>
            <li><Link href="/about" className="block text-gray-900 font-semibold text-lg hover:text-red-600 transition">About</Link></li>
            <li><Link href="/services" className="block text-gray-900 font-semibold text-lg hover:text-red-600 transition">Services</Link></li>
            <li><Link href="/team" className="block text-gray-900 font-semibold text-lg hover:text-red-600 transition">Our Team</Link></li>
            <li><Link href="/blog" className="block text-gray-900 font-semibold text-lg hover:text-red-600 transition">Blog</Link></li>
            <li><Link href="/contact" className="block text-gray-900 font-semibold text-lg hover:text-red-600 transition">Contact</Link></li>
            <li><Link href="/privacy" className="block text-gray-900 font-semibold text-lg hover:text-red-600 transition">Privacy</Link></li>
            <li className="pt-2">
              <Link
                href="/appointments"
                className="block bg-red-600 text-white px-6 py-3 rounded-lg text-center font-bold text-lg hover:bg-red-700 transition"
              >
                📅 Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
