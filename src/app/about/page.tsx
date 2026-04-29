import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bainbridge Law — a Lancaster County firm focused on commercial real estate counsel, with a deliberate, attorney-led approach to every transaction.",
};

const values = [
  {
    label: "Value 01",
    title: "Transparency",
    body:
      "We explain the reasoning behind every recommendation, surface risks before they become problems, and keep you informed throughout the transaction.",
  },
  {
    label: "Value 02",
    title: "Accessibility",
    body:
      "We respond promptly with complete, straightforward answers — by phone, email, or in person — so you can make informed decisions without delay.",
  },
];

const phases = [
  {
    n: "01",
    title: "Understand",
    sub: "Listening Before Advising",
    body:
      "We begin by understanding your objectives, the parties involved, and the constraints that shape the deal — not by reaching for a template.",
  },
  {
    n: "02",
    title: "Advise",
    sub: "Counsel Grounded in Practice",
    body:
      "We give plain-spoken advice rooted in years of commercial real estate practice. Where the law is settled, we tell you. Where it is not, we tell you that, too.",
  },
  {
    n: "03",
    title: "Execute",
    sub: "Closing With Care",
    body:
      "We draft, negotiate, and close with the same attention we would bring to our own deal — coordinating every detail so the transaction lands cleanly.",
  },
];

export default function About() {
  return (
    <>
      <Hero
        compact
        tag="About The Firm"
        title="About Bainbridge Law"
        subtitle="A Lancaster County firm focused on commercial real estate, built around the principle that careful counsel produces lasting transactions."
      />

      <section className="section">
        <div className="section-inner narrow">
          <span className="section-tag">Our Practice</span>
          <h2>Counsel for the people who build, buy, and lease.</h2>
          <p className="lede">
            Bainbridge Law represents owners, developers, investors, and
            businesses across Lancaster County and the surrounding region.
          </p>
          <p>
            Our practice is intentionally focused. We don’t take on every
            matter — we take on commercial real estate matters, and we bring
            the depth that focus allows. Clients come to us when a transaction
            matters, when the documents need to hold, and when they want
            counsel who will return the call.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <span className="section-tag">Our Values</span>
          <h2>Two principles, practiced daily.</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.label}>
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
          <span className="section-tag">Our Approach</span>
          <h2>From first call to final signature.</h2>
          {phases.map((p) => (
            <div className="step" key={p.n}>
              <div className="step-num">{p.n}</div>
              <div className="step-body">
                <h3>{p.title}</h3>
                <div className="step-subhead">{p.sub}</div>
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
