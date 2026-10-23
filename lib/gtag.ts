// Google Analytics 4 & Google Ads gtag configuration
const rawGaId =
  process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA4_ID || '';

/** Empty when unset or a known placeholder — never emit fake measurement IDs */
export const GA_MEASUREMENT_ID =
  rawGaId && rawGaId !== 'G-XXXXXXXXXX' ? rawGaId : '';

export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-6975350563';

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
  if (typeof window !== 'undefined' && window.gtag) {
    if (GA_MEASUREMENT_ID) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};

export const trackAppointmentClick = () => {
  event({
    action: 'click',
    category: 'appointment',
    label: 'Book Appointment Button',
  });
  // Also push conversion event for Google Ads & GA4 imported goal
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ads_conversion_Submit_lead_form_1', {
      event_category: 'appointment',
      event_label: 'Book Appointment Click',
    });
  }
};

export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'contact',
    label: 'Phone Number Click',
  });
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call_click', {
      event_category: 'contact',
      event_label: 'Direct Call',
    });
  }
};

export const trackWhatsAppClick = () => {
  event({
    action: 'click',
    category: 'contact',
    label: 'WhatsApp Click',
  });
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_chat_click', {
      event_category: 'contact',
      event_label: 'WhatsApp Appointment Lead',
    });
    window.gtag('event', 'ads_conversion_Submit_lead_form_1', {
      event_category: 'lead',
      event_label: 'WhatsApp Booking Lead',
    });
  }
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
  // Fire both standard generate_lead and the exact Google Ads GA4 imported conversion action
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'form',
      event_label: formName,
    });
    window.gtag('event', 'ads_conversion_Submit_lead_form_1', {
      event_category: 'form',
      event_label: formName,
    });
  }
};

