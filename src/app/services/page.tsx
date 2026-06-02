import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";
import { sanityFetch } from "../../sanity/lib/client";
import {
  PAGE_QUERY,
  PRACTICE_AREAS_QUERY,
  type PageContent,
  type PracticeArea,
} from "../../sanity/lib/queries";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Bainbridge Law represents clients in real estate, contracts, and business formation across Washington, DC and Maryland.",
};

const fallbackPractice: PracticeArea[] = [
  {
    _id: "fallback-1",
    title: "Real Estate",
    body:
      "Counsel for buyers, sellers, owners, and investors. Acquisitions, dispositions, financing, leases, and the agreements that surround them — drafted and reviewed with the rigor a real estate matter deserves.",
    order: 10,
  },
  {
    _id: "fallback-2",
    title: "Contracts",
    body:
      "Negotiating and drafting the documents that govern the relationship — purchase agreements, options, letters of intent, services contracts, and the full range of commercial agreements that determine how a deal performs.",
    order: 20,
  },
  {
    _id: "fallback-3",
    title: "Business Formation",
    body:
      "LLCs, partnerships, and operating agreements structured around how you actually intend to hold and operate the business. Counsel on entity choice, governance, and the documents that hold up when partners disagree.",
    order: 30,
  },
];

const reasons = [
  "Direct attorney involvement on every matter",
  "Plain-spoken counsel without legalese",
  "Clear fee arrangements before work begins",
  "Prompt response on calls and emails",
  "Licensed in the District of Columbia and Maryland",
  "Coordination with your lender, broker, and accountant",
];

export default async function Services() {
  const [page, practiceFromCms] = await Promise.all([
    sanityFetch<PageContent>({
      query: PAGE_QUERY,
      params: { slug: "practice" },
    }),
    sanityFetch<PracticeArea[]>({ query: PRACTICE_AREAS_QUERY }),
  ]);

  const eyebrow = page?.heroEyebrow ?? "Practice";
  const heading = page?.heroHeading ?? "Practice Areas";
  const subtitle =
    page?.heroSubtitle ??
    "Counsel for individuals and businesses on the matters that move their work forward — in the District of Columbia and Maryland.";

  const practice =
    practiceFromCms && practiceFromCms.length > 0
      ? practiceFromCms
      : fallbackPractice;

  return (
    <>
      <Hero compact tag={eyebrow} title={heading} subtitle={subtitle} />

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">What We Do</span>
          <h2>Three areas, practiced with depth.</h2>
          <p>
            We keep the practice deliberately narrow so that every matter
            receives the attention it deserves. Below are the areas in which
            we represent clients.
          </p>
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
          <span className="section-tag">Why Clients Choose Us</span>
          <h2>The way counsel ought to feel.</h2>
          <p>
            Clients return to Bainbridge Law because the work is careful and the
            communication is clear. The list below reflects what we hear most.
          </p>
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
