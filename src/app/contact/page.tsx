import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bainbridge Law — serving Washington, DC, Maryland, and Virginia. Call, email, or schedule a consultation.",
};

export default function Contact() {
  return (
    <>
      <Hero
        compact
        tag="Get In Touch"
        title="Contact Us"
        subtitle="Call, email, or schedule a meeting. We respond promptly, with complete answers, regardless of where the conversation starts."
      />

      <section className="section section-alt">
        <div className="section-inner">
          <span className="section-tag">How To Reach Us</span>
          <h2>Quick, straightforward, always personable.</h2>
          <p className="lede">
            However you prefer to connect, we will meet you there — and we will
            not leave you waiting.
          </p>
          <p>
            Whether you have a contract under review, a closing on the
            calendar, or a question about a matter you are considering, reach
            out and we will tell you what we know.
          </p>
          <div className="contact-info">
            <div className="contact-block">
              <div className="label">Service Area</div>
              <p className="value">
                Washington, DC
                <br />
                Maryland · Virginia
              </p>
            </div>
            <div className="contact-block">
              <div className="label">Phone</div>
              <p className="value">
                <a href="tel:+12025550000">(202) 555-0000</a>
              </p>
            </div>
            <div className="contact-block">
              <div className="label">Email</div>
              <p className="value">
                <a href="mailto:office@bainbridgelaw.com">
                  office@bainbridgelaw.com
                </a>
              </p>
            </div>
            <div className="contact-block">
              <div className="label">Hours</div>
              <p className="value">
                Mon–Fri 9:00–5:00
                <br />
                By appointment otherwise
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
