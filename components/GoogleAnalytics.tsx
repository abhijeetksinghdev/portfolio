"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  ANALYTICS_PREFERENCES_EVENT,
  type AnalyticsConsent,
} from "@/lib/analytics";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [preferencesReady, setPreferencesReady] = useState(false);

  useEffect(() => {
    if (!measurementId) return;

    try {
      const savedConsent = localStorage.getItem(
        ANALYTICS_CONSENT_STORAGE_KEY
      );

      if (savedConsent === "granted" || savedConsent === "denied") {
        setConsent(savedConsent);
      } else {
        setPreferencesOpen(true);
      }
    } catch {
      setPreferencesOpen(true);
    }

    setPreferencesReady(true);

    const openPreferences = () => setPreferencesOpen(true);
    window.addEventListener(ANALYTICS_PREFERENCES_EVENT, openPreferences);

    return () =>
      window.removeEventListener(ANALYTICS_PREFERENCES_EVENT, openPreferences);
  }, []);

  const saveConsent = (nextConsent: AnalyticsConsent) => {
    try {
      localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, nextConsent);
    } catch {
      // The current page can still honour the choice when storage is unavailable.
    }

    setConsent(nextConsent);
    setPreferencesOpen(false);

    const analyticsWindow = window as unknown as Record<string, boolean>;
    analyticsWindow[`ga-disable-${measurementId}`] = nextConsent === "denied";

    if (nextConsent === "granted" && typeof window.gtag === "function") {
      window.gtag("config", measurementId, {
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
    }
  };

  if (!measurementId) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window['ga-disable-${measurementId}'] = false;
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(measurementId)}, {
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {preferencesReady && preferencesOpen && (
        <aside
          role="dialog"
          aria-labelledby="analytics-preferences-title"
          aria-describedby="analytics-preferences-description"
          className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-2xl rounded-2xl border border-[var(--line-strong)] bg-[var(--nav-bg)] p-4 shadow-card backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p
                id="analytics-preferences-title"
                className="font-display text-sm font-semibold text-offwhite"
              >
                Portfolio analytics
              </p>
              <p
                id="analytics-preferences-description"
                className="mt-1 text-xs leading-relaxed text-mist"
              >
                Allow basic visit and button-click measurement. Advertising
                features are disabled, and no names or email addresses are
                collected.
              </p>
            </div>
            <div className="grid shrink-0 grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => saveConsent("denied")}
                className="min-h-10 rounded-full border border-[var(--line-strong)] px-4 font-mono text-[10px] font-bold uppercase tracking-wider text-mist transition-colors hover:border-indigo-400/50 hover:text-offwhite"
              >
                Not now
              </button>
              <button
                type="button"
                onClick={() => saveConsent("granted")}
                className="min-h-10 rounded-full bg-gradient-to-r from-indigo-500 via-violet to-cyan px-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A0B0F]"
              >
                Allow
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
