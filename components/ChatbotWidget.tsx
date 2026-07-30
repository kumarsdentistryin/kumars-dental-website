'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackAppointmentClick, trackWhatsAppClick } from '@/lib/gtag';
import { SITE, whatsappBookingUrl } from '@/lib/site';

interface FAQ {
    question: string;
    answer: string;
    action?: {
        text: string;
        link: string;
    };
}

const faqs: FAQ[] = [
    {
        question: "What are your clinic hours?",
        answer: `We're open ${SITE.hours.weekdays}; ${SITE.hours.sunday}`,
    },
    {
        question: "Where are you located?",
        answer: SITE.address.full,
        action: {
            text: "Get Directions",
            link: SITE.mapsUrl,
        }
    },
    {
        question: "How do I book an appointment?",
        answer: "You can book via WhatsApp instantly or use our online form!",
        action: {
            text: "Book Now",
            link: "/appointments"
        }
    },
    {
        question: "Do you treat children?",
        answer: "Yes. Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry; formerly Associate Professor at Ramaiah) is the kids dentist at our Attur Main Road / Yelahanka New Town clinic—primary for Attur & Yelahanka, trusted across Bangalore for pediatric dentistry.",
    },
    {
        question: "What is microscopic RCT?",
        answer: "Dr. Prem Kumar R uses up to 25x magnification for precise root canal treatment at our Attur / Yelahanka New Town clinic—improved visualisation of fine canals.",
    },
    {
        question: "Who handles crowns and implants?",
        answer: "Dr. RV Roshini (MDS Prosthodontist) is our crowns, bridges, implants, and smile design authority for North Bangalore patients.",
    },
    {
        question: "What payment methods do you accept?",
        answer: `We accept ${SITE.paymentAccepted.join(", ")}.`,
    },
    {
        question: "Is parking available?",
        answer: "Yes, parking is available near our clinic.",
    }
];

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

    return (
        <>
            {/* Sit above mobile sticky CTA bar; clear of WhatsApp FAB on desktop */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-36 right-4 lg:bottom-24 lg:right-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform z-40 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-700"
                aria-label={isOpen ? "Close help chat" : "Open help chat"}
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    <span className="text-2xl" aria-hidden="true">✕</span>
                ) : (
                    <>
                        <span className="text-2xl" aria-hidden="true">💬</span>
                        <span className="hidden sm:inline font-semibold">Need Help?</span>
                    </>
                )}
            </button>

            {isOpen && (
                <div
                    className="fixed bottom-52 right-4 lg:bottom-40 lg:right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-40 flex flex-col max-h-[min(600px,calc(100vh-14rem))]"
                    role="dialog"
                    aria-label="Clinic help chat"
                >
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-2xl">
                        <h3 className="font-bold text-lg">How can we help?</h3>
                        <p className="text-sm opacity-90">Quick answers from Kumar&apos;s Dental</p>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {faqs.map((faq, index) => (
                            <div key={faq.question}>
                                <button
                                    type="button"
                                    onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                                    className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition flex items-start gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                                    aria-expanded={selectedFAQ === index}
                                    aria-controls={`faq-ans-${index}`}
                                >
                                    <span className="text-red-600 font-bold" aria-hidden="true">Q:</span>
                                    <span className="font-semibold text-gray-800 flex-1">{faq.question}</span>
                                    <span className="text-gray-400" aria-hidden="true">{selectedFAQ === index ? '−' : '+'}</span>
                                </button>

                                <div
                                    id={`faq-ans-${index}`}
                                    className={selectedFAQ === index ? "mt-2 ml-6 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600" : "hidden"}
                                >
                                        <p className="text-gray-700 mb-2">{faq.answer}</p>
                                        {faq.action && (
                                            <Link
                                                href={faq.action.link}
                                                target={faq.action.link.startsWith('http') ? '_blank' : undefined}
                                                rel={faq.action.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                onClick={() => {
                                                    if (faq.action?.link === '/appointments') {
                                                        trackAppointmentClick();
                                                    }
                                                }}
                                                className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
                                            >
                                                {faq.action.text}
                                            </Link>
                                        )}
                                    </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t p-4 bg-gray-50 rounded-b-2xl">
                        <p className="text-sm text-gray-600 mb-2">Still have questions?</p>
                        <a
                            href={whatsappBookingUrl("Hi! I have a question about dental services")}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackWhatsAppClick()}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-700"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
