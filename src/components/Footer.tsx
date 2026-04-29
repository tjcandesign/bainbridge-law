"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Footer() {
  const ringRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const ratio = Math.min(Math.max(y / max, 0), 1);
      if (ringRef.current) {
        ringRef.current.style.setProperty("--spin", `${ratio * 450}deg`);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo-spin">
            <img
              ref={ringRef}
              className="footer-logo-ring"
              src="/images/circle-ring-white.svg"
              alt=""
            />
          </div>
          <div className="footer-brand-name">Bainbridge Law</div>
          <p>
            Experienced counsel for commercial real estate. The way transactions
            ought to feel.
          </p>
        </div>

        <div className="footer-col">
          <h5>Explore</h5>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h5>Practice Areas</h5>
          <Link href="/services">Contract Negotiation</Link>
          <Link href="/services">Due Diligence</Link>
          <Link href="/services">Title &amp; Closing</Link>
          <Link href="/services">Entity Formation</Link>
        </div>

        <div className="footer-col">
          <h5>Office</h5>
          <p>
            123 Main Street
            <br />
            Lancaster, PA 17602
          </p>
          <p>
            (717) 000-0000
            <br />
            office@bainbridgelaw.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Bainbridge Law. All rights reserved.</div>
        <div className="footer-tagline">
          Commercial real estate counsel · Lancaster County, Pennsylvania
        </div>
      </div>
    </footer>
  );
}
