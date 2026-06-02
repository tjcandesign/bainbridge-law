import Link from "next/link";
import { sanityFetch } from "../sanity/lib/client";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "../sanity/lib/queries";
import { withLineBreaks } from "../lib/text";

export default async function Footer() {
  const settings = await sanityFetch<SiteSettings>({
    query: SITE_SETTINGS_QUERY,
  });

  const phone = settings?.phone ?? "(202) 516-6855";
  const email = settings?.email ?? "office@bainbridge.law";
  const tagline = settings?.firmTagline ?? "Attorneys at Law";
  const disclaimer =
    settings?.footerDisclaimer ??
    "Attorney advertising. Prior results do not guarantee a similar outcome.";
  const copyrightSuffix = settings?.copyrightSuffix ?? "Bainbridge Law, PLLC.";
  const practiceHeading = settings?.footerPracticeHeading ?? "Practice";
  const practiceLinks = settings?.footerPracticeLinks ?? [
    "Real Estate",
    "Contracts",
    "Business Formation",
  ];
  const firmHeading = settings?.footerFirmHeading ?? "Firm";
  const reachUsHeading = settings?.footerReachUsHeading ?? "Reach Us";
  const serviceArea =
    settings?.footerServiceArea ?? "District of Columbia\nMaryland";

  const telHref = `tel:+${phone.replace(/\D/g, "")}`;
  const mailHref = `mailto:${email}`;

  return (
    <footer className="footer">
      <div className="footer-mark">
        <div className="footer-mark-name">
          <span style={{ color: "#FFFFFF" }}>Bainbridge</span>{" "}
          <span style={{ color: "var(--gold-soft)" }}>Law</span>
        </div>
        <div className="footer-mark-tag">{tagline}</div>
      </div>

      <div className="footer-inner">
        <div className="footer-col">
          <h5>{practiceHeading}</h5>
          {practiceLinks.map((label) => (
            <Link key={label} href="/services">
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h5>{firmHeading}</h5>
          <Link href="/about">About</Link>
          <Link href="/services">Practice Areas</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h5>{reachUsHeading}</h5>
          <p>{withLineBreaks(serviceArea)}</p>
          <p>
            <a href={telHref}>{phone}</a>
            <br />
            <a href={mailHref}>{email}</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} {copyrightSuffix}
        </div>
        <div className="disclaimer">{disclaimer}</div>
      </div>
    </footer>
  );
}
