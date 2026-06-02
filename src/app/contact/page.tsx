import type { Metadata } from "next";
import Hero from "../../components/Hero";
import CtaBand from "../../components/CtaBand";
import { sanityFetch } from "../../sanity/lib/client";
import {
  CONTACT_PAGE_QUERY,
  SITE_SETTINGS_QUERY,
  type ContactPage,
  type SiteSettings,
} from "../../sanity/lib/queries";
import { withLineBreaks } from "../../lib/text";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bainbridge Law, licensed in the District of Columbia and Maryland. Call, email, or schedule a consultation.",
};

export default async function Contact() {
  const [data, settings] = await Promise.all([
    sanityFetch<ContactPage>({ query: CONTACT_PAGE_QUERY }),
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY }),
  ]);

  const heroEyebrow = data?.hero?.eyebrow ?? "Get In Touch";
  const heroHeading = data?.hero?.heading ?? "Contact Us";
  const heroSubtitle =
    data?.hero?.subtitle ??
    "Call, email, or schedule a meeting. We respond promptly, with complete answers, regardless of where the conversation starts.";

  const sectionEyebrow = data?.sectionEyebrow ?? "How To Reach Us";
  const sectionHeading =
    data?.sectionHeading ?? "Quick, straightforward, always personable.";
  const sectionLede =
    data?.sectionLede ??
    "However you prefer to connect, we will meet you there — and we will not leave you waiting.";
  const sectionBody =
    data?.sectionBody ??
    "Whether you have a contract under review, a closing on the calendar, or a question about a matter you are considering, reach out and we will tell you what we know.";

  const labelBar = data?.labelBar ?? "Bar Admissions";
  const labelPhone = data?.labelPhone ?? "Phone";
  const labelEmail = data?.labelEmail ?? "Email";
  const labelHours = data?.labelHours ?? "Hours";

  const barAdmissions =
    settings?.barAdmissions ?? "District of Columbia\nMaryland";
  const phone = settings?.phone ?? "(202) 516-6855";
  const email = settings?.email ?? "office@bainbridge.law";
  const hours =
    settings?.hours ?? "Mon–Fri 9:00–5:00\nBy appointment";

  const telHref = `tel:+${phone.replace(/\D/g, "")}`;

  return (
    <>
      <Hero
        compact
        tag={heroEyebrow}
        title={heroHeading}
        subtitle={heroSubtitle}
      />

      <section className="section section-alt">
        <div className="section-inner">
          <span className="section-tag">{sectionEyebrow}</span>
          <h2>{sectionHeading}</h2>
          <p className="lede">{sectionLede}</p>
          <p>{sectionBody}</p>
          <div className="contact-info">
            <div className="contact-block">
              <div className="label">{labelBar}</div>
              <p className="value">{withLineBreaks(barAdmissions)}</p>
            </div>
            <div className="contact-block">
              <div className="label">{labelPhone}</div>
              <p className="value">
                <a href={telHref}>{phone}</a>
              </p>
            </div>
            <div className="contact-block">
              <div className="label">{labelEmail}</div>
              <p className="value">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <div className="contact-block">
              <div className="label">{labelHours}</div>
              <p className="value">{withLineBreaks(hours)}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
