'use client';

import { useState } from 'react';
import Link from 'next/link';

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
        answer: "We're open Mon-Sat: 10 AM - 9 PM, Sunday: 10 AM - 6 PM",
    },
    {
        question: "Where are you located?",
        answer: "No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore - 560064",
        action: {
            text: "Get Directions",
            link: "https://maps.google.com/?q=Kumar's+Microscopic+Dental+Care+Attur+Layout+Yelahanka"
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
        answer: "Yes! Dr. Prem Kumar specializes in pediatric dentistry. We make dental visits fun for kids!",
    },
    {
        question: "What is microscopic RCT?",
        answer: "We use 25x magnification for precise, painless root canal treatment with better success rates.",
    },
    {
        question: "Do you provide dental implants?",
        answer: "Yes, Dr. Roshini is our implant specialist. We offer permanent tooth replacement solutions.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept Cash, UPI, Credit/Debit Cards, PhonePe, and Google Pay.",
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
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2"
                aria-label="Chat with us"
            >
                {isOpen ? (
                    <span className="text-2xl">✕</span>
                ) : (
                    <>
                        <span className="text-2xl">💬</span>
                        <span className="hidden sm:inline font-semibold">Need Help?</span>
                    </>
                )}
            </button>

            {/* Chat Widget */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-2xl">
                        <h3 className="font-bold text-lg">👋 How can we help?</h3>
                        <p className="text-sm opacity-90">Ask us anything!</p>
                    </div>

                    {/* FAQ List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                                    className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition flex items-start gap-2"
                                >
                                    <span className="text-red-600 font-bold">Q:</span>
                                    <span className="font-semibold text-gray-800 flex-1">{faq.question}</span>
                                    <span className="text-gray-400">{selectedFAQ === index ? '−' : '+'}</span>
                                </button>

                                {selectedFAQ === index && (
                                    <div className="mt-2 ml-6 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                                        <p className="text-gray-700 mb-2">{faq.answer}</p>
                                        {faq.action && (
                                            <Link
                                                href={faq.action.link}
                                                target={faq.action.link.startsWith('http') ? '_blank' : '_self'}
                                                className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
                                            >
                                                {faq.action.text} →
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Footer with WhatsApp */}
                    <div className="border-t p-4 bg-gray-50 rounded-b-2xl">
                        <p className="text-sm text-gray-600 mb-2">Still have questions?</p>
                        <a
                            href="https://wa.me/918197280019?text=Hi!%20I%20have%20a%20question%20about%20dental%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
                        >
                            <span className="text-xl">📱</span>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
