// =============================================================================
// DRAFT — Trusts & Estates practice area (NOT publicly routed)
// =============================================================================
// This file lives under `src/app/_drafts/`. The leading underscore makes it a
// private folder in the Next.js App Router — it is never matched by the
// router and will not appear in the production sitemap or build output.
//
// TODO: When Bainbridge Law is ready to add Trusts & Estates as a public
//       practice area:
//         1. Move this folder from `src/app/_drafts/trusts-estates/`
//            to `src/app/trusts-estates/`.
//         2. Add the link to:
//              - `src/components/Header.tsx` (`links` array)
//              - `src/components/Footer.tsx` (Practice column)
//              - `src/app/services/page.tsx` (add to `practice` array)
//         3. Confirm the copy below with Curtis before launch — the draft
//            language is a placeholder and should be reviewed for
//            accuracy and tone.
// =============================================================================

import type { Metadata } from "next";
import Hero from "../../../components/Hero";
import CtaBand from "../../../components/CtaBand";

export const metadata: Metadata = {
  title: "Trusts & Estates (Draft)",
  description:
    "Draft page — Trusts & Estates practice area for Bainbridge Law.",
  robots: { index: false, follow: false },
};

const offerings = [
  {
    title: "Estate Planning",
    body:
      "Wills, revocable trusts, powers of attorney, and advance directives — the core documents that establish how your wishes will be carried out.",
  },
  {
    title: "Trust Administration",
    body:
      "Counsel for trustees navigating administration, accountings, and distributions — with attention to the relationships behind the documents.",
  },
  {
    title: "Probate",
    body:
      "Representation of personal representatives and beneficiaries through the probate process in the District of Columbia and Maryland.",
  },
];

export default function TrustsEstatesDraft() {
  return (
    <>
      <Hero
        compact
        tag="Practice"
        title="Trusts &amp; Estates"
        subtitle="Quiet, careful counsel for the documents that outlive the conversation — wills, trusts, and the work of administration."
      />

      <section className="section">
        <div className="section-inner">
          <span className="section-tag">What We Do</span>
          <h2>Counsel that respects the moment.</h2>
          <p>
            Trusts and estates work is rarely about paperwork alone. We bring
            the same care to a will or trust that we bring to any other
            transaction — and we recognize that the documents need to hold up
            for the people who will rely on them.
          </p>
          <div className="services-grid">
            {offerings.map((o) => (
              <div className="service-card" key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
