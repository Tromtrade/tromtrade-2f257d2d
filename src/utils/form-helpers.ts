/** Rate-limiting for form submissions (client-side, per-session). */
const submissionTimestamps: number[] = [];
const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes

export function isRateLimited(): boolean {
  const now = Date.now();
  // Prune old entries
  while (submissionTimestamps.length > 0 && now - submissionTimestamps[0] > WINDOW_MS) {
    submissionTimestamps.shift();
  }
  if (submissionTimestamps.length >= MAX_SUBMISSIONS) return true;
  submissionTimestamps.push(now);
  return false;
}

/** Returns UTM params from current URL. */
export function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || null,
    utm_medium: params.get("utm_medium") || null,
    utm_campaign: params.get("utm_campaign") || null,
  };
}

/** Phone number validation (Estonian format). */
export function isValidEstonianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return /^(\+372)?[3-9]\d{6,7}$/.test(cleaned);
}
