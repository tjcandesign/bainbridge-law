import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";
import { sanityFetch } from "../../sanity/lib/client";
import { ABOUT_PAGE_QUERY, type AboutPage } from "../../sanity/lib/queries";
import { paragraphs } from "../../lib/text";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bainbridge Law — a deliberate practice serving the District of Columbia and Maryland.",
};

const FALLBACK_VALUES = [
  { _key: "1", label: "Value 01", title: "Transparency", body: "We explain the reasoning behind every recommendation, surface risks before they become problems, and keep you informed throughout the matter." },
  { _key: "2", label: "Value 02", title: "Accessibility", body: "We respond promptly with complete, straightforward answers, whether by phone, email, or in person, so you can make informed decisions without delay." },
];

const FALLBACK_PHASES = [
  { _key: "1", number: "01", title: "Understand", subhead: "Listening Before Advising", body: "We begin by understanding your objectives, the parties involved, and the constraints that shape the matter — not by reaching for a template." },
  { _key: "2", number: "02", title: "Advise", subhead: "Counsel Grounded in Practice", body: "We give plain-spoken advice rooted in years of transactional practice. Where the law is settled, we tell you. Where it is not, we tell you that, too." },
  { _key: "3", number: "03", title: "Execute", subhead: "Closing With Care", body: "We draft, negotiate, and close with the same attention we would bring to our own deal — coordinating every detail so the matter lands cleanly." },
];

export default async function About() {
  const data = await sanityFetch<AboutPage>({ query: ABOUT_PAGE_QUERY });

  const heroEyebrow = data?.hero?.eyebrow ?? "About The Firm";
  const heroHeading = data?.hero?.heading ?? "About Bainbridge Law";
  const heroSubtitle =
    data?.hero?.subtitle ??
    "A deliberate practice — built around the principle that careful counsel produces lasting work.";

  const practiceEyebrow = data?.practiceEyebrow ?? "The Practice";
  const practiceHeading =
    data?.practiceHeading ?? "Counsel for the people who build, buy, and grow.";
  const practiceLede =
    data?.practiceLede ??
    "Bainbridge Law represents owners, investors, businesses, and individuals on the matters that move their work forward.";
  const practiceBody =
    data?.practiceBody ??
    "The practice is grounded in the work, not the marketing. We take on the matters where careful drafting and steady judgment make a difference — and we bring the depth that comes from doing this for a long time. Clients come to us when a transaction matters, when the documents need to hold, and when they want counsel who will return the call.\n\nOur firm represents clients in the District of Columbia and Maryland.";

  const valuesEyebrow = data?.valuesEyebrow ?? "Our Values";
  const valuesHeading =
    data?.valuesHeading ?? "Two principles, practiced daily.";
  const values =
    data?.values && data.values.length ? data.values : FALLBACK_VALUES;

  const approachEyebrow = data?.approachEyebrow ?? "Our Approach";
  const approachHeading =
    data?.approachHeading ?? "From first call to final signature.";
  const phases =
    data?.phases && data.phases.length ? data.phases : FALLBACK_PHASES;

  return (
    <>
      <Hero
        compact
        tag={heroEyebrow}
        title={heroHeading}
        subtitle={heroSubtitle}
      />

      <section className="section">
        <div className="section-inner narrow">
          <span className="section-tag">{practiceEyebrow}</span>
          <h2>{practiceHeading}</h2>
          <p className="lede">{practiceLede}</p>
          {paragraphs(practiceBody).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <span className="section-tag">{valuesEyebrow}</span>
          <h2>{valuesHeading}</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v._key}>
                <div className="value-label">{v.label}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">{approachEyebrow}</span>
          <h2>{approachHeading}</h2>
          {phases.map((p) => (
            <div className="step" key={p._key}>
              <div className="step-num">{p.number}</div>
              <div className="step-body">
                <h3>{p.title}</h3>
                {p.subhead && (
                  <div className="step-subhead">{p.subhead}</div>
                )}
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
