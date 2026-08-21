"use client";

import { useEffect, useState } from "react";
import { getExperienceLabel } from "@/lib/experience";

export default function ExperienceYears({
  className,
  suffix = "",
}: {
  className?: string;
  suffix?: string;
}) {
  // Calculate immediately instead of rendering a stale hardcoded fallback.
  const [label, setLabel] = useState(() => getExperienceLabel());

  useEffect(() => {
    const refresh = () => setLabel(getExperienceLabel());
    refresh();

    // Keep long-running tabs accurate when the date changes.
    const timer = window.setInterval(refresh, 24 * 60 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {label}
      {suffix}
    </span>
  );
}
