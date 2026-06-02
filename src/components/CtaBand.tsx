import Button from "./Button";
import { sanityFetch } from "../sanity/lib/client";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "../sanity/lib/queries";

export default async function CtaBand() {
  const settings = await sanityFetch<SiteSettings>({
    query: SITE_SETTINGS_QUERY,
  });

  const heading = settings?.ctaHeading ?? "Ready to discuss your matter.";
  const subtitle =
    settings?.ctaSubtitle ??
    "Whether you are negotiating a purchase, structuring a new entity, or reviewing a contract, expect a thoughtful conversation and a clear next step.";

  return (
    <section className="cta-band">
      <h2>{heading}</h2>
      <p>{subtitle}</p>
      <div className="cta-actions">
        <Button href="/contact" variant="primary">
          Schedule Consultation
        </Button>
        <Button href="/services" variant="secondary">
          Practice Areas
        </Button>
      </div>
    </section>
  );
}
