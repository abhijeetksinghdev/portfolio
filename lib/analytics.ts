export const ANALYTICS_CONSENT_STORAGE_KEY = "aks-analytics-consent";
export const ANALYTICS_PREFERENCES_EVENT = "aks:analytics-preferences";

export type AnalyticsConsent = "granted" | "denied";

type AnalyticsParameters = Record<
  string,
  string | number | boolean | null | undefined
>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function hasAnalyticsConsent() {
  try {
    return localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY) === "granted";
  } catch {
    return false;
  }
}

export function trackEvent(
  eventName: string,
  parameters: AnalyticsParameters = {}
) {
  if (
    typeof window === "undefined" ||
    !hasAnalyticsConsent() ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", eventName, parameters);
}
