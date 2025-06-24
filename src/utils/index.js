/**
 * Format an ISO timestamp into a readable date string.
 * Example: "2025-06-20T10:30:00Z" → "June 20, 2025"
 */
export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}