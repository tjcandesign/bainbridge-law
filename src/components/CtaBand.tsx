import Button from "./Button";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <h2>Ready to discuss your matter.</h2>
      <p>
        Whether you are negotiating a purchase, structuring a new entity, or
        reviewing a contract, expect a thoughtful conversation and a clear
        next step.
      </p>
      <div className="cta-actions">
        <Button href="/contact" variant="primary">
          Schedule Consultation
        </Button>
        <Button href="/services" variant="secondary">
          Practice Areas
        </Button>
      </div>
    </section>
  );
}
