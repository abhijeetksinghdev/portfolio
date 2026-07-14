"use client";

import { useEffect, useState } from "react";
import { getYearsOfExperience, formatYears } from "@/lib/experience";

export default function ExperienceYears({
  className,
  suffix = " years",
}: {
  className?: string;
  suffix?: string;
}) {
  // Fallback matches the figure stated on the resume at time of writing;
  // it's replaced the moment the browser can compute today's real value,
  // so the number stays accurate no matter when the page is visited.
  const [label, setLabel] = useState<string>("4.5+");

  useEffect(() => {
    setLabel(formatYears(getYearsOfExperience()));
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {label}
      {suffix}
    </span>
  );
}
