// Career start = first professional role on the resume (Rakuten Symphony, Oct 2021).
// Experience is computed live from this date so the site never goes stale.
export const CAREER_START = new Date(2021, 9, 1); // October 2021 (month is 0-indexed)

export function getYearsOfExperience(referenceDate: Date = new Date()): number {
  let months =
    (referenceDate.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (referenceDate.getMonth() - CAREER_START.getMonth());
  if (referenceDate.getDate() < CAREER_START.getDate()) months -= 1;
  return Math.max(months, 0) / 12;
}

export function formatYears(years: number): string {
  return `${years.toFixed(1)}+`;
}
