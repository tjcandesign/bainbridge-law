import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bainbridge Law provides full-service commercial real estate counsel: contract negotiation, due diligence, title review, closing, leases, and entity formation.",
};

const services = [
  {
    title: "Contract Negotiation & Drafting",
    body:
      "Purchase agreements, options, letters of intent, and amendments — drafted to reflect the deal you actually negotiated.",
  },
  {
    title: "Due Diligence",
    body:
      "Title, survey, zoning, environmental, and document review, organized so you can make decisions before the contingency period closes.",
  },
  {
    title: "Title Review & Insurance",
    body:
      "We examine the title history, resolve defects before closing, and coordinate insurance coverage that protects your interest.",
  },
  {
    title: "Closing & Settlement",
    body:
      "Coordination with lenders, title agents, and counterparties to bring the transaction to a clean, on-schedule close.",
  },
  {
    title: "Lease Review",
    body:
      "Commercial lease drafting and review for landlords and tenants — with a focus on the provisions that matter when something goes wrong.",
  },
  {
    title: "Entity Formation",
    body:
      "LLCs, partnerships, and operating agreements structured around how you actually intend to hold and operate the property.",
  },
];

const reasons = [
  "Direct attorney involvement on every matter",
  "Plain-spoken counsel without legalese",
  "Clear fee arrangements before work begins",
  "Prompt response on calls and emails",
  "Local knowledge of Lancaster County practice",
  "Coordination with your lender, broker, and accountant",
];

export default function Services() {
  return (
    <>
      <Hero
        compact
        tag="Services"
        title="Our Services"
        subtitle="Full-service commercial real estate counsel for buyers, sellers, landlords, tenants, and developers."
      />

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">What We Do</span>
          <h2>Built around the transaction.</h2>
          <p>
            Every engagement is organized around the closing or the contract
            in front of you. Our scope is focused, our deliverables are
            specific, and our advice is yours to act on.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
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
          <h2>The way commercial counsel ought to feel.</h2>
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
