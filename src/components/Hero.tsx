import type { ReactNode } from "react";

type Props = {
  tag?: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
  actions?: ReactNode;
};

export default function Hero({ tag, title, subtitle, compact, actions }: Props) {
  return (
    <section className={`hero${compact ? " compact" : ""}`}>
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-inner">
        {tag && <div className="hero-tag">{tag}</div>}
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="hero-sub">{subtitle}</p>}
        {actions && <div className="hero-actions">{actions}</div>}
      </div>
    </section>
  );
}
