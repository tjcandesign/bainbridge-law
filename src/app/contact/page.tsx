import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";
import { sanityFetch } from "../../sanity/lib/client";
import {
  PAGE_QUERY,
  SITE_SETTINGS_QUERY,
  type PageContent,
  type SiteSettings,
} from "../../sanity/lib/queries";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bainbridge Law — licensed in the District of Columbia and Maryland. Call, email, or schedule a consultation.",
};

export default async function Contact() {
  const [page, settings] = await Promise.all([
    sanityFetch<PageContent>({
      query: PAGE_QUERY,
      params: { slug: "contact" },
    }),
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY }),
  ]);

  const eyebrow = page?.heroEyebrow ?? "Get In Touch";
  const heading = page?.heroHeading ?? "Contact Us";
  const subtitle =
    page?.heroSubtitle ??
    "Call, email, or schedule a meeting. We respond promptly, with complete answers, regardless of where the conversation starts.";

  const barAdmissions =
    settings?.barAdmissions ?? "District of Columbia\nMaryland";
  const phone = settings?.phone ?? "(202) 516-6855";
  const email = settings?.email ?? "office@bainbridge.law";
  const hours =
    settings?.hours ?? "Mon–Fri 9:00–5:00\nBy appointment otherwise";

  const telHref = `tel:+${phone.replace(/\D/g, "")}`;

  return (
    <>
      <Hero compact tag={eyebrow} title={heading} subtitle={subtitle} />

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
              <div className="label">Bar Admissions</div>
              <p className="value">
                {barAdmissions.split("\n").map((line, i, all) => (
                  <span key={i}>
                    {line}
                    {i < all.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <div className="contact-block">
              <div className="label">Phone</div>
              <p className="value">
                <a href={telHref}>{phone}</a>
              </p>
            </div>
            <div className="contact-block">
              <div className="label">Email</div>
              <p className="value">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <div className="contact-block">
              <div className="label">Hours</div>
              <p className="value">
                {hours.split("\n").map((line, i, all) => (
                  <span key={i}>
                    {line}
                    {i < all.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
