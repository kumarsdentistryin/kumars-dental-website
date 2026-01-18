'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BookingPopup() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Check if popup was already shown in the last 24 hours
        const lastShown = localStorage.getItem('bookingPopupLastShown');
        const now = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (!lastShown || now - parseInt(lastShown) > twentyFourHours) {
            // Show popup after 3 seconds
            const timer = setTimeout(() => {
                setShowPopup(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setShowPopup(false);
        localStorage.setItem('bookingPopupLastShown', new Date().getTime().toString());
    };

    const handleBookNow = () => {
        localStorage.setItem('bookingPopupLastShown', new Date().getTime().toString());
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scaleIn">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    aria-label="Close popup"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="text-center">
                    <div className="mb-4">
                        <span className="text-6xl">🦷</span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Book Your Dental Appointment
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Get expert dental care with advanced microscopic technology. Same-day appointments available!
                    </p>

                    <div className="space-y-3">
                        <Link
                            href="/appointments"
                            onClick={handleBookNow}
                            className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition transform hover:scale-105"
                        >
                            📅 Book Now
                        </Link>

                        <button
                            onClick={handleClose}
                            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition"
                        >
                            Continue Browsing
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                        📞 Call us: +91 81972 80019
                    </p>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
