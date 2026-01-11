import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "About | Kumar's Microscopic Dental Care",
  description: "Learn about our clinic philosophy, technology, and the doctors behind Kumar's Microscopic Dental Care in Yelahanka.",
};

const highlights = [
  {
    title: "Microscopic Precision",
    desc: "25x magnification for root canals and complex cases to protect healthy tooth structure.",
    icon: "🔬",
  },
  {
    title: "Family-Centered Care",
    desc: "Gentle pediatric care, preventive dentistry, and comprehensive solutions for every age.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Advanced Technology",
    desc: "Digital X-rays, intraoral scanners, and microscope-assisted procedures for accuracy.",
    icon: "💡",
  },
  {
    title: "Comfort First",
    desc: "Pain-minimizing techniques, clear communication, and anxiety-sensitive approach.",
    icon: "😌",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kumar&apos;s Microscopic Dental Care</h1>
            <p className="text-lg opacity-95 mb-6">
              We combine advanced microscopic dentistry with compassionate care to deliver precise, painless, and predictable outcomes for families in Yelahanka.
            </p>
            <div className="space-y-3 text-white/90">
              <p>📍 No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore - 560064</p>
              <p>🕙 Mon-Sat: 10 AM – 9 PM · Sun: 10 AM – 6 PM</p>
              <p>☎️ +91 81972 80019</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link href="/appointments" className="bg-white text-red-700 font-bold px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition">
                Book an Appointment
              </Link>
              <a href="tel:+918197280019" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white/10 transition">
                Call the Clinic
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/website-images/dentists-treat-patients-teeth.jpg"
              alt="Clinic care"
              width={540}
              height={420}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Our Philosophy</h2>
            <p className="text-gray-700 text-lg">
              Every smile deserves precision and empathy. We focus on early diagnosis, minimally invasive treatments, and education so you understand every option before we begin.
            </p>
            <p className="text-gray-700 text-lg">
              From pediatric visits to full-mouth rehabilitation, we tailor plans to your comfort, timelines, and goals.
            </p>
            <Link href="/services" className="text-red-600 font-semibold hover:text-red-700">Explore our services →</Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="p-5 rounded-lg bg-gray-50 border border-gray-200">
                <p className="text-3xl mb-3">{item.icon}</p>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Visit, Step by Step</h2>
            <ol className="space-y-4 text-gray-700 list-decimal list-inside">
              <li><strong>Book</strong> your slot via WhatsApp or phone.</li>
              <li><strong>Consult</strong> with diagnosis, photos, and treatment plan.</li>
              <li><strong>Treat</strong> with microscope-assisted precision.</li>
              <li><strong>Follow-up</strong> to ensure healing and comfort.</li>
            </ol>
          </div>
          <div className="relative">
            <Image
              src="/website-images/rct-under-microscope.jpg"
              alt="Microscope dentistry"
              width={540}
              height={380}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Experience precise, gentle dentistry.</h2>
          <p className="text-lg mb-8 opacity-95">Book now and feel the difference of microscopic care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments" className="bg-white text-red-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Book Appointment
            </Link>
            <a href="tel:+918197280019" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Call +91 81972 80019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
