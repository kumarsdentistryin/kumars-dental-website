'use client';

import { SITE } from '@/lib/site';

interface Review {
  name: string;
  location: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: 'Priya Sharma',
    location: 'Yelahanka New Town',
    treatment: 'Pediatric Dental Care',
    rating: 5,
    comment: 'Dr. Prem Kumar is phenomenal with young kids! My 5-year-old was terrified of dental visits, but his gentle approach and cartoon interaction made it painless.',
    date: '2 weeks ago',
  },
  {
    name: 'Rajesh Nambiar',
    location: 'Sahakar Nagar',
    treatment: 'Microscopic RCT',
    rating: 5,
    comment: 'Saved my tooth when another clinic recommended extraction. The 25x microscope gave Dr. Prem crystal-clear vision of a calcified canal. Truly single sitting and painless.',
    date: '1 month ago',
  },
  {
    name: 'Ananya Reddy',
    location: 'Jakkur',
    treatment: 'Invisalign & 3D Scan',
    rating: 5,
    comment: 'The iTero 3D scanner took 5 minutes to create a digital preview of my planned smile on screen. Comfortable, impression-free scanning without messy paste. Highly recommend Dr. Roshini!',
    date: '3 weeks ago',
  },
  {
    name: 'Karthik Rao',
    location: 'Vidyaranyapura',
    treatment: 'Zirconia Dental Crown',
    rating: 5,
    comment: 'Dr. RV Roshini planned my zirconia crowns with perfect shade matching and bite accuracy. Feels just like natural enamel. Top-notch clinic hygiene.',
    date: '1 month ago',
  },
  {
    name: 'Sneha Venkatesh',
    location: 'Attur Layout',
    treatment: 'Emergency Tooth Pain Relief',
    rating: 5,
    comment: 'Walked in on a Sunday evening with severe throbbing pain. They diagnosed the infection quickly with digital X-rays and provided instant relief. True lifesaver!',
    date: '2 weeks ago',
  },
  {
    name: 'Manjunath Gowda',
    location: 'Hebbal',
    treatment: 'Dental Implants',
    rating: 5,
    comment: 'Cleanest clinical environment in North Bangalore. Transparent cost breakdown, no hidden charges, and MDS prosthodontist care.',
    date: '2 months ago',
  },
];

export default function LiveReviewMarquee() {
  const repeatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-14 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <span>⭐ Verified Patient Trust</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Rated {SITE.rating.display} by 250+ Families Across Bangalore
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Real feedback from parents, professionals, and patients in Yelahanka, Attur, and North Bangalore.
        </p>
      </div>

      {/* Infinite scrolling marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 py-2">
          {repeatedReviews.map((rev, idx) => (
            <div
              key={`${rev.name}-${idx}`}
              className="w-80 sm:w-96 bg-slate-800 rounded-xl p-6 border border-slate-600 shadow-xl shrink-0 hover:border-amber-400 transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-amber-300 text-base font-bold">
                  {'★'.repeat(rev.rating)}
                </div>
                <span className="text-xs text-slate-300 font-medium">{rev.date}</span>
              </div>
              <p className="text-white font-medium text-sm sm:text-base leading-relaxed mb-4 italic">
                &ldquo;{rev.comment}&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white text-sm">{rev.name}</p>
                  <p className="text-slate-300 text-xs">{rev.location}</p>
                </div>
                <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-md text-xs shadow-xs">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
