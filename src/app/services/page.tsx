import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";
import { sanityFetch } from "../../sanity/lib/client";
import {
  PRACTICE_PAGE_QUERY,
  PRACTICE_AREAS_QUERY,
  type PracticePage,
  type PracticeArea,
} from "../../sanity/lib/queries";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Bainbridge Law represents clients in real estate, contracts, and business formation across Washington, DC and Maryland.",
};

const FALLBACK_PRACTICE: PracticeArea[] = [
  { _id: "f1", title: "Real Estate", body: "Counsel for buyers, sellers, owners, and investors. Acquisitions, dispositions, financing, leases, and the agreements that surround them, drafted and reviewed with the rigor a real estate matter deserves.", order: 10 },
  { _id: "f2", title: "Contracts", body: "Negotiating and drafting the documents that govern the relationship. Purchase agreements, options, letters of intent, services contracts, and the full range of commercial agreements that determine how a deal performs.", order: 20 },
  { _id: "f3", title: "Business Formation", body: "LLCs, partnerships, and operating agreements structured around how you actually intend to hold and operate the business. Counsel on entity choice, governance, and the documents that hold up when partners disagree.", order: 30 },
];

const FALLBACK_REASONS = [
  "Direct attorney involvement on every matter",
  "Plain-spoken counsel without legalese",
  "Clear fee arrangements before work begins",
  "Prompt response on calls and emails",
  "Licensed in the District of Columbia and Maryland",
  "Coordination with your lender, broker, and accountant",
];

export default async function Practice() {
  const [data, practiceFromCms] = await Promise.all([
    sanityFetch<PracticePage>({ query: PRACTICE_PAGE_QUERY }),
    sanityFetch<PracticeArea[]>({ query: PRACTICE_AREAS_QUERY }),
  ]);

  const heroEyebrow = data?.hero?.eyebrow ?? "Practice";
  const heroHeading = data?.hero?.heading ?? "Practice Areas";
  const heroSubtitle =
    data?.hero?.subtitle ??
    "Counsel for individuals and businesses on the matters that move their work forward, in the District of Columbia and Maryland.";

  const whatEyebrow = data?.whatWeDoEyebrow ?? "What We Do";
  const whatHeading =
    data?.whatWeDoHeading ?? "Three areas, practiced with depth.";
  const whatBody =
    data?.whatWeDoBody ??
    "We keep the practice deliberately narrow so that every matter receives the attention it deserves. Below are the areas in which we represent clients.";

  const practice =
    practiceFromCms && practiceFromCms.length
      ? practiceFromCms
      : FALLBACK_PRACTICE;

  const reasonsEyebrow = data?.reasonsEyebrow ?? "Why Clients Choose Us";
  const reasonsHeading =
    data?.reasonsHeading ?? "The way counsel ought to feel.";
  const reasonsBody =
    data?.reasonsBody ??
    "Clients return to Bainbridge Law because the work is careful and the communication is clear. The list below reflects what we hear most.";
  const reasons =
    data?.reasons && data.reasons.length ? data.reasons : FALLBACK_REASONS;

  return (
    <>
      <Hero
        compact
        tag={heroEyebrow}
        title={heroHeading}
        subtitle={heroSubtitle}
      />

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">{whatEyebrow}</span>
          <h2>{whatHeading}</h2>
          <p>{whatBody}</p>
          <div className="services-grid">
            {practice.map((s) => (
              <div className="service-card" key={s._id}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner narrow">
          <span className="section-tag">{reasonsEyebrow}</span>
          <h2>{reasonsHeading}</h2>
          <p>{reasonsBody}</p>
          <ul className="check-list">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
