import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-mark">
        <div className="footer-mark-name">Bainbridge</div>
        <div className="footer-mark-tag">Attorneys at Law</div>
      </div>

      <div className="footer-inner">
        <div className="footer-col">
          <h5>Practice</h5>
          <Link href="/services">Real Estate</Link>
          <Link href="/services">Contracts</Link>
          <Link href="/services">Title &amp; Closing</Link>
          <Link href="/services">Business Formation</Link>
        </div>

        <div className="footer-col">
          <h5>Firm</h5>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h5>Reach Us</h5>
          <p>
            Washington, DC
            <br />
            Maryland · Virginia
          </p>
          <p>
            (202) 555-0000
            <br />
            office@bainbridgelaw.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Bainbridge Law.</div>
        <div className="disclaimer">
          Attorney advertising. Prior results do not guarantee a similar
          outcome.
        </div>
      </div>
    </footer>
  );
}
