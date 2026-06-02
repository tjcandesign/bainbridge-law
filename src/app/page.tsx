import Hero from "../components/Hero";
import Button from "../components/Button";
import CtaBand from "../components/CtaBand";
import { sanityFetch } from "../sanity/lib/client";
import { HOME_PAGE_QUERY, type HomePage } from "../sanity/lib/queries";
import { paragraphs } from "../lib/text";

const FALLBACK_STEPS = [
  { _key: "1", numeral: "I.", title: "Listen", body: "We start by understanding the matter. The parties, the timing, and what success looks like for you. No templates, no assumptions." },
  { _key: "2", numeral: "II.", title: "Examine", body: "Contracts, title, financing, leases. Every document gets read with the same attention we would bring to our own deal." },
  { _key: "3", numeral: "III.", title: "Resolve", body: "We negotiate, draft, and close, coordinating with every party so the matter lands cleanly and on schedule." },
];

export default async function Home() {
  const data = await sanityFetch<HomePage>({ query: HOME_PAGE_QUERY });

  const heroEyebrow = data?.hero?.eyebrow ?? "Attorney at Law";
  const heroHeading =
    data?.hero?.heading ?? "Experienced counsel for complex transactions.";
  const heroSubtitle =
    data?.hero?.subtitle ??
    "Our firm represents clients in Washington, DC and Maryland. From contract negotiation and due diligence to closing and beyond.";
  const heroPrimary = data?.heroPrimaryLabel ?? "Schedule Consultation";
  const heroSecondary = data?.heroSecondaryLabel ?? "Our Practice";

  const featureEyebrow = data?.featureEyebrow ?? "What We Do";
  const featureHeading =
    data?.featureHeading ?? "A deliberate approach to every matter.";
  const featureBody =
    data?.featureBody ??
    "We operate with the understanding that our best work is a seamless transaction. Deals that close without surprise, terms that hold up under scrutiny, parties who feel informed at every step.\n\nWe handle the details with care, treat people with respect, and let the quality of the work speak for itself.";
  const pullQuote =
    data?.pullQuote ??
    "Our aim is the highest quality result for every matter, assuring that clients are informed, comfortable through the process, and confident at the close.";

  const approachEyebrow = data?.approachEyebrow ?? "How We Work";
  const approachHeading =
    data?.approachHeading ?? "Three steps, practiced with care.";
  const steps =
    data?.approachSteps && data.approachSteps.length
      ? data.approachSteps
      : FALLBACK_STEPS;

  const editorialEyebrow = data?.editorialEyebrow ?? "Bainbridge Law";
  const editorialHeading =
    data?.editorialHeading ?? "Quiet counsel for the matters that need it most.";
  const editorialLede =
    data?.editorialLede ??
    "A small practice, intentionally so. Focused on the work, the documents, and the people on either side of the table. Licensed in the District of Columbia and Maryland.";
  const editorialPrimary = data?.editorialPrimaryLabel ?? "About the firm";
  const editorialSecondary = data?.editorialSecondaryLabel ?? "Practice areas";

  return (
    <>
      <Hero
        tag={heroEyebrow}
        title={heroHeading}
        subtitle={heroSubtitle}
        actions={
          <>
            <Button href="/contact" variant="primary">
              {heroPrimary}
            </Button>
            <Button href="/services" variant="secondary">
              {heroSecondary}
            </Button>
          </>
        }
      />

      <section className="section section-alt feature">
        <div className="section-inner narrow">
          <span className="section-tag">{featureEyebrow}</span>
          <h2>{featureHeading}</h2>
          {paragraphs(featureBody).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="pull-quote-block">
            <p>{pullQuote}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">{approachEyebrow}</span>
          <h2>{approachHeading}</h2>
          <div className="approach-list">
            {steps.map((s) => (
              <div className="approach-item" key={s._key}>
                <div className="approach-numeral">{s.numeral}</div>
                <div className="approach-body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner editorial-mark">
          <div className="editorial-rule" aria-hidden />
          <div className="editorial-eyebrow">{editorialEyebrow}</div>
          <h2 className="editorial-display">{editorialHeading}</h2>
          <p className="editorial-lede">{editorialLede}</p>
          <div className="editorial-actions">
            <Button href="/about" variant="outline">
              {editorialPrimary}
            </Button>
            <Button href="/services" variant="outline">
              {editorialSecondary}
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
