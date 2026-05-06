import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bainbridge Law — a deliberate, attorney-led practice serving the District of Columbia and Maryland.",
};

const values = [
  {
    label: "Value 01",
    title: "Transparency",
    body:
      "We explain the reasoning behind every recommendation, surface risks before they become problems, and keep you informed throughout the matter.",
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
      "We begin by understanding your objectives, the parties involved, and the constraints that shape the matter — not by reaching for a template.",
  },
  {
    n: "02",
    title: "Advise",
    sub: "Counsel Grounded in Practice",
    body:
      "We give plain-spoken advice rooted in years of transactional practice. Where the law is settled, we tell you. Where it is not, we tell you that, too.",
  },
  {
    n: "03",
    title: "Execute",
    sub: "Closing With Care",
    body:
      "We draft, negotiate, and close with the same attention we would bring to our own deal — coordinating every detail so the matter lands cleanly.",
  },
];

export default function About() {
  return (
    <>
      <Hero
        compact
        tag="About The Firm"
        title="About Bainbridge Law"
        subtitle="A deliberate, attorney-led practice — built around the principle that careful counsel produces lasting work."
      />

      <section className="section">
        <div className="section-inner narrow">
          <span className="section-tag">The Practice</span>
          <h2>Counsel for the people who build, buy, and grow.</h2>
          <p className="lede">
            Bainbridge Law represents owners, investors, businesses, and
            individuals on the matters that move their work forward.
          </p>
          <p>
            The practice is grounded in the work, not the marketing. We take
            on the matters where careful drafting and steady judgment make a
            difference — and we bring the depth that comes from doing this for
            a long time. Clients come to us when a transaction matters, when
            the documents need to hold, and when they want counsel who will
            return the call.
          </p>
          <p>
            Curtis Bainbridge is licensed to practice law in the District of
            Columbia and Maryland.
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
