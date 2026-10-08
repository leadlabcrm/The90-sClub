/** Absolute origin for canonicals, sitemap, and JSON-LD. */
export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  if (process.env.VERCEL_ENV === "production") {
    const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
    if (productionHost) return `https://${productionHost}`;
  }

  if (process.env.VERCEL) {
    if (process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return "https://the90-s-club.vercel.app";
  }

  return "http://127.0.0.1:3847";
}
