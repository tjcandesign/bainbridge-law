import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Bainbridge Law represents clients in real estate, contracts, and business formation across Washington, DC and Maryland.",
};

const practice = [
  {
    title: "Real Estate",
    body:
      "Counsel for buyers, sellers, owners, and investors. Acquisitions, dispositions, financing, leases, and the agreements that surround them — drafted and reviewed with the rigor a real estate matter deserves.",
  },
  {
    title: "Contracts",
    body:
      "Negotiating and drafting the documents that govern the relationship — purchase agreements, options, letters of intent, services contracts, and the full range of commercial agreements that determine how a deal performs.",
  },
  {
    title: "Business Formation",
    body:
      "LLCs, partnerships, and operating agreements structured around how you actually intend to hold and operate the business. Counsel on entity choice, governance, and the documents that hold up when partners disagree.",
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

export default function Services() {
  return (
    <>
      <Hero
        compact
        tag="Practice"
        title="Practice Areas"
        subtitle="Counsel for individuals and businesses on the matters that move their work forward — in the District of Columbia and Maryland."
      />

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
