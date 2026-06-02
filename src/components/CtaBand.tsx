import Button from "./Button";
import { sanityFetch } from "../sanity/lib/client";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "../sanity/lib/queries";

export default async function CtaBand() {
  const settings = await sanityFetch<SiteSettings>({
    query: SITE_SETTINGS_QUERY,
  });

  return (
    <section className="cta-band">
      <h2>{settings?.ctaHeading ?? "Ready to discuss your matter."}</h2>
      <p>
        {settings?.ctaSubtitle ??
          "Whether you are negotiating a purchase, structuring a new entity, or reviewing a contract, expect a thoughtful conversation and a clear next step."}
      </p>
      <div className="cta-actions">
        <Button href="/contact" variant="primary">
          {settings?.ctaPrimaryLabel ?? "Schedule Consultation"}
        </Button>
        <Button href="/services" variant="secondary">
          {settings?.ctaSecondaryLabel ?? "Practice Areas"}
        </Button>
      </div>
    </section>
  );
}
