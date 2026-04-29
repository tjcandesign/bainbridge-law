"use client";

import { useEffect, useRef, useState, Fragment } from "react";

const steps = [
  {
    label: "First Step",
    title: "Negotiate",
    body:
      "We work with you to shape terms that protect your interests and reflect the realities of the deal.",
  },
  {
    label: "Second Step",
    title: "Review",
    body:
      "Title, survey, leases, contracts, financing — we examine every document so nothing is left to assumption.",
  },
  {
    label: "Third Step",
    title: "Close",
    body:
      "We coordinate with lenders, title companies, and counterparties to bring the transaction to a clean close.",
  },
];

function ArrowRight() {
  return (
    <svg
      width="44"
      height="20"
      viewBox="0 0 44 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" y1="10" x2="40" y2="10" />
      <polyline points="32,3 40,10 32,17" />
    </svg>
  );
}

export default function ProcessCards() {
  const [active, setActive] = useState<boolean[]>([false, false]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive([true, true]);
      return;
    }
    const onScroll = () => {
      const cards = ref.current?.querySelectorAll(".process-mini-card") || [];
      const trigger = window.innerHeight * 0.72;
      const next = [false, false];
      cards.forEach((card, i) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        if (i > 0 && rect.top < trigger) next[i - 1] = true;
      });
      setActive(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="process-mini" ref={ref}>
      {steps.map((s, i) => (
        <Fragment key={i}>
          <article className="process-mini-card">
            <span className="process-mini-label">{s.label}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
          {i < steps.length - 1 && (
            <div
              className={`process-mini-arrow${active[i] ? " is-active" : ""}`}
            >
              <ArrowRight />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
