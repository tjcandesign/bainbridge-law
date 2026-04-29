import Hero from "../components/Hero";
import Button from "../components/Button";
import CtaBand from "../components/CtaBand";
import ProcessCards from "../components/ProcessCards";

export default function Home() {
  return (
    <>
      <Hero
        tag="Commercial Real Estate Law"
        title="Experienced counsel for complex<br/>commercial real estate transactions."
        subtitle="Serving clients in Lancaster County and across Pennsylvania with contract negotiation, due diligence, title review, and closing."
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
        <div className="section-inner">
          <div className="split">
            <div>
              <span className="section-tag">What We Do</span>
              <h2>A deliberate approach to commercial real estate law.</h2>
              <p>
                We operate with the understanding that our best work is a
                seamless transaction. Deals that close without surprise, terms
                that hold up under scrutiny, parties who feel informed at every
                step.
              </p>
              <p>
                We handle the details with care, treat people with respect, and
                let the quality of the work speak for itself.
              </p>
            </div>
            <aside>
              <div className="aim-card">
                <p className="pull-quote">
                  Our aim is the highest quality result for every transaction —
                  assuring that clients are informed, comfortable through the
                  process, and confident at closing.
                </p>
              </div>
            </aside>
          </div>
          <ProcessCards />
          <div style={{ marginTop: 48 }}>
            <Button href="/services" variant="outline" rounded dark>
              Discover our services
            </Button>
          </div>
        </div>
      </section>

      <section className="section-image">
        <div className="section-image-bg" />
        <div className="section-image-overlay" />
        <div className="section-inner narrow">
          <span className="section-tag">Our Approach</span>
          <h2>
            Our work is at its best when the transaction feels effortless to
            you.
          </h2>
          <p>
            Bainbridge Law brings the rigor of complex commercial practice to
            every matter — from a single lease review to a multi-property
            acquisition.
          </p>
          <div style={{ marginTop: 36 }}>
            <Button href="/about" variant="outline">
              Learn about the firm
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
