// ============================================================
// utils/helpers.js
// Pure helper / formatting utilities used across the app
// ============================================================

/**
 * Returns true if the ISO date string is within the last 24 hours.
 * Used to show the "NEW" badge on files and notices.
 * @param {string} dateStr
 * @returns {boolean}
 */
export const isNew = (dateStr) => {
  return Date.now() - new Date(dateStr).getTime() < 86_400_000;
};

/**
 * Formats an ISO date string to "DD Mon YYYY" (Indian locale).
 * @param {string} dateStr
 * @returns {string}
 */
export const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

/**
 * Returns a human-readable relative time string.
 * e.g. "5m ago", "3h ago", "2d ago"
 * @param {string} dateStr
 * @returns {string}
 */
export const getTimeAgo = (dateStr) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  if (diff < 3_600_000)  return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return `${Math.floor(diff / 86_400_000)}d ago`;
};

/**
 * Derives a 2-letter avatar string from a full name.
 * e.g. "John Doe" → "JD"
 * @param {string} name
 * @returns {string}
 */
export const getAvatar = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

/**
 * Generates a random file size string between 0.5 and 10 MB.
 * Used as a placeholder when no real file is actually uploaded.
 * @returns {string}
 */
export const randomFileSize = () =>
  `${(Math.random() * 9.5 + 0.5).toFixed(1)} MB`;

/**
 * Returns the greeting word based on the current hour.
 * @returns {"morning"|"afternoon"|"evening"}
 */
export const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "morning";
  if (h < 18) return "afternoon";
  return "evening";
};
