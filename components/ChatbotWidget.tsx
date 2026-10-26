'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { trackAppointmentClick, trackWhatsAppClick } from '@/lib/gtag';
import { SITE, whatsappBookingUrl } from '@/lib/site';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; action: () => void }[];
  actionLink?: { text: string; href: string };
  time: string;
}

const knowledgeBase = [
  {
    triggers: ['pediatric', 'kid', 'child', 'children', 'baby', 'cavity', 'milk tooth', 'toddler', 'school'],
    answer: "Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry, KSDC Regn 47094 A) is our dedicated kids specialist! He specializes in gentle, painless cavity care, pulpectomy (child root canals), fluoride protection, and sensory-friendly care for anxious kids and children with autism.",
    action: { text: "Book Pediatric Consult", href: whatsappBookingUrl("Hi Dr. Prem Kumar, I'd like to consult for pediatric dental care for my child.") },
  },
  {
    triggers: ['rct', 'root canal', 'microscope', 'microscopic', 'pain', 'toothache', 'nerve', 'single sitting'],
    answer: "Dr. Prem Kumar R performs root canals using up to 25x surgical microscope magnification. This allows visualization of fine, hidden, and calcified canals, saving teeth that others recommend extracting. We provide virtually painless single-sitting RCT.",
    action: { text: "Book Microscopic RCT", href: whatsappBookingUrl("Hi, I have tooth pain and would like to consult for microscopic RCT.") },
  },
  {
    triggers: ['invisalign', 'aligner', 'aligners', 'itero', 'scanner', '3d scan', 'straighten', 'braces', 'invisible'],
    answer: "We have the latest iTero® 3D Intraoral Scanner! In under 5 minutes, it captures a high-definition 3D digital model of your teeth with comfortable, impression-free scanning and displays a digital preview of your planned smile chairside.",
    action: { text: "Book 3D Aligner Scan", href: whatsappBookingUrl("Hi, I want to book an iTero 3D Scan and Invisalign consultation.") },
  },
  {
    triggers: ['crown', 'crowns', 'cap', 'zirconia', 'ceramic', 'implant', 'implants', 'bridge', 'roshini'],
    answer: "Dr. RV Roshini (MDS Prosthodontist & Crown Specialist) personally designs monolithic zirconia crowns, permanent dental implants, and smile makeovers with computer-matched shades and bite precision.",
    action: { text: "Consult Dr. RV Roshini", href: whatsappBookingUrl("Hi Dr. Roshini, I would like to consult for dental crowns/implants.") },
  },
  {
    triggers: ['cost', 'price', 'fee', 'charge', 'rate', 'how much'],
    answer: "Our pricing is transparent and conforms to Bangalore standards: Microscopic RCT starts from ~₹4,000; Zirconia crowns from ~₹7,000; Pediatric treatments from ~₹1,000; Clear aligners with structured monthly payment options. Exact fees are confirmed after direct clinical exam.",
    action: { text: "Get Cost Estimate on WhatsApp", href: whatsappBookingUrl("Hi, could you share the fee details for a dental procedure?") },
  },
  {
    triggers: ['hour', 'time', 'timing', 'open', 'sunday', 'weekend'],
    answer: `We are open 7 days a week! Monday–Saturday: 10:00 AM – 9:00 PM; Sunday: 10:00 AM – 6:00 PM. Evening slots available after work/school.`,
    action: { text: "Schedule Appointment Slot", href: "/appointments" },
  },
  {
    triggers: ['location', 'where', 'address', 'directions', 'yelahanka', 'attur', 'parking'],
    answer: `We are located at No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore 560064. Street and nearby parking is available.`,
    action: { text: "Open Google Maps", href: SITE.mapsUrl },
  },
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hello! Welcome to Kumar's Microscopic Dental Care. I'm your clinic AI assistant. How can we help your smile today?",
      time: 'Just now',
      options: [
        { label: '👶 Kids / Pediatric Care', action: () => handleQuickOption('Tell me about kids dentist Dr. Prem Kumar') },
        { label: '🔬 Microscopic Root Canal', action: () => handleQuickOption('Tell me about single sitting microscopic RCT') },
        { label: '✨ 3D iTero Invisalign Scan', action: () => handleQuickOption('Can I see my smile simulation before Invisalign?') },
        { label: '🦷 Crowns & Implants', action: () => handleQuickOption('Who handles dental crowns and implants?') },
        { label: '📍 Hours & Location', action: () => handleQuickOption('Where is the clinic and what are the hours?') },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // AI knowledge engine matching
    setTimeout(() => {
      const lower = query.toLowerCase();
      const matched = knowledgeBase.find((item) =>
        item.triggers.some((t) => lower.includes(t))
      );

      let botReply: Message;

      if (matched) {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: matched.answer,
          actionLink: matched.action,
          time: 'Just now',
        };
      } else {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "I want to ensure you get the most accurate medical guidance. Would you like to connect directly with Dr. Prem Kumar R or Dr. RV Roshini on WhatsApp?",
          actionLink: {
            text: "Chat with Specialists on WhatsApp",
            href: whatsappBookingUrl(`Hi, I have a specific dental query: "${query}"`),
          },
          time: 'Just now',
        };
      }

      setMessages((prev) => [...prev, botReply]);
    }, 450);
  };

  const handleQuickOption = (query: string) => {
    handleSend(query);
  };

  return (
    <>
      {/* High-Contrast Floating Action Dock */}
      <div className="fixed bottom-18 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
        {/* WhatsApp Direct Hook (Desktop only - mobile has sticky bottom bar) */}
        <a
          href={whatsappBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick()}
          className="hidden sm:flex bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3 rounded-full shadow-2xl items-center gap-2 text-sm transition-all duration-200 hover:scale-105 active:scale-95 border border-emerald-400/40 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="font-bold">WhatsApp</span>
        </a>

        {/* Real Smart Dental AI Chatbot Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-slate-900 hover:bg-black text-white font-bold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-sm transition-all duration-200 hover:scale-105 active:scale-95 border border-slate-700 cursor-pointer"
          aria-label={isOpen ? "Close clinic assistant" : "Open clinic assistant"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-base font-bold leading-none">✕ Close</span>
          ) : (
            <>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-white text-sm">Need Help?</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive AI Chatbot Window */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            className="fixed bottom-22 right-4 sm:right-6 w-[94vw] sm:w-105 max-w-105 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden h-135 max-h-[82vh] animate-scaleIn"
            role="dialog"
            aria-label="Dental Clinic AI Assistant"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-400 text-slate-950 font-extrabold flex items-center justify-center text-sm shadow">
                  KD
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Kumar&apos;s Dental AI Assistant</h3>
                  <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online · Dr. Prem &amp; Dr. Roshini Clinic
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white p-1.5 rounded-lg text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Conversation Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-xs font-medium'
                        : 'bg-white text-slate-800 border border-gray-200 rounded-bl-xs font-normal'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>

                    {/* Quick suggestion pills */}
                    {msg.options && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {msg.options.map((opt) => (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={opt.action}
                            className="bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 text-slate-700 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-gray-200 transition text-left cursor-pointer"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Action Callout */}
                    {msg.actionLink && (
                      <div className="mt-3 pt-2 border-t border-gray-100">
                        <Link
                          href={msg.actionLink.href}
                          target={msg.actionLink.href.startsWith('http') ? '_blank' : undefined}
                          rel={msg.actionLink.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={() => {
                            if (msg.actionLink?.href.includes('wa.me')) {
                              trackWhatsAppClick();
                            } else {
                              trackAppointmentClick();
                            }
                          }}
                          className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow-xs transition"
                        >
                          {msg.actionLink.text} →
                        </Link>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* User Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-gray-200 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about root canal, pediatric, 3D scan, prices..."
                className="flex-1 bg-gray-100 text-gray-900 text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition cursor-pointer shrink-0"
              >
                Send
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
