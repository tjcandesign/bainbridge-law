import Hero from "../components/Hero";
import Button from "../components/Button";
import CtaBand from "../components/CtaBand";

const approach = [
  {
    numeral: "I.",
    title: "Listen",
    body:
      "We start by understanding the matter — the parties, the timing, and what success looks like for you. No templates, no assumptions.",
  },
  {
    numeral: "II.",
    title: "Examine",
    body:
      "Contracts, title, financing, leases — every document gets read with the same attention we would bring to our own deal.",
  },
  {
    numeral: "III.",
    title: "Resolve",
    body:
      "We negotiate, draft, and close — coordinating with every party so the transaction lands cleanly and on schedule.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        tag="Attorneys at Law"
        title="Experienced counsel for complex transactions."
        subtitle="Serving clients across Washington, DC, Maryland, and Virginia — from contract negotiation and due diligence to closing and beyond."
        actions={
          <>
            <Button href="/contact" variant="primary">
              Schedule Consultation
            </Button>
            <Button href="/services" variant="secondary">
              Our Services
            </Button>
          </>
        }
      />

      <section className="section section-alt feature">
        <div className="section-inner narrow">
          <span className="section-tag">What We Do</span>
          <h2>A deliberate approach to every transaction.</h2>
          <p>
            We operate with the understanding that our best work is a seamless
            transaction — deals that close without surprise, terms that hold
            up under scrutiny, parties who feel informed at every step.
          </p>
          <p>
            We handle the details with care, treat people with respect, and
            let the quality of the work speak for itself.
          </p>

          <div className="pull-quote-block">
            <p>
              Our aim is the highest quality result for every matter —
              assuring that clients are informed, comfortable through the
              process, and confident at the close.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">How We Work</span>
          <h2>Three steps, practiced with care.</h2>
          <div className="approach-list">
            {approach.map((a) => (
              <div className="approach-item" key={a.numeral}>
                <div className="approach-numeral">{a.numeral}</div>
                <div className="approach-body">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="image-split">
            <div>
              <span className="section-tag">Where We Come From</span>
              <h2>Roots in Lancaster County. Practice in the District.</h2>
              <p>
                The firm’s roots are in the farms and small towns of Lancaster
                County, Pennsylvania — and that background still shapes how we
                practice. Plainspoken, unhurried, attentive to the people on
                the other side of the table.
              </p>
              <p>
                Today the work is across the DMV, but the principle is the
                same: careful counsel, delivered the way it ought to be.
              </p>
              <div style={{ marginTop: 32 }}>
                <Button href="/about" variant="outline">
                  About the firm
                </Button>
              </div>
            </div>
            <div className="image-split-frame">
              <img
                src="/images/lancaster-countryside.jpg"
                alt="Lancaster County countryside"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
