/**
 * Lightweight analytics helper — fires GA4 and Meta Pixel events
 * when their global objects exist, otherwise silently no-ops.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  // GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }
}

/** Pre-defined conversion events */
export const analytics = {
  ctaClick: (label: string) => trackEvent("cta_click", { label }),
  formStart: (formType: string) => trackEvent("form_started", { form_type: formType }),
  formSubmit: (formType: string) => trackEvent("form_submit", { form_type: formType }),
  lead: (formType: string) => {
    trackEvent("generate_lead", { form_type: formType });
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: formType });
    }
  },
};
