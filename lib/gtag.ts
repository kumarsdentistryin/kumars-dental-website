// Google Analytics 4 — NEXT_PUBLIC_GA_ID primary; NEXT_PUBLIC_GA4_ID accepted as alias

const rawGaId =
  process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA4_ID || '';

/** Empty when unset or a known placeholder — never emit fake measurement IDs */
export const GA_MEASUREMENT_ID =
  rawGaId && rawGaId !== 'G-XXXXXXXXXX' ? rawGaId : '';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackAppointmentClick = () => {
  event({
    action: 'click',
    category: 'appointment',
    label: 'Book Appointment Button',
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'contact',
    label: 'Phone Number Click',
  });
};

export const trackWhatsAppClick = () => {
  event({
    action: 'click',
    category: 'contact',
    label: 'WhatsApp Click',
  });
};

export const trackBlogView = (title: string) => {
  event({
    action: 'view',
    category: 'blog',
    label: title,
  });
};

export const trackFormSubmission = (formName: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  });
};
