import Header from "./Header";
import { sanityFetch } from "../sanity/lib/client";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "../sanity/lib/queries";

/**
 * Server component wrapper that fetches the site settings and feeds the
 * (client) Header component the editable CTA label. Keeps Header itself a
 * lean client component for the mobile nav toggle.
 */
export default async function HeaderWithSettings() {
  const settings = await sanityFetch<SiteSettings>({
    query: SITE_SETTINGS_QUERY,
  });
  return <Header ctaLabel={settings?.headerCtaLabel ?? "Schedule Consultation"} />;
}
