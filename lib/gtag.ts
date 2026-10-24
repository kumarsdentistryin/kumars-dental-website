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
  if (typeof window !== 'undefined') {
    // 1. Send via gtag if available
    if (window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
    // 2. Also push standard GTM custom event to window.dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackAppointmentClick = () => {
  event({
    action: 'appointment_click',
    category: 'appointment',
    label: 'Book Appointment Button',
  });
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', 'ads_conversion_Submit_lead_form_1', {
        event_category: 'appointment',
        event_label: 'Book Appointment Click',
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'ads_conversion_Submit_lead_form_1',
      conversion_type: 'appointment_click',
    });
  }
};

export const trackPhoneClick = () => {
  event({
    action: 'phone_call_click',
    category: 'contact',
    label: 'Phone Number Click',
  });
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'phone_call_click',
      contact_method: 'phone',
    });
  }
};

export const trackWhatsAppClick = () => {
  event({
    action: 'whatsapp_chat_click',
    category: 'contact',
    label: 'WhatsApp Click',
  });
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_chat_click', {
        event_category: 'contact',
        event_label: 'WhatsApp Appointment Lead',
      });
      window.gtag('event', 'ads_conversion_Submit_lead_form_1', {
        event_category: 'lead',
        event_label: 'WhatsApp Booking Lead',
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_chat_click',
      event_category: 'lead',
      conversion_type: 'whatsapp',
    });
    window.dataLayer.push({
      event: 'ads_conversion_Submit_lead_form_1',
      conversion_type: 'whatsapp_lead',
    });
  }
};

export const trackBlogView = (title: string) => {
  event({
    action: 'blog_view',
    category: 'blog',
    label: title,
  });
};

export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submission',
    category: 'form',
    label: formName,
  });
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'form',
        event_label: formName,
      });
      window.gtag('event', 'ads_conversion_Submit_lead_form_1', {
        event_category: 'form',
        event_label: formName,
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'generate_lead',
      form_name: formName,
    });
    window.dataLayer.push({
      event: 'ads_conversion_Submit_lead_form_1',
      form_name: formName,
    });
  }
};

