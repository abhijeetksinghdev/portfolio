// Career start = first professional role at Rakuten Symphony (October 20, 2021).
// Experience is computed live from this date so the site never goes stale.
export const CAREER_START = new Date(2021, 9, 20); // Month is 0-indexed.

export type ExperienceDuration = {
  years: number;
  months: number;
  totalMonths: number;
};

export function getExperienceDuration(
  referenceDate: Date = new Date()
): ExperienceDuration {
  let totalMonths =
    (referenceDate.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (referenceDate.getMonth() - CAREER_START.getMonth());
  if (referenceDate.getDate() < CAREER_START.getDate()) totalMonths -= 1;

  totalMonths = Math.max(totalMonths, 0);

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    totalMonths,
  };
}

export function formatExperienceDuration({
  years,
  months,
}: ExperienceDuration): string {
  const yearLabel = `${years} ${years === 1 ? "year" : "years"}`;
  if (months === 0) return yearLabel;

  return `${yearLabel} ${months} ${months === 1 ? "month" : "months"}`;
}

export function getExperienceLabel(referenceDate: Date = new Date()): string {
  return formatExperienceDuration(getExperienceDuration(referenceDate));
}
