import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Props = {
  href?: string;
  variant?: Variant;
  rounded?: boolean;
  dark?: boolean;
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  rounded,
  dark,
  children,
}: Props) {
  const cls = [
    "btn",
    `btn-${variant}`,
    rounded ? "btn-rounded" : "",
    dark ? "dark" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a className={cls} href={href}>
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}
