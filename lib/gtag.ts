// Google Analytics 4 tracking functions

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Page view tracking
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

// Event tracking
type GTagEvent = {
    action: string;
    category: string;
    label?: string;
    value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Specific event helpers
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
