import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-mark">
        <div className="footer-mark-name">
          <span style={{ color: "#FFFFFF" }}>Bainbridge</span>{" "}
          <span style={{ color: "var(--gold-soft)" }}>Law</span>
        </div>
        <div className="footer-mark-tag">Attorneys at Law</div>
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
            <a href="tel:+12025166855">(202) 516-6855</a>
            <br />
            <a href="mailto:office@bainbridge.law">office@bainbridge.law</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Bainbridge Law, PLLC.</div>
        <div className="disclaimer">
          Attorney advertising. Prior results do not guarantee a similar
          outcome.
        </div>
      </div>
    </footer>
  );
}
