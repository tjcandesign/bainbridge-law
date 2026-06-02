import Link from "next/link";
import { sanityFetch } from "../sanity/lib/client";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "../sanity/lib/queries";

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
          <h5>Practice</h5>
          <Link href="/services">Real Estate</Link>
          <Link href="/services">Contracts</Link>
          <Link href="/services">Business Formation</Link>
        </div>

        <div className="footer-col">
          <h5>Firm</h5>
          <Link href="/about">About</Link>
          <Link href="/services">Practice Areas</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h5>Reach Us</h5>
          <p>
            District of Columbia
            <br />
            Maryland
          </p>
          <p>
            <a href={telHref}>{phone}</a>
            <br />
            <a href={mailHref}>{email}</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Bainbridge Law, PLLC.</div>
        <div className="disclaimer">{disclaimer}</div>
      </div>
    </footer>
  );
}
